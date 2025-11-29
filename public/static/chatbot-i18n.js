// 챗봇 다국어 데이터 (30개 질문 × 6개 언어)
const chatbotTranslations = {
  ko: {
    title: 'CALCARE AI 챗봇',
    subtitle: '무엇을 도와드릴까요?',
    backToMain: '메인 화면으로 돌아가기',
    backToList: '질문 목록으로 돌아가기',
    viewAllFAQ: '전체 FAQ 보기',
    categories: {
      service: '서비스 소개',
      photo: '사진 인식',
      calorie: '칼로리·영양 분석',
      disease: '질병 예측 기능',
      account: '계정/프로필',
      premium: '프리미엄/결제',
      points: '포인트/충전',
      usage: '앱 사용 방법',
      errors: '오류/문제 해결',
      security: '보안·데이터',
      verification: '인증·고급 기능'
    },
    questions: {
      q1: { q: '이 앱은 어떤 기능을 제공하나요?', a: '음식 사진을 자동 인식하여 칼로리·영양소 분석, 사용자 정보 기반 질병 위험도 예측, 맞춤형 영양/식단 코칭을 제공합니다.' },
      q2: { q: '어떤 음식을 인식할 수 있나요?', a: '한식·양식 포함 1,000종 이상의 음식을 인식합니다. 다중 음식도 자동 분리됩니다.' },
      q3: { q: '질병 위험도 분석은 어떻게 이루어지나요?', a: '나이·성별·BMI·병력·식단 데이터 등 건강 정보를 기반으로 AI(XGBoost/DNN)가 위험도를 계산합니다.' },
      q4: { q: '음식이 정확하게 인식되지 않습니다.', a: '접시 전체가 보이도록 찍고, 흔들림·반사·그림자를 최소화해 주세요.' },
      q5: { q: '여러 음식이 한 사진에 있어도 되나요?', a: '예, AI가 자동으로 각각을 분리해 인식합니다.' },
      q6: { q: '배달음식·편의점 도시락도 인식되나요?', a: '대부분 인식됩니다. 패키지·라벨도 참고하여 분석합니다.' },
      q7: { q: '칼로리 계산 방식이 궁금합니다.', a: '이미지 분석 모델(YOLO/EfficientNet)로 음식 종류·양을 파악한 뒤 영양 회귀모델로 칼로리를 추정합니다.' },
      q8: { q: '분석된 칼로리가 실제와 다르면 수정할 수 있나요?', a: '가능합니다. 사용자가 조정하면 향후 분석 정확도가 개선됩니다.' },
      q9: { q: '음식 양(gram)을 직접 입력할 수 있나요?', a: '네, 수동 조절이 가능합니다.' },
      q10: { q: '어떤 질병을 예측하나요?', a: '비만·당뇨·고혈압·지방간 등 생활습관 기반 질환 위험도를 제공합니다.' },
      q11: { q: '의료진의 진단과 차이가 나는 이유는?', a: '본 서비스는 건강 참고용 AI 분석이며 의료 진단은 아닙니다.' },
      q12: { q: '건강정보 입력은 필수인가요?', a: '위험도 분석 정확도를 위해 나이·성별·BMI 등 기본정보는 필수입니다.' },
      q13: { q: '회원가입은 어떻게 하나요?', a: '이메일 또는 휴대폰 인증으로 간편 가입할 수 있습니다.' },
      q14: { q: '가족 계정을 추가할 수 있나요?', a: '최대 3명까지 프로필 생성 가능합니다.' },
      q15: { q: '개인정보는 안전하게 보호되나요?', a: '모든 건강·이미지 데이터는 익명화/비식별 처리됩니다.' },
      q16: { q: '프리미엄 기능은 무엇인가요?', a: '무제한 분석, 상세 질병 리포트, 영양사 코칭, 식단 자동 추천, 광고 제거 기능을 제공합니다.' },
      q17: { q: '결제가 안 되는 경우 어떻게 하나요?', a: '카드 유효기간·잔액 확인 후 앱 마켓 결제 오류 여부를 확인해주세요.' },
      q18: { q: '환불은 가능한가요?', a: 'Google Play / App Store 정책에 따릅니다(자동 승인 또는 심사).' },
      q19: { q: '포인트는 어디에 사용하나요?', a: '분석 결과 열람, AI 식단 코칭, 건강리포트 기능에 사용합니다.' },
      q20: { q: '포인트 충전 오류가 발생합니다.', a: '결제 카드 문제 또는 네트워크 지연으로 발생할 수 있습니다. 앱 재시작 후 다시 시도해주세요.' },
      q21: { q: '오늘 먹은 칼로리를 어떻게 확인하나요?', a: '"영양 리포트" 탭에서 일·주·월 단위 총섭취량을 확인할 수 있습니다.' },
      q22: { q: '운동량도 기록되나요?', a: '네, 걸음 수·운동 종류·시간 입력 시 칼로리 소모량이 자동 계산됩니다.' },
      q23: { q: '식단 추천 기능은 어떻게 작동하나요?', a: '건강 목표·질병 위험도·섭취 기록을 기반으로 AI가 자동 생성합니다.' },
      q24: { q: '앱이 켜지지 않습니다.', a: '최신 버전 업데이트, 캐시 삭제, 기기 재부팅을 순서대로 시도해주세요.' },
      q25: { q: '사진 업로드가 실패합니다.', a: '파일 용량(20MB 이하)·권한 설정(카메라/앨범)·네트워크 상태를 확인해주세요.' },
      q26: { q: '분석 결과가 너무 느립니다.', a: '서버 부하일 수 있으며 1~3초 내 분석이 정상입니다.' },
      q27: { q: '내 사진이 서버에 저장되나요?', a: '익명화된 학습용 데이터만 선택적으로 저장됩니다. 원치 않으면 설정에서 거부할 수 있습니다.' },
      q28: { q: '개인정보 삭제는 어떻게 하나요?', a: '설정 → 계정관리 → 데이터 삭제 요청에서 즉시 삭제할 수 있습니다.' },
      q29: { q: 'VIP 인증은 어떻게 하나요?', a: '신분증(여권/주민증/운전면허증) + 얼굴을 함께 촬영하면 자동 AI 매칭으로 인증됩니다.' },
      q30: { q: '인증 실패 원인은 무엇인가요?', a: '흔들림, 신분증 글자 인식 불가, 얼굴 가림, 어두운 촬영 환경 등이 주요 원인입니다.' }
    }
  },
  
  en: {
    title: 'CALCARE AI Chatbot',
    subtitle: 'How can I assist you?',
    backToMain: 'Go back to the main screen',
    backToList: 'Go back to the question list',
    viewAllFAQ: 'View All FAQ',
    categories: {
      service: 'Service Introduction',
      photo: 'Photo Recognition',
      calorie: 'Calorie & Nutrient Analysis',
      disease: 'Disease Prediction',
      account: 'Account / Profile',
      premium: 'Premium / Payment',
      points: 'Points / Top-Up',
      usage: 'App Usage',
      errors: 'Errors / Troubleshooting',
      security: 'Security / Data',
      verification: 'Verification / Advanced Features'
    },
    questions: {
      q1: { q: 'What features does this app provide?', a: 'It automatically recognizes food photos and provides calorie/nutrient analysis, disease-risk prediction based on personal data, and personalized nutrition/diet coaching.' },
      q2: { q: 'What kinds of food can it recognize?', a: 'It recognizes over 1,000 types of food including Korean and Western dishes. Multiple foods in one photo are automatically separated.' },
      q3: { q: 'How is disease-risk analysis performed?', a: 'AI models (XGBoost/DNN) calculate the risk based on health data such as age, gender, BMI, medical history, and dietary patterns.' },
      q4: { q: 'The food is not recognized accurately.', a: 'Please take the photo with the entire plate visible and minimize shaking, reflections, and shadows.' },
      q5: { q: 'Can multiple dishes be in one photo?', a: 'Yes. The AI automatically separates each dish.' },
      q6: { q: 'Can delivery food or convenience-store lunchboxes be recognized?', a: 'Yes, most items are recognized. Packaging and labels are also analyzed.' },
      q7: { q: 'How are calories calculated?', a: 'The system identifies food type and quantity using image models (YOLO/EfficientNet), then estimates calories using a nutrition regression model.' },
      q8: { q: 'Can I edit the result if calories look inaccurate?', a: 'Yes. Adjustments help improve future accuracy.' },
      q9: { q: 'Can I manually enter the food amount (grams)?', a: 'Yes, manual adjustment is available.' },
      q10: { q: 'What diseases are predicted?', a: 'It provides risk levels for obesity, diabetes, hypertension, fatty liver, and other lifestyle-related conditions.' },
      q11: { q: 'Why might the result differ from a doctor\'s diagnosis?', a: 'This service provides AI-based health reference analysis, not a medical diagnosis.' },
      q12: { q: 'Is health-information input required?', a: 'Basic information such as age, gender, and BMI is required for accurate analysis.' },
      q13: { q: 'How do I sign up?', a: 'You can sign up easily using email or mobile verification.' },
      q14: { q: 'Can I add family accounts?', a: 'Up to 3 additional profiles may be created.' },
      q15: { q: 'Is my personal data protected?', a: 'All health and image data are anonymized/de-identified.' },
      q16: { q: 'What does the premium plan include?', a: 'Unlimited analysis, detailed disease reports, nutritionist coaching, automatic meal recommendations, and ad removal.' },
      q17: { q: 'What should I do if payment fails?', a: 'Check card expiration, balance, and any app-market billing errors.' },
      q18: { q: 'Is a refund possible?', a: 'Refunds follow Google Play / App Store policies.' },
      q19: { q: 'What are points used for?', a: 'Viewing analysis results, AI diet coaching, and health reports.' },
      q20: { q: 'Point-charging error occurs.', a: 'It may be caused by card issues or network delays. Restart the app and try again.' },
      q21: { q: 'How do I check today\'s calorie intake?', a: 'In the "Nutrition Report" tab, you can check daily/weekly/monthly totals.' },
      q22: { q: 'Can exercise data be recorded?', a: 'Yes. Enter steps, exercise type, and time to calculate calories burned.' },
      q23: { q: 'How does meal recommendation work?', a: 'AI generates meal plans based on health goals, risk levels, and intake history.' },
      q24: { q: 'The app won\'t open.', a: 'Update to the latest version, clear cache, and reboot the device.' },
      q25: { q: 'Photo upload fails.', a: 'Check file size (under 20MB), permissions (camera/gallery), and network status.' },
      q26: { q: 'Analysis is too slow.', a: 'It may be server load; normal processing time is 1–3 seconds.' },
      q27: { q: 'Are my photos stored on the server?', a: 'Only anonymized training data may be saved optionally. You may disable this in settings.' },
      q28: { q: 'How do I delete my personal data?', a: 'Settings → Account Management → Request Data Deletion.' },
      q29: { q: 'How do I complete VIP verification?', a: 'Take a photo holding your ID (passport/national ID/driver\'s license) with your face; AI will match it automatically.' },
      q30: { q: 'What causes verification failure?', a: 'Blurry images, unreadable ID text, covered face, or low lighting.' }
    }
  },
  
  zh: {
    title: 'CALCARE AI 聊天机器人',
    subtitle: '我能为您做什么？',
    backToMain: '返回主界面',
    backToList: '返回问题列表',
    viewAllFAQ: '查看所有常见问题',
    categories: {
      service: '服务介绍',
      photo: '照片识别',
      calorie: '卡路里·营养分析',
      disease: '疾病预测',
      account: '账号 / 个人资料',
      premium: '高级版 / 支付',
      points: '积分 / 充值',
      usage: '使用方法',
      errors: '错误 / 故障排除',
      security: '安全 / 数据',
      verification: '认证 / 高级功能'
    },
    questions: {
      q1: { q: '这个应用提供哪些功能？', a: '自动识别食物照片，提供卡路里/营养分析、基于用户信息的疾病风险预测、个性化营养/饮食指导。' },
      q2: { q: '可以识别哪些食物？', a: '可识别 1,000 多种食物（含中餐/西餐），多种食物会自动分离识别。' },
      q3: { q: '疾病风险分析如何进行？', a: '基于年龄、性别、BMI、病史、饮食数据等健康信息，由 AI（XGBoost/DNN）计算风险。' },
      q4: { q: '食物识别不准确。', a: '请确保盘子完整入镜，减少抖动、反光、阴影。' },
      q5: { q: '一张照片里可以有多种食物吗？', a: '可以，AI 会自动分离识别。' },
      q6: { q: '外卖、便利店便当也能识别吗？', a: '大多数可以识别，并会参考包装和标签信息。' },
      q7: { q: '卡路里如何计算？', a: '使用图像模型（YOLO/EfficientNet）识别食物种类与份量，再用营养回归模型估算卡路里。' },
      q8: { q: '如果分析结果不准确可以修改吗？', a: '可以，修改将提升未来的识别准确度。' },
      q9: { q: '可以手动输入食物重量（克数）吗？', a: '可以手动调整。' },
      q10: { q: '可以预测哪些疾病？', a: '肥胖、糖尿病、高血压、脂肪肝等生活习惯相关疾病。' },
      q11: { q: '为什么结果与医生诊断不同？', a: '本服务为 AI 健康参考分析，并非医学诊断。' },
      q12: { q: '健康信息必须填写吗？', a: '为提高准确度，年龄、性别、BMI 等基本资料为必填项。' },
      q13: { q: '如何注册账号？', a: '使用邮箱或手机验证码即可快速注册。' },
      q14: { q: '可以添加家庭成员账号吗？', a: '最多可创建 3 个附加资料。' },
      q15: { q: '个人信息是否安全？', a: '所有健康和图像数据均经过匿名化/去标识化处理。' },
      q16: { q: '高级版包含哪些功能？', a: '无限分析、详细疾病报告、营养师指导、自动饮食推荐、移除广告。' },
      q17: { q: '无法支付怎么办？', a: '检查卡有效期、余额及应用商店支付错误。' },
      q18: { q: '可以退款吗？', a: '按 Google Play / App Store 政策执行。' },
      q19: { q: '积分用于什么？', a: '用于查看分析结果、AI 饮食指导、健康报告。' },
      q20: { q: '充值错误怎么办？', a: '可能因银行卡问题或网络延迟。请重启应用后再试。' },
      q21: { q: '如何查看今天摄入的卡路里？', a: '在"营养报告"中查看日/周/月总摄入量。' },
      q22: { q: '可以记录运动量吗？', a: '可以，输入步数、运动类型、时间即可自动计算消耗的卡路里。' },
      q23: { q: '饮食推荐功能如何运作？', a: 'AI 根据健康目标、疾病风险、饮食记录自动生成。' },
      q24: { q: '应用无法打开。', a: '请更新版本、清除缓存并重启设备。' },
      q25: { q: '照片上传失败。', a: '请检查文件大小（20MB 以下）、权限设置、网络状态。' },
      q26: { q: '分析速度很慢。', a: '可能是服务器压力，正常处理为 1–3 秒。' },
      q27: { q: '我的照片会存储在服务器上吗？', a: '仅可能保存匿名化的训练数据，可在设置中关闭。' },
      q28: { q: '如何删除个人信息？', a: '设置 → 账号管理 → 数据删除请求。' },
      q29: { q: '如何进行 VIP 认证？', a: '拍摄本人脸 + 身份证件（护照/身份证/驾照），AI 会自动比对。' },
      q30: { q: '认证失败的原因？', a: '主要因照片模糊、证件文字无法识别、遮挡脸部、光线不足等。' }
    }
  },
  
  ja: {
    title: 'CALCARE AI チャットボット',
    subtitle: 'どのようにお手伝いできますか？',
    backToMain: 'メイン画面に戻る',
    backToList: '質問リストに戻る',
    viewAllFAQ: 'すべてのFAQを見る',
    categories: {
      service: 'サービス紹介',
      photo: '写真認識',
      calorie: 'カロリー・栄養分析',
      disease: '疾病予測',
      account: 'アカウント / プロフィール',
      premium: 'プレミアム / 決済',
      points: 'ポイント / 充電',
      usage: 'アプリ使用方法',
      errors: 'エラー / トラブルシューティング',
      security: 'セキュリティ / データ',
      verification: '認証 / 高度機能'
    },
    questions: {
      q1: { q: 'このアプリはどんな機能がありますか？', a: '食べ物写真を自動認識し、カロリー・栄養分析、ユーザー情報に基づいた疾病リスク予測、個別栄養/食事コーチングを提供します。' },
      q2: { q: 'どんな料理を認識できますか？', a: '韓国料理・洋食を含む 1,000 種以上を認識します。複数料理も自動分離します。' },
      q3: { q: '疾病リスク分析はどのように行われますか？', a: '年齢・性別・BMI・既往歴・食事データなどを基に AI（XGBoost/DNN）がリスクを計算します。' },
      q4: { q: '食べ物が正しく認識されません。', a: 'お皿全体が写るように撮影し、ブレ・反射・影を最小限にしてください。' },
      q5: { q: '1 枚の写真に複数の料理があっても大丈夫ですか？', a: 'はい、AI が自動で分離して認識します。' },
      q6: { q: 'デリバリーやコンビニ弁当も認識できますか？', a: 'ほとんど認識できます。パッケージやラベルも参照します。' },
      q7: { q: 'カロリー計算方法は？', a: '画像モデル（YOLO/EfficientNet）で種類と量を認識し、栄養回帰モデルで推定します。' },
      q8: { q: '分析結果が違う場合は修正できますか？', a: 'はい。修正すると将来の精度が向上します。' },
      q9: { q: '量（グラム）を手動入力できますか？', a: '可能です。' },
      q10: { q: 'どんな病気を予測しますか？', a: '肥満、糖尿病、高血圧、脂肪肝などの生活習慣病です。' },
      q11: { q: '医師の診断と違う理由は？', a: '本サービスは AI による健康参考分析で、医療診断ではありません。' },
      q12: { q: '健康情報の入力は必須ですか？', a: '正確な分析のため、年齢・性別・BMI は必須です。' },
      q13: { q: 'どのように会員登録しますか？', a: 'メールまたは携帯電話認証で簡単に登録できます。' },
      q14: { q: '家族アカウントを追加できますか？', a: '最大 3 名まで追加プロフィールを作成できます。' },
      q15: { q: '個人情報は安全ですか？', a: 'すべての健康・画像データは匿名化/非識別化されています。' },
      q16: { q: 'プレミアム機能は？', a: '無制限解析、詳細疾病レポート、栄養士コーチング、自動食事提案、広告除去。' },
      q17: { q: '決済ができない場合は？', a: 'カードの有効期限、残高、アプリストアの決済エラーを確認してください。' },
      q18: { q: '返金できますか？', a: 'Google Play / App Store の規定に従います。' },
      q19: { q: 'ポイントの用途は？', a: '分析結果閲覧、AI 食事コーチング、健康レポートに使用。' },
      q20: { q: '充電エラーが発生します。', a: 'カード問題またはネットワーク遅延が原因です。アプリを再起動して再試行してください。' },
      q21: { q: '今日の摂取カロリーを確認するには？', a: '「栄養レポート」で日/週/月の合計を確認できます。' },
      q22: { q: '運動量も記録できますか？', a: 'はい。歩数、運動種類、時間を入力すると消費カロリーを自動計算します。' },
      q23: { q: '食事提案はどのように生成されますか？', a: '健康目標・疾病リスク・食事履歴を基に AI が自動生成します。' },
      q24: { q: 'アプリが起動しません。', a: '最新版アップデート、キャッシュ削除、端末再起動を行ってください。' },
      q25: { q: '写真がアップロードできません。', a: 'ファイル容量（20MB 以下）、権限設定、ネットワーク状態をご確認ください。' },
      q26: { q: '分析が遅いです。', a: 'サーバー負荷の可能性があります。通常 1〜3 秒です。' },
      q27: { q: '写真はサーバーに保存されますか？', a: '匿名化された学習用データのみ選択的に保存されます。設定で拒否できます。' },
      q28: { q: '個人データを削除する方法は？', a: '設定 → アカウント管理 → データ削除申請。' },
      q29: { q: 'VIP 認証は？', a: '顔 + 身分証（パスポート/ID/運転免許証）を撮影し、AI が自動照合します。' },
      q30: { q: '認証失敗の原因？', a: 'ブレ、文字不鮮明、顔の遮り、暗い環境など。' }
    }
  },
  
  vi: {
    title: 'CALCARE AI Chatbot',
    subtitle: 'Tôi có thể giúp gì cho bạn?',
    backToMain: 'Quay lại màn hình chính',
    backToList: 'Quay lại danh sách câu hỏi',
    viewAllFAQ: 'Xem tất cả FAQ',
    categories: {
      service: 'Giới thiệu dịch vụ',
      photo: 'Nhận dạng ảnh',
      calorie: 'Phân tích calo & dinh dưỡng',
      disease: 'Dự đoán bệnh',
      account: 'Tài khoản / hồ sơ',
      premium: 'Premium / thanh toán',
      points: 'Điểm / nạp tiền',
      usage: 'Hướng dẫn sử dụng',
      errors: 'Lỗi / khắc phục',
      security: 'Bảo mật / dữ liệu',
      verification: 'Xác thực / tính năng nâng cao'
    },
    questions: {
      q1: { q: 'Ứng dụng này cung cấp những tính năng nào?', a: 'Tự động nhận dạng món ăn từ ảnh, phân tích calo/dinh dưỡng, dự đoán nguy cơ bệnh dựa trên thông tin sức khỏe, và gợi ý dinh dưỡng cá nhân hóa.' },
      q2: { q: 'Ứng dụng nhận dạng được những món nào?', a: 'Nhận dạng hơn 1.000 món ăn bao gồm món Hàn và món Âu. Ảnh có nhiều món sẽ được tách tự động.' },
      q3: { q: 'Phân tích nguy cơ bệnh được thực hiện thế nào?', a: 'AI (XGBoost/DNN) tính toán dựa trên tuổi, giới tính, BMI, tiền sử bệnh, dữ liệu ăn uống.' },
      q4: { q: 'Món ăn nhận dạng không chính xác.', a: 'Hãy chụp sao cho toàn bộ đĩa nằm trong khung, hạn chế rung, phản chiếu và bóng đổ.' },
      q5: { q: 'Một ảnh có nhiều món được không?', a: 'Được. AI sẽ tự tách và nhận dạng từng món.' },
      q6: { q: 'Đồ ăn giao tận nơi hoặc cơm hộp tiện lợi có nhận dạng được không?', a: 'Hầu hết đều nhận dạng được và bao gồm phân tích nhãn/bao bì.' },
      q7: { q: 'Cách tính calo như thế nào?', a: 'Mô hình ảnh (YOLO/EfficientNet) xác định loại món ăn và khẩu phần, sau đó mô hình hồi quy dinh dưỡng ước tính calo.' },
      q8: { q: 'Nếu kết quả sai có chỉnh sửa được không?', a: 'Được. Chỉnh sửa giúp cải thiện độ chính xác sau này.' },
      q9: { q: 'Có nhập thủ công gram không?', a: 'Có, có thể điều chỉnh thủ công.' },
      q10: { q: 'Dự đoán những bệnh nào?', a: 'Béo phì, tiểu đường, tăng huyết áp, gan nhiễm mỡ và các bệnh do lối sống khác.' },
      q11: { q: 'Tại sao kết quả khác với chẩn đoán bác sĩ?', a: 'Đây là phân tích AI tham khảo sức khỏe, không phải chẩn đoán y tế.' },
      q12: { q: 'Có bắt buộc nhập thông tin sức khỏe không?', a: 'Cần thiết để tăng độ chính xác (tuổi, giới tính, BMI).' },
      q13: { q: 'Đăng ký tài khoản như thế nào?', a: 'Đăng ký dễ dàng bằng email hoặc xác thực điện thoại.' },
      q14: { q: 'Có thêm tài khoản gia đình được không?', a: 'Tạo tối đa 3 hồ sơ phụ.' },
      q15: { q: 'Dữ liệu cá nhân có an toàn không?', a: 'Tất cả dữ liệu sức khỏe và hình ảnh đều được ẩn danh/khử định danh.' },
      q16: { q: 'Premium gồm những gì?', a: 'Phân tích không giới hạn, báo cáo bệnh chi tiết, huấn luyện dinh dưỡng viên, gợi ý thực đơn tự động, gỡ quảng cáo.' },
      q17: { q: 'Thanh toán thất bại phải làm gì?', a: 'Kiểm tra hạn thẻ, số dư, và lỗi thanh toán của cửa hàng ứng dụng.' },
      q18: { q: 'Có thể hoàn tiền không?', a: 'Theo chính sách Google Play / App Store.' },
      q19: { q: 'Điểm dùng để làm gì?', a: 'Xem kết quả phân tích, tư vấn thực đơn AI, báo cáo sức khỏe.' },
      q20: { q: 'Lỗi nạp điểm.', a: 'Có thể do thẻ hoặc mạng chậm. Hãy khởi động lại ứng dụng và thử lại.' },
      q21: { q: 'Xem lượng calo đã ăn hôm nay như thế nào?', a: 'Xem trong tab "Báo cáo dinh dưỡng" theo ngày/tuần/tháng.' },
      q22: { q: 'Có ghi nhận vận động không?', a: 'Có. Nhập bước chân, loại vận động, thời gian để tính calo tiêu hao.' },
      q23: { q: 'Gợi ý thực đơn hoạt động như thế nào?', a: 'AI tạo tự động dựa trên mục tiêu sức khỏe, nguy cơ bệnh và lịch sử ăn uống.' },
      q24: { q: 'Ứng dụng không mở được.', a: 'Hãy cập nhật phiên bản mới, xóa cache và khởi động lại máy.' },
      q25: { q: 'Tải ảnh lên thất bại.', a: 'Kiểm tra dung lượng (<20MB), quyền truy cập, và mạng.' },
      q26: { q: 'Phân tích quá chậm.', a: 'Có thể do tải máy chủ; bình thường 1–3 giây.' },
      q27: { q: 'Ảnh có lưu trên máy chủ không?', a: 'Chỉ dữ liệu ẩn danh dùng cho đào tạo mới được lưu, và có thể tắt trong cài đặt.' },
      q28: { q: 'Xóa dữ liệu cá nhân thế nào?', a: 'Cài đặt → Quản lý tài khoản → Yêu cầu xóa dữ liệu.' },
      q29: { q: 'Xác thực VIP như thế nào?', a: 'Chụp ảnh khuôn mặt + giấy tờ tùy thân (hộ chiếu/CMND/bằng lái). AI sẽ đối chiếu tự động.' },
      q30: { q: 'Nguyên nhân thất bại?', a: 'Ảnh mờ, chữ trên giấy tờ không rõ, che mặt, ánh sáng kém.' }
    }
  },
  
  ar: {
    title: 'روبوت CALCARE AI',
    subtitle: 'كيف يمكنني مساعدتك؟',
    backToMain: 'العودة إلى الشاشة الرئيسية',
    backToList: 'العودة إلى قائمة الأسئلة',
    viewAllFAQ: 'عرض جميع الأسئلة الشائعة',
    categories: {
      service: 'مقدمة الخدمة',
      photo: 'التعرف على الصور',
      calorie: 'تحليل السعرات والعناصر الغذائية',
      disease: 'التنبؤ بالأمراض',
      account: 'الحساب / الملف الشخصي',
      premium: 'البريميوم / الدفع',
      points: 'النقاط / الشحن',
      usage: 'كيفية الاستخدام',
      errors: 'الأخطاء / الحلول',
      security: 'الأمان / البيانات',
      verification: 'التحقق / الميزات المتقدمة'
    },
    questions: {
      q1: { q: 'ما هي ميزات هذا التطبيق؟', a: 'يتعرف تلقائيًا على صور الطعام، ويقدّم تحليل السعرات والعناصر الغذائية، ويتنبأ بخطر الأمراض بناءً على بيانات المستخدم، ويوفّر إرشادات تغذية مخصصة.' },
      q2: { q: 'ما الأطعمة التي يمكن للتطبيق التعرف عليها؟', a: 'يتعرّف على أكثر من 1000 نوع من الأطعمة، بما في ذلك المأكولات الكورية والغربية. ويتم فصل الأطعمة المتعددة تلقائيًا.' },
      q3: { q: 'كيف يتم تحليل خطر الأمراض؟', a: 'يحسب الذكاء الاصطناعي (XGBoost/DNN) الخطر بناءً على العمر، الجنس، مؤشر كتلة الجسم، التاريخ المرضي، بيانات النظام الغذائي.' },
      q4: { q: 'التعرف على الطعام غير دقيق.', a: 'يُرجى تصوير الطبق بالكامل وتقليل الاهتزاز والانعكاسات والظلال.' },
      q5: { q: 'هل يمكن وجود عدة أطعمة في صورة واحدة؟', a: 'نعم، يقوم الذكاء الاصطناعي بفصلها تلقائيًا.' },
      q6: { q: 'هل يمكن التعرف على طعام التوصيل أو وجبات المتاجر؟', a: 'نعم، يتم التعرف على معظمها، ويُستخدم الملصق/التغليف أيضًا في التحليل.' },
      q7: { q: 'كيف يتم حساب السعرات؟', a: 'يتم تحديد نوع وكمية الطعام باستخدام نماذج الصور (YOLO/EfficientNet)، ثم يقدّر نموذج الانحدار الغذائي السعرات.' },
      q8: { q: 'هل يمكن تعديل النتائج إذا كانت غير دقيقة؟', a: 'نعم. التعديل يحسّن دقة التحليل مستقبلاً.' },
      q9: { q: 'هل يمكن إدخال كمية الطعام (غرام) يدويًا؟', a: 'نعم، يمكن التعديل يدويًا.' },
      q10: { q: 'ما الأمراض التي يتم التنبؤ بها؟', a: 'السمنة، السكري، ارتفاع ضغط الدم، الكبد الدهني، وغيرها من أمراض نمط الحياة.' },
      q11: { q: 'لماذا تختلف النتائج عن تشخيص الطبيب؟', a: 'هذا تحليل مرجعي قائم على الذكاء الاصطناعي وليس تشخيصًا طبيًا.' },
      q12: { q: 'هل إدخال المعلومات الصحية إلزامي؟', a: 'نعم، لتحسين الدقة (العمر، الجنس، مؤشر كتلة الجسم).' },
      q13: { q: 'كيف أسجّل حسابًا؟', a: 'عبر البريد الإلكتروني أو التحقق من الهاتف.' },
      q14: { q: 'هل يمكن إضافة حسابات عائلية؟', a: 'يمكن إنشاء ما يصل إلى 3 ملفات إضافية.' },
      q15: { q: 'هل بياناتي الشخصية آمنة؟', a: 'يتم إخفاء هوية جميع بيانات الصحة والصور.' },
      q16: { q: 'ما ميزات البريميوم؟', a: 'تحليل غير محدود، تقارير صحية تفصيلية، إرشاد تغذوي، توصية وجبات تلقائية، إزالة الإعلانات.' },
      q17: { q: 'الدفع لا يعمل، ماذا أفعل؟', a: 'تحقق من صلاحية البطاقة، الرصيد، وأخطاء متاجر التطبيقات.' },
      q18: { q: 'هل يمكن استرداد المال؟', a: 'وفق سياسات Google Play / App Store.' },
      q19: { q: 'أين تستخدم النقاط؟', a: 'لعرض نتائج التحليل، وتوجيهات الوجبات، والتقارير الصحية.' },
      q20: { q: 'خطأ في شحن النقاط.', a: 'قد يكون بسبب البطاقة أو الشبكة. أعد تشغيل التطبيق وحاول مجددًا.' },
      q21: { q: 'كيف أرى سعرات اليوم؟', a: 'من "تقارير التغذية" حسب اليوم/الأسبوع/الشهر.' },
      q22: { q: 'هل يمكن تسجيل النشاط الرياضي؟', a: 'نعم، من خلال إدخال الخطوات، نوع التمرين، والمدة.' },
      q23: { q: 'كيف تعمل توصيات الوجبات؟', a: 'يولدها الذكاء الاصطناعي بناءً على أهدافك الصحية وسجل الغذاء والمخاطر.' },
      q24: { q: 'التطبيق لا يفتح.', a: 'حدّث التطبيق، احذف الذاكرة المؤقتة، وأعد تشغيل الجهاز.' },
      q25: { q: 'فشل رفع الصورة.', a: 'تحقق من الحجم (<20MB)، الصلاحيات، والشبكة.' },
      q26: { q: 'التحليل بطيء جدًا.', a: 'قد يكون ضغطًا على الخادم، والوقت الطبيعي 1–3 ثوانٍ.' },
      q27: { q: 'هل يتم حفظ صوري على الخادم؟', a: 'فقط بيانات التدريب المجهولة، ويمكن إيقاف ذلك من الإعدادات.' },
      q28: { q: 'كيف أحذف بياناتي؟', a: 'الإعدادات → إدارة الحساب → طلب حذف البيانات.' },
      q29: { q: 'كيف يتم التحقق VIP؟', a: 'التقط صورة لوجهك مع الهوية (جواز/هوية وطنية/رخصة قيادة)، ويطابقها الذكاء الاصطناعي تلقائيًا.' },
      q30: { q: 'ما أسباب فشل التحقق؟', a: 'الصور غير الواضحة، النص غير المقروء، حجب الوجه، أو الإضاءة الضعيفة.' }
    }
  }
};

// 현재 언어 가져오기
function getChatbotLanguage() {
  return localStorage.getItem('selectedLanguage') || 'ko';
}

// 챗봇 UI 업데이트
function updateChatbotLanguage() {
  const lang = getChatbotLanguage();
  const t = chatbotTranslations[lang] || chatbotTranslations['ko'];
  
  console.log('Updating chatbot language to:', lang);
  
  try {
    // 헤더 업데이트
    const titleElem = document.querySelector('.chatbot-title');
    const subtitleElem = document.querySelector('.chatbot-subtitle');
    if (titleElem) titleElem.innerHTML = '<i class="fas fa-robot" style="margin-right: 8px;"></i>' + t.title;
    if (subtitleElem) subtitleElem.textContent = t.subtitle;
    
    // 질문 목록 제목 업데이트 (30개)
    for (let i = 1; i <= 30; i++) {
      const q = t.questions[`q${i}`];
      const elem = document.querySelector(`#chatbot-q${i}`);
      if (elem && q) {
        const textElem = elem.querySelector('.chatbot-q-text');
        if (textElem) {
          textElem.textContent = q.q;
        }
        elem.setAttribute('data-answer', q.a);
      }
    }
    
    // 버튼 텍스트 업데이트
    const backBtn = document.querySelector('#chatbot-back-btn');
    const viewAllBtn = document.querySelector('#chatbot-view-all');
    
    if (backBtn) {
      backBtn.innerHTML = '<i class="fas fa-arrow-left" style="margin-right: 8px;"></i>' + t.backToList;
    }
    if (viewAllBtn) {
      viewAllBtn.innerHTML = '<i class="fas fa-list-ul" style="margin-right: 8px;"></i>' + t.viewAllFAQ;
    }
    
    console.log('Chatbot language updated successfully');
  } catch (error) {
    console.error('Error updating chatbot language:', error);
  }
}
