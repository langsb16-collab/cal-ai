// 건강정보 안내 - 공개 식품/영양 DB 목록 데이터 (6개 언어)
const healthDBData = {
  ko: {
    pageTitle: '건강정보 안내',
    subtitle: '공개 식품/영양 데이터베이스 목록',
    backToMain: '메인 화면으로',
    
    intro: {
      title: '📊 질병 예측 시스템 소개',
      description: 'CALCARE AI는 음식 사진을 분석하여 영양성분을 자동으로 계산하고, 공개 식품/영양 데이터베이스와 연동하여 개인 맞춤형 질병 위험도를 예측합니다.'
    },
    
    workflow: {
      title: '🔄 질병 경고 시스템 작동 원리',
      steps: [
        {
          icon: '📸',
          title: '1단계: 음식 사진 촬영',
          description: '사용자가 음식 사진을 업로드하면 AI가 음식 종류와 양을 자동 인식합니다.'
        },
        {
          icon: '🔍',
          title: '2단계: 영양성분 DB 매칭',
          description: '인식된 음식을 공개 영양 데이터베이스(MFDS, USDA 등)와 매칭하여 칼로리, 단백질, 탄수화물, 지방, 당류, 나트륨, 콜레스테롤 등 영양성분을 추출합니다.'
        },
        {
          icon: '👤',
          title: '3단계: 개인 건강정보 분석',
          description: '사용자의 나이, 성별, 체중, 활동량, 기저질환 등 개인 건강 정보를 종합적으로 분석합니다.'
        },
        {
          icon: '🏥',
          title: '4단계: AI 질병 위험도 예측',
          description: 'XGBoost 머신러닝 모델이 섭취 영양소 + 개인 건강 정보를 기반으로 비만, 당뇨, 고혈압, 고지혈증 위험도를 3단계(낮음/보통/높음)로 예측합니다.'
        },
        {
          icon: '⚠️',
          title: '5단계: 실시간 건강 경고',
          description: '위험도가 높은 경우 즉시 경고 메시지를 표시하고, 식단 개선 방안을 제안합니다.'
        }
      ]
    },
    
    databases: [
      {
        id: 'mfds',
        country: '🇰🇷 한국',
        name: '식품의약품안전처 (MFDS) - 식품영양성분 데이터베이스',
        provider: '식품의약품안전처',
        description: '가장 대표적인 국내 공공 영양 DB. 원재료 식품, 가공식품, 조리식 음식 등 폭넓게 커버. 1회 섭취량 기준 영양성분(에너지, 탄수화물, 단백질, 지방, 비타민·무기질 등) 제공.',
        features: [
          '약 5,000종 이상 식품 데이터',
          'JSON/XML 형태 OpenAPI 제공',
          '무료 개발용 계정 제공',
          '정기적 업데이트 (연 1-2회)'
        ],
        apiUrl: 'https://www.data.go.kr/data/15127578/openapi.do',
        webUrl: 'https://various.foodsafetykorea.go.kr/nutrient/',
        usage: '한국 식품/식단 분석 시 1순위 DB. 실시간 API 연동 가능.',
        icon: '🏛️'
      },
      {
        id: 'rda',
        country: '🇰🇷 한국',
        name: '국가표준식품성분표',
        provider: '농촌진흥청 국립식량과학원',
        description: '국내외 식품과 원재료에 대해 100여 종 이상의 영양성분 데이터를 포함. 약 3,300종 식품을 커버하며, 100g 단위 성분 정보 제공.',
        features: [
          '3,300종+ 식품 데이터',
          '130종 이상 영양성분 정보',
          '원재료 중심 상세 분석',
          'DB 10.3 버전 (최신)'
        ],
        apiUrl: 'https://www.data.go.kr/data/15143598/openapi.do',
        webUrl: 'https://koreanfood.rda.go.kr/kfi/fct/fctIntro/list',
        usage: '원재료 기반 분석, 집밥/국내식 위주 시스템 설계 시 유용.',
        icon: '🌾'
      },
      {
        id: 'usda',
        country: '🇺🇸 미국',
        name: 'USDA FoodData Central (FDC)',
        provider: 'United States Department of Agriculture',
        description: '전 세계 다양한 식품(가공식품 포함) 데이터, 마크로/미크로 영양성분, 브랜드 제품 정보 등 광범위한 데이터 제공. API + CSV/JSON 다운로드 지원.',
        features: [
          '수십만 종 글로벌 식품 데이터',
          'RESTful API 지원',
          'CC0 라이선스 (오픈데이터)',
          '브랜드 제품 정보 포함'
        ],
        apiUrl: 'https://fdc.nal.usda.gov/api-guide',
        webUrl: 'https://fdc.nal.usda.gov/',
        usage: '국제 식품, 수입 식품, 해외 사용자 대상 서비스 시 필수.',
        icon: '🌎'
      },
      {
        id: 'foodb',
        country: '🇨🇦 캐나다',
        name: 'FooDB',
        provider: 'University of Alberta (국제 연구 기반)',
        description: '1,000개 이상의 원재료 식품 + 28,000개 이상의 화학성분(영양소, 향미, 생리활성물질 등) 데이터. 비타민/미네랄뿐 아니라 파이토케미컬, 항산화 성분, 건강 효과 데이터 포함.',
        features: [
          '1,000+ 원재료 식품',
          '28,000+ 화학성분 데이터',
          '건강 효과 분석 데이터',
          '미량 영양소 상세 정보'
        ],
        apiUrl: 'https://foodb.ca/downloads',
        webUrl: 'https://foodb.ca/',
        usage: '질병 예측 고도화 시 유용. 항산화, 미네랄 부족/과잉 분석.',
        icon: '🧪'
      },
      {
        id: 'openfoodfacts',
        country: '🌍 글로벌',
        name: 'Open Food Facts',
        provider: '글로벌 오픈 크라우드소싱',
        description: '전 세계 수백만 식품 제품 데이터(가공식품, 브랜드 제품 포함), 성분표, 영양정보, 원재료, 바코드/브랜드 정보, 알레르기 정보 등 포함. 오픈 데이터 라이선스.',
        features: [
          '수백만 개 제품 데이터',
          '바코드 기반 검색',
          '알레르기 성분 정보',
          'REST API + 모바일 앱'
        ],
        apiUrl: 'https://world.openfoodfacts.org/data',
        webUrl: 'https://world.openfoodfacts.org/',
        usage: '패키지 식품, 가공품, 편의점 도시락 인식 + 바코드 스캔 연계.',
        icon: '📦'
      }
    ],
    
    diseaseWarnings: {
      title: '⚕️ 질병 경고 기능',
      description: 'AI가 분석한 영양성분 데이터를 기반으로 다음 질병 위험도를 실시간으로 예측합니다:',
      diseases: [
        {
          name: '비만',
          icon: '⚖️',
          factors: ['총 칼로리', '지방', '당류', 'BMI'],
          threshold: '하루 권장 칼로리 대비 120% 이상 섭취 시 경고'
        },
        {
          name: '당뇨',
          icon: '🍬',
          factors: ['당류', '탄수화물', '혈당 지수(GI)'],
          threshold: '당류 하루 50g 초과 또는 탄수화물 과다 섭취 시 경고'
        },
        {
          name: '고혈압',
          icon: '💉',
          factors: ['나트륨', '지방', '칼륨'],
          threshold: '나트륨 하루 2,000mg 초과 시 경고'
        },
        {
          name: '고지혈증',
          icon: '🩸',
          factors: ['포화지방', '콜레스테롤', '트랜스지방'],
          threshold: '콜레스테롤 300mg 초과 또는 포화지방 과다 시 경고'
        }
      ]
    },
    
    benefits: {
      title: '✅ DB 연동의 장점',
      items: [
        '✓ 실시간 최신 영양 정보 업데이트',
        '✓ 공신력 있는 정부/국제기관 데이터 사용',
        '✓ 5,000종+ 식품 자동 매칭',
        '✓ 무료 OpenAPI 활용으로 비용 절감',
        '✓ 다양한 국가 식품 지원 (한국, 미국, 글로벌)',
        '✓ 개인 맞춤형 질병 예측 정확도 향상'
      ]
    },
    
    tips: {
      title: '💡 활용 팁',
      items: [
        '1. MFDS API를 메인 DB로 설정하여 한국 음식 우선 매칭',
        '2. 부족한 품목은 USDA, FooDB로 보완',
        '3. 가공식품/패키지 제품은 Open Food Facts 바코드 스캔 활용',
        '4. 사용자 건강정보(나이, 체중, 활동량)를 입력하면 더 정확한 예측',
        '5. 질병 위험도가 높을 경우 식단 개선 제안 확인'
      ]
    }
  },
  
  en: {
    pageTitle: 'Health Information Guide',
    subtitle: 'Public Food & Nutrition Database List',
    backToMain: 'Back to Main',
    
    intro: {
      title: '📊 Disease Prediction System Introduction',
      description: 'CALCARE AI analyzes food photos to automatically calculate nutritional content and predicts personalized disease risk by integrating with public food/nutrition databases.'
    },
    
    workflow: {
      title: '🔄 Disease Warning System Workflow',
      steps: [
        {
          icon: '📸',
          title: 'Step 1: Food Photo Capture',
          description: 'When users upload food photos, AI automatically recognizes food types and portions.'
        },
        {
          icon: '🔍',
          title: 'Step 2: Nutrition DB Matching',
          description: 'Match recognized foods with public nutrition databases (MFDS, USDA, etc.) to extract nutrients: calories, protein, carbs, fat, sugar, sodium, cholesterol.'
        },
        {
          icon: '👤',
          title: 'Step 3: Personal Health Analysis',
          description: 'Comprehensively analyze user\'s age, gender, weight, activity level, and underlying health conditions.'
        },
        {
          icon: '🏥',
          title: 'Step 4: AI Disease Risk Prediction',
          description: 'XGBoost ML model predicts obesity, diabetes, hypertension, and hyperlipidemia risk in 3 levels (Low/Medium/High) based on intake + personal health data.'
        },
        {
          icon: '⚠️',
          title: 'Step 5: Real-time Health Warnings',
          description: 'Display immediate warning messages for high-risk cases and suggest dietary improvements.'
        }
      ]
    },
    
    databases: [
      {
        id: 'mfds',
        country: '🇰🇷 Korea',
        name: 'Ministry of Food and Drug Safety (MFDS) - Food Nutrition Database',
        provider: 'Ministry of Food and Drug Safety, Korea',
        description: 'Korea\'s most representative public nutrition DB. Covers raw foods, processed foods, and cooked dishes. Provides nutritional content per serving (energy, carbs, protein, fat, vitamins, minerals).',
        features: [
          '5,000+ food items',
          'JSON/XML OpenAPI',
          'Free developer account',
          'Regular updates (1-2 times/year)'
        ],
        apiUrl: 'https://www.data.go.kr/data/15127578/openapi.do',
        webUrl: 'https://various.foodsafetykorea.go.kr/nutrient/',
        usage: 'Primary DB for Korean food/diet analysis. Real-time API integration available.',
        icon: '🏛️'
      },
      {
        id: 'rda',
        country: '🇰🇷 Korea',
        name: 'National Standard Food Composition Table',
        provider: 'Rural Development Administration, Korea',
        description: 'Includes 100+ types of nutritional data for domestic and international foods and raw materials. Covers ~3,300 foods with 100g unit nutritional info.',
        features: [
          '3,300+ food items',
          '130+ nutrient types',
          'Detailed raw material analysis',
          'DB version 10.3 (latest)'
        ],
        apiUrl: 'https://www.data.go.kr/data/15143598/openapi.do',
        webUrl: 'https://koreanfood.rda.go.kr/kfi/fct/fctIntro/list',
        usage: 'Useful for raw material-based analysis and home-cooked Korean food systems.',
        icon: '🌾'
      },
      {
        id: 'usda',
        country: '🇺🇸 USA',
        name: 'USDA FoodData Central (FDC)',
        provider: 'United States Department of Agriculture',
        description: 'Extensive data on global foods (including processed foods), macro/micro nutrients, brand product info. API + CSV/JSON download support.',
        features: [
          'Hundreds of thousands of global food items',
          'RESTful API support',
          'CC0 license (open data)',
          'Brand product information included'
        ],
        apiUrl: 'https://fdc.nal.usda.gov/api-guide',
        webUrl: 'https://fdc.nal.usda.gov/',
        usage: 'Essential for international foods, imported products, and global user services.',
        icon: '🌎'
      },
      {
        id: 'foodb',
        country: '🇨🇦 Canada',
        name: 'FooDB',
        provider: 'University of Alberta (International Research)',
        description: '1,000+ raw food items + 28,000+ chemical components (nutrients, flavors, bioactive compounds). Includes vitamins/minerals, phytochemicals, antioxidants, and health effect data.',
        features: [
          '1,000+ raw food items',
          '28,000+ chemical component data',
          'Health effect analysis data',
          'Detailed micronutrient info'
        ],
        apiUrl: 'https://foodb.ca/downloads',
        webUrl: 'https://foodb.ca/',
        usage: 'Useful for advanced disease prediction. Analyze antioxidants, mineral deficiency/excess.',
        icon: '🧪'
      },
      {
        id: 'openfoodfacts',
        country: '🌍 Global',
        name: 'Open Food Facts',
        provider: 'Global Open Crowdsourcing',
        description: 'Millions of global food product data (processed foods, brand products), ingredient lists, nutrition info, ingredients, barcode/brand info, allergen info. Open data license.',
        features: [
          'Millions of product data',
          'Barcode-based search',
          'Allergen information',
          'REST API + mobile app'
        ],
        apiUrl: 'https://world.openfoodfacts.org/data',
        webUrl: 'https://world.openfoodfacts.org/',
        usage: 'Packaged foods, processed products, convenience store meals + barcode scanning integration.',
        icon: '📦'
      }
    ],
    
    diseaseWarnings: {
      title: '⚕️ Disease Warning Features',
      description: 'Real-time disease risk prediction based on AI-analyzed nutritional data:',
      diseases: [
        {
          name: 'Obesity',
          icon: '⚖️',
          factors: ['Total Calories', 'Fat', 'Sugar', 'BMI'],
          threshold: 'Warning when intake exceeds 120% of daily recommended calories'
        },
        {
          name: 'Diabetes',
          icon: '🍬',
          factors: ['Sugar', 'Carbohydrates', 'Glycemic Index (GI)'],
          threshold: 'Warning when sugar exceeds 50g/day or excessive carb intake'
        },
        {
          name: 'Hypertension',
          icon: '💉',
          factors: ['Sodium', 'Fat', 'Potassium'],
          threshold: 'Warning when sodium exceeds 2,000mg/day'
        },
        {
          name: 'Hyperlipidemia',
          icon: '🩸',
          factors: ['Saturated Fat', 'Cholesterol', 'Trans Fat'],
          threshold: 'Warning when cholesterol exceeds 300mg or excessive saturated fat'
        }
      ]
    },
    
    benefits: {
      title: '✅ DB Integration Benefits',
      items: [
        '✓ Real-time latest nutrition information updates',
        '✓ Use authoritative government/international data',
        '✓ Automatic matching of 5,000+ foods',
        '✓ Cost savings with free OpenAPI',
        '✓ Support for various country foods (Korea, USA, Global)',
        '✓ Improved personalized disease prediction accuracy'
      ]
    },
    
    tips: {
      title: '💡 Usage Tips',
      items: [
        '1. Set MFDS API as main DB for priority Korean food matching',
        '2. Supplement missing items with USDA, FooDB',
        '3. Use Open Food Facts barcode scanning for processed/packaged products',
        '4. Enter health info (age, weight, activity) for more accurate predictions',
        '5. Check dietary improvement suggestions for high-risk cases'
      ]
    }
  },
  
  zh: {
    pageTitle: '健康信息指南',
    subtitle: '公开食品/营养数据库列表',
    backToMain: '返回主屏幕',
    
    intro: {
      title: '📊 疾病预测系统介绍',
      description: 'CALCARE AI分析食物照片以自动计算营养成分，并通过与公开食品/营养数据库集成来预测个性化疾病风险。'
    },
    
    workflow: {
      title: '🔄 疾病警告系统工作流程',
      steps: [
        {
          icon: '📸',
          title: '第1步：拍摄食物照片',
          description: '用户上传食物照片时，AI自动识别食物类型和份量。'
        },
        {
          icon: '🔍',
          title: '第2步：营养数据库匹配',
          description: '将识别的食物与公开营养数据库（MFDS、USDA等）匹配，提取营养成分：卡路里、蛋白质、碳水化合物、脂肪、糖、钠、胆固醇。'
        },
        {
          icon: '👤',
          title: '第3步：个人健康分析',
          description: '综合分析用户的年龄、性别、体重、活动水平和基础健康状况。'
        },
        {
          icon: '🏥',
          title: '第4步：AI疾病风险预测',
          description: 'XGBoost机器学习模型基于摄入+个人健康数据预测肥胖、糖尿病、高血压和高脂血症风险，分为3个级别（低/中/高）。'
        },
        {
          icon: '⚠️',
          title: '第5步：实时健康警告',
          description: '对于高风险情况立即显示警告消息并提供饮食改善建议。'
        }
      ]
    },
    
    databases: [
      {
        id: 'mfds',
        country: '🇰🇷 韩国',
        name: '食品药品安全处 (MFDS) - 食品营养数据库',
        provider: '韩国食品药品安全处',
        description: '韩国最具代表性的公共营养数据库。涵盖原料食品、加工食品和烹饪食品。提供每份营养成分（能量、碳水化合物、蛋白质、脂肪、维生素、矿物质）。',
        features: [
          '5,000+种食品',
          'JSON/XML OpenAPI',
          '免费开发者账户',
          '定期更新（每年1-2次）'
        ],
        apiUrl: 'https://www.data.go.kr/data/15127578/openapi.do',
        webUrl: 'https://various.foodsafetykorea.go.kr/nutrient/',
        usage: '韩国食品/饮食分析的首选数据库。支持实时API集成。',
        icon: '🏛️'
      },
      {
        id: 'rda',
        country: '🇰🇷 韩国',
        name: '国家标准食品成分表',
        provider: '韩国农村振兴厅',
        description: '包含国内外食品和原料的100+种营养数据。涵盖约3,300种食品，提供100克单位营养信息。',
        features: [
          '3,300+种食品',
          '130+种营养素类型',
          '详细的原料分析',
          'DB 10.3版本（最新）'
        ],
        apiUrl: 'https://www.data.go.kr/data/15143598/openapi.do',
        webUrl: 'https://koreanfood.rda.go.kr/kfi/fct/fctIntro/list',
        usage: '适用于基于原料的分析和家常韩国菜系统。',
        icon: '🌾'
      },
      {
        id: 'usda',
        country: '🇺🇸 美国',
        name: 'USDA FoodData Central (FDC)',
        provider: '美国农业部',
        description: '全球食品（包括加工食品）的广泛数据、宏量/微量营养素、品牌产品信息。支持API + CSV/JSON下载。',
        features: [
          '数十万种全球食品',
          'RESTful API支持',
          'CC0许可证（开放数据）',
          '包含品牌产品信息'
        ],
        apiUrl: 'https://fdc.nal.usda.gov/api-guide',
        webUrl: 'https://fdc.nal.usda.gov/',
        usage: '国际食品、进口产品和全球用户服务的必需品。',
        icon: '🌎'
      },
      {
        id: 'foodb',
        country: '🇨🇦 加拿大',
        name: 'FooDB',
        provider: '阿尔伯塔大学（国际研究）',
        description: '1,000+种原料食品 + 28,000+种化学成分（营养素、风味、生物活性化合物）。包括维生素/矿物质、植物化学物质、抗氧化剂和健康效果数据。',
        features: [
          '1,000+种原料食品',
          '28,000+种化学成分数据',
          '健康效果分析数据',
          '详细的微量营养素信息'
        ],
        apiUrl: 'https://foodb.ca/downloads',
        webUrl: 'https://foodb.ca/',
        usage: '适用于高级疾病预测。分析抗氧化剂、矿物质缺乏/过量。',
        icon: '🧪'
      },
      {
        id: 'openfoodfacts',
        country: '🌍 全球',
        name: 'Open Food Facts',
        provider: '全球开放众包',
        description: '数百万全球食品产品数据（加工食品、品牌产品）、成分表、营养信息、原料、条形码/品牌信息、过敏原信息。开放数据许可证。',
        features: [
          '数百万产品数据',
          '基于条形码的搜索',
          '过敏原信息',
          'REST API + 移动应用'
        ],
        apiUrl: 'https://world.openfoodfacts.org/data',
        webUrl: 'https://world.openfoodfacts.org/',
        usage: '包装食品、加工产品、便利店餐食 + 条形码扫描集成。',
        icon: '📦'
      }
    ],
    
    diseaseWarnings: {
      title: '⚕️ 疾病警告功能',
      description: '基于AI分析的营养数据进行实时疾病风险预测：',
      diseases: [
        {
          name: '肥胖',
          icon: '⚖️',
          factors: ['总卡路里', '脂肪', '糖', 'BMI'],
          threshold: '摄入量超过每日推荐卡路里的120%时警告'
        },
        {
          name: '糖尿病',
          icon: '🍬',
          factors: ['糖', '碳水化合物', '血糖指数 (GI)'],
          threshold: '糖超过50克/天或过量碳水化合物摄入时警告'
        },
        {
          name: '高血压',
          icon: '💉',
          factors: ['钠', '脂肪', '钾'],
          threshold: '钠超过2,000毫克/天时警告'
        },
        {
          name: '高脂血症',
          icon: '🩸',
          factors: ['饱和脂肪', '胆固醇', '反式脂肪'],
          threshold: '胆固醇超过300毫克或过量饱和脂肪时警告'
        }
      ]
    },
    
    benefits: {
      title: '✅ 数据库集成优势',
      items: [
        '✓ 实时最新营养信息更新',
        '✓ 使用权威政府/国际机构数据',
        '✓ 自动匹配5,000+种食品',
        '✓ 使用免费OpenAPI节省成本',
        '✓ 支持各国食品（韩国、美国、全球）',
        '✓ 提高个性化疾病预测准确性'
      ]
    },
    
    tips: {
      title: '💡 使用技巧',
      items: [
        '1. 将MFDS API设为主数据库，优先匹配韩国食品',
        '2. 用USDA、FooDB补充缺失项目',
        '3. 对加工/包装产品使用Open Food Facts条形码扫描',
        '4. 输入健康信息（年龄、体重、活动）以获得更准确的预测',
        '5. 查看高风险情况的饮食改善建议'
      ]
    }
  },
  
  ja: {
    pageTitle: '健康情報案内',
    subtitle: '公開食品/栄養データベースリスト',
    backToMain: 'メイン画面に戻る',
    
    intro: {
      title: '📊 疾病予測システム紹介',
      description: 'CALCARE AIは食品写真を分析して栄養成分を自動計算し、公開食品/栄養データベースと統合して個人に合わせた疾病リスクを予測します。'
    },
    
    workflow: {
      title: '🔄 疾病警告システムワークフロー',
      steps: [
        {
          icon: '📸',
          title: 'ステップ1：食品写真撮影',
          description: 'ユーザーが食品写真をアップロードすると、AIが食品の種類と量を自動認識します。'
        },
        {
          icon: '🔍',
          title: 'ステップ2：栄養DBマッチング',
          description: '認識された食品を公開栄養データベース（MFDS、USDAなど）とマッチングし、栄養素を抽出：カロリー、タンパク質、炭水化物、脂質、糖、ナトリウム、コレステロール。'
        },
        {
          icon: '👤',
          title: 'ステップ3：個人健康分析',
          description: 'ユーザーの年齢、性別、体重、活動レベル、基礎健康状態を総合的に分析します。'
        },
        {
          icon: '🏥',
          title: 'ステップ4：AI疾病リスク予測',
          description: 'XGBoost機械学習モデルが摂取+個人健康データに基づいて肥満、糖尿病、高血圧、高脂血症のリスクを3段階（低/中/高）で予測します。'
        },
        {
          icon: '⚠️',
          title: 'ステップ5：リアルタイム健康警告',
          description: 'ハイリスクケースに対して即座に警告メッセージを表示し、食事改善案を提案します。'
        }
      ]
    },
    
    databases: [
      {
        id: 'mfds',
        country: '🇰🇷 韓国',
        name: '食品医薬品安全処 (MFDS) - 食品栄養データベース',
        provider: '韓国食品医薬品安全処',
        description: '韓国で最も代表的な公共栄養DB。原材料食品、加工食品、調理食品を幅広くカバー。1回分の栄養成分（エネルギー、炭水化物、タンパク質、脂質、ビタミン、ミネラル）を提供。',
        features: [
          '5,000以上の食品',
          'JSON/XML OpenAPI',
          '無料開発者アカウント',
          '定期更新（年1-2回）'
        ],
        apiUrl: 'https://www.data.go.kr/data/15127578/openapi.do',
        webUrl: 'https://various.foodsafetykorea.go.kr/nutrient/',
        usage: '韓国食品/食事分析のための第一選択DB。リアルタイムAPI統合可能。',
        icon: '🏛️'
      },
      {
        id: 'rda',
        country: '🇰🇷 韓国',
        name: '国家標準食品成分表',
        provider: '韓国農村振興庁',
        description: '国内外の食品と原材料に関する100種以上の栄養データを含む。約3,300種の食品をカバーし、100g単位の栄養情報を提供。',
        features: [
          '3,300以上の食品',
          '130種以上の栄養素タイプ',
          '詳細な原材料分析',
          'DB 10.3バージョン（最新）'
        ],
        apiUrl: 'https://www.data.go.kr/data/15143598/openapi.do',
        webUrl: 'https://koreanfood.rda.go.kr/kfi/fct/fctIntro/list',
        usage: '原材料ベースの分析と家庭料理韓国料理システムに有用。',
        icon: '🌾'
      },
      {
        id: 'usda',
        country: '🇺🇸 米国',
        name: 'USDA FoodData Central (FDC)',
        provider: '米国農務省',
        description: 'グローバル食品（加工食品を含む）の広範なデータ、マクロ/ミクロ栄養素、ブランド製品情報。API + CSV/JSONダウンロードサポート。',
        features: [
          '数十万のグローバル食品',
          'RESTful APIサポート',
          'CC0ライセンス（オープンデータ）',
          'ブランド製品情報を含む'
        ],
        apiUrl: 'https://fdc.nal.usda.gov/api-guide',
        webUrl: 'https://fdc.nal.usda.gov/',
        usage: '国際食品、輸入製品、グローバルユーザーサービスに必須。',
        icon: '🌎'
      },
      {
        id: 'foodb',
        country: '🇨🇦 カナダ',
        name: 'FooDB',
        provider: 'アルバータ大学（国際研究）',
        description: '1,000以上の原材料食品 + 28,000以上の化学成分（栄養素、風味、生理活性化合物）。ビタミン/ミネラル、植物化学物質、抗酸化物質、健康効果データを含む。',
        features: [
          '1,000以上の原材料食品',
          '28,000以上の化学成分データ',
          '健康効果分析データ',
          '詳細な微量栄養素情報'
        ],
        apiUrl: 'https://foodb.ca/downloads',
        webUrl: 'https://foodb.ca/',
        usage: '高度な疾病予測に有用。抗酸化物質、ミネラル不足/過剰を分析。',
        icon: '🧪'
      },
      {
        id: 'openfoodfacts',
        country: '🌍 グローバル',
        name: 'Open Food Facts',
        provider: 'グローバルオープンクラウドソーシング',
        description: '数百万のグローバル食品製品データ（加工食品、ブランド製品）、成分表、栄養情報、原材料、バーコード/ブランド情報、アレルゲン情報。オープンデータライセンス。',
        features: [
          '数百万の製品データ',
          'バーコードベースの検索',
          'アレルゲン情報',
          'REST API + モバイルアプリ'
        ],
        apiUrl: 'https://world.openfoodfacts.org/data',
        webUrl: 'https://world.openfoodfacts.org/',
        usage: 'パッケージ食品、加工製品、コンビニ弁当 + バーコードスキャン統合。',
        icon: '📦'
      }
    ],
    
    diseaseWarnings: {
      title: '⚕️ 疾病警告機能',
      description: 'AI分析された栄養データに基づくリアルタイム疾病リスク予測：',
      diseases: [
        {
          name: '肥満',
          icon: '⚖️',
          factors: ['総カロリー', '脂質', '糖', 'BMI'],
          threshold: '摂取量が1日推奨カロリーの120%を超えると警告'
        },
        {
          name: '糖尿病',
          icon: '🍬',
          factors: ['糖', '炭水化物', '血糖指数 (GI)'],
          threshold: '糖が50g/日を超えるか過剰な炭水化物摂取時に警告'
        },
        {
          name: '高血圧',
          icon: '💉',
          factors: ['ナトリウム', '脂質', 'カリウム'],
          threshold: 'ナトリウムが2,000mg/日を超えると警告'
        },
        {
          name: '高脂血症',
          icon: '🩸',
          factors: ['飽和脂肪', 'コレステロール', 'トランス脂肪'],
          threshold: 'コレステロールが300mgを超えるか過剰な飽和脂肪時に警告'
        }
      ]
    },
    
    benefits: {
      title: '✅ DB統合の利点',
      items: [
        '✓ リアルタイム最新栄養情報更新',
        '✓ 権威ある政府/国際機関データを使用',
        '✓ 5,000以上の食品を自動マッチング',
        '✓ 無料OpenAPIでコスト削減',
        '✓ 各国食品をサポート（韓国、米国、グローバル）',
        '✓ 個別化された疾病予測精度の向上'
      ]
    },
    
    tips: {
      title: '💡 使用のヒント',
      items: [
        '1. MFDS APIをメインDBとして韓国食品を優先マッチング',
        '2. 不足項目はUSDA、FooDBで補完',
        '3. 加工/パッケージ製品にはOpen Food Factsバーコードスキャンを使用',
        '4. 健康情報（年齢、体重、活動）を入力してより正確な予測',
        '5. ハイリスクケースの食事改善提案を確認'
      ]
    }
  },
  
  vi: {
    pageTitle: 'Hướng dẫn Thông tin Sức khỏe',
    subtitle: 'Danh sách Cơ sở Dữ liệu Thực phẩm/Dinh dưỡng Công khai',
    backToMain: 'Quay lại Trang chính',
    
    intro: {
      title: '📊 Giới thiệu Hệ thống Dự đoán Bệnh',
      description: 'CALCARE AI phân tích ảnh thức ăn để tự động tính toán thành phần dinh dưỡng và dự đoán rủi ro bệnh cá nhân hóa bằng cách tích hợp với cơ sở dữ liệu thực phẩm/dinh dưỡng công khai.'
    },
    
    workflow: {
      title: '🔄 Quy trình Hệ thống Cảnh báo Bệnh',
      steps: [
        {
          icon: '📸',
          title: 'Bước 1: Chụp Ảnh Thức ăn',
          description: 'Khi người dùng tải ảnh thức ăn lên, AI tự động nhận diện loại thức ăn và khẩu phần.'
        },
        {
          icon: '🔍',
          title: 'Bước 2: Khớp Cơ sở Dữ liệu Dinh dưỡng',
          description: 'Khớp thức ăn đã nhận diện với cơ sở dữ liệu dinh dưỡng công khai (MFDS, USDA, v.v.) để trích xuất chất dinh dưỡng: calo, protein, carbohydrate, chất béo, đường, natri, cholesterol.'
        },
        {
          icon: '👤',
          title: 'Bước 3: Phân tích Sức khỏe Cá nhân',
          description: 'Phân tích toàn diện tuổi, giới tính, cân nặng, mức độ hoạt động và tình trạng sức khỏe cơ bản của người dùng.'
        },
        {
          icon: '🏥',
          title: 'Bước 4: Dự đoán Rủi ro Bệnh bằng AI',
          description: 'Mô hình học máy XGBoost dự đoán rủi ro béo phì, tiểu đường, huyết áp cao và mỡ máu cao ở 3 cấp độ (Thấp/Trung bình/Cao) dựa trên dữ liệu tiêu thụ + sức khỏe cá nhân.'
        },
        {
          icon: '⚠️',
          title: 'Bước 5: Cảnh báo Sức khỏe Thời gian Thực',
          description: 'Hiển thị thông báo cảnh báo ngay lập tức cho các trường hợp có rủi ro cao và đề xuất cải thiện chế độ ăn.'
        }
      ]
    },
    
    databases: [
      {
        id: 'mfds',
        country: '🇰🇷 Hàn Quốc',
        name: 'Bộ An toàn Thực phẩm và Dược phẩm (MFDS) - Cơ sở Dữ liệu Dinh dưỡng Thực phẩm',
        provider: 'Bộ An toàn Thực phẩm và Dược phẩm, Hàn Quốc',
        description: 'Cơ sở dữ liệu dinh dưỡng công cộng đại diện nhất của Hàn Quốc. Bao gồm thực phẩm nguyên liệu, thực phẩm chế biến và món ăn nấu. Cung cấp thành phần dinh dưỡng trên mỗi khẩu phần (năng lượng, carbohydrate, protein, chất béo, vitamin, khoáng chất).',
        features: [
          '5.000+ mặt hàng thực phẩm',
          'JSON/XML OpenAPI',
          'Tài khoản nhà phát triển miễn phí',
          'Cập nhật thường xuyên (1-2 lần/năm)'
        ],
        apiUrl: 'https://www.data.go.kr/data/15127578/openapi.do',
        webUrl: 'https://various.foodsafetykorea.go.kr/nutrient/',
        usage: 'Cơ sở dữ liệu chính cho phân tích thực phẩm/chế độ ăn Hàn Quốc. Hỗ trợ tích hợp API thời gian thực.',
        icon: '🏛️'
      },
      {
        id: 'rda',
        country: '🇰🇷 Hàn Quốc',
        name: 'Bảng Thành phần Thực phẩm Tiêu chuẩn Quốc gia',
        provider: 'Cơ quan Phát triển Nông thôn, Hàn Quốc',
        description: 'Bao gồm 100+ loại dữ liệu dinh dưỡng cho thực phẩm và nguyên liệu trong và ngoài nước. Bao gồm khoảng 3.300 thực phẩm với thông tin dinh dưỡng đơn vị 100g.',
        features: [
          '3.300+ mặt hàng thực phẩm',
          '130+ loại chất dinh dưỡng',
          'Phân tích nguyên liệu chi tiết',
          'Phiên bản DB 10.3 (mới nhất)'
        ],
        apiUrl: 'https://www.data.go.kr/data/15143598/openapi.do',
        webUrl: 'https://koreanfood.rda.go.kr/kfi/fct/fctIntro/list',
        usage: 'Hữu ích cho phân tích dựa trên nguyên liệu và hệ thống thực phẩm Hàn Quốc nấu tại nhà.',
        icon: '🌾'
      },
      {
        id: 'usda',
        country: '🇺🇸 Mỹ',
        name: 'USDA FoodData Central (FDC)',
        provider: 'Bộ Nông nghiệp Hoa Kỳ',
        description: 'Dữ liệu rộng lớn về thực phẩm toàn cầu (bao gồm thực phẩm chế biến), chất dinh dưỡng đa lượng/vi lượng, thông tin sản phẩm thương hiệu. Hỗ trợ API + tải xuống CSV/JSON.',
        features: [
          'Hàng trăm nghìn mặt hàng thực phẩm toàn cầu',
          'Hỗ trợ RESTful API',
          'Giấy phép CC0 (dữ liệu mở)',
          'Bao gồm thông tin sản phẩm thương hiệu'
        ],
        apiUrl: 'https://fdc.nal.usda.gov/api-guide',
        webUrl: 'https://fdc.nal.usda.gov/',
        usage: 'Thiết yếu cho thực phẩm quốc tế, sản phẩm nhập khẩu và dịch vụ người dùng toàn cầu.',
        icon: '🌎'
      },
      {
        id: 'foodb',
        country: '🇨🇦 Canada',
        name: 'FooDB',
        provider: 'Đại học Alberta (Nghiên cứu Quốc tế)',
        description: '1.000+ mặt hàng thực phẩm nguyên liệu + 28.000+ thành phần hóa học (chất dinh dưỡng, hương vị, hợp chất sinh học hoạt tính). Bao gồm vitamin/khoáng chất, phytochemical, chất chống oxy hóa và dữ liệu hiệu quả sức khỏe.',
        features: [
          '1.000+ mặt hàng thực phẩm nguyên liệu',
          '28.000+ dữ liệu thành phần hóa học',
          'Dữ liệu phân tích hiệu quả sức khỏe',
          'Thông tin vi chất dinh dưỡng chi tiết'
        ],
        apiUrl: 'https://foodb.ca/downloads',
        webUrl: 'https://foodb.ca/',
        usage: 'Hữu ích cho dự đoán bệnh nâng cao. Phân tích chất chống oxy hóa, thiếu/thừa khoáng chất.',
        icon: '🧪'
      },
      {
        id: 'openfoodfacts',
        country: '🌍 Toàn cầu',
        name: 'Open Food Facts',
        provider: 'Crowdsourcing Mở Toàn cầu',
        description: 'Hàng triệu dữ liệu sản phẩm thực phẩm toàn cầu (thực phẩm chế biến, sản phẩm thương hiệu), danh sách thành phần, thông tin dinh dưỡng, nguyên liệu, thông tin mã vạch/thương hiệu, thông tin chất gây dị ứng. Giấy phép dữ liệu mở.',
        features: [
          'Hàng triệu dữ liệu sản phẩm',
          'Tìm kiếm dựa trên mã vạch',
          'Thông tin chất gây dị ứng',
          'REST API + ứng dụng di động'
        ],
        apiUrl: 'https://world.openfoodfacts.org/data',
        webUrl: 'https://world.openfoodfacts.org/',
        usage: 'Thực phẩm đóng gói, sản phẩm chế biến, bữa ăn cửa hàng tiện lợi + tích hợp quét mã vạch.',
        icon: '📦'
      }
    ],
    
    diseaseWarnings: {
      title: '⚕️ Chức năng Cảnh báo Bệnh',
      description: 'Dự đoán rủi ro bệnh thời gian thực dựa trên dữ liệu dinh dưỡng được AI phân tích:',
      diseases: [
        {
          name: 'Béo phì',
          icon: '⚖️',
          factors: ['Tổng Calo', 'Chất béo', 'Đường', 'BMI'],
          threshold: 'Cảnh báo khi lượng tiêu thụ vượt quá 120% calo khuyến nghị hàng ngày'
        },
        {
          name: 'Tiểu đường',
          icon: '🍬',
          factors: ['Đường', 'Carbohydrate', 'Chỉ số Đường huyết (GI)'],
          threshold: 'Cảnh báo khi đường vượt quá 50g/ngày hoặc tiêu thụ carb quá mức'
        },
        {
          name: 'Huyết áp cao',
          icon: '💉',
          factors: ['Natri', 'Chất béo', 'Kali'],
          threshold: 'Cảnh báo khi natri vượt quá 2.000mg/ngày'
        },
        {
          name: 'Mỡ máu cao',
          icon: '🩸',
          factors: ['Chất béo Bão hòa', 'Cholesterol', 'Chất béo Chuyển hóa'],
          threshold: 'Cảnh báo khi cholesterol vượt quá 300mg hoặc chất béo bão hòa quá mức'
        }
      ]
    },
    
    benefits: {
      title: '✅ Lợi ích Tích hợp Cơ sở Dữ liệu',
      items: [
        '✓ Cập nhật thông tin dinh dưỡng mới nhất theo thời gian thực',
        '✓ Sử dụng dữ liệu chính phủ/tổ chức quốc tế có thẩm quyền',
        '✓ Tự động khớp 5.000+ thực phẩm',
        '✓ Tiết kiệm chi phí với OpenAPI miễn phí',
        '✓ Hỗ trợ thực phẩm nhiều quốc gia (Hàn Quốc, Mỹ, Toàn cầu)',
        '✓ Cải thiện độ chính xác dự đoán bệnh cá nhân hóa'
      ]
    },
    
    tips: {
      title: '💡 Mẹo Sử dụng',
      items: [
        '1. Đặt MFDS API làm cơ sở dữ liệu chính để ưu tiên khớp thực phẩm Hàn Quốc',
        '2. Bổ sung các mục còn thiếu bằng USDA, FooDB',
        '3. Sử dụng quét mã vạch Open Food Facts cho sản phẩm chế biến/đóng gói',
        '4. Nhập thông tin sức khỏe (tuổi, cân nặng, hoạt động) để dự đoán chính xác hơn',
        '5. Kiểm tra đề xuất cải thiện chế độ ăn cho các trường hợp có rủi ro cao'
      ]
    }
  },
  
  ar: {
    pageTitle: 'دليل المعلومات الصحية',
    subtitle: 'قائمة قواعد بيانات الأغذية/التغذية العامة',
    backToMain: 'العودة إلى الصفحة الرئيسية',
    
    intro: {
      title: '📊 مقدمة نظام التنبؤ بالأمراض',
      description: 'يحلل CALCARE AI صور الطعام لحساب المحتوى الغذائي تلقائياً ويتنبأ بمخاطر الأمراض الشخصية من خلال التكامل مع قواعد بيانات الأغذية/التغذية العامة.'
    },
    
    workflow: {
      title: '🔄 سير عمل نظام التحذير من الأمراض',
      steps: [
        {
          icon: '📸',
          title: 'الخطوة 1: التقاط صورة الطعام',
          description: 'عندما يقوم المستخدمون بتحميل صور الطعام، يتعرف الذكاء الاصطناعي تلقائياً على أنواع الطعام والحصص.'
        },
        {
          icon: '🔍',
          title: 'الخطوة 2: مطابقة قاعدة بيانات التغذية',
          description: 'مطابقة الأطعمة المعترف بها مع قواعد البيانات الغذائية العامة (MFDS، USDA، إلخ) لاستخراج العناصر الغذائية: السعرات الحرارية، البروتين، الكربوهيدرات، الدهون، السكر، الصوديوم، الكوليسترول.'
        },
        {
          icon: '👤',
          title: 'الخطوة 3: تحليل الصحة الشخصية',
          description: 'تحليل شامل لعمر المستخدم وجنسه ووزنه ومستوى نشاطه والحالات الصحية الأساسية.'
        },
        {
          icon: '🏥',
          title: 'الخطوة 4: التنبؤ بمخاطر الأمراض بالذكاء الاصطناعي',
          description: 'يتنبأ نموذج التعلم الآلي XGBoost بمخاطر السمنة والسكري وارتفاع ضغط الدم وارتفاع الدهون في 3 مستويات (منخفض/متوسط/مرتفع) بناءً على بيانات الاستهلاك + الصحة الشخصية.'
        },
        {
          icon: '⚠️',
          title: 'الخطوة 5: تحذيرات صحية في الوقت الفعلي',
          description: 'عرض رسائل تحذير فورية للحالات عالية المخاطر واقتراح تحسينات غذائية.'
        }
      ]
    },
    
    databases: [
      {
        id: 'mfds',
        country: '🇰🇷 كوريا',
        name: 'وزارة سلامة الأغذية والأدوية (MFDS) - قاعدة بيانات التغذية الغذائية',
        provider: 'وزارة سلامة الأغذية والأدوية، كوريا',
        description: 'قاعدة بيانات التغذية العامة الأكثر تمثيلاً في كوريا. تغطي الأطعمة الخام والأطعمة المصنعة والأطباق المطبوخة. توفر المحتوى الغذائي لكل وجبة (الطاقة، الكربوهيدرات، البروتين، الدهون، الفيتامينات، المعادن).',
        features: [
          '5000+ عنصر غذائي',
          'JSON/XML OpenAPI',
          'حساب مطور مجاني',
          'تحديثات منتظمة (1-2 مرة/سنة)'
        ],
        apiUrl: 'https://www.data.go.kr/data/15127578/openapi.do',
        webUrl: 'https://various.foodsafetykorea.go.kr/nutrient/',
        usage: 'قاعدة البيانات الأساسية لتحليل الطعام/النظام الغذائي الكوري. تكامل API في الوقت الفعلي متاح.',
        icon: '🏛️'
      },
      {
        id: 'rda',
        country: '🇰🇷 كوريا',
        name: 'جدول تكوين الأغذية الوطني القياسي',
        provider: 'إدارة التنمية الريفية، كوريا',
        description: 'يتضمن 100+ نوع من البيانات الغذائية للأطعمة والمواد الخام المحلية والدولية. يغطي حوالي 3,300 طعام مع معلومات غذائية لوحدة 100 جرام.',
        features: [
          '3,300+ عنصر غذائي',
          '130+ نوع من المغذيات',
          'تحليل تفصيلي للمواد الخام',
          'إصدار DB 10.3 (الأحدث)'
        ],
        apiUrl: 'https://www.data.go.kr/data/15143598/openapi.do',
        webUrl: 'https://koreanfood.rda.go.kr/kfi/fct/fctIntro/list',
        usage: 'مفيد للتحليل القائم على المواد الخام وأنظمة الطعام الكوري المطبوخ في المنزل.',
        icon: '🌾'
      },
      {
        id: 'usda',
        country: '🇺🇸 الولايات المتحدة',
        name: 'USDA FoodData Central (FDC)',
        provider: 'وزارة الزراعة الأمريكية',
        description: 'بيانات واسعة عن الأطعمة العالمية (بما في ذلك الأطعمة المصنعة)، المغذيات الكبيرة/الصغيرة، معلومات منتجات العلامات التجارية. دعم API + تنزيل CSV/JSON.',
        features: [
          'مئات الآلاف من الأطعمة العالمية',
          'دعم RESTful API',
          'ترخيص CC0 (بيانات مفتوحة)',
          'معلومات منتجات العلامات التجارية المدرجة'
        ],
        apiUrl: 'https://fdc.nal.usda.gov/api-guide',
        webUrl: 'https://fdc.nal.usda.gov/',
        usage: 'ضروري للأطعمة الدولية والمنتجات المستوردة وخدمات المستخدمين العالميين.',
        icon: '🌎'
      },
      {
        id: 'foodb',
        country: '🇨🇦 كندا',
        name: 'FooDB',
        provider: 'جامعة ألبرتا (الأبحاث الدولية)',
        description: '1,000+ عنصر غذائي خام + 28,000+ مكون كيميائي (مغذيات، نكهات، مركبات نشطة بيولوجياً). يتضمن فيتامينات/معادن، مواد كيميائية نباتية، مضادات أكسدة، وبيانات التأثير الصحي.',
        features: [
          '1,000+ عنصر غذائي خام',
          '28,000+ بيانات مكونات كيميائية',
          'بيانات تحليل التأثير الصحي',
          'معلومات تفصيلية عن المغذيات الدقيقة'
        ],
        apiUrl: 'https://foodb.ca/downloads',
        webUrl: 'https://foodb.ca/',
        usage: 'مفيد للتنبؤ المتقدم بالأمراض. تحليل مضادات الأكسدة، نقص/زيادة المعادن.',
        icon: '🧪'
      },
      {
        id: 'openfoodfacts',
        country: '🌍 عالمي',
        name: 'Open Food Facts',
        provider: 'التعهيد الجماعي المفتوح العالمي',
        description: 'ملايين بيانات منتجات الأغذية العالمية (الأطعمة المصنعة، منتجات العلامات التجارية)، قوائم المكونات، معلومات التغذية، المكونات، معلومات الباركود/العلامة التجارية، معلومات مسببات الحساسية. ترخيص بيانات مفتوحة.',
        features: [
          'ملايين بيانات المنتجات',
          'بحث قائم على الباركود',
          'معلومات مسببات الحساسية',
          'REST API + تطبيق محمول'
        ],
        apiUrl: 'https://world.openfoodfacts.org/data',
        webUrl: 'https://world.openfoodfacts.org/',
        usage: 'الأطعمة المعبأة، المنتجات المصنعة، وجبات متجر الملائمة + تكامل مسح الباركود.',
        icon: '📦'
      }
    ],
    
    diseaseWarnings: {
      title: '⚕️ ميزات التحذير من الأمراض',
      description: 'التنبؤ بمخاطر الأمراض في الوقت الفعلي بناءً على البيانات الغذائية المحللة بالذكاء الاصطناعي:',
      diseases: [
        {
          name: 'السمنة',
          icon: '⚖️',
          factors: ['إجمالي السعرات الحرارية', 'الدهون', 'السكر', 'مؤشر كتلة الجسم'],
          threshold: 'تحذير عندما يتجاوز الاستهلاك 120% من السعرات الحرارية اليومية الموصى بها'
        },
        {
          name: 'السكري',
          icon: '🍬',
          factors: ['السكر', 'الكربوهيدرات', 'مؤشر نسبة السكر في الدم (GI)'],
          threshold: 'تحذير عندما يتجاوز السكر 50 جم/يوم أو الاستهلاك المفرط للكربوهيدرات'
        },
        {
          name: 'ارتفاع ضغط الدم',
          icon: '💉',
          factors: ['الصوديوم', 'الدهون', 'البوتاسيوم'],
          threshold: 'تحذير عندما يتجاوز الصوديوم 2,000 ملجم/يوم'
        },
        {
          name: 'ارتفاع الدهون',
          icon: '🩸',
          factors: ['الدهون المشبعة', 'الكوليسترول', 'الدهون المتحولة'],
          threshold: 'تحذير عندما يتجاوز الكوليسترول 300 ملجم أو الدهون المشبعة الزائدة'
        }
      ]
    },
    
    benefits: {
      title: '✅ فوائد تكامل قاعدة البيانات',
      items: [
        '✓ تحديثات معلومات التغذية الأحدث في الوقت الفعلي',
        '✓ استخدام بيانات الحكومة/المنظمات الدولية الموثوقة',
        '✓ مطابقة تلقائية لأكثر من 5000 طعام',
        '✓ توفير التكاليف مع OpenAPI المجاني',
        '✓ دعم أطعمة بلدان مختلفة (كوريا، الولايات المتحدة، عالمي)',
        '✓ تحسين دقة التنبؤ بالأمراض الشخصية'
      ]
    },
    
    tips: {
      title: '💡 نصائح الاستخدام',
      items: [
        '1. اضبط MFDS API كقاعدة بيانات رئيسية لمطابقة الأطعمة الكورية أولاً',
        '2. قم بتكملة العناصر المفقودة بـ USDA، FooDB',
        '3. استخدم مسح الباركود Open Food Facts للمنتجات المصنعة/المعبأة',
        '4. أدخل معلومات الصحة (العمر، الوزن، النشاط) لتنبؤات أكثر دقة',
        '5. تحقق من اقتراحات تحسين النظام الغذائي للحالات عالية المخاطر'
      ]
    }
  }
};

// 현재 언어 가져오기
function getCurrentHealthLang() {
  return localStorage.getItem('lang') || 'ko';
}

// 건강정보 데이터 가져오기
function getHealthDBData() {
  const lang = getCurrentHealthLang();
  return healthDBData[lang] || healthDBData['ko'];
}
