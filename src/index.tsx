import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

type Bindings = {
  DB: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>()

// CORS 설정
app.use('/api/*', cors())

// 정적 파일 제공 - /static/* 경로
app.use('/static/*', serveStatic({ root: './public' }))

// FAQ 및 기타 정적 파일 제공
app.use('/*', serveStatic({ root: './' }))

// ============================================
// API Routes
// ============================================

// 회원 정보 조회
app.get('/api/user/:email', async (c) => {
  const { DB } = c.env;
  const email = c.req.param('email');
  
  try {
    const result = await DB.prepare(`
      SELECT * FROM users WHERE email = ?
    `).bind(email).first();
    
    return c.json({ success: true, user: result });
  } catch (error) {
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// 회원 생성/업데이트
app.post('/api/user', async (c) => {
  const { DB } = c.env;
  const body = await c.req.json();
  
  try {
    const { email, name, age, gender, height, weight, activity_level, goal } = body;
    
    const result = await DB.prepare(`
      INSERT INTO users (email, name, age, gender, height, weight, activity_level, goal, membership_type, free_trial_count)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'free', 0)
      ON CONFLICT(email) DO UPDATE SET
        name = excluded.name,
        age = excluded.age,
        gender = excluded.gender,
        height = excluded.height,
        weight = excluded.weight,
        activity_level = excluded.activity_level,
        goal = excluded.goal,
        updated_at = CURRENT_TIMESTAMP
    `).bind(email, name, age, gender, height, weight, activity_level, goal).run();
    
    return c.json({ success: true, result });
  } catch (error) {
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// 음식 검색
app.get('/api/foods/search', async (c) => {
  const { DB } = c.env;
  const query = c.req.query('q') || '';
  
  try {
    const results = await DB.prepare(`
      SELECT * FROM foods 
      WHERE name LIKE ? OR name_ko LIKE ?
      LIMIT 20
    `).bind(`%${query}%`, `%${query}%`).all();
    
    return c.json({ success: true, foods: results.results });
  } catch (error) {
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// 카테고리별 음식 조회
app.get('/api/foods/category/:category', async (c) => {
  const { DB } = c.env;
  const category = c.req.param('category');
  
  try {
    const results = await DB.prepare(`
      SELECT * FROM foods WHERE category = ? LIMIT 50
    `).bind(category).all();
    
    return c.json({ success: true, foods: results.results });
  } catch (error) {
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// 음식 섭취 기록
app.post('/api/intake', async (c) => {
  const { DB } = c.env;
  const body = await c.req.json();
  
  try {
    const { user_id, food_name, serving_size, calories, protein, carbs, fat, sugar, sodium, meal_type } = body;
    
    // 무료 회원 체험 횟수 확인
    const user = await DB.prepare(`SELECT * FROM users WHERE id = ?`).bind(user_id).first() as any;
    
    if (user.membership_type === 'free' && user.free_trial_count >= 2) {
      return c.json({ 
        success: false, 
        error: 'free_trial_exceeded',
        message: '무료 체험 횟수가 초과되었습니다. 프리미엄으로 업그레이드하세요.' 
      }, 403);
    }
    
    const today = new Date().toISOString().split('T')[0];
    
    // 섭취 기록 추가
    const intakeResult = await DB.prepare(`
      INSERT INTO food_intakes 
      (user_id, food_name, serving_size, calories, protein, carbs, fat, sugar, sodium, meal_type, intake_date)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(user_id, food_name, serving_size, calories, protein, carbs, fat, sugar, sodium, meal_type, today).run();
    
    const intake_id = intakeResult.meta.last_row_id;
    
    // 질병 위험도 계산 (간단한 알고리즘)
    const bmi = user.weight / ((user.height / 100) ** 2);
    const obesity_risk = Math.min(100, Math.max(0, (bmi - 18.5) * 10 + (calories > 700 ? 20 : 0)));
    const diabetes_risk = Math.min(100, Math.max(0, (sugar || 0) * 2 + (carbs > 50 ? 15 : 0)));
    const hypertension_risk = Math.min(100, Math.max(0, (sodium || 0) / 20 + (fat > 20 ? 15 : 0)));
    const hyperlipidemia_risk = Math.min(100, Math.max(0, fat * 2.5 + (cholesterol || 0) / 5));
    
    // 질병 위험도 저장
    await DB.prepare(`
      INSERT INTO health_risks 
      (user_id, intake_id, obesity_risk, diabetes_risk, hypertension_risk, hyperlipidemia_risk)
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(user_id, intake_id, obesity_risk, diabetes_risk, hypertension_risk, hyperlipidemia_risk).run();
    
    // 일일 요약 업데이트
    await DB.prepare(`
      INSERT INTO daily_summaries (user_id, summary_date, total_calories, total_protein, total_carbs, total_fat, total_sugar, total_sodium)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(user_id, summary_date) DO UPDATE SET
        total_calories = total_calories + excluded.total_calories,
        total_protein = total_protein + excluded.total_protein,
        total_carbs = total_carbs + excluded.total_carbs,
        total_fat = total_fat + excluded.total_fat,
        total_sugar = total_sugar + excluded.total_sugar,
        total_sodium = total_sodium + excluded.total_sodium
    `).bind(user_id, today, calories, protein, carbs, fat, sugar || 0, sodium || 0).run();
    
    // 무료 회원 카운트 증가
    if (user.membership_type === 'free') {
      await DB.prepare(`
        UPDATE users SET free_trial_count = free_trial_count + 1 WHERE id = ?
      `).bind(user_id).run();
    }
    
    return c.json({ 
      success: true, 
      intake_id,
      health_risks: {
        obesity_risk: obesity_risk.toFixed(1),
        diabetes_risk: diabetes_risk.toFixed(1),
        hypertension_risk: hypertension_risk.toFixed(1),
        hyperlipidemia_risk: hyperlipidemia_risk.toFixed(1)
      },
      remaining_trials: user.membership_type === 'free' ? Math.max(0, 2 - (user.free_trial_count + 1)) : null
    });
  } catch (error) {
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// 일일 통계 조회
app.get('/api/stats/:user_id/:date', async (c) => {
  const { DB } = c.env;
  const user_id = c.req.param('user_id');
  const date = c.req.param('date');
  
  try {
    const summary = await DB.prepare(`
      SELECT * FROM daily_summaries WHERE user_id = ? AND summary_date = ?
    `).bind(user_id, date).first();
    
    const intakes = await DB.prepare(`
      SELECT * FROM food_intakes WHERE user_id = ? AND intake_date = ?
    `).bind(user_id, date).all();
    
    return c.json({ success: true, summary, intakes: intakes.results });
  } catch (error) {
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// 주간 통계
app.get('/api/stats/weekly/:user_id', async (c) => {
  const { DB } = c.env;
  const user_id = c.req.param('user_id');
  
  try {
    const results = await DB.prepare(`
      SELECT * FROM daily_summaries 
      WHERE user_id = ? 
      AND summary_date >= date('now', '-7 days')
      ORDER BY summary_date DESC
    `).bind(user_id).all();
    
    return c.json({ success: true, weekly: results.results });
  } catch (error) {
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// 프리미엄 업그레이드
app.post('/api/upgrade', async (c) => {
  const { DB } = c.env;
  const body = await c.req.json();
  
  try {
    const { user_id } = body;
    const expires_at = new Date();
    expires_at.setFullYear(expires_at.getFullYear() + 1);
    
    await DB.prepare(`
      UPDATE users 
      SET membership_type = 'premium',
          subscription_expires_at = ?
      WHERE id = ?
    `).bind(expires_at.toISOString(), user_id).run();
    
    return c.json({ success: true, message: '프리미엄으로 업그레이드되었습니다!' });
  } catch (error) {
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// ============================================
// Main Page
// ============================================

app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CALCARE AI - AI Calorie Analysis</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            * {
                -webkit-tap-highlight-color: transparent;
            }
            
            body {
                background: linear-gradient(135deg, #A8C4A4 0%, #C8DCC5 100%);
                min-height: 100vh;
                overflow-x: hidden;
            }
            
            .card {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                border-radius: 20px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            }
            
            /* 모바일 최적화 */
            @media (max-width: 768px) {
                .card {
                    border-radius: 16px;
                }
            }
            
            .camera-icon {
                width: 140px;
                height: 140px;
                background: #f5f5f5;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s;
                touch-action: manipulation;
            }
            
            @media (max-width: 768px) {
                .camera-icon {
                    width: 120px;
                    height: 120px;
                }
            }
            
            .camera-icon:hover, .camera-icon:active {
                background: #e8e8e8;
                transform: scale(1.05);
            }
            
            .risk-badge {
                padding: 8px 14px;
                border-radius: 20px;
                font-size: 0.875rem;
                font-weight: 600;
                white-space: nowrap;
            }
            
            @media (max-width: 768px) {
                .risk-badge {
                    padding: 6px 10px;
                    font-size: 0.8rem;
                }
            }
            
            .risk-low { background: #D4EDDA; color: #155724; }
            .risk-medium { background: #FFF3CD; color: #856404; }
            .risk-high { background: #F8D7DA; color: #721C24; }
            
            .chart-container {
                position: relative;
                height: 280px;
                margin: 20px 0;
            }
            
            @media (max-width: 768px) {
                .chart-container {
                    height: 240px;
                    margin: 15px 0;
                }
            }
            
            /* 언어 버튼 */
            .lang-btn {
                padding: 10px 18px;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s;
                background: rgba(255, 255, 255, 0.2);
                color: white;
                font-weight: 600;
                font-size: 0.9rem;
                border: 2px solid transparent;
                touch-action: manipulation;
                min-width: 70px;
            }
            
            @media (max-width: 768px) {
                .lang-btn {
                    padding: 8px 12px;
                    font-size: 0.8rem;
                    min-width: 60px;
                }
            }
            
            .lang-btn:hover, .lang-btn:active {
                background: rgba(255, 255, 255, 0.3);
            }
            
            .lang-btn.active {
                background: white;
                color: #A8C4A4;
                border-color: #A8C4A4;
            }
            
            /* 버튼 공통 스타일 */
            button {
                touch-action: manipulation;
                -webkit-user-select: none;
                user-select: none;
            }
            
            .btn-primary {
                padding: 14px 24px;
                font-size: 1rem;
                border-radius: 12px;
                font-weight: 600;
                transition: all 0.3s;
            }
            
            @media (max-width: 768px) {
                .btn-primary {
                    padding: 12px 20px;
                    font-size: 0.95rem;
                }
            }
            
            /* 입력 필드 */
            input[type="text"] {
                font-size: 16px; /* iOS zoom 방지 */
            }
            
            /* 검색 결과 */
            .search-result-item {
                padding: 14px;
                cursor: pointer;
                touch-action: manipulation;
                transition: background 0.2s;
            }
            
            @media (max-width: 768px) {
                .search-result-item {
                    padding: 12px;
                }
            }
            
            .search-result-item:hover, .search-result-item:active {
                background: #f5f5f5;
            }
            
            /* 영양소 카드 */
            .nutrition-card {
                padding: 16px;
                border-radius: 12px;
                transition: transform 0.2s;
            }
            
            @media (max-width: 768px) {
                .nutrition-card {
                    padding: 12px;
                }
            }
            
            /* 스크롤바 스타일 */
            ::-webkit-scrollbar {
                width: 8px;
                height: 8px;
            }
            
            ::-webkit-scrollbar-track {
                background: rgba(0, 0, 0, 0.05);
                border-radius: 10px;
            }
            
            ::-webkit-scrollbar-thumb {
                background: rgba(168, 196, 164, 0.5);
                border-radius: 10px;
            }
            
            ::-webkit-scrollbar-thumb:hover {
                background: rgba(168, 196, 164, 0.7);
            }
            
            /* 모바일 헤더 최적화 */
            @media (max-width: 640px) {
                .mobile-header {
                    flex-direction: column;
                    gap: 1rem;
                    text-align: center;
                }
                
                .mobile-header > div {
                    width: 100%;
                    text-align: center !important;
                }
            }
            
            /* RTL 지원 (아랍어) */
            [dir="rtl"] {
                text-align: right;
            }
            
            [dir="rtl"] .lang-btn {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            
            [dir="rtl"] .mobile-header {
                flex-direction: column-reverse;
            }
            
            [dir="rtl"] .flex.justify-between {
                flex-direction: row-reverse;
            }
            
            [dir="rtl"] .grid {
                direction: ltr;
            }
            
            [dir="rtl"] .grid > * {
                direction: rtl;
            }
        </style>
    </head>
    <body class="p-3 sm:p-4 md:p-6 lg:p-8">
        <!-- Top Navigation -->
        <div class="max-w-6xl mx-auto mb-3 sm:mb-4">
            <div class="flex justify-between items-center gap-2 flex-wrap">
                <!-- FAQ Button -->
                <div>
                    <a href="/faq.html" class="inline-block px-4 py-2 bg-white bg-opacity-30 hover:bg-opacity-40 active:bg-opacity-50 text-white rounded-lg font-semibold transition shadow-md" style="touch-action: manipulation;">
                        <i class="fas fa-question-circle mr-2"></i><span>FAQ</span>
                    </a>
                </div>
                
                <!-- Language Selector -->
                <div class="flex gap-2 flex-wrap justify-end">
                    <button class="lang-btn active" data-lang="ko" onclick="setLanguage('ko')">한국어</button>
                    <button class="lang-btn" data-lang="en" onclick="setLanguage('en')">English</button>
                    <button class="lang-btn" data-lang="zh" onclick="setLanguage('zh')">中文</button>
                    <button class="lang-btn" data-lang="ja" onclick="setLanguage('ja')">日本語</button>
                    <button class="lang-btn" data-lang="vi" onclick="setLanguage('vi')">Tiếng Việt</button>
                    <button class="lang-btn" data-lang="ar" onclick="setLanguage('ar')">العربية</button>
                </div>
            </div>
        </div>

        <!-- Header -->
        <div class="max-w-6xl mx-auto mb-4 sm:mb-6 md:mb-8">
            <div class="flex items-center justify-between mobile-header">
                <div class="flex-1">
                    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                        <i class="fas fa-camera-retro mr-2 sm:mr-3"></i><span data-i18n="appTitle">CALCARE AI</span>
                    </h1>
                    <p class="text-white text-xs sm:text-sm md:text-base opacity-90" data-i18n="appSubtitle">사진으로 음식을 인식하고 칼로리를 자동 계산</p>
                </div>
                <div class="text-right flex-shrink-0">
                    <div id="membershipBadge" class="inline-block px-3 sm:px-4 py-2 bg-white rounded-full text-xs sm:text-sm font-semibold">
                        <i class="fas fa-user mr-1 sm:mr-2"></i><span id="membershipType" data-i18n="membershipFree">Free</span>
                    </div>
                    <div id="trialCount" class="text-white text-xs mt-1 sm:mt-2 whitespace-nowrap">
                        <span data-i18n="freeTrialRemaining">무료 체험</span>: <span id="remainingTrials">2</span>/2 <span data-i18n="trialRemaining">남음</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-6">
            <!-- Left: Camera Upload -->
            <div class="card p-4 sm:p-6 md:p-8">
                <h2 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                    <i class="fas fa-utensils mr-2 text-green-600"></i><span data-i18n="photoAnalysis">음식 사진 분석</span>
                </h2>
                
                <div class="text-center mb-4 sm:mb-6">
                    <div class="camera-icon mx-auto mb-3 sm:mb-4" onclick="document.getElementById('imageInput').click()">
                        <i class="fas fa-camera text-3xl sm:text-4xl text-gray-400"></i>
                    </div>
                    <input type="file" id="imageInput" accept="image/*" class="hidden" onchange="handleImageUpload(event)">
                    <p class="text-gray-600 text-sm sm:text-base" data-i18n="uploadPrompt">사진을 클릭하거나 드래그하여 업로드</p>
                </div>

                <div id="imagePreview" class="hidden mb-4 sm:mb-6">
                    <img id="previewImg" src="" class="w-full rounded-lg mb-3 sm:mb-4 shadow-md">
                    <button onclick="analyzeFood()" class="btn-primary w-full bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 active:bg-green-800 transition shadow-lg">
                        <i class="fas fa-brain mr-2"></i><span data-i18n="startAnalysis">AI 분석 시작</span>
                    </button>
                </div>

                <!-- Food Search -->
                <div class="mt-4 sm:mt-6">
                    <h3 class="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-700">
                        <i class="fas fa-search mr-2"></i><span data-i18n="foodSearch">음식 검색</span>
                    </h3>
                    <input 
                        type="text" 
                        id="foodSearch" 
                        data-i18n-placeholder="searchPlaceholder"
                        placeholder="음식 이름을 입력하세요..."
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-base"
                        oninput="searchFood(this.value)"
                    >
                    <div id="searchResults" class="mt-3 max-h-60 overflow-y-auto rounded-lg"></div>
                </div>
            </div>

            <!-- Right: Analysis Results -->
            <div class="card p-4 sm:p-6 md:p-8">
                <h2 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                    <i class="fas fa-chart-line mr-2 text-blue-600"></i><span data-i18n="analysisResult">분석 결과</span>
                </h2>

                <div id="resultsPlaceholder" class="text-center py-8 sm:py-12 text-gray-400">
                    <i class="fas fa-cookie-bite text-5xl sm:text-6xl mb-3 sm:mb-4"></i>
                    <p class="text-sm sm:text-base"><span data-i18n="resultsPlaceholder">음식 사진을 업로드하면</span><br><span data-i18n="resultsPlaceholder2">영양 분석 결과가 표시됩니다</span></p>
                </div>

                <div id="analysisResults" class="hidden">
                    <!-- Nutrition Info -->
                    <div class="mb-4 sm:mb-6">
                        <h3 class="font-semibold text-base sm:text-lg mb-2 sm:mb-3" id="foodName">비빔밥</h3>
                        <div class="grid grid-cols-2 gap-2 sm:gap-3">
                            <div class="nutrition-card bg-orange-50 rounded-lg">
                                <div class="text-orange-600 text-xs sm:text-sm font-semibold" data-i18n="calories">칼로리</div>
                                <div class="text-xl sm:text-2xl font-bold text-orange-700" id="calories">250</div>
                                <div class="text-xs text-gray-600" data-i18n="kcal">kcal</div>
                            </div>
                            <div class="nutrition-card bg-blue-50 rounded-lg">
                                <div class="text-blue-600 text-xs sm:text-sm font-semibold" data-i18n="protein">단백질</div>
                                <div class="text-xl sm:text-2xl font-bold text-blue-700" id="protein">25</div>
                                <div class="text-xs text-gray-600" data-i18n="grams">g</div>
                            </div>
                            <div class="nutrition-card bg-green-50 rounded-lg">
                                <div class="text-green-600 text-xs sm:text-sm font-semibold" data-i18n="carbs">탄수화물</div>
                                <div class="text-xl sm:text-2xl font-bold text-green-700" id="carbs">78</div>
                                <div class="text-xs text-gray-600" data-i18n="grams">g</div>
                            </div>
                            <div class="nutrition-card bg-yellow-50 rounded-lg">
                                <div class="text-yellow-600 text-xs sm:text-sm font-semibold" data-i18n="fat">지방</div>
                                <div class="text-xl sm:text-2xl font-bold text-yellow-700" id="fat">15</div>
                                <div class="text-xs text-gray-600" data-i18n="grams">g</div>
                            </div>
                        </div>
                    </div>

                    <!-- Health Risks -->
                    <div class="mb-4 sm:mb-6">
                        <h3 class="font-semibold text-base sm:text-lg mb-2 sm:mb-3">
                            <i class="fas fa-heartbeat mr-2 text-red-600"></i><span data-i18n="healthRisks">질병 위험도</span>
                        </h3>
                        <div class="space-y-2 sm:space-y-3">
                            <div class="flex items-center justify-between py-1">
                                <span class="text-xs sm:text-sm text-gray-700 font-medium" data-i18n="obesity">비만</span>
                                <span class="risk-badge risk-low" id="obesityRisk">낮음 (25%)</span>
                            </div>
                            <div class="flex items-center justify-between py-1">
                                <span class="text-xs sm:text-sm text-gray-700 font-medium" data-i18n="diabetes">당뇨</span>
                                <span class="risk-badge risk-medium" id="diabetesRisk">보통 (45%)</span>
                            </div>
                            <div class="flex items-center justify-between py-1">
                                <span class="text-xs sm:text-sm text-gray-700 font-medium" data-i18n="hypertension">고혈압</span>
                                <span class="risk-badge risk-high" id="hypertensionRisk">높음 (68%)</span>
                            </div>
                            <div class="flex items-center justify-between py-1">
                                <span class="text-xs sm:text-sm text-gray-700 font-medium" data-i18n="hyperlipidemia">고지혈증</span>
                                <span class="risk-badge risk-low" id="hyperlipidemiaRisk">낮음 (32%)</span>
                            </div>
                        </div>
                    </div>

                    <!-- Record Button -->
                    <button onclick="recordIntake()" class="btn-primary w-full bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition shadow-lg">
                        <i class="fas fa-save mr-2"></i><span data-i18n="saveIntake">섭취 기록 저장</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Daily Stats -->
        <div class="max-w-6xl mx-auto mt-4 sm:mt-6">
            <div class="card p-4 sm:p-6 md:p-8">
                <h2 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                    <i class="fas fa-calendar-day mr-2 text-purple-600"></i><span data-i18n="dailyNutrition">오늘의 영양 섭취</span>
                </h2>
                
                <div id="dailyStatsPlaceholder" class="text-center py-6 sm:py-8 text-gray-400">
                    <p class="text-sm sm:text-base" data-i18n="noIntakeToday">오늘 섭취한 음식이 없습니다</p>
                </div>

                <div id="dailyStats" class="hidden">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div class="bg-gradient-to-br from-orange-400 to-orange-600 p-3 sm:p-4 rounded-xl text-white shadow-lg">
                            <div class="text-xs sm:text-sm opacity-90" data-i18n="totalCalories">총 칼로리</div>
                            <div class="text-2xl sm:text-3xl font-bold" id="totalCalories">0</div>
                            <div class="text-xs opacity-75">/ <span id="recommendedCalories">2000</span> <span data-i18n="kcal">kcal</span></div>
                        </div>
                        <div class="bg-gradient-to-br from-blue-400 to-blue-600 p-3 sm:p-4 rounded-xl text-white shadow-lg">
                            <div class="text-xs sm:text-sm opacity-90" data-i18n="totalProtein">단백질</div>
                            <div class="text-2xl sm:text-3xl font-bold" id="totalProtein">0</div>
                            <div class="text-xs opacity-75" data-i18n="grams">g</div>
                        </div>
                        <div class="bg-gradient-to-br from-green-400 to-green-600 p-3 sm:p-4 rounded-xl text-white shadow-lg">
                            <div class="text-xs sm:text-sm opacity-90" data-i18n="totalCarbs">탄수화물</div>
                            <div class="text-2xl sm:text-3xl font-bold" id="totalCarbs">0</div>
                            <div class="text-xs opacity-75" data-i18n="grams">g</div>
                        </div>
                        <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 sm:p-4 rounded-xl text-white shadow-lg">
                            <div class="text-xs sm:text-sm opacity-90" data-i18n="totalFat">지방</div>
                            <div class="text-2xl sm:text-3xl font-bold" id="totalFat">0</div>
                            <div class="text-xs opacity-75" data-i18n="grams">g</div>
                        </div>
                    </div>

                    <!-- Chart -->
                    <div class="chart-container">
                        <canvas id="nutritionChart"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <!-- Premium Modal -->
        <div id="premiumModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div class="card p-6 sm:p-8 max-w-md w-full max-h-screen overflow-y-auto">
                <div class="text-center">
                    <i class="fas fa-crown text-5xl sm:text-6xl text-yellow-500 mb-3 sm:mb-4"></i>
                    <h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" data-i18n="premiumTitle">프리미엄으로 업그레이드</h2>
                    <p class="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                        <span data-i18n="premiumDescription">무료 체험 횟수가 모두 소진되었습니다.</span><br>
                        <span data-i18n="premiumDescription2">프리미엄으로 업그레이드하면 무제한으로 이용할 수 있습니다!</span>
                    </p>
                    
                    <div class="bg-gradient-to-r from-yellow-400 to-orange-500 p-5 sm:p-6 rounded-xl text-white mb-4 sm:mb-6 shadow-lg">
                        <div class="text-3xl sm:text-4xl font-bold mb-2">$9.99<span class="text-lg sm:text-xl" data-i18n="premiumPrice">/년</span></div>
                        <div class="text-xs sm:text-sm opacity-90" data-i18n="premiumFeatures">무제한 분석 + 고급 통계 + AI 코칭</div>
                    </div>

                    <button onclick="upgradeToPremium()" class="btn-primary w-full bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 active:bg-yellow-700 transition shadow-lg mb-3">
                        <i class="fas fa-star mr-2"></i><span data-i18n="upgrade">지금 업그레이드</span>
                    </button>
                    <button onclick="closePremiumModal()" class="btn-primary w-full bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 active:bg-gray-500 transition">
                        <span data-i18n="later">나중에</span>
                    </button>
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/i18n.js"></script>
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
