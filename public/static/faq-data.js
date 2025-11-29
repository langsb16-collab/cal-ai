// FAQ 자동응답봇 데이터 (6개 언어)
const faqData = {
  ko: {
    pageTitle: '자동응답 FAQ',
    backToMain: '메인 화면으로 돌아가기',
    howCanIHelp: '무엇을 도와드릴까요?',
    categories: [
      {
        id: 'general',
        title: '💬 일반 문의',
        icon: '💬',
        questions: [
          {
            q: '서비스 소개',
            a: 'CALCARE AI는 음식 사진만 찍으면 AI가 자동으로 칼로리·영양소를 분석하고, 비만·당뇨·고혈압·고지혈증 등 질병 위험도를 예측해주는 맞춤형 건강관리 플랫폼입니다. 무료 체험 2회 제공 후 프리미엄 구독으로 무제한 이용이 가능합니다.'
          },
          {
            q: 'AI 음식 인식은 어떻게 작동하나요?',
            a: '사용자가 음식 사진을 업로드하면 딥러닝 기반 이미지 인식 AI가 음식 종류를 자동 분류하고, 데이터베이스(USDA, 식약처)와 매칭하여 칼로리·단백질·탄수화물·지방·당류·나트륨·식이섬유·콜레스테롤 등 8대 영양소를 즉시 분석합니다.'
          },
          {
            q: '무료 vs 유료(프리미엄) 차이는?',
            a: '무료: 2회 체험 후 종료 / 프리미엄: 무제한 분석 + 주간/월간 통계 + AI 맞춤 식단 추천 + 질병 위험도 추적 + 우선 고객지원. 연간 구독 시 할인 혜택이 제공됩니다.'
          }
        ]
      },
      {
        id: 'analysis',
        title: '📸 사진 인식·분석',
        icon: '📸',
        questions: [
          {
            q: '어떤 사진을 찍어야 정확하게 인식되나요?',
            a: '음식이 화면 중앙에 크게, 조명이 밝은 환경에서 촬영하세요. 여러 음식이 섞여있어도 개별 인식이 가능하지만, 한 가지씩 찍으면 더 정확합니다.'
          },
          {
            q: '인식 실패 시 어떻게 하나요?',
            a: '수동 검색 기능을 이용해 음식명을 직접 입력하거나, 사진을 다시 촬영해보세요. 지속적인 오류는 고객센터로 문의 부탁드립니다.'
          },
          {
            q: '한식·양식·중식 모두 인식되나요?',
            a: '네! 한식(비빔밥, 김치찌개 등), 양식(스테이크, 샐러드 등), 중식(짜장면, 탕수육 등), 일식, 디저트까지 40+ 음식 DB 보유, 지속 업데이트 중입니다.'
          }
        ]
      },
      {
        id: 'nutrition',
        title: '🍎 칼로리·영양소 분석',
        icon: '🍎',
        questions: [
          {
            q: '칼로리 계산은 얼마나 정확한가요?',
            a: 'USDA, 식약처 공인 데이터베이스 기준으로 ±5% 이내 정확도를 목표로 합니다. 음식 크기·조리법에 따라 차이가 있을 수 있습니다.'
          },
          {
            q: '하루 권장 섭취량은 어떻게 계산되나요?',
            a: '사용자의 나이·성별·체중·활동량을 기반으로 FDA/WHO 기준 권장 칼로리(약 2,000kcal)와 영양소 비율을 자동 계산합니다.'
          },
          {
            q: '영양소 항목은 무엇이 있나요?',
            a: '칼로리, 단백질, 탄수화물, 지방, 당류, 나트륨, 식이섬유, 콜레스테롤 총 8가지 핵심 영양소를 제공합니다.'
          }
        ]
      },
      {
        id: 'disease',
        title: '🏥 질병 예측·위험도',
        icon: '🏥',
        questions: [
          {
            q: '질병 위험도는 어떻게 예측하나요?',
            a: 'XGBoost 머신러닝 모델이 사용자의 섭취 데이터(칼로리, 당, 지방, 나트륨 등)와 건강 정보(나이, 체중, 활동량)를 종합 분석하여 비만·당뇨·고혈압·고지혈증 위험도를 3단계(낮음/보통/높음)로 표시합니다.'
          },
          {
            q: '의학적 진단으로 봐도 되나요?',
            a: '아니요. 본 서비스는 참고용 정보이며, 정확한 진단은 반드시 의료기관에서 받으시기 바랍니다.'
          },
          {
            q: '위험도가 높음으로 나왔어요. 어떻게 해야 하나요?',
            a: 'AI 맞춤 식단 추천을 확인하고, 나트륨·당류 섭취를 줄이며, 의료기관 방문을 권장합니다. 앱 내 건강 코칭 기능도 활용해보세요.'
          }
        ]
      },
      {
        id: 'account',
        title: '👤 계정·프로필',
        icon: '👤',
        questions: [
          {
            q: '회원가입은 어떻게 하나요?',
            a: '이메일 주소만 입력하면 자동으로 계정이 생성됩니다. 추가로 나이·성별·체중 등을 입력하면 더 정확한 분석이 가능합니다.'
          },
          {
            q: '프로필 정보는 어디에 사용되나요?',
            a: '입력하신 정보는 권장 칼로리 계산, 질병 위험도 예측, AI 맞춤 식단 추천에만 사용되며, 외부에 공유되지 않습니다.'
          },
          {
            q: '계정 삭제는 어떻게 하나요?',
            a: '설정 > 계정 관리 > 계정 삭제를 선택하시면 모든 데이터가 영구 삭제됩니다.'
          }
        ]
      },
      {
        id: 'premium',
        title: '💎 프리미엄·결제',
        icon: '💎',
        questions: [
          {
            q: '프리미엄 요금은 얼마인가요?',
            a: '연간 구독: $29.99 (월 $2.5), 월간 구독: $4.99. 신규 가입자는 무료 체험 2회 제공됩니다.'
          },
          {
            q: '결제 수단은 무엇이 있나요?',
            a: '신용카드, 체크카드, PayPal, Apple Pay, Google Pay 등 다양한 결제 수단을 지원합니다.'
          },
          {
            q: '환불 정책은 어떻게 되나요?',
            a: '구독 후 7일 이내 100% 환불 가능합니다. 단, 분석 횟수를 과도하게 사용한 경우 제한될 수 있습니다.'
          },
          {
            q: '프리미엄 해지 방법은?',
            a: '설정 > 구독 관리 > 구독 취소를 선택하시면 다음 결제일부터 자동 해지됩니다. 남은 기간은 계속 이용 가능합니다.'
          }
        ]
      },
      {
        id: 'usage',
        title: '📱 앱 사용법',
        icon: '📱',
        questions: [
          {
            q: '사진 업로드 후 분석까지 얼마나 걸리나요?',
            a: '평균 3~5초 이내 분석 완료됩니다. 네트워크 상태에 따라 다소 지연될 수 있습니다.'
          },
          {
            q: '음식 검색 기능은 어떻게 사용하나요?',
            a: '메인 화면 하단 "음식 검색" 입력창에 음식명(한글/영문)을 입력하면 DB에서 자동 검색됩니다.'
          },
          {
            q: '통계 차트는 어디서 볼 수 있나요?',
            a: '하단 메뉴 "통계" 탭을 클릭하면 일간·주간·월간 영양 섭취 그래프를 확인할 수 있습니다.'
          },
          {
            q: '섭취 기록은 자동 저장되나요?',
            a: '네! 분석 후 "섭취 기록 저장" 버튼을 누르면 자동으로 저장되며, 통계에 반영됩니다.'
          }
        ]
      },
      {
        id: 'troubleshooting',
        title: '⚠️ 오류·문제해결',
        icon: '⚠️',
        questions: [
          {
            q: '앱이 느려요. 어떻게 해야 하나요?',
            a: '캐시 삭제, 앱 재시작, 최신 버전 업데이트를 시도해보세요. 문제가 지속되면 고객센터로 문의 부탁드립니다.'
          },
          {
            q: '사진 업로드가 안 돼요.',
            a: '카메라 권한을 확인하고, 사진 크기가 10MB 이하인지 확인하세요. JPG, PNG 형식만 지원됩니다.'
          },
          {
            q: '로그인이 안 돼요.',
            a: '이메일 주소를 정확히 입력했는지 확인하고, 인터넷 연결 상태를 점검하세요.'
          }
        ]
      },
      {
        id: 'security',
        title: '🔒 보안·데이터',
        icon: '🔒',
        questions: [
          {
            q: '내 건강 데이터는 안전한가요?',
            a: '모든 데이터는 Cloudflare D1 데이터베이스에 암호화되어 저장되며, GDPR, HIPAA 기준을 준수합니다.'
          },
          {
            q: '제3자에게 데이터가 공유되나요?',
            a: '절대 공유되지 않습니다. 마케팅·연구 목적으로도 사용자 동의 없이 데이터를 제공하지 않습니다.'
          }
        ]
      }
    ]
  },
  
  en: {
    pageTitle: 'Auto-Reply FAQ',
    backToMain: 'Back to Main',
    howCanIHelp: 'How can I help you?',
    categories: [
      {
        id: 'general',
        title: '💬 General Inquiry',
        icon: '💬',
        questions: [
          {
            q: 'Service Introduction',
            a: 'CALCARE AI is a personalized health management platform that automatically analyzes calories and nutrients from food photos using AI, and predicts disease risks such as obesity, diabetes, hypertension, and hyperlipidemia. Free trial with 2 analyses, then unlimited access with Premium subscription.'
          },
          {
            q: 'How does AI food recognition work?',
            a: 'When you upload a food photo, our deep learning-based image recognition AI automatically classifies the food type, matches it with databases (USDA, FDA), and instantly analyzes 8 key nutrients: calories, protein, carbs, fat, sugar, sodium, fiber, and cholesterol.'
          },
          {
            q: 'Free vs Premium difference?',
            a: 'Free: 2 trial analyses / Premium: Unlimited analysis + Weekly/monthly statistics + AI meal recommendations + Disease risk tracking + Priority support. Annual subscription offers discount benefits.'
          }
        ]
      },
      {
        id: 'analysis',
        title: '📸 Photo Recognition·Analysis',
        icon: '📸',
        questions: [
          {
            q: 'What kind of photos work best?',
            a: 'Take photos with food centered and large, in well-lit environments. Multiple foods can be recognized individually, but single items work best for accuracy.'
          },
          {
            q: 'What if recognition fails?',
            a: 'Use the manual search function to enter food names directly, or retake the photo. For persistent errors, please contact customer support.'
          },
          {
            q: 'Does it recognize Korean, Western, Chinese food?',
            a: 'Yes! Korean (bibimbap, kimchi stew), Western (steak, salad), Chinese (jajangmyeon, sweet and sour pork), Japanese, and desserts - 40+ food database, continuously updated.'
          }
        ]
      },
      {
        id: 'nutrition',
        title: '🍎 Calorie·Nutrition Analysis',
        icon: '🍎',
        questions: [
          {
            q: 'How accurate is calorie calculation?',
            a: 'Based on USDA and FDA certified databases, we target ±5% accuracy. Variations may occur depending on food size and cooking methods.'
          },
          {
            q: 'How is daily recommended intake calculated?',
            a: 'Based on your age, gender, weight, and activity level, we automatically calculate FDA/WHO recommended calories (~2,000kcal) and nutrient ratios.'
          },
          {
            q: 'What nutrition items are tracked?',
            a: '8 key nutrients: Calories, Protein, Carbohydrates, Fat, Sugar, Sodium, Fiber, and Cholesterol.'
          }
        ]
      },
      {
        id: 'disease',
        title: '🏥 Disease Prediction·Risk',
        icon: '🏥',
        questions: [
          {
            q: 'How is disease risk predicted?',
            a: 'XGBoost machine learning model analyzes your intake data (calories, sugar, fat, sodium) and health information (age, weight, activity) to display obesity, diabetes, hypertension, and hyperlipidemia risk in 3 levels (Low/Medium/High).'
          },
          {
            q: 'Can this be considered medical diagnosis?',
            a: 'No. This service provides reference information only. For accurate diagnosis, please consult medical professionals.'
          },
          {
            q: 'My risk is high. What should I do?',
            a: 'Check AI meal recommendations, reduce sodium and sugar intake, and consider visiting a healthcare provider. Use in-app health coaching features.'
          }
        ]
      },
      {
        id: 'account',
        title: '👤 Account·Profile',
        icon: '👤',
        questions: [
          {
            q: 'How to sign up?',
            a: 'Just enter your email address and an account will be created automatically. Adding age, gender, weight enables more accurate analysis.'
          },
          {
            q: 'How is profile information used?',
            a: 'Your information is used only for calculating recommended calories, predicting disease risk, and AI meal recommendations. Never shared externally.'
          },
          {
            q: 'How to delete account?',
            a: 'Settings > Account Management > Delete Account will permanently delete all data.'
          }
        ]
      },
      {
        id: 'premium',
        title: '💎 Premium·Payment',
        icon: '💎',
        questions: [
          {
            q: 'Premium pricing?',
            a: 'Annual subscription: $29.99 ($2.5/month), Monthly subscription: $4.99. New users get 2 free trial analyses.'
          },
          {
            q: 'Payment methods?',
            a: 'Credit card, Debit card, PayPal, Apple Pay, Google Pay and more.'
          },
          {
            q: 'Refund policy?',
            a: '100% refund within 7 days of subscription. May be limited if excessive analysis usage.'
          },
          {
            q: 'How to cancel Premium?',
            a: 'Settings > Subscription Management > Cancel Subscription. Auto-cancels from next billing date. Remaining period stays active.'
          }
        ]
      },
      {
        id: 'usage',
        title: '📱 App Usage',
        icon: '📱',
        questions: [
          {
            q: 'How long does analysis take?',
            a: 'Average 3-5 seconds. May vary slightly depending on network conditions.'
          },
          {
            q: 'How to use food search?',
            a: 'Enter food name (Korean/English) in "Food Search" field at bottom of main screen for auto-search in database.'
          },
          {
            q: 'Where to view statistics charts?',
            a: 'Click "Statistics" tab in bottom menu to view daily, weekly, monthly nutrition intake graphs.'
          },
          {
            q: 'Are intake records auto-saved?',
            a: 'Yes! Click "Save Intake Record" after analysis to auto-save and reflect in statistics.'
          }
        ]
      },
      {
        id: 'troubleshooting',
        title: '⚠️ Error·Troubleshooting',
        icon: '⚠️',
        questions: [
          {
            q: 'App is slow. What to do?',
            a: 'Try clearing cache, restarting app, updating to latest version. Contact support if issues persist.'
          },
          {
            q: 'Photo upload not working.',
            a: 'Check camera permissions and ensure photo size is under 10MB. Only JPG, PNG formats supported.'
          },
          {
            q: 'Cannot login.',
            a: 'Verify email address is correct and check internet connection.'
          }
        ]
      },
      {
        id: 'security',
        title: '🔒 Security·Data',
        icon: '🔒',
        questions: [
          {
            q: 'Is my health data safe?',
            a: 'All data is encrypted and stored in Cloudflare D1 database, complying with GDPR and HIPAA standards.'
          },
          {
            q: 'Is data shared with third parties?',
            a: 'Absolutely not. No data is provided for marketing or research without user consent.'
          }
        ]
      }
    ]
  },
  
  zh: {
    pageTitle: '自动回复常见问题',
    backToMain: '返回主屏幕',
    howCanIHelp: '我能帮您什么?',
    categories: [
      {
        id: 'general',
        title: '💬 一般咨询',
        icon: '💬',
        questions: [
          {
            q: '服务介绍',
            a: 'CALCARE AI是一个个性化健康管理平台，只需拍摄食物照片，AI就会自动分析卡路里和营养素，并预测肥胖、糖尿病、高血压、高脂血症等疾病风险。提供2次免费试用，之后可通过高级会员订阅无限使用。'
          },
          {
            q: 'AI食物识别如何工作？',
            a: '当您上传食物照片时，基于深度学习的图像识别AI会自动分类食物类型，与数据库（USDA、FDA）匹配，立即分析8种关键营养素：卡路里、蛋白质、碳水化合物、脂肪、糖、钠、纤维和胆固醇。'
          },
          {
            q: '免费版与高级版的区别？',
            a: '免费版：2次试用分析 / 高级版：无限分析 + 每周/每月统计 + AI膳食推荐 + 疾病风险跟踪 + 优先支持。年度订阅享受折扣优惠。'
          }
        ]
      },
      {
        id: 'analysis',
        title: '📸 照片识别·分析',
        icon: '📸',
        questions: [
          {
            q: '什么样的照片效果最好？',
            a: '在光线充足的环境中拍摄，食物居中且较大。可以识别多种食物，但单一食物准确度更高。'
          },
          {
            q: '识别失败怎么办？',
            a: '使用手动搜索功能直接输入食物名称，或重新拍照。如果错误持续，请联系客户支持。'
          },
          {
            q: '能识别韩国、西方、中国食物吗？',
            a: '是的！韩国料理（拌饭、泡菜汤）、西餐（牛排、沙拉）、中餐（炸酱面、糖醋肉）、日料和甜点 - 拥有40+种食物数据库，持续更新中。'
          }
        ]
      },
      {
        id: 'nutrition',
        title: '🍎 卡路里·营养分析',
        icon: '🍎',
        questions: [
          {
            q: '卡路里计算有多准确？',
            a: '基于USDA和FDA认证数据库，目标精度为±5%。可能因食物大小和烹饪方法略有差异。'
          },
          {
            q: '每日推荐摄入量如何计算？',
            a: '根据您的年龄、性别、体重和活动水平，自动计算FDA/WHO推荐卡路里（约2000千卡）和营养素比例。'
          },
          {
            q: '跟踪哪些营养项目？',
            a: '8种关键营养素：卡路里、蛋白质、碳水化合物、脂肪、糖、钠、纤维和胆固醇。'
          }
        ]
      },
      {
        id: 'disease',
        title: '🏥 疾病预测·风险',
        icon: '🏥',
        questions: [
          {
            q: '如何预测疾病风险？',
            a: 'XGBoost机器学习模型分析您的摄入数据（卡路里、糖、脂肪、钠）和健康信息（年龄、体重、活动），以3个级别（低/中/高）显示肥胖、糖尿病、高血压和高脂血症风险。'
          },
          {
            q: '这可以作为医疗诊断吗？',
            a: '不可以。本服务仅提供参考信息。准确诊断请咨询医疗专业人士。'
          },
          {
            q: '我的风险很高。该怎么办？',
            a: '查看AI膳食推荐，减少钠和糖的摄入，考虑就医。使用应用内健康指导功能。'
          }
        ]
      },
      {
        id: 'account',
        title: '👤 账户·资料',
        icon: '👤',
        questions: [
          {
            q: '如何注册？',
            a: '只需输入电子邮件地址即可自动创建账户。添加年龄、性别、体重可获得更准确的分析。'
          },
          {
            q: '个人资料如何使用？',
            a: '您的信息仅用于计算推荐卡路里、预测疾病风险和AI膳食推荐。绝不外部共享。'
          },
          {
            q: '如何删除账户？',
            a: '设置 > 账户管理 > 删除账户将永久删除所有数据。'
          }
        ]
      },
      {
        id: 'premium',
        title: '💎 高级会员·支付',
        icon: '💎',
        questions: [
          {
            q: '高级会员定价？',
            a: '年度订阅：$29.99（每月$2.5），月度订阅：$4.99。新用户可获得2次免费试用分析。'
          },
          {
            q: '支付方式？',
            a: '信用卡、借记卡、PayPal、Apple Pay、Google Pay等多种支付方式。'
          },
          {
            q: '退款政策？',
            a: '订阅后7天内100%退款。过度使用分析次数可能受限。'
          },
          {
            q: '如何取消高级会员？',
            a: '设置 > 订阅管理 > 取消订阅。从下个计费日期自动取消。剩余期限继续有效。'
          }
        ]
      },
      {
        id: 'usage',
        title: '📱 应用使用',
        icon: '📱',
        questions: [
          {
            q: '分析需要多长时间？',
            a: '平均3-5秒。可能因网络状况略有差异。'
          },
          {
            q: '如何使用食物搜索？',
            a: '在主屏幕底部的"食物搜索"字段中输入食物名称（韩文/英文）即可在数据库中自动搜索。'
          },
          {
            q: '在哪里查看统计图表？',
            a: '点击底部菜单的"统计"标签即可查看每日、每周、每月营养摄入图表。'
          },
          {
            q: '摄入记录会自动保存吗？',
            a: '是的！分析后点击"保存摄入记录"即可自动保存并反映在统计中。'
          }
        ]
      },
      {
        id: 'troubleshooting',
        title: '⚠️ 错误·故障排除',
        icon: '⚠️',
        questions: [
          {
            q: '应用很慢。怎么办？',
            a: '尝试清除缓存、重启应用、更新到最新版本。如果问题持续，请联系支持。'
          },
          {
            q: '照片上传不工作。',
            a: '检查相机权限，确保照片大小在10MB以下。仅支持JPG、PNG格式。'
          },
          {
            q: '无法登录。',
            a: '验证电子邮件地址是否正确，检查互联网连接。'
          }
        ]
      },
      {
        id: 'security',
        title: '🔒 安全·数据',
        icon: '🔒',
        questions: [
          {
            q: '我的健康数据安全吗？',
            a: '所有数据都经过加密并存储在Cloudflare D1数据库中，符合GDPR和HIPAA标准。'
          },
          {
            q: '数据会与第三方共享吗？',
            a: '绝对不会。未经用户同意，不会为营销或研究提供任何数据。'
          }
        ]
      }
    ]
  },
  
  ja: {
    pageTitle: '自動応答FAQ',
    backToMain: 'メイン画面に戻る',
    howCanIHelp: 'どのようにお手伝いしましょうか？',
    categories: [
      {
        id: 'general',
        title: '💬 一般的なお問い合わせ',
        icon: '💬',
        questions: [
          {
            q: 'サービス紹介',
            a: 'CALCARE AIは食品写真を撮るだけで、AIが自動的にカロリーと栄養素を分析し、肥満、糖尿病、高血圧、高脂血症などの疾病リスクを予測するパーソナライズされた健康管理プラットフォームです。2回の無料試用後、プレミアムサブスクリプションで無制限利用が可能です。'
          },
          {
            q: 'AI食品認識はどのように機能しますか？',
            a: '食品写真をアップロードすると、ディープラーニングベースの画像認識AIが食品タイプを自動分類し、データベース（USDA、FDA）と照合して、カロリー、タンパク質、炭水化物、脂質、糖質、ナトリウム、食物繊維、コレステロールの8つの主要栄養素を即座に分析します。'
          },
          {
            q: '無料版とプレミアム版の違いは？',
            a: '無料版：2回の試用分析 / プレミアム版：無制限分析 + 週次/月次統計 + AI食事推奨 + 疾病リスク追跡 + 優先サポート。年間サブスクリプションは割引特典があります。'
          }
        ]
      },
      {
        id: 'analysis',
        title: '📸 写真認識·分析',
        icon: '📸',
        questions: [
          {
            q: 'どんな写真が最適ですか？',
            a: '明るい環境で、食品を中央に大きく配置して撮影してください。複数の食品も個別に認識できますが、単品の方が正確です。'
          },
          {
            q: '認識に失敗した場合は？',
            a: '手動検索機能を使用して食品名を直接入力するか、写真を再撮影してください。エラーが続く場合は、カスタマーサポートにお問い合わせください。'
          },
          {
            q: '韓国料理、洋食、中華料理は認識されますか？',
            a: 'はい！韓国料理（ビビンバ、キムチチゲ）、洋食（ステーキ、サラダ）、中華料理（ジャージャー麺、酢豚）、和食、デザートまで - 40以上の食品データベース、継続的に更新中。'
          }
        ]
      },
      {
        id: 'nutrition',
        title: '🍎 カロリー·栄養分析',
        icon: '🍎',
        questions: [
          {
            q: 'カロリー計算はどのくらい正確ですか？',
            a: 'USDAとFDA認証データベースに基づき、±5%の精度を目標としています。食品のサイズや調理方法により若干の差異が生じる場合があります。'
          },
          {
            q: '1日の推奨摂取量はどのように計算されますか？',
            a: '年齢、性別、体重、活動レベルに基づいて、FDA/WHO推奨カロリー（約2000kcal）と栄養素比率を自動計算します。'
          },
          {
            q: 'どの栄養項目が追跡されますか？',
            a: '8つの主要栄養素：カロリー、タンパク質、炭水化物、脂質、糖質、ナトリウム、食物繊維、コレステロール。'
          }
        ]
      },
      {
        id: 'disease',
        title: '🏥 疾病予測·リスク',
        icon: '🏥',
        questions: [
          {
            q: '疾病リスクはどのように予測されますか？',
            a: 'XGBoost機械学習モデルが摂取データ（カロリー、糖、脂質、ナトリウム）と健康情報（年齢、体重、活動）を分析し、肥満、糖尿病、高血圧、高脂血症のリスクを3段階（低/中/高）で表示します。'
          },
          {
            q: 'これは医療診断として見なせますか？',
            a: 'いいえ。本サービスは参考情報のみを提供します。正確な診断は医療専門家にご相談ください。'
          },
          {
            q: 'リスクが高いです。どうすればいいですか？',
            a: 'AI食事推奨を確認し、ナトリウムと糖の摂取を減らし、医療機関への受診を検討してください。アプリ内の健康コーチング機能もご活用ください。'
          }
        ]
      },
      {
        id: 'account',
        title: '👤 アカウント·プロフィール',
        icon: '👤',
        questions: [
          {
            q: '登録方法は？',
            a: 'メールアドレスを入力するだけで自動的にアカウントが作成されます。年齢、性別、体重を追加すると、より正確な分析が可能になります。'
          },
          {
            q: 'プロフィール情報はどのように使用されますか？',
            a: 'ご入力いただいた情報は、推奨カロリーの計算、疾病リスクの予測、AI食事推奨にのみ使用され、外部に共有されることはありません。'
          },
          {
            q: 'アカウントの削除方法は？',
            a: '設定 > アカウント管理 > アカウント削除を選択すると、すべてのデータが永久に削除されます。'
          }
        ]
      },
      {
        id: 'premium',
        title: '💎 プレミアム·決済',
        icon: '💎',
        questions: [
          {
            q: 'プレミアム料金は？',
            a: '年間サブスクリプション：$29.99（月$2.5）、月間サブスクリプション：$4.99。新規ユーザーは2回の無料試用分析を利用できます。'
          },
          {
            q: '決済方法は？',
            a: 'クレジットカード、デビットカード、PayPal、Apple Pay、Google Payなど。'
          },
          {
            q: '返金ポリシーは？',
            a: 'サブスクリプション後7日以内に100%返金可能です。過度な分析使用の場合は制限される場合があります。'
          },
          {
            q: 'プレミアムのキャンセル方法は？',
            a: '設定 > サブスクリプション管理 > サブスクリプションキャンセル。次回請求日から自動キャンセルされます。残り期間は引き続き有効です。'
          }
        ]
      },
      {
        id: 'usage',
        title: '📱 アプリの使用方法',
        icon: '📱',
        questions: [
          {
            q: '分析にはどのくらい時間がかかりますか？',
            a: '平均3〜5秒。ネットワーク状況により若干異なる場合があります。'
          },
          {
            q: '食品検索機能の使い方は？',
            a: 'メイン画面下部の「食品検索」フィールドに食品名（韓国語/英語）を入力すると、データベースで自動検索されます。'
          },
          {
            q: '統計グラフはどこで見られますか？',
            a: '下部メニューの「統計」タブをクリックすると、日次、週次、月次の栄養摂取グラフを確認できます。'
          },
          {
            q: '摂取記録は自動保存されますか？',
            a: 'はい！分析後に「摂取記録を保存」をクリックすると、自動保存され、統計に反映されます。'
          }
        ]
      },
      {
        id: 'troubleshooting',
        title: '⚠️ エラー·トラブルシューティング',
        icon: '⚠️',
        questions: [
          {
            q: 'アプリが遅いです。どうすればいいですか？',
            a: 'キャッシュのクリア、アプリの再起動、最新バージョンへの更新を試してください。問題が続く場合は、サポートにお問い合わせください。'
          },
          {
            q: '写真のアップロードが機能しません。',
            a: 'カメラの権限を確認し、写真のサイズが10MB以下であることを確認してください。JPG、PNG形式のみサポートされています。'
          },
          {
            q: 'ログインできません。',
            a: 'メールアドレスが正しいか確認し、インターネット接続を確認してください。'
          }
        ]
      },
      {
        id: 'security',
        title: '🔒 セキュリティ·データ',
        icon: '🔒',
        questions: [
          {
            q: '健康データは安全ですか？',
            a: 'すべてのデータはCloudflare D1データベースに暗号化されて保存され、GDPRとHIPAA基準に準拠しています。'
          },
          {
            q: 'データは第三者と共有されますか？',
            a: '絶対に共有されません。ユーザーの同意なしにマーケティングや研究のためにデータを提供することはありません。'
          }
        ]
      }
    ]
  },
  
  vi: {
    pageTitle: 'FAQ Trả lời Tự động',
    backToMain: 'Quay lại màn hình chính',
    howCanIHelp: 'Tôi có thể giúp gì cho bạn?',
    categories: [
      {
        id: 'general',
        title: '💬 Câu hỏi chung',
        icon: '💬',
        questions: [
          {
            q: 'Giới thiệu dịch vụ',
            a: 'CALCARE AI là nền tảng quản lý sức khỏe cá nhân hóa tự động phân tích calo và dinh dưỡng từ ảnh thức ăn bằng AI, và dự đoán rủi ro bệnh như béo phì, tiểu đường, huyết áp cao và mỡ máu cao. Dùng thử miễn phí 2 lần phân tích, sau đó truy cập không giới hạn với gói Premium.'
          },
          {
            q: 'AI nhận diện thức ăn hoạt động như thế nào?',
            a: 'Khi bạn tải ảnh thức ăn lên, AI nhận diện hình ảnh dựa trên học sâu sẽ tự động phân loại loại thức ăn, khớp với cơ sở dữ liệu (USDA, FDA), và ngay lập tức phân tích 8 chất dinh dưỡng chính: calo, protein, carbohydrate, chất béo, đường, natri, chất xơ và cholesterol.'
          },
          {
            q: 'Sự khác biệt giữa miễn phí và Premium?',
            a: 'Miễn phí: 2 lần phân tích dùng thử / Premium: Phân tích không giới hạn + Thống kê hàng tuần/tháng + Gợi ý bữa ăn AI + Theo dõi rủi ro bệnh + Hỗ trợ ưu tiên. Đăng ký hàng năm được giảm giá.'
          }
        ]
      },
      {
        id: 'analysis',
        title: '📸 Nhận diện·Phân tích ảnh',
        icon: '📸',
        questions: [
          {
            q: 'Loại ảnh nào tốt nhất?',
            a: 'Chụp ảnh với thức ăn ở giữa và lớn, trong môi trường sáng. Nhiều thức ăn có thể được nhận diện riêng lẻ, nhưng đơn phẩm tốt nhất cho độ chính xác.'
          },
          {
            q: 'Nếu nhận diện thất bại?',
            a: 'Sử dụng chức năng tìm kiếm thủ công để nhập tên thức ăn trực tiếp, hoặc chụp lại ảnh. Đối với lỗi liên tục, vui lòng liên hệ hỗ trợ khách hàng.'
          },
          {
            q: 'Có nhận diện thức ăn Hàn Quốc, Phương Tây, Trung Quốc không?',
            a: 'Có! Món Hàn (bibimbap, canh kimchi), Phương Tây (bít tết, salad), Trung Hoa (mì tương đen, thịt chua ngọt), Nhật Bản và món tráng miệng - Cơ sở dữ liệu 40+ món, liên tục cập nhật.'
          }
        ]
      },
      {
        id: 'nutrition',
        title: '🍎 Phân tích Calo·Dinh dưỡng',
        icon: '🍎',
        questions: [
          {
            q: 'Tính toán calo chính xác đến mức nào?',
            a: 'Dựa trên cơ sở dữ liệu được chứng nhận USDA và FDA, chúng tôi nhắm đến độ chính xác ±5%. Có thể có sự khác biệt tùy thuộc vào kích thước và phương pháp nấu.'
          },
          {
            q: 'Lượng khuyến nghị hàng ngày được tính như thế nào?',
            a: 'Dựa trên tuổi, giới tính, cân nặng và mức độ hoạt động của bạn, chúng tôi tự động tính calo khuyến nghị FDA/WHO (~2.000kcal) và tỷ lệ dinh dưỡng.'
          },
          {
            q: 'Các mục dinh dưỡng nào được theo dõi?',
            a: '8 chất dinh dưỡng chính: Calo, Protein, Carbohydrate, Chất béo, Đường, Natri, Chất xơ và Cholesterol.'
          }
        ]
      },
      {
        id: 'disease',
        title: '🏥 Dự đoán Bệnh·Rủi ro',
        icon: '🏥',
        questions: [
          {
            q: 'Rủi ro bệnh được dự đoán như thế nào?',
            a: 'Mô hình học máy XGBoost phân tích dữ liệu tiêu thụ của bạn (calo, đường, chất béo, natri) và thông tin sức khỏe (tuổi, cân nặng, hoạt động) để hiển thị rủi ro béo phì, tiểu đường, huyết áp cao và mỡ máu cao ở 3 mức (Thấp/Trung bình/Cao).'
          },
          {
            q: 'Có thể coi đây là chẩn đoán y tế không?',
            a: 'Không. Dịch vụ này chỉ cung cấp thông tin tham khảo. Để chẩn đoán chính xác, vui lòng tư vấn chuyên gia y tế.'
          },
          {
            q: 'Rủi ro của tôi cao. Tôi nên làm gì?',
            a: 'Kiểm tra gợi ý bữa ăn AI, giảm lượng natri và đường tiêu thụ, và cân nhắc đến cơ sở y tế. Sử dụng các tính năng huấn luyện sức khỏe trong ứng dụng.'
          }
        ]
      },
      {
        id: 'account',
        title: '👤 Tài khoản·Hồ sơ',
        icon: '👤',
        questions: [
          {
            q: 'Cách đăng ký?',
            a: 'Chỉ cần nhập địa chỉ email và tài khoản sẽ được tạo tự động. Thêm tuổi, giới tính, cân nặng cho phép phân tích chính xác hơn.'
          },
          {
            q: 'Thông tin hồ sơ được sử dụng như thế nào?',
            a: 'Thông tin của bạn chỉ được sử dụng để tính calo khuyến nghị, dự đoán rủi ro bệnh và gợi ý bữa ăn AI. Không bao giờ chia sẻ bên ngoài.'
          },
          {
            q: 'Cách xóa tài khoản?',
            a: 'Cài đặt > Quản lý Tài khoản > Xóa Tài khoản sẽ xóa vĩnh viễn tất cả dữ liệu.'
          }
        ]
      },
      {
        id: 'premium',
        title: '💎 Premium·Thanh toán',
        icon: '💎',
        questions: [
          {
            q: 'Giá Premium?',
            a: 'Đăng ký hàng năm: $29.99 ($2.5/tháng), Đăng ký hàng tháng: $4.99. Người dùng mới nhận 2 lần phân tích dùng thử miễn phí.'
          },
          {
            q: 'Phương thức thanh toán?',
            a: 'Thẻ tín dụng, Thẻ ghi nợ, PayPal, Apple Pay, Google Pay và nhiều hơn nữa.'
          },
          {
            q: 'Chính sách hoàn tiền?',
            a: 'Hoàn tiền 100% trong vòng 7 ngày kể từ khi đăng ký. Có thể bị giới hạn nếu sử dụng quá nhiều lần phân tích.'
          },
          {
            q: 'Cách hủy Premium?',
            a: 'Cài đặt > Quản lý Đăng ký > Hủy Đăng ký. Tự động hủy từ ngày thanh toán tiếp theo. Thời gian còn lại vẫn hoạt động.'
          }
        ]
      },
      {
        id: 'usage',
        title: '📱 Sử dụng Ứng dụng',
        icon: '📱',
        questions: [
          {
            q: 'Phân tích mất bao lâu?',
            a: 'Trung bình 3-5 giây. Có thể thay đổi tùy thuộc vào điều kiện mạng.'
          },
          {
            q: 'Cách sử dụng tìm kiếm thức ăn?',
            a: 'Nhập tên thức ăn (tiếng Hàn/tiếng Anh) vào trường "Tìm kiếm Thức ăn" ở cuối màn hình chính để tự động tìm kiếm trong cơ sở dữ liệu.'
          },
          {
            q: 'Xem biểu đồ thống kê ở đâu?',
            a: 'Nhấp vào tab "Thống kê" trong menu dưới cùng để xem biểu đồ tiêu thụ dinh dưỡng hàng ngày, hàng tuần, hàng tháng.'
          },
          {
            q: 'Bản ghi tiêu thụ có tự động lưu không?',
            a: 'Có! Nhấp "Lưu Bản ghi Tiêu thụ" sau khi phân tích để tự động lưu và phản ánh trong thống kê.'
          }
        ]
      },
      {
        id: 'troubleshooting',
        title: '⚠️ Lỗi·Khắc phục sự cố',
        icon: '⚠️',
        questions: [
          {
            q: 'Ứng dụng chậm. Phải làm gì?',
            a: 'Thử xóa bộ nhớ cache, khởi động lại ứng dụng, cập nhật lên phiên bản mới nhất. Liên hệ hỗ trợ nếu vấn đề vẫn tiếp diễn.'
          },
          {
            q: 'Tải ảnh lên không hoạt động.',
            a: 'Kiểm tra quyền camera và đảm bảo kích thước ảnh dưới 10MB. Chỉ hỗ trợ định dạng JPG, PNG.'
          },
          {
            q: 'Không thể đăng nhập.',
            a: 'Xác minh địa chỉ email chính xác và kiểm tra kết nối internet.'
          }
        ]
      },
      {
        id: 'security',
        title: '🔒 Bảo mật·Dữ liệu',
        icon: '🔒',
        questions: [
          {
            q: 'Dữ liệu sức khỏe của tôi có an toàn không?',
            a: 'Tất cả dữ liệu được mã hóa và lưu trữ trong cơ sở dữ liệu Cloudflare D1, tuân thủ tiêu chuẩn GDPR và HIPAA.'
          },
          {
            q: 'Dữ liệu có được chia sẻ với bên thứ ba không?',
            a: 'Hoàn toàn không. Không có dữ liệu nào được cung cấp cho mục đích tiếp thị hoặc nghiên cứu mà không có sự đồng ý của người dùng.'
          }
        ]
      }
    ]
  },
  
  ar: {
    pageTitle: 'الأسئلة الشائعة - الرد التلقائي',
    backToMain: 'العودة إلى الشاشة الرئيسية',
    howCanIHelp: 'كيف يمكنني مساعدتك؟',
    categories: [
      {
        id: 'general',
        title: '💬 استفسار عام',
        icon: '💬',
        questions: [
          {
            q: 'مقدمة الخدمة',
            a: 'CALCARE AI هي منصة إدارة صحية شخصية تحلل تلقائياً السعرات الحرارية والمغذيات من صور الطعام باستخدام الذكاء الاصطناعي، وتتنبأ بمخاطر الأمراض مثل السمنة والسكري وارتفاع ضغط الدم وارتفاع الدهون. تجربة مجانية مع تحليلين، ثم وصول غير محدود مع اشتراك بريميوم.'
          },
          {
            q: 'كيف يعمل التعرف على الطعام بالذكاء الاصطناعي؟',
            a: 'عند تحميل صورة طعام، يقوم الذكاء الاصطناعي للتعرف على الصور المستند إلى التعلم العميق بتصنيف نوع الطعام تلقائياً، ومطابقته مع قواعد البيانات (USDA، FDA)، وتحليل 8 مغذيات رئيسية على الفور: السعرات الحرارية، البروتين، الكربوهيدرات، الدهون، السكر، الصوديوم، الألياف، والكوليسترول.'
          },
          {
            q: 'الفرق بين المجاني والبريميوم؟',
            a: 'مجاني: تحليلان تجريبيان / بريميوم: تحليل غير محدود + إحصائيات أسبوعية/شهرية + توصيات وجبات الذكاء الاصطناعي + تتبع مخاطر الأمراض + دعم أولوي. الاشتراك السنوي يوفر خصومات.'
          }
        ]
      },
      {
        id: 'analysis',
        title: '📸 التعرف على الصور·التحليل',
        icon: '📸',
        questions: [
          {
            q: 'ما نوع الصور الأفضل؟',
            a: 'التقط الصور مع وضع الطعام في المنتصف وبشكل كبير، في بيئات مضاءة جيداً. يمكن التعرف على عدة أطعمة بشكل فردي، لكن العناصر الفردية أفضل للدقة.'
          },
          {
            q: 'ماذا لو فشل التعرف؟',
            a: 'استخدم وظيفة البحث اليدوي لإدخال أسماء الطعام مباشرة، أو أعد التقاط الصورة. للأخطاء المستمرة، يرجى الاتصال بدعم العملاء.'
          },
          {
            q: 'هل يتعرف على الطعام الكوري والغربي والصيني؟',
            a: 'نعم! الطعام الكوري (بيبيمباب، حساء الكيمتشي)، الغربي (شريحة لحم، سلطة)، الصيني (نودلز جاجانج، لحم حلو وحامض)، الياباني، والحلويات - قاعدة بيانات 40+ طعام، يتم تحديثها باستمرار.'
          }
        ]
      },
      {
        id: 'nutrition',
        title: '🍎 تحليل السعرات الحرارية·التغذية',
        icon: '🍎',
        questions: [
          {
            q: 'ما مدى دقة حساب السعرات الحرارية؟',
            a: 'استناداً إلى قواعد بيانات معتمدة من USDA وFDA، نستهدف دقة ±5%. قد تحدث اختلافات حسب حجم الطعام وطرق الطهي.'
          },
          {
            q: 'كيف يتم حساب الكمية اليومية الموصى بها؟',
            a: 'استناداً إلى عمرك وجنسك ووزنك ومستوى نشاطك، نحسب تلقائياً السعرات الحرارية الموصى بها من FDA/WHO (~2000 سعرة) ونسب المغذيات.'
          },
          {
            q: 'ما هي عناصر التغذية المتتبعة؟',
            a: '8 مغذيات رئيسية: السعرات الحرارية، البروتين، الكربوهيدرات، الدهون، السكر، الصوديوم، الألياف، والكوليسترول.'
          }
        ]
      },
      {
        id: 'disease',
        title: '🏥 توقع الأمراض·المخاطر',
        icon: '🏥',
        questions: [
          {
            q: 'كيف يتم التنبؤ بمخاطر الأمراض؟',
            a: 'نموذج التعلم الآلي XGBoost يحلل بيانات استهلاكك (السعرات الحرارية، السكر، الدهون، الصوديوم) ومعلومات صحتك (العمر، الوزن، النشاط) لعرض مخاطر السمنة والسكري وارتفاع ضغط الدم وارتفاع الدهون في 3 مستويات (منخفض/متوسط/مرتفع).'
          },
          {
            q: 'هل يمكن اعتبار هذا تشخيصاً طبياً؟',
            a: 'لا. تقدم هذه الخدمة معلومات مرجعية فقط. للحصول على تشخيص دقيق، يرجى استشارة متخصصي الرعاية الصحية.'
          },
          {
            q: 'مخاطري عالية. ماذا يجب أن أفعل؟',
            a: 'تحقق من توصيات الوجبات بالذكاء الاصطناعي، قلل من تناول الصوديوم والسكر، وفكر في زيارة مقدم الرعاية الصحية. استخدم ميزات التدريب الصحي داخل التطبيق.'
          }
        ]
      },
      {
        id: 'account',
        title: '👤 الحساب·الملف الشخصي',
        icon: '👤',
        questions: [
          {
            q: 'كيفية التسجيل؟',
            a: 'فقط أدخل عنوان بريدك الإلكتروني وسيتم إنشاء الحساب تلقائياً. إضافة العمر والجنس والوزن تمكن من تحليل أكثر دقة.'
          },
          {
            q: 'كيف يتم استخدام معلومات الملف الشخصي؟',
            a: 'تُستخدم معلوماتك فقط لحساب السعرات الحرارية الموصى بها، والتنبؤ بمخاطر الأمراض، وتوصيات الوجبات بالذكاء الاصطناعي. لا تُشارك خارجياً أبداً.'
          },
          {
            q: 'كيفية حذف الحساب؟',
            a: 'الإعدادات > إدارة الحساب > حذف الحساب سيحذف جميع البيانات بشكل دائم.'
          }
        ]
      },
      {
        id: 'premium',
        title: '💎 بريميوم·الدفع',
        icon: '💎',
        questions: [
          {
            q: 'أسعار بريميوم؟',
            a: 'اشتراك سنوي: $29.99 ($2.5/شهر)، اشتراك شهري: $4.99. المستخدمون الجدد يحصلون على تحليلين تجريبيين مجانيين.'
          },
          {
            q: 'طرق الدفع؟',
            a: 'بطاقة ائتمان، بطاقة خصم، PayPal، Apple Pay، Google Pay والمزيد.'
          },
          {
            q: 'سياسة الاسترداد؟',
            a: 'استرداد 100% خلال 7 أيام من الاشتراك. قد يتم تقييدها في حالة الاستخدام المفرط للتحليل.'
          },
          {
            q: 'كيفية إلغاء بريميوم؟',
            a: 'الإعدادات > إدارة الاشتراك > إلغاء الاشتراك. يتم الإلغاء التلقائي من تاريخ الفوترة التالي. الفترة المتبقية تبقى نشطة.'
          }
        ]
      },
      {
        id: 'usage',
        title: '📱 استخدام التطبيق',
        icon: '📱',
        questions: [
          {
            q: 'كم يستغرق التحليل؟',
            a: 'متوسط 3-5 ثوانٍ. قد يختلف قليلاً حسب ظروف الشبكة.'
          },
          {
            q: 'كيفية استخدام بحث الطعام؟',
            a: 'أدخل اسم الطعام (الكورية/الإنجليزية) في حقل "بحث الطعام" في أسفل الشاشة الرئيسية للبحث التلقائي في قاعدة البيانات.'
          },
          {
            q: 'أين أشاهد الرسوم البيانية الإحصائية؟',
            a: 'انقر على علامة تبويب "الإحصائيات" في القائمة السفلية لعرض الرسوم البيانية لتناول التغذية اليومية والأسبوعية والشهرية.'
          },
          {
            q: 'هل يتم حفظ سجلات الاستهلاك تلقائياً؟',
            a: 'نعم! انقر "حفظ سجل الاستهلاك" بعد التحليل للحفظ التلقائي والانعكاس في الإحصائيات.'
          }
        ]
      },
      {
        id: 'troubleshooting',
        title: '⚠️ خطأ·استكشاف الأخطاء',
        icon: '⚠️',
        questions: [
          {
            q: 'التطبيق بطيء. ماذا أفعل؟',
            a: 'جرب مسح ذاكرة التخزين المؤقت، إعادة تشغيل التطبيق، التحديث إلى أحدث إصدار. اتصل بالدعم إذا استمرت المشاكل.'
          },
          {
            q: 'تحميل الصورة لا يعمل.',
            a: 'تحقق من أذونات الكاميرا وتأكد من أن حجم الصورة أقل من 10 ميجابايت. يتم دعم تنسيقات JPG، PNG فقط.'
          },
          {
            q: 'لا يمكنني تسجيل الدخول.',
            a: 'تحقق من صحة عنوان البريد الإلكتروني وتحقق من اتصال الإنترنت.'
          }
        ]
      },
      {
        id: 'security',
        title: '🔒 الأمان·البيانات',
        icon: '🔒',
        questions: [
          {
            q: 'هل بياناتي الصحية آمنة؟',
            a: 'جميع البيانات مشفرة ومخزنة في قاعدة بيانات Cloudflare D1، متوافقة مع معايير GDPR وHIPAA.'
          },
          {
            q: 'هل تتم مشاركة البيانات مع أطراف ثالثة؟',
            a: 'بالتأكيد لا. لا يتم تقديم أي بيانات لأغراض تسويقية أو بحثية دون موافقة المستخدم.'
          }
        ]
      }
    ]
  }
};

// 현재 언어 가져오기
function getCurrentFAQLang() {
  return localStorage.getItem('lang') || 'ko';
}

// FAQ 데이터 가져오기
function getFAQData() {
  const lang = getCurrentFAQLang();
  return faqData[lang] || faqData['ko'];
}
