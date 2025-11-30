// 다국어 번역 데이터
const translations = {
  ko: {
    // Header
    appTitle: 'CalAI Scan',
    appSubtitle: '사진으로 음식을 인식하고 칼로리를 자동 계산',
    membershipFree: 'Free',
    membershipPremium: 'Premium',
    freeTrialRemaining: '무료 체험',
    trialRemaining: '남음',
    
    // Menu
    menuHome: '홈',
    menuAnalysis: '분석',
    menuStats: '통계',
    menuSettings: '설정',
    
    // Main Sections
    photoAnalysis: '음식 사진 분석',
    analysisResult: '분석 결과',
    dailyNutrition: '오늘의 영양 섭취',
    
    // Upload
    uploadPrompt: '사진을 클릭하거나 드래그하여 업로드',
    startAnalysis: 'AI 분석 시작',
    
    // Search
    foodSearch: '음식 검색',
    searchPlaceholder: '음식 이름을 입력하세요...',
    noResults: '검색 결과가 없습니다',
    
    // Results Placeholder
    resultsPlaceholder: '음식 사진을 업로드하면',
    resultsPlaceholder2: '영양 분석 결과가 표시됩니다',
    
    // Nutrition
    calories: '칼로리',
    protein: '단백질',
    carbs: '탄수화물',
    fat: '지방',
    sugar: '당류',
    sodium: '나트륨',
    fiber: '식이섬유',
    cholesterol: '콜레스테롤',
    
    // Units
    kcal: 'kcal',
    grams: 'g',
    milligrams: 'mg',
    
    // Health Risks
    healthRisks: '질병 위험도',
    obesity: '비만',
    diabetes: '당뇨',
    hypertension: '고혈압',
    hyperlipidemia: '고지혈증',
    
    riskLow: '낮음',
    riskMedium: '보통',
    riskHigh: '높음',
    
    // Actions
    saveIntake: '섭취 기록 저장',
    upgrade: '지금 업그레이드',
    later: '나중에',
    
    // Daily Stats
    totalCalories: '총 칼로리',
    totalProtein: '단백질',
    totalCarbs: '탄수화물',
    totalFat: '지방',
    recommended: '권장',
    noIntakeToday: '오늘 섭취한 음식이 없습니다',
    
    // Premium Modal
    premiumTitle: '프리미엄으로 업그레이드',
    premiumDescription: '무료 체험 횟수가 모두 소진되었습니다.',
    premiumDescription2: '프리미엄으로 업그레이드하면 무제한으로 이용할 수 있습니다!',
    premiumPrice: '연간',
    premiumFeatures: '무제한 분석 + 고급 통계 + AI 코칭',
    
    // Messages
    intakeSaved: '섭취 기록이 저장되었습니다!',
    upgradeSuccess: '프리미엄으로 업그레이드되었습니다!',
    error: '오류가 발생했습니다.',
    loading: '로딩 중...',
    
    // Meal Types
    breakfast: '아침',
    lunch: '점심',
    dinner: '저녁',
    snack: '간식',
    
    // 건강정보 모달
    healthInfoTitle: '건강정보 안내',
    healthInfoSubtitle: '공개 식품/영양 데이터베이스 목록',
    db1Title: '🇰🇷 MFDS 식품영양성분 데이터베이스',
    db1Desc: '식품의약품안전처 공식 영양성분 DB (한국 1순위)',
    db2Title: '🇰🇷 농촌진흥청 국가표준식품성분표',
    db2Desc: '3,300종 이상의 식품 영양정보',
    db2Link: '국가표준식품성분표',
    db3Title: '🇺🇸 USDA FoodData Central',
    db3Desc: '미국 농무부 글로벌 식품 데이터베이스',
    db4Title: '🇨🇦 FooDB',
    db4Desc: '28,000+ 화학성분 데이터',
    db5Title: '🌍 Open Food Facts',
    db5Desc: '수백만 제품 바코드 DB',
    diseaseAnalysisTitle: '질병 위험도 분석 시스템',
    disease1: '✅ 비만 위험도: BMI 기반 분석',
    disease2: '✅ 당뇨 위험도: 당류/탄수화물 분석',
    disease3: '✅ 고혈압 위험도: 나트륨/지방 분석',
    disease4: '✅ 고지혈증 위험도: 지방/콜레스테롤 분석',
    
    // 영양정보 모달
    nutritionInfoTitle: '영양성분 정보',
    nutritionInfoSubtitle: '칼로리 기반 분석 및 한계',
    section1Title: '📊 칼로리로 확인 가능한 정보',
    section1Item1: '✅ 총 열량 (kcal per serving, 100g, 실제 섭취량)',
    section1Item2: '✅ 1일 권장 섭취량 대비 비율',
    section1Item3: '✅ 다이어트/감량 목표와의 차이',
    section1Item4: '✅ 칼로리 소모 운동량 환산',
    section1Item5: '✅ 다른 음식과 칼로리 비교',
    section2Title: '🧮 칼로리로 계산 가능한 정보',
    section2Item1: '✅ 체중 변화 예측 (7,700kcal = 1kg 지방)',
    section2Item2: '✅ 기초대사량(BMR) 대비 비교',
    section2Item3: '✅ 총 에너지 소비량(TDEE) 균형',
    section2Item4: '✅ 식습관 패턴 분석',
    section3Title: '⚠️ 칼로리 데이터로 가능한 위험 신호',
    section3Item1: '🔴 비만 위험도',
    section3Item2: '🔴 지방간 위험',
    section3Item3: '🔴 심혈관 질환 위험',
    section3Item4: '🔴 당뇨 위험 (간접적)',
    section3Item5: '🔴 야식/폭식 패턴',
    section3Item6: '🔴 급격한 체중 증가 건강 위험',
    section4Title: '❌ 칼로리만으로는 불가능한 정보',
    section4Item1: '❌ 정확한 당뇨/고혈압 위험도',
    section4Item2: '❌ 영양 불균형 분석',
    section4Item3: '❌ 알레르기 정보',
    section4Item4: '❌ 특정 지방 위험',
    section4Item5: '❌ 비타민/미네랄 결핍',
    section4Item6: '❌ 식이섬유/콜레스테롤 정보',
    section5Title: '💡 결론: 통합 시스템의 필요성',
    section5Content: 'CalAI Scan은 칼로리 + 영양성분 + 개인 건강정보 + AI 음식 인식을 통합하여 정확한 건강 분석과 질병 위험도 예측을 제공합니다.'
  },
  
  en: {
    // Header
    appTitle: 'CalAI Scan',
    appSubtitle: 'Recognize food and calculate calories automatically from photos',
    membershipFree: 'Free',
    membershipPremium: 'Premium',
    freeTrialRemaining: 'Free Trial',
    trialRemaining: 'remaining',
    
    // Menu
    menuHome: 'Home',
    menuAnalysis: 'Analysis',
    menuStats: 'Statistics',
    menuSettings: 'Settings',
    
    // Main Sections
    photoAnalysis: 'Food Photo Analysis',
    analysisResult: 'Analysis Results',
    dailyNutrition: 'Today\'s Nutrition Intake',
    
    // Upload
    uploadPrompt: 'Click or drag to upload photo',
    startAnalysis: 'Start AI Analysis',
    
    // Search
    foodSearch: 'Food Search',
    searchPlaceholder: 'Enter food name...',
    noResults: 'No results found',
    
    // Results Placeholder
    resultsPlaceholder: 'Upload a food photo',
    resultsPlaceholder2: 'to see nutrition analysis',
    
    // Nutrition
    calories: 'Calories',
    protein: 'Protein',
    carbs: 'Carbs',
    fat: 'Fat',
    sugar: 'Sugar',
    sodium: 'Sodium',
    fiber: 'Fiber',
    cholesterol: 'Cholesterol',
    
    // Units
    kcal: 'kcal',
    grams: 'g',
    milligrams: 'mg',
    
    // Health Risks
    healthRisks: 'Health Risks',
    obesity: 'Obesity',
    diabetes: 'Diabetes',
    hypertension: 'Hypertension',
    hyperlipidemia: 'Hyperlipidemia',
    
    riskLow: 'Low',
    riskMedium: 'Medium',
    riskHigh: 'High',
    
    // Actions
    saveIntake: 'Save Intake Record',
    upgrade: 'Upgrade Now',
    later: 'Later',
    
    // Daily Stats
    totalCalories: 'Total Calories',
    totalProtein: 'Protein',
    totalCarbs: 'Carbs',
    totalFat: 'Fat',
    recommended: 'Recommended',
    noIntakeToday: 'No food intake today',
    
    // Premium Modal
    premiumTitle: 'Upgrade to Premium',
    premiumDescription: 'Your free trial has expired.',
    premiumDescription2: 'Upgrade to Premium for unlimited access!',
    premiumPrice: '/year',
    premiumFeatures: 'Unlimited Analysis + Advanced Stats + AI Coaching',
    
    // Messages
    intakeSaved: 'Intake record saved!',
    upgradeSuccess: 'Upgraded to Premium!',
    error: 'An error occurred.',
    loading: 'Loading...',
    
    // Meal Types
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
    snack: 'Snack',
    
    // Health Info Modal
    healthInfoTitle: 'Health Information Guide',
    healthInfoSubtitle: 'Public Food/Nutrition Databases',
    db1Title: '🇰🇷 MFDS Food Nutrition Database',
    db1Desc: 'Official nutrition DB by Korean Ministry of Food and Drug Safety (Korea #1)',
    db2Title: '🇰🇷 National Standard Food Composition Table',
    db2Desc: 'Nutrition info for 3,300+ food items',
    db2Link: 'National Food Composition Table',
    db3Title: '🇺🇸 USDA FoodData Central',
    db3Desc: 'US Department of Agriculture Global Food Database',
    db4Title: '🇨🇦 FooDB',
    db4Desc: '28,000+ chemical composition data',
    db5Title: '🌍 Open Food Facts',
    db5Desc: 'Millions of product barcode DB',
    diseaseAnalysisTitle: 'Disease Risk Analysis System',
    disease1: '✅ Obesity Risk: BMI-based analysis',
    disease2: '✅ Diabetes Risk: Sugar/carbohydrate analysis',
    disease3: '✅ Hypertension Risk: Sodium/fat analysis',
    disease4: '✅ Hyperlipidemia Risk: Fat/cholesterol analysis',
    
    // Nutrition Info Modal
    nutritionInfoTitle: 'Nutrition Information',
    nutritionInfoSubtitle: 'Calorie-based Analysis and Limitations',
    section1Title: '📊 Information Available from Calories',
    section1Item1: '✅ Total calories (kcal per serving, 100g, actual intake)',
    section1Item2: '✅ Percentage of daily recommended intake',
    section1Item3: '✅ Difference from diet/weight loss goals',
    section1Item4: '✅ Exercise equivalent to burn calories',
    section1Item5: '✅ Calorie comparison with other foods',
    section2Title: '🧮 Calculable Information from Calories',
    section2Item1: '✅ Weight change prediction (7,700kcal = 1kg fat)',
    section2Item2: '✅ Comparison with Basal Metabolic Rate (BMR)',
    section2Item3: '✅ Total Daily Energy Expenditure (TDEE) balance',
    section2Item4: '✅ Eating habit pattern analysis',
    section3Title: '⚠️ Risk Signals Possible from Calorie Data',
    section3Item1: '🔴 Obesity risk',
    section3Item2: '🔴 Fatty liver risk',
    section3Item3: '🔴 Cardiovascular disease risk',
    section3Item4: '🔴 Diabetes risk (indirect)',
    section3Item5: '🔴 Late-night eating/binge eating patterns',
    section3Item6: '🔴 Rapid weight gain health risks',
    section4Title: '❌ Information NOT Available from Calories Alone',
    section4Item1: '❌ Accurate diabetes/hypertension risk',
    section4Item2: '❌ Nutritional imbalance analysis',
    section4Item3: '❌ Allergy information',
    section4Item4: '❌ Specific fat risks',
    section4Item5: '❌ Vitamin/mineral deficiencies',
    section4Item6: '❌ Fiber/cholesterol information',
    section5Title: '💡 Conclusion: Need for Integrated System',
    section5Content: 'CalAI Scan integrates calories + nutrition + personal health data + AI food recognition to provide accurate health analysis and disease risk prediction.'
  },
  
  zh: {
    // Header
    appTitle: 'CalAI Scan',
    appSubtitle: '通过照片识别食物并自动计算卡路里',
    membershipFree: '免费',
    membershipPremium: '高级会员',
    freeTrialRemaining: '免费试用',
    trialRemaining: '剩余',
    
    // Menu
    menuHome: '首页',
    menuAnalysis: '分析',
    menuStats: '统计',
    menuSettings: '设置',
    
    // Main Sections
    photoAnalysis: '食物照片分析',
    analysisResult: '分析结果',
    dailyNutrition: '今日营养摄入',
    
    // Upload
    uploadPrompt: '点击或拖动上传照片',
    startAnalysis: '开始AI分析',
    
    // Search
    foodSearch: '食物搜索',
    searchPlaceholder: '请输入食物名称...',
    noResults: '未找到结果',
    
    // Results Placeholder
    resultsPlaceholder: '上传食物照片后',
    resultsPlaceholder2: '将显示营养分析结果',
    
    // Nutrition
    calories: '卡路里',
    protein: '蛋白质',
    carbs: '碳水化合物',
    fat: '脂肪',
    sugar: '糖',
    sodium: '钠',
    fiber: '膳食纤维',
    cholesterol: '胆固醇',
    
    // Units
    kcal: '千卡',
    grams: '克',
    milligrams: '毫克',
    
    // Health Risks
    healthRisks: '疾病风险',
    obesity: '肥胖',
    diabetes: '糖尿病',
    hypertension: '高血压',
    hyperlipidemia: '高脂血症',
    
    riskLow: '低',
    riskMedium: '中',
    riskHigh: '高',
    
    // Actions
    saveIntake: '保存摄入记录',
    upgrade: '立即升级',
    later: '稍后',
    
    // Daily Stats
    totalCalories: '总卡路里',
    totalProtein: '蛋白质',
    totalCarbs: '碳水化合物',
    totalFat: '脂肪',
    recommended: '推荐',
    noIntakeToday: '今天没有食物摄入记录',
    
    // Premium Modal
    premiumTitle: '升级至高级会员',
    premiumDescription: '您的免费试用次数已用完。',
    premiumDescription2: '升级至高级会员即可无限使用！',
    premiumPrice: '/年',
    premiumFeatures: '无限分析 + 高级统计 + AI指导',
    
    // Messages
    intakeSaved: '摄入记录已保存！',
    upgradeSuccess: '已升级至高级会员！',
    error: '发生错误。',
    loading: '加载中...',
    
    // Meal Types
    breakfast: '早餐',
    lunch: '午餐',
    dinner: '晚餐',
    snack: '小吃',
    
    // 健康信息模态框
    healthInfoTitle: '健康信息指南',
    healthInfoSubtitle: '公开食品/营养数据库列表',
    db1Title: '🇰🇷 MFDS 食品营养成分数据库',
    db1Desc: '韩国食品医药品安全处官方营养成分数据库（韩国第一）',
    db2Title: '🇰🇷 国家标准食品成分表',
    db2Desc: '3,300多种食品营养信息',
    db2Link: '国家标准食品成分表',
    db3Title: '🇺🇸 USDA FoodData Central',
    db3Desc: '美国农业部全球食品数据库',
    db4Title: '🇨🇦 FooDB',
    db4Desc: '28,000多种化学成分数据',
    db5Title: '🌍 Open Food Facts',
    db5Desc: '数百万产品条形码数据库',
    diseaseAnalysisTitle: '疾病风险分析系统',
    disease1: '✅ 肥胖风险：基于BMI的分析',
    disease2: '✅ 糖尿病风险：糖类/碳水化合物分析',
    disease3: '✅ 高血压风险：钠/脂肪分析',
    disease4: '✅ 高脂血症风险：脂肪/胆固醇分析',
    
    // 营养信息模态框
    nutritionInfoTitle: '营养成分信息',
    nutritionInfoSubtitle: '基于卡路里的分析及局限性',
    section1Title: '📊 从卡路里可以确认的信息',
    section1Item1: '✅ 总热量（每份kcal、100g、实际摄入量）',
    section1Item2: '✅ 每日推荐摄入量比例',
    section1Item3: '✅ 与减肥/减重目标的差异',
    section1Item4: '✅ 消耗卡路里的运动量换算',
    section1Item5: '✅ 与其他食物的卡路里比较',
    section2Title: '🧮 从卡路里可以计算的信息',
    section2Item1: '✅ 体重变化预测（7,700kcal = 1kg脂肪）',
    section2Item2: '✅ 与基础代谢率（BMR）的比较',
    section2Item3: '✅ 总能量消耗（TDEE）平衡',
    section2Item4: '✅ 饮食习惯模式分析',
    section3Title: '⚠️ 从卡路里数据可能的风险信号',
    section3Item1: '🔴 肥胖风险',
    section3Item2: '🔴 脂肪肝风险',
    section3Item3: '🔴 心血管疾病风险',
    section3Item4: '🔴 糖尿病风险（间接）',
    section3Item5: '🔴 夜宵/暴食模式',
    section3Item6: '🔴 快速体重增加的健康风险',
    section4Title: '❌ 仅凭卡路里无法获得的信息',
    section4Item1: '❌ 准确的糖尿病/高血压风险',
    section4Item2: '❌ 营养不均衡分析',
    section4Item3: '❌ 过敏信息',
    section4Item4: '❌ 特定脂肪风险',
    section4Item5: '❌ 维生素/矿物质缺乏',
    section4Item6: '❌ 膳食纤维/胆固醇信息',
    section5Title: '💡 结论：综合系统的必要性',
    section5Content: 'CalAI Scan整合卡路里+营养成分+个人健康信息+AI食物识别，提供准确的健康分析和疾病风险预测。'
  },
  
  ja: {
    // Header
    appTitle: 'CalAI Scan',
    appSubtitle: '写真から食べ物を認識し、カロリーを自動計算',
    membershipFree: '無料',
    membershipPremium: 'プレミアム',
    freeTrialRemaining: '無料体験',
    trialRemaining: '残り',
    
    // Menu
    menuHome: 'ホーム',
    menuAnalysis: '分析',
    menuStats: '統計',
    menuSettings: '設定',
    
    // Main Sections
    photoAnalysis: '食品写真分析',
    analysisResult: '分析結果',
    dailyNutrition: '今日の栄養摂取',
    
    // Upload
    uploadPrompt: 'クリックまたはドラッグして写真をアップロード',
    startAnalysis: 'AI分析を開始',
    
    // Search
    foodSearch: '食品検索',
    searchPlaceholder: '食品名を入力してください...',
    noResults: '結果が見つかりません',
    
    // Results Placeholder
    resultsPlaceholder: '食品写真をアップロードすると',
    resultsPlaceholder2: '栄養分析結果が表示されます',
    
    // Nutrition
    calories: 'カロリー',
    protein: 'タンパク質',
    carbs: '炭水化物',
    fat: '脂質',
    sugar: '糖質',
    sodium: 'ナトリウム',
    fiber: '食物繊維',
    cholesterol: 'コレステロール',
    
    // Units
    kcal: 'kcal',
    grams: 'g',
    milligrams: 'mg',
    
    // Health Risks
    healthRisks: '疾病リスク',
    obesity: '肥満',
    diabetes: '糖尿病',
    hypertension: '高血圧',
    hyperlipidemia: '高脂血症',
    
    riskLow: '低',
    riskMedium: '中',
    riskHigh: '高',
    
    // Actions
    saveIntake: '摂取記録を保存',
    upgrade: '今すぐアップグレード',
    later: '後で',
    
    // Daily Stats
    totalCalories: '総カロリー',
    totalProtein: 'タンパク質',
    totalCarbs: '炭水化物',
    totalFat: '脂質',
    recommended: '推奨',
    noIntakeToday: '今日の食事記録はありません',
    
    // Premium Modal
    premiumTitle: 'プレミアムにアップグレード',
    premiumDescription: '無料体験回数が終了しました。',
    premiumDescription2: 'プレミアムにアップグレードすると無制限でご利用いただけます！',
    premiumPrice: '/年',
    premiumFeatures: '無制限分析 + 高度な統計 + AIコーチング',
    
    // Messages
    intakeSaved: '摂取記録が保存されました！',
    upgradeSuccess: 'プレミアムにアップグレードしました！',
    error: 'エラーが発生しました。',
    loading: '読み込み中...',
    
    // Meal Types
    breakfast: '朝食',
    lunch: '昼食',
    dinner: '夕食',
    snack: 'おやつ',
    
    // 健康情報モーダル
    healthInfoTitle: '健康情報ガイド',
    healthInfoSubtitle: '公開食品/栄養データベース一覧',
    db1Title: '🇰🇷 MFDS 食品栄養成分データベース',
    db1Desc: '韓国食品医薬品安全処公式栄養成分DB（韓国第1位）',
    db2Title: '🇰🇷 国家標準食品成分表',
    db2Desc: '3,300種以上の食品栄養情報',
    db2Link: '国家標準食品成分表',
    db3Title: '🇺🇸 USDA FoodData Central',
    db3Desc: '米国農務省グローバル食品データベース',
    db4Title: '🇨🇦 FooDB',
    db4Desc: '28,000以上の化学成分データ',
    db5Title: '🌍 Open Food Facts',
    db5Desc: '数百万製品のバーコードDB',
    diseaseAnalysisTitle: '疾病リスク分析システム',
    disease1: '✅ 肥満リスク：BMIベース分析',
    disease2: '✅ 糖尿病リスク：糖類/炭水化物分析',
    disease3: '✅ 高血圧リスク：ナトリウム/脂肪分析',
    disease4: '✅ 高脂血症リスク：脂肪/コレステロール分析',
    
    // 栄養情報モーダル
    nutritionInfoTitle: '栄養成分情報',
    nutritionInfoSubtitle: 'カロリーベース分析と限界',
    section1Title: '📊 カロリーから確認できる情報',
    section1Item1: '✅ 総カロリー（1食あたりkcal、100g、実際の摂取量）',
    section1Item2: '✅ 1日推奨摂取量に対する割合',
    section1Item3: '✅ ダイエット/減量目標との差',
    section1Item4: '✅ カロリー消費運動量換算',
    section1Item5: '✅ 他の食品とのカロリー比較',
    section2Title: '🧮 カロリーから計算できる情報',
    section2Item1: '✅ 体重変化予測（7,700kcal = 1kg脂肪）',
    section2Item2: '✅ 基礎代謝量（BMR）との比較',
    section2Item3: '✅ 総エネルギー消費量（TDEE）バランス',
    section2Item4: '✅ 食習慣パターン分析',
    section3Title: '⚠️ カロリーデータから可能なリスクシグナル',
    section3Item1: '🔴 肥満リスク',
    section3Item2: '🔴 脂肪肝リスク',
    section3Item3: '🔴 心血管疾患リスク',
    section3Item4: '🔴 糖尿病リスク（間接的）',
    section3Item5: '🔴 夜食/過食パターン',
    section3Item6: '🔴 急激な体重増加の健康リスク',
    section4Title: '❌ カロリーだけでは不可能な情報',
    section4Item1: '❌ 正確な糖尿病/高血圧リスク',
    section4Item2: '❌ 栄養不均衡分析',
    section4Item3: '❌ アレルギー情報',
    section4Item4: '❌ 特定の脂肪リスク',
    section4Item5: '❌ ビタミン/ミネラル欠乏',
    section4Item6: '❌ 食物繊維/コレステロール情報',
    section5Title: '💡 結論：統合システムの必要性',
    section5Content: 'CalAI Scanはカロリー+栄養成分+個人健康情報+AI食品認識を統合し、正確な健康分析と疾病リスク予測を提供します。'
  },
  
  vi: {
    // Header
    appTitle: 'CalAI Scan',
    appSubtitle: 'Nhận diện thức ăn và tự động tính calo từ ảnh',
    membershipFree: 'Miễn phí',
    membershipPremium: 'Cao cấp',
    freeTrialRemaining: 'Dùng thử miễn phí',
    trialRemaining: 'còn lại',
    
    // Menu
    menuHome: 'Trang chủ',
    menuAnalysis: 'Phân tích',
    menuStats: 'Thống kê',
    menuSettings: 'Cài đặt',
    
    // Main Sections
    photoAnalysis: 'Phân tích ảnh thức ăn',
    analysisResult: 'Kết quả phân tích',
    dailyNutrition: 'Dinh dưỡng hôm nay',
    
    // Upload
    uploadPrompt: 'Nhấp hoặc kéo để tải ảnh lên',
    startAnalysis: 'Bắt đầu phân tích AI',
    
    // Search
    foodSearch: 'Tìm kiếm thức ăn',
    searchPlaceholder: 'Nhập tên thức ăn...',
    noResults: 'Không tìm thấy kết quả',
    
    // Results Placeholder
    resultsPlaceholder: 'Tải ảnh thức ăn lên',
    resultsPlaceholder2: 'để xem phân tích dinh dưỡng',
    
    // Nutrition
    calories: 'Calo',
    protein: 'Protein',
    carbs: 'Carbohydrate',
    fat: 'Chất béo',
    sugar: 'Đường',
    sodium: 'Natri',
    fiber: 'Chất xơ',
    cholesterol: 'Cholesterol',
    
    // Units
    kcal: 'kcal',
    grams: 'g',
    milligrams: 'mg',
    
    // Health Risks
    healthRisks: 'Rủi ro sức khỏe',
    obesity: 'Béo phì',
    diabetes: 'Tiểu đường',
    hypertension: 'Huyết áp cao',
    hyperlipidemia: 'Mỡ máu cao',
    
    riskLow: 'Thấp',
    riskMedium: 'Trung bình',
    riskHigh: 'Cao',
    
    // Actions
    saveIntake: 'Lưu bản ghi',
    upgrade: 'Nâng cấp ngay',
    later: 'Để sau',
    
    // Daily Stats
    totalCalories: 'Tổng Calo',
    totalProtein: 'Protein',
    totalCarbs: 'Carbohydrate',
    totalFat: 'Chất béo',
    recommended: 'Khuyến nghị',
    noIntakeToday: 'Chưa có bản ghi thức ăn hôm nay',
    
    // Premium Modal
    premiumTitle: 'Nâng cấp lên cao cấp',
    premiumDescription: 'Bạn đã hết lượt dùng thử miễn phí.',
    premiumDescription2: 'Nâng cấp lên cao cấp để sử dụng không giới hạn!',
    premiumPrice: '/năm',
    premiumFeatures: 'Phân tích không giới hạn + Thống kê nâng cao + Huấn luyện AI',
    
    // Messages
    intakeSaved: 'Đã lưu bản ghi!',
    upgradeSuccess: 'Đã nâng cấp lên cao cấp!',
    error: 'Đã xảy ra lỗi.',
    loading: 'Đang tải...',
    
    // Meal Types
    breakfast: 'Bữa sáng',
    lunch: 'Bữa trưa',
    dinner: 'Bữa tối',
    snack: 'Bữa phụ',
    
    // Thông tin sức khỏe
    healthInfoTitle: 'Hướng dẫn thông tin sức khỏe',
    healthInfoSubtitle: 'Danh sách cơ sở dữ liệu thực phẩm/dinh dưỡng công khai',
    db1Title: '🇰🇷 Cơ sở dữ liệu dinh dưỡng thực phẩm MFDS',
    db1Desc: 'Cơ sở dữ liệu dinh dưỡng chính thức của Bộ An toàn Thực phẩm và Dược phẩm Hàn Quốc (Hàn Quốc #1)',
    db2Title: '🇰🇷 Bảng thành phần thực phẩm tiêu chuẩn quốc gia',
    db2Desc: 'Thông tin dinh dưỡng cho hơn 3.300 loại thực phẩm',
    db2Link: 'Bảng thành phần thực phẩm quốc gia',
    db3Title: '🇺🇸 USDA FoodData Central',
    db3Desc: 'Cơ sở dữ liệu thực phẩm toàn cầu của Bộ Nông nghiệp Hoa Kỳ',
    db4Title: '🇨🇦 FooDB',
    db4Desc: 'Dữ liệu hơn 28.000 thành phần hóa học',
    db5Title: '🌍 Open Food Facts',
    db5Desc: 'Cơ sở dữ liệu mã vạch hàng triệu sản phẩm',
    diseaseAnalysisTitle: 'Hệ thống phân tích rủi ro bệnh tật',
    disease1: '✅ Rủi ro béo phì: Phân tích dựa trên BMI',
    disease2: '✅ Rủi ro tiểu đường: Phân tích đường/carbohydrate',
    disease3: '✅ Rủi ro huyết áp cao: Phân tích natri/chất béo',
    disease4: '✅ Rủi ro mất cân bằng lipid máu: Phân tích chất béo/cholesterol',
    
    // Thông tin dinh dưỡng
    nutritionInfoTitle: 'Thông tin dinh dưỡng',
    nutritionInfoSubtitle: 'Phân tích dựa trên calo và hạn chế',
    section1Title: '📊 Thông tin có sẵn từ calo',
    section1Item1: '✅ Tổng calo (kcal trên khẩu phần, 100g, lượng tiêu thụ thực tế)',
    section1Item2: '✅ Tỷ lệ phần trăm của lượng khuyến nghị hàng ngày',
    section1Item3: '✅ Chênh lệch với mục tiêu ăn kiêng/giảm cân',
    section1Item4: '✅ Tương đương vận động để đốt cháy calo',
    section1Item5: '✅ So sánh calo với thực phẩm khác',
    section2Title: '🧮 Thông tin có thể tính toán từ calo',
    section2Item1: '✅ Dự đoán thay đổi cân nặng (7.700kcal = 1kg chất béo)',
    section2Item2: '✅ So sánh với tỷ lệ trao đổi chất cơ bản (BMR)',
    section2Item3: '✅ Cân bằng tổng chi tiêu năng lượng hàng ngày (TDEE)',
    section2Item4: '✅ Phân tích mô hình thói quen ăn uống',
    section3Title: '⚠️ Tín hiệu rủi ro có thể từ dữ liệu calo',
    section3Item1: '🔴 Rủi ro béo phì',
    section3Item2: '🔴 Rủi ro gan nhiễm mỡ',
    section3Item3: '🔴 Rủi ro bệnh tim mạch',
    section3Item4: '🔴 Rủi ro tiểu đường (gián tiếp)',
    section3Item5: '🔴 Mô hình ăn đêm/ăn quá nhiều',
    section3Item6: '🔴 Rủi ro sức khỏe tăng cân nhanh chóng',
    section4Title: '❌ Thông tin KHÔNG có sẵn chỉ từ calo',
    section4Item1: '❌ Rủi ro tiểu đường/huyết áp cao chính xác',
    section4Item2: '❌ Phân tích mất cân bằng dinh dưỡng',
    section4Item3: '❌ Thông tin dị ứng',
    section4Item4: '❌ Rủi ro chất béo cụ thể',
    section4Item5: '❌ Thiếu hụt vitamin/khoáng chất',
    section4Item6: '❌ Thông tin chất xơ/cholesterol',
    section5Title: '💡 Kết luận: Cần hệ thống tích hợp',
    section5Content: 'CalAI Scan tích hợp calo + dinh dưỡng + dữ liệu sức khỏe cá nhân + nhận diện thực phẩm AI để cung cấp phân tích sức khỏe chính xác và dự đoán rủi ro bệnh tật.'
  },
  
  ar: {
    // Header
    appTitle: 'CalAI Scan',
    appSubtitle: 'التعرف على الطعام وحساب السعرات الحرارية تلقائياً من الصور',
    membershipFree: 'مجاني',
    membershipPremium: 'بريميوم',
    freeTrialRemaining: 'التجربة المجانية',
    trialRemaining: 'متبقي',
    
    // Menu
    menuHome: 'الرئيسية',
    menuAnalysis: 'التحليل',
    menuStats: 'الإحصائيات',
    menuSettings: 'الإعدادات',
    
    // Main Sections
    photoAnalysis: 'تحليل صورة الطعام',
    analysisResult: 'نتائج التحليل',
    dailyNutrition: 'التغذية اليومية',
    
    // Upload
    uploadPrompt: 'انقر أو اسحب لتحميل الصورة',
    startAnalysis: 'بدء تحليل الذكاء الاصطناعي',
    
    // Search
    foodSearch: 'البحث عن الطعام',
    searchPlaceholder: 'أدخل اسم الطعام...',
    noResults: 'لم يتم العثور على نتائج',
    
    // Results Placeholder
    resultsPlaceholder: 'قم بتحميل صورة الطعام',
    resultsPlaceholder2: 'لعرض تحليل التغذية',
    
    // Nutrition
    calories: 'السعرات الحرارية',
    protein: 'البروتين',
    carbs: 'الكربوهيدرات',
    fat: 'الدهون',
    sugar: 'السكر',
    sodium: 'الصوديوم',
    fiber: 'الألياف',
    cholesterol: 'الكوليسترول',
    
    // Units
    kcal: 'سعرة',
    grams: 'جم',
    milligrams: 'ملجم',
    
    // Health Risks
    healthRisks: 'المخاطر الصحية',
    obesity: 'السمنة',
    diabetes: 'السكري',
    hypertension: 'ارتفاع ضغط الدم',
    hyperlipidemia: 'ارتفاع الدهون',
    
    riskLow: 'منخفض',
    riskMedium: 'متوسط',
    riskHigh: 'مرتفع',
    
    // Actions
    saveIntake: 'حفظ السجل',
    upgrade: 'الترقية الآن',
    later: 'لاحقاً',
    
    // Daily Stats
    totalCalories: 'إجمالي السعرات',
    totalProtein: 'البروتين',
    totalCarbs: 'الكربوهيدرات',
    totalFat: 'الدهون',
    recommended: 'الموصى به',
    noIntakeToday: 'لا توجد سجلات طعام اليوم',
    
    // Premium Modal
    premiumTitle: 'الترقية إلى بريميوم',
    premiumDescription: 'لقد انتهت التجربة المجانية.',
    premiumDescription2: 'قم بالترقية إلى بريميوم للوصول غير المحدود!',
    premiumPrice: '/سنة',
    premiumFeatures: 'تحليل غير محدود + إحصائيات متقدمة + تدريب الذكاء الاصطناعي',
    
    // Messages
    intakeSaved: 'تم حفظ السجل!',
    upgradeSuccess: 'تمت الترقية إلى بريميوم!',
    error: 'حدث خطأ.',
    loading: 'جار التحميل...',
    
    // Meal Types
    breakfast: 'الإفطار',
    lunch: 'الغداء',
    dinner: 'العشاء',
    snack: 'وجبة خفيفة',
    
    // معلومات صحية
    healthInfoTitle: 'دليل المعلومات الصحية',
    healthInfoSubtitle: 'قوائم قواعد بيانات الأغذية/التغذية العامة',
    db1Title: '🇰🇷 قاعدة بيانات تغذية الطعام MFDS',
    db1Desc: 'قاعدة بيانات التغذية الرسمية لوزارة سلامة الغذاء والدواء الكورية (كوريا #1)',
    db2Title: '🇰🇷 جدول تكوين الطعام القياسي الوطني',
    db2Desc: 'معلومات غذائية لأكثر من 3,300 نوع غذائي',
    db2Link: 'جدول تكوين الطعام الوطني',
    db3Title: '🇺🇸 USDA FoodData Central',
    db3Desc: 'قاعدة بيانات الطعام العالمية لوزارة الزراعة الأمريكية',
    db4Title: '🇨🇦 FooDB',
    db4Desc: 'بيانات أكثر من 28,000 مكون كيميائي',
    db5Title: '🌍 Open Food Facts',
    db5Desc: 'قاعدة بيانات الباركود لملايين المنتجات',
    diseaseAnalysisTitle: 'نظام تحليل مخاطر الأمراض',
    disease1: '✅ خطر السمنة: تحليل قائم على مؤشر كتلة الجسم',
    disease2: '✅ خطر السكري: تحليل السكر/الكربوهيدرات',
    disease3: '✅ خطر ارتفاع ضغط الدم: تحليل الصوديوم/الدهون',
    disease4: '✅ خطر فرط شحميات الدم: تحليل الدهون/الكوليسترول',
    
    // معلومات غذائية
    nutritionInfoTitle: 'معلومات التغذية',
    nutritionInfoSubtitle: 'التحليل القائم على السعرات الحرارية والقيود',
    section1Title: '📊 المعلومات المتاحة من السعرات الحرارية',
    section1Item1: '✅ إجمالي السعرات الحرارية (سعرة حرارية لكل حصة، 100 جرام، الاستهلاك الفعلي)',
    section1Item2: '✅ نسبة الاستهلاك اليومي الموصى به',
    section1Item3: '✅ الفرق مع أهداف النظام الغذائي/فقدان الوزن',
    section1Item4: '✅ معادلة التمرين لحرق السعرات الحرارية',
    section1Item5: '✅ مقارنة السعرات الحرارية مع الأطعمة الأخرى',
    section2Title: '🧮 المعلومات القابلة للحساب من السعرات الحرارية',
    section2Item1: '✅ توقع تغير الوزن (7,700 سعرة حرارية = 1 كجم دهون)',
    section2Item2: '✅ المقارنة مع معدل الأيض الأساسي (BMR)',
    section2Item3: '✅ توازن إجمالي الإنفاق اليومي للطاقة (TDEE)',
    section2Item4: '✅ تحليل نمط العادات الغذائية',
    section3Title: '⚠️ إشارات الخطر الممكنة من بيانات السعرات الحرارية',
    section3Item1: '🔴 خطر السمنة',
    section3Item2: '🔴 خطر الكبد الدهني',
    section3Item3: '🔴 خطر أمراض القلب والأوعية الدموية',
    section3Item4: '🔴 خطر السكري (غير مباشر)',
    section3Item5: '🔴 أنماط تناول الطعام في وقت متأخر من الليل/الإفراط في الأكل',
    section3Item6: '🔴 مخاطر صحية من زيادة الوزن السريعة',
    section4Title: '❌ المعلومات غير المتاحة من السعرات الحرارية وحدها',
    section4Item1: '❌ خطر السكري/ارتفاع ضغط الدم الدقيق',
    section4Item2: '❌ تحليل عدم التوازن الغذائي',
    section4Item3: '❌ معلومات الحساسية',
    section4Item4: '❌ مخاطر الدهون المحددة',
    section4Item5: '❌ نقص الفيتامينات/المعادن',
    section4Item6: '❌ معلومات الألياف/الكوليسترول',
    section5Title: '💡 الخلاصة: الحاجة إلى نظام متكامل',
    section5Content: 'يدمج CalAI Scan السعرات الحرارية + التغذية + بيانات الصحة الشخصية + التعرف على الطعام بالذكاء الاصطناعي لتقديم تحليل صحي دقيق والتنبؤ بمخاطر الأمراض.'
  }
};

// 현재 언어 (기본값: 한국어)
let currentLang = localStorage.getItem('lang') || 'ko';

// 번역 함수
function t(key) {
  return translations[currentLang][key] || translations['ko'][key] || key;
}

// 언어 변경 함수
function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // 아랍어는 RTL 설정
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', lang);
    }
    
    updatePageLanguage();
  }
}

// 페이지 언어 업데이트
function updatePageLanguage() {
  // data-i18n 속성을 가진 모든 요소 업데이트
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = t(key);
  });
  
  // data-i18n-placeholder 속성을 가진 모든 요소 업데이트
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.placeholder = t(key);
  });
  
  // 언어 선택 버튼 활성화 표시
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    }
  });
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  // 저장된 언어가 아랍어인 경우 RTL 설정
  if (currentLang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', currentLang);
  }
  
  updatePageLanguage();
});

// 건강정보/영양성분 모달 번역 추가
translations.ko.healthInfoTitle = '건강정보 안내';
translations.ko.healthInfoSubtitle = '공개 식품/영양 데이터베이스 목록';
translations.ko.nutritionInfoTitle = '영양성분 정보';
translations.ko.nutritionInfoSubtitle = '칼로리 기반 분석 및 한계';

translations.en.healthInfoTitle = 'Health Information Guide';
translations.en.healthInfoSubtitle = 'Public Food/Nutrition Database List';
translations.en.nutritionInfoTitle = 'Nutrition Information';
translations.en.nutritionInfoSubtitle = 'Calorie-based Analysis and Limitations';

translations.zh.healthInfoTitle = '健康信息指南';
translations.zh.healthInfoSubtitle = '公开食品/营养数据库列表';
translations.zh.nutritionInfoTitle = '营养成分信息';
translations.zh.nutritionInfoSubtitle = '基于卡路里的分析及局限性';

translations.ja.healthInfoTitle = '健康情報ガイド';
translations.ja.healthInfoSubtitle = '公開食品・栄養データベースリスト';
translations.ja.nutritionInfoTitle = '栄養成分情報';
translations.ja.nutritionInfoSubtitle = 'カロリーベースの分析と制限';

translations.vi.healthInfoTitle = 'Hướng Dẫn Thông Tin Sức Khỏe';
translations.vi.healthInfoSubtitle = 'Danh Sách Cơ Sở Dữ Liệu Thực Phẩm/Dinh Dưỡng Công Khai';
translations.vi.nutritionInfoTitle = 'Thông Tin Dinh Dưỡng';
translations.vi.nutritionInfoSubtitle = 'Phân Tích Dựa Trên Calo và Giới Hạn';

translations.ar.healthInfoTitle = 'دليل المعلومات الصحية';
translations.ar.healthInfoSubtitle = 'قائمة قواعد بيانات الأغذية/التغذية العامة';
translations.ar.nutritionInfoTitle = 'معلومات التغذية';
translations.ar.nutritionInfoSubtitle = 'التحليل القائم على السعرات الحرارية والقيود';
// 영양정보 모달 번역
const nutritionTranslations = {
  ko: {
    section1Title: '📊 칼로리로 확인 가능한 정보',
    section2Title: '🧮 칼로리로 계산 가능한 정보',
    section3Title: '⚠️ 칼로리 데이터로 가능한 위험 신호',
    section4Title: '❌ 칼로리만으로는 불가능한 정보',
    section5Title: '💡 결론: 통합 시스템의 필요성'
  },
  en: {
    section1Title: '📊 Information Available from Calories',
    section2Title: '🧮 Calculable Information from Calories',
    section3Title: '⚠️ Risk Signals from Calorie Data',
    section4Title: '❌ Information Not Available from Calories Alone',
    section5Title: '💡 Conclusion: Need for Integrated System'
  },
  zh: {
    section1Title: '📊 卡路里可确认信息',
    section2Title: '🧮 卡路里可计算信息',
    section3Title: '⚠️ 卡路里数据的风险信号',
    section4Title: '❌ 仅靠卡路里无法获得的信息',
    section5Title: '💡 结论：综合系统的必要性'
  },
  ja: {
    section1Title: '📊 カロリーで確認できる情報',
    section2Title: '🧮 カロリーで計算できる情報',
    section3Title: '⚠️ カロリーデータで可能なリスクシグナル',
    section4Title: '❌ カロリーだけでは不可能な情報',
    section5Title: '💡 結論：統合システムの必要性'
  },
  vi: {
    section1Title: '📊 Thông Tin Có Thể Xác Nhận Từ Calo',
    section2Title: '🧮 Thông Tin Có Thể Tính Toán Từ Calo',
    section3Title: '⚠️ Tín Hiệu Rủi Ro Từ Dữ Liệu Calo',
    section4Title: '❌ Thông Tin Không Thể Có Chỉ Từ Calo',
    section5Title: '💡 Kết Luận: Sự Cần Thiết Của Hệ Thống Tích Hợp'
  },
  ar: {
    section1Title: '📊 المعلومات المتاحة من السعرات الحرارية',
    section2Title: '🧮 المعلومات القابلة للحساب من السعرات الحرارية',
    section3Title: '⚠️ إشارات الخطر من بيانات السعرات الحرارية',
    section4Title: '❌ المعلومات غير المتاحة من السعرات الحرارية وحدها',
    section5Title: '💡 الخلاصة: الحاجة إلى نظام متكامل'
  }
};

// translations 객체에 추가
Object.keys(nutritionTranslations).forEach(lang => {
  Object.assign(translations[lang], nutritionTranslations[lang]);
});
