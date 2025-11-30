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
    snack: '간식'
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
    snack: 'Snack'
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
    snack: '小吃'
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
    snack: 'おやつ'
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
    snack: 'Bữa phụ'
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
    snack: 'وجبة خفيفة'
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
