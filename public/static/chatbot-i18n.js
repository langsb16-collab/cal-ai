// 챗봇 다국어 데이터
const chatbotTranslations = {
  ko: {
    title: 'CALCARE AI 챗봇',
    subtitle: '무엇을 도와드릴까요?',
    backToList: '목록으로',
    viewAllFAQ: '전체 FAQ 보기',
    categories: {
      general: '💬 일반 문의',
      analysis: '📸 사진 인식·분석',
      nutrition: '🍎 칼로리·영양소 분석',
      disease: '🏥 질병 예측·위험도'
    },
    questions: {
      q1: { q: '서비스 소개', a: 'CALCARE AI는 음식 사진만 찍으면 AI가 자동으로 칼로리·영양소를 분석하고, 비만·당뇨·고혈압·고지혈증 등 질병 위험도를 예측해주는 맞춤형 건강관리 플랫폼입니다. 무료 체험 2회 제공 후 프리미엄 구독으로 무제한 이용이 가능합니다.' },
      q2: { q: 'AI 음식 인식은 어떻게 작동하나요?', a: '사용자가 음식 사진을 업로드하면 딥러닝 기반 이미지 인식 AI가 음식 종류를 자동 분류하고, 데이터베이스(USDA, 식약처)와 매칭하여 칼로리·단백질·탄수화물·지방·당류·나트륨·식이섬유·콜레스테롤 등 8대 영양소를 즉시 분석합니다.' },
      q3: { q: '무료 vs 유료(프리미엄) 차이는?', a: '무료: 2회 체험 후 종료 / 프리미엄: 무제한 분석 + 주간/월간 통계 + AI 맞춤 식단 추천 + 질병 위험도 추적 + 우선 고객지원. 연간 구독 시 할인 혜택이 제공됩니다.' },
      q4: { q: '어떤 사진을 찍어야 정확하게 인식되나요?', a: '음식이 화면 중앙에 크게, 조명이 밝은 환경에서 촬영하세요. 여러 음식이 섞여있어도 개별 인식이 가능하지만, 한 가지씩 찍으면 더 정확합니다.' },
      q5: { q: '인식 실패 시 어떻게 하나요?', a: '수동 검색 기능을 이용해 음식명을 직접 입력하거나, 사진을 다시 촬영해보세요. 지속적인 오류는 고객센터로 문의 부탁드립니다.' },
      q6: { q: '한식·양식·중식 모두 인식되나요?', a: '네! 한식(비빔밥, 김치찌개 등), 양식(스테이크, 샐러드 등), 중식(짜장면, 탕수육 등), 일식, 디저트까지 40+ 음식 DB 보유, 지속 업데이트 중입니다.' },
      q7: { q: '칼로리 계산은 얼마나 정확한가요?', a: 'USDA, 식약처 공인 데이터베이스 기준으로 ±5% 이내 정확도를 목표로 합니다. 음식 크기·조리법에 따라 차이가 있을 수 있습니다.' },
      q8: { q: '하루 권장 섭취량은 어떻게 계산되나요?', a: '사용자의 나이·성별·체중·활동량을 기반으로 FDA/WHO 기준 권장 칼로리(약 2,000kcal)와 영양소 비율을 자동 계산합니다.' },
      q9: { q: '영양소 항목은 무엇이 있나요?', a: '칼로리, 단백질, 탄수화물, 지방, 당류, 나트륨, 식이섬유, 콜레스테롤 총 8가지 핵심 영양소를 제공합니다.' },
      q10: { q: '질병 위험도는 어떻게 예측하나요?', a: 'XGBoost 머신러닝 모델이 사용자의 섭취 데이터(칼로리, 당, 지방, 나트륨 등)와 건강 정보(나이, 체중, 활동량)를 종합 분석하여 비만·당뇨·고혈압·고지혈증 위험도를 3단계(낮음/보통/높음)로 표시합니다.' },
      q11: { q: '의학적 진단으로 봐도 되나요?', a: '아니요. 본 서비스는 참고용 정보이며, 정확한 진단은 반드시 의료기관에서 받으시기 바랍니다.' },
      q12: { q: '위험도가 높음으로 나왔어요', a: 'AI 맞춤 식단 추천을 확인하고, 나트륨·당류 섭취를 줄이며, 의료기관 방문을 권장합니다. 앱 내 건강 코칭 기능도 활용해보세요.' }
    }
  },
  
  en: {
    title: 'CALCARE AI Chatbot',
    subtitle: 'How can I help you?',
    backToList: 'Back to List',
    viewAllFAQ: 'View All FAQ',
    categories: {
      general: '💬 General Inquiry',
      analysis: '📸 Photo Recognition',
      nutrition: '🍎 Calorie Analysis',
      disease: '🏥 Disease Prediction'
    },
    questions: {
      q1: { q: 'Service Introduction', a: 'CALCARE AI is a personalized health management platform that automatically analyzes calories and nutrients from food photos using AI, and predicts disease risks such as obesity, diabetes, hypertension, and hyperlipidemia. Free trial with 2 analyses, then unlimited access with Premium subscription.' },
      q2: { q: 'How does AI food recognition work?', a: 'When users upload food photos, deep learning-based image recognition AI automatically classifies food types and matches them with databases (USDA, MFDS) to instantly analyze 8 key nutrients: calories, protein, carbohydrates, fat, sugar, sodium, fiber, and cholesterol.' },
      q3: { q: 'Free vs Premium difference?', a: 'Free: 2 trial analyses / Premium: Unlimited analysis + Weekly/monthly stats + AI meal recommendations + Disease risk tracking + Priority support. Annual subscription offers discounts.' },
      q4: { q: 'What kind of photo should I take?', a: 'Take photos with food centered and in bright lighting. Multiple foods can be recognized individually, but one food at a time is more accurate.' },
      q5: { q: 'What if recognition fails?', a: 'Use manual search to enter food name directly, or retake the photo. For persistent errors, please contact customer support.' },
      q6: { q: 'Does it recognize all cuisines?', a: 'Yes! Korean (bibimbap, kimchi stew), Western (steak, salad), Chinese (jajangmyeon, sweet and sour pork), Japanese, and desserts. 40+ food database, continuously updated.' },
      q7: { q: 'How accurate is calorie calculation?', a: 'Based on USDA and MFDS certified databases, we target ±5% accuracy. Variations may occur depending on food size and cooking method.' },
      q8: { q: 'How is daily recommended intake calculated?', a: 'Based on user age, gender, weight, and activity level, FDA/WHO standard recommended calories (approx. 2,000kcal) and nutrient ratios are automatically calculated.' },
      q9: { q: 'What nutrients are provided?', a: 'We provide 8 key nutrients: calories, protein, carbohydrates, fat, sugar, sodium, fiber, and cholesterol.' },
      q10: { q: 'How is disease risk predicted?', a: 'XGBoost machine learning model comprehensively analyzes user intake data (calories, sugar, fat, sodium) and health information (age, weight, activity level) to display obesity, diabetes, hypertension, and hyperlipidemia risks in 3 levels (low/medium/high).' },
      q11: { q: 'Can this be used as medical diagnosis?', a: 'No. This service is for reference only. For accurate diagnosis, please consult a medical institution.' },
      q12: { q: 'My risk level is high', a: 'Check AI meal recommendations, reduce sodium and sugar intake, and consider visiting a medical institution. Also utilize the in-app health coaching feature.' }
    }
  },
  
  zh: {
    title: 'CALCARE AI 聊天机器人',
    subtitle: '我能帮您什么？',
    backToList: '返回列表',
    viewAllFAQ: '查看所有常见问题',
    categories: {
      general: '💬 一般咨询',
      analysis: '📸 照片识别',
      nutrition: '🍎 卡路里分析',
      disease: '🏥 疾病预测'
    },
    questions: {
      q1: { q: '服务介绍', a: 'CALCARE AI是一个个性化健康管理平台，只需拍摄食物照片，AI就会自动分析卡路里和营养成分，并预测肥胖、糖尿病、高血压、高脂血症等疾病风险。免费试用2次，升级到高级版可无限使用。' },
      q2: { q: 'AI食物识别如何工作？', a: '用户上传食物照片后，基于深度学习的图像识别AI会自动分类食物类型，并与数据库（USDA、食药处）匹配，即时分析卡路里、蛋白质、碳水化合物、脂肪、糖、钠、膳食纤维、胆固醇等8种关键营养素。' },
      q3: { q: '免费版与付费版的区别？', a: '免费版：试用2次后结束 / 高级版：无限分析+每周/每月统计+AI定制膳食推荐+疾病风险跟踪+优先客户支持。年度订阅享有折扣优惠。' },
      q4: { q: '应该拍什么样的照片？', a: '在明亮的环境下，将食物置于画面中央拍摄。虽然可以识别混合食物，但单独拍摄会更准确。' },
      q5: { q: '识别失败怎么办？', a: '使用手动搜索功能直接输入食物名称，或重新拍摄照片。如持续出现错误，请联系客服。' },
      q6: { q: '能识别所有菜系吗？', a: '是的！韩餐（拌饭、泡菜汤等）、西餐（牛排、沙拉等）、中餐（炸酱面、糖醋肉等）、日料、甜点，拥有40+食物数据库，持续更新中。' },
      q7: { q: '卡路里计算有多准确？', a: '基于USDA和食药处认证数据库，目标精度在±5%以内。根据食物大小和烹饪方法可能有所差异。' },
      q8: { q: '每日推荐摄入量如何计算？', a: '基于用户年龄、性别、体重、活动量，按照FDA/WHO标准自动计算推荐卡路里（约2,000kcal）和营养素比例。' },
      q9: { q: '提供哪些营养素项目？', a: '提供卡路里、蛋白质、碳水化合物、脂肪、糖、钠、膳食纤维、胆固醇共8种核心营养素。' },
      q10: { q: '如何预测疾病风险？', a: 'XGBoost机器学习模型综合分析用户摄入数据（卡路里、糖、脂肪、钠等）和健康信息（年龄、体重、活动量），以3个等级（低/中/高）显示肥胖、糖尿病、高血压、高脂血症风险。' },
      q11: { q: '可以作为医学诊断吗？', a: '不可以。本服务仅供参考，准确诊断请务必咨询医疗机构。' },
      q12: { q: '风险等级显示为高', a: '查看AI定制膳食推荐，减少钠和糖的摄入，建议就医。也可使用应用内的健康指导功能。' }
    }
  },
  
  ja: {
    title: 'CALCARE AI チャットボット',
    subtitle: '何をお手伝いしましょうか？',
    backToList: 'リストに戻る',
    viewAllFAQ: 'すべてのFAQを見る',
    categories: {
      general: '💬 一般的なお問い合わせ',
      analysis: '📸 写真認識',
      nutrition: '🍎 カロリー分析',
      disease: '🏥 病気予測'
    },
    questions: {
      q1: { q: 'サービス紹介', a: 'CALCARE AIは、食べ物の写真を撮るだけでAIが自動的にカロリーと栄養素を分析し、肥満、糖尿病、高血圧、脂質異常症などの疾病リスクを予測するパーソナライズされた健康管理プラットフォームです。無料トライアル2回提供後、プレミアム購読で無制限利用可能です。' },
      q2: { q: 'AI食品認識はどのように機能しますか？', a: 'ユーザーが食べ物の写真をアップロードすると、ディープラーニングベースの画像認識AIが食品の種類を自動分類し、データベース（USDA、食薬処）と照合してカロリー、タンパク質、炭水化物、脂肪、糖、ナトリウム、食物繊維、コレステロールなど8つの主要栄養素を即座に分析します。' },
      q3: { q: '無料版と有料版の違いは？', a: '無料：トライアル2回後終了 / プレミアム：無制限分析+週次/月次統計+AI カスタム食事推奨+疾病リスク追跡+優先顧客サポート。年間購読で割引特典が提供されます。' },
      q4: { q: 'どんな写真を撮ればいいですか？', a: '明るい環境で、食べ物を画面中央に大きく配置して撮影してください。複数の食べ物が混在していても個別認識可能ですが、一つずつ撮影するとより正確です。' },
      q5: { q: '認識失敗時はどうすればいいですか？', a: '手動検索機能を使用して食品名を直接入力するか、写真を再撮影してください。継続的なエラーはカスタマーサポートにお問い合わせください。' },
      q6: { q: 'すべての料理を認識できますか？', a: 'はい！韓国料理（ビビンバ、キムチチゲなど）、洋食（ステーキ、サラダなど）、中華（ジャージャー麺、酢豚など）、和食、デザートまで40以上の食品データベースを保有し、継続的に更新中です。' },
      q7: { q: 'カロリー計算はどのくらい正確ですか？', a: 'USDA、食薬処認定データベース基準で±5%以内の精度を目標としています。食品のサイズや調理法により差異が生じる場合があります。' },
      q8: { q: '1日の推奨摂取量はどのように計算されますか？', a: 'ユーザーの年齢、性別、体重、活動量に基づいてFDA/WHO基準の推奨カロリー（約2,000kcal）と栄養素比率を自動計算します。' },
      q9: { q: '栄養素項目は何がありますか？', a: 'カロリー、タンパク質、炭水化物、脂肪、糖、ナトリウム、食物繊維、コレステロールの計8つの主要栄養素を提供します。' },
      q10: { q: '疾病リスクはどのように予測されますか？', a: 'XGBoost機械学習モデルがユーザーの摂取データ（カロリー、糖、脂肪、ナトリウムなど）と健康情報（年齢、体重、活動量）を総合分析し、肥満、糖尿病、高血圧、脂質異常症のリスクを3段階（低/中/高）で表示します。' },
      q11: { q: '医学的診断として見てもいいですか？', a: 'いいえ。本サービスは参考用情報であり、正確な診断は必ず医療機関で受けてください。' },
      q12: { q: 'リスク度が高いと出ました', a: 'AIカスタム食事推奨を確認し、ナトリウムと糖の摂取を減らし、医療機関への訪問をお勧めします。アプリ内の健康コーチング機能も活用してください。' }
    }
  },
  
  vi: {
    title: 'CALCARE AI Chatbot',
    subtitle: 'Tôi có thể giúp gì cho bạn?',
    backToList: 'Quay lại danh sách',
    viewAllFAQ: 'Xem tất cả FAQ',
    categories: {
      general: '💬 Câu hỏi chung',
      analysis: '📸 Nhận diện ảnh',
      nutrition: '🍎 Phân tích calo',
      disease: '🏥 Dự đoán bệnh'
    },
    questions: {
      q1: { q: 'Giới thiệu dịch vụ', a: 'CALCARE AI là nền tảng quản lý sức khỏe cá nhân hóa tự động phân tích calo và dinh dưỡng từ ảnh thức ăn bằng AI, đồng thời dự đoán nguy cơ bệnh như béo phì, tiểu đường, cao huyết áp và rối loạn lipid máu. Dùng thử miễn phí 2 lần, sau đó truy cập không giới hạn với gói Premium.' },
      q2: { q: 'AI nhận diện thực phẩm hoạt động như thế nào?', a: 'Khi người dùng tải lên ảnh thực phẩm, AI nhận diện hình ảnh dựa trên học sâu tự động phân loại loại thực phẩm và khớp với cơ sở dữ liệu (USDA, MFDS) để phân tích ngay 8 chất dinh dưỡng chính: calo, protein, carbohydrate, chất béo, đường, natri, chất xơ và cholesterol.' },
      q3: { q: 'Sự khác biệt giữa miễn phí và Premium?', a: 'Miễn phí: 2 lần dùng thử / Premium: Phân tích không giới hạn + Thống kê hàng tuần/tháng + Đề xuất bữa ăn AI + Theo dõi nguy cơ bệnh + Hỗ trợ ưu tiên. Gói đăng ký hàng năm có giảm giá.' },
      q4: { q: 'Nên chụp ảnh như thế nào?', a: 'Chụp với thực phẩm ở giữa và trong điều kiện ánh sáng tốt. Nhiều món ăn có thể được nhận diện riêng lẻ, nhưng chụp từng món một sẽ chính xác hơn.' },
      q5: { q: 'Nếu nhận diện thất bại thì sao?', a: 'Sử dụng tìm kiếm thủ công để nhập tên thực phẩm trực tiếp hoặc chụp lại ảnh. Nếu lỗi liên tục, vui lòng liên hệ hỗ trợ khách hàng.' },
      q6: { q: 'Có nhận diện được tất cả các món ăn không?', a: 'Có! Món Hàn (bibimbap, súp kimchi), món Tây (steak, salad), món Trung (mì tương đen, thịt chua ngọt), món Nhật và tráng miệng. Cơ sở dữ liệu 40+ món ăn, liên tục cập nhật.' },
      q7: { q: 'Tính toán calo chính xác như thế nào?', a: 'Dựa trên cơ sở dữ liệu được chứng nhận USDA và MFDS, mục tiêu độ chính xác ±5%. Có thể có sự khác biệt tùy theo kích thước và phương pháp nấu.' },
      q8: { q: 'Lượng khuyến nghị hàng ngày được tính như thế nào?', a: 'Dựa trên tuổi, giới tính, cân nặng và mức độ hoạt động, lượng calo khuyến nghị theo tiêu chuẩn FDA/WHO (khoảng 2,000kcal) và tỷ lệ dinh dưỡng được tự động tính.' },
      q9: { q: 'Cung cấp những chất dinh dưỡng nào?', a: 'Cung cấp 8 chất dinh dưỡng chính: calo, protein, carbohydrate, chất béo, đường, natri, chất xơ và cholesterol.' },
      q10: { q: 'Nguy cơ bệnh được dự đoán như thế nào?', a: 'Mô hình học máy XGBoost phân tích toàn diện dữ liệu tiêu thụ (calo, đường, chất béo, natri) và thông tin sức khỏe (tuổi, cân nặng, hoạt động) để hiển thị nguy cơ béo phì, tiểu đường, cao huyết áp và rối loạn lipid máu ở 3 cấp độ (thấp/trung bình/cao).' },
      q11: { q: 'Có thể dùng làm chẩn đoán y tế không?', a: 'Không. Dịch vụ này chỉ để tham khảo. Để chẩn đoán chính xác, vui lòng đến cơ sở y tế.' },
      q12: { q: 'Mức độ rủi ro của tôi cao', a: 'Kiểm tra đề xuất bữa ăn AI, giảm lượng natri và đường, và cân nhắc đến cơ sở y tế. Cũng sử dụng tính năng huấn luyện sức khỏe trong ứng dụng.' }
    }
  },
  
  ar: {
    title: 'روبوت CALCARE AI',
    subtitle: 'كيف يمكنني مساعدتك؟',
    backToList: 'العودة إلى القائمة',
    viewAllFAQ: 'عرض جميع الأسئلة الشائعة',
    categories: {
      general: '💬 استفسار عام',
      analysis: '📸 التعرف على الصور',
      nutrition: '🍎 تحليل السعرات',
      disease: '🏥 توقع الأمراض'
    },
    questions: {
      q1: { q: 'مقدمة الخدمة', a: 'CALCARE AI هي منصة إدارة صحية شخصية تحلل تلقائيًا السعرات الحرارية والمغذيات من صور الطعام باستخدام الذكاء الاصطناعي، وتتنبأ بمخاطر الأمراض مثل السمنة والسكري وارتفاع ضغط الدم وارتفاع الدهون. تجربة مجانية بتحليلين، ثم وصول غير محدود مع الاشتراك المميز.' },
      q2: { q: 'كيف يعمل التعرف على الطعام بالذكاء الاصطناعي؟', a: 'عندما يقوم المستخدمون بتحميل صور الطعام، يقوم الذكاء الاصطناعي للتعرف على الصور القائم على التعلم العميق بتصنيف أنواع الطعام تلقائيًا ومطابقتها مع قواعد البيانات (USDA، MFDS) لتحليل 8 عناصر غذائية رئيسية على الفور: السعرات الحرارية والبروتين والكربوهيدرات والدهون والسكر والصوديوم والألياف والكوليسترول.' },
      q3: { q: 'الفرق بين المجاني والمميز؟', a: 'مجاني: تحليلان تجريبيان / مميز: تحليل غير محدود + إحصائيات أسبوعية/شهرية + توصيات وجبات AI + تتبع مخاطر الأمراض + دعم أولوية. الاشتراك السنوي يوفر خصومات.' },
      q4: { q: 'ما نوع الصورة التي يجب التقاطها؟', a: 'التقط الصور مع وضع الطعام في المنتصف وفي إضاءة جيدة. يمكن التعرف على أطعمة متعددة بشكل فردي، لكن طعام واحد في كل مرة أكثر دقة.' },
      q5: { q: 'ماذا لو فشل التعرف؟', a: 'استخدم البحث اليدوي لإدخال اسم الطعام مباشرة، أو أعد التقاط الصورة. للأخطاء المستمرة، يرجى الاتصال بدعم العملاء.' },
      q6: { q: 'هل يتعرف على جميع المأكولات؟', a: 'نعم! الكورية (بيبيمباب، حساء الكيمتشي)، الغربية (ستيك، سلطة)، الصينية (جاجانجميون، لحم حلو وحامض)، اليابانية، والحلويات. قاعدة بيانات 40+ طعام، يتم تحديثها باستمرار.' },
      q7: { q: 'ما مدى دقة حساب السعرات؟', a: 'بناءً على قواعد بيانات معتمدة من USDA و MFDS، نستهدف دقة ±5%. قد تحدث اختلافات حسب حجم الطعام وطريقة الطهي.' },
      q8: { q: 'كيف يتم حساب المدخول اليومي الموصى به؟', a: 'بناءً على العمر والجنس والوزن ومستوى النشاط، يتم حساب السعرات الموصى بها وفقًا لمعايير FDA/WHO (حوالي 2000 سعرة حرارية) ونسب المغذيات تلقائيًا.' },
      q9: { q: 'ما هي العناصر الغذائية المقدمة؟', a: 'نقدم 8 عناصر غذائية رئيسية: السعرات الحرارية والبروتين والكربوهيدرات والدهون والسكر والصوديوم والألياف والكوليسترول.' },
      q10: { q: 'كيف يتم التنبؤ بمخاطر الأمراض؟', a: 'يقوم نموذج التعلم الآلي XGBoost بتحليل شامل لبيانات المدخول (السعرات والسكر والدهون والصوديوم) والمعلومات الصحية (العمر والوزن والنشاط) لعرض مخاطر السمنة والسكري وارتفاع ضغط الدم وارتفاع الدهون في 3 مستويات (منخفض/متوسط/عالي).' },
      q11: { q: 'هل يمكن استخدامه كتشخيص طبي؟', a: 'لا. هذه الخدمة للمرجعية فقط. للتشخيص الدقيق، يرجى استشارة مؤسسة طبية.' },
      q12: { q: 'مستوى الخطر لدي مرتفع', a: 'تحقق من توصيات الوجبات AI، قلل من تناول الصوديوم والسكر، وفكر في زيارة مؤسسة طبية. استخدم أيضًا ميزة التدريب الصحي في التطبيق.' }
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
    
    // 카테고리 업데이트
    const cat1 = document.querySelector('#category-1-title');
    const cat2 = document.querySelector('#category-2-title');
    const cat3 = document.querySelector('#category-3-title');
    const cat4 = document.querySelector('#category-4-title');
    
    if (cat1) cat1.textContent = t.categories.general;
    if (cat2) cat2.textContent = t.categories.analysis;
    if (cat3) cat3.textContent = t.categories.nutrition;
    if (cat4) cat4.textContent = t.categories.disease;
    
    // 질문 업데이트
    for (let i = 1; i <= 12; i++) {
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
