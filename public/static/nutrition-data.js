// 영양성분 섹션 다국어 데이터
const nutritionInfoData = {
  ko: {
    pageTitle: "영양성분 정보",
    pageSubtitle: "칼로리 기반 영양 분석 및 건강 정보",
    
    // 섹션 제목
    section1Title: "칼로리로 직접 확인 가능한 정보",
    section1Subtitle: "음식 사진 인식 결과로 즉시 제공 가능",
    
    section2Title: "칼로리로 계산 가능한 정보",
    section2Subtitle: "개인 건강 정보와 칼로리 데이터 결합 분석",
    
    section3Title: "칼로리 데이터로 가능한 위험 신호",
    section3Subtitle: "질병 예방을 위한 조기 경고 시스템",
    
    section4Title: "칼로리만으로는 불가능한 정보",
    section4Subtitle: "영양성분 DB 연동 필수",
    
    conclusionTitle: "결론 및 권장사항",
    conclusionSubtitle: "통합 시스템의 필요성",
    
    // 섹션 1: 칼로리로 직접 확인 가능한 정보
    features: [
      {
        icon: "fa-fire",
        title: "1. 총 열량 (Food Energy)",
        items: [
          "1회 제공량(serving size)당 kcal",
          "100g당 kcal",
          "실제 섭취량(gram)당 kcal",
          "실시간 칼로리 계산 및 표시"
        ]
      },
      {
        icon: "fa-chart-pie",
        title: "2. 1일 권장 섭취량 대비 비율",
        items: [
          "성별/연령별 권장 칼로리 기준 (예: 성인 남성 2,500kcal, 여성 2,000kcal)",
          "섭취 비율 계산 (예: 1,000kcal / 2,300kcal = 43%)",
          "아침/점심/저녁 권장 배분 비교",
          "초과/부족 칼로리 알림"
        ]
      },
      {
        icon: "fa-bullseye",
        title: "3. 다이어트/감량 목표와의 차이",
        items: [
          "목표 칼로리 대비 현재 섭취량",
          "1일 목표 달성률 표시",
          "주간/월간 목표 추적",
          "개인 맞춤 칼로리 제한 알림"
        ]
      },
      {
        icon: "fa-running",
        title: "4. 칼로리 소모 운동량 환산",
        items: [
          "걷기: 약 30분 (100kcal 소모 기준)",
          "달리기: 약 10분 (100kcal 소모 기준)",
          "자전거: 약 15분 (100kcal 소모 기준)",
          "수영: 약 12분 (100kcal 소모 기준)"
        ]
      },
      {
        icon: "fa-balance-scale",
        title: "5. 다른 음식과 칼로리 비교",
        items: [
          "동일 카테고리 음식 비교 (예: 치킨 vs 샐러드)",
          "칼로리 높은/낮은 대체 음식 추천",
          "인기 음식 칼로리 순위",
          "칼로리 밀도 비교 (kcal/100g)"
        ]
      }
    ],
    
    // 섹션 2: 칼로리로 계산 가능한 정보
    calculations: [
      {
        icon: "fa-weight",
        title: "6. 체중 변화 예측",
        items: [
          "지방 1kg = 7,700kcal 원리",
          "일일 초과 칼로리 × 기간 = 예상 체중 증가",
          "예: 매일 500kcal 초과 → 1주일 후 약 0.45kg 증가",
          "장기 다이어트 시뮬레이션"
        ]
      },
      {
        icon: "fa-heartbeat",
        title: "7. 기초대사량(BMR) 대비 비교",
        items: [
          "Harris-Benedict 공식 적용",
          "남성: BMR = 66 + (13.7 × 체중) + (5 × 키) - (6.8 × 나이)",
          "여성: BMR = 655 + (9.6 × 체중) + (1.8 × 키) - (4.7 × 나이)",
          "BMR 대비 섭취 칼로리 비율 분석"
        ]
      },
      {
        icon: "fa-battery-half",
        title: "8. 총 에너지 소비량(TDEE) 균형",
        items: [
          "TDEE = BMR × 활동 계수 (1.2~2.0)",
          "섭취 칼로리 - TDEE = 에너지 균형",
          "균형 상태: 체중 유지, 잉여: 증가, 부족: 감소",
          "개인 맞춤 TDEE 계산"
        ]
      },
      {
        icon: "fa-calendar-alt",
        title: "9. 식습관 패턴 분석",
        items: [
          "일일/주간/월간 평균 칼로리 섭취 추세",
          "식사 시간대별 칼로리 분포",
          "고칼로리 식사 빈도 분석",
          "식습관 개선 제안"
        ]
      }
    ],
    
    // 섹션 3: 칼로리 데이터로 가능한 위험 신호
    risks: [
      {
        icon: "fa-exclamation-triangle",
        color: "red",
        title: "10. 비만 위험도",
        items: [
          "1일 권장량 120% 이상 지속 섭취",
          "주 5회 이상 과식 패턴",
          "BMI와 칼로리 섭취 상관관계",
          "비만 위험 조기 경고"
        ]
      },
      {
        icon: "fa-lungs",
        color: "orange",
        title: "11. 지방간 위험",
        items: [
          "과도한 칼로리 섭취 → 간 지방 축적",
          "고칼로리 야식 패턴 감지",
          "알코올 + 고칼로리 조합 경고",
          "지방간 예방 가이드"
        ]
      },
      {
        icon: "fa-heart",
        color: "red",
        title: "12. 심혈관 질환 위험",
        items: [
          "과도한 칼로리 → 비만 → 심혈관 부담",
          "고칼로리 식사 후 심박수 증가",
          "장기 과식 시 심장 건강 영향",
          "심혈관 건강 관리 팁"
        ]
      },
      {
        icon: "fa-tint",
        color: "blue",
        title: "13. 당뇨 위험 (간접적)",
        items: [
          "과도한 칼로리 → 인슐린 저항성 증가",
          "고칼로리 탄수화물 식사 빈도",
          "혈당 스파이크 가능성 추정",
          "당뇨 예방 식습관 가이드"
        ]
      },
      {
        icon: "fa-moon",
        color: "purple",
        title: "14. 야식/폭식 패턴",
        items: [
          "밤 10시 이후 고칼로리 섭취 감지",
          "한 끼 1,500kcal 이상 폭식 경고",
          "불규칙한 식사 시간 패턴",
          "건강한 식사 시간 제안"
        ]
      },
      {
        icon: "fa-chart-line",
        color: "red",
        title: "15. 급격한 체중 증가 건강 위험",
        items: [
          "주당 1kg 이상 체중 증가 경고",
          "단기간 과도한 칼로리 섭취",
          "대사 증후군 위험 증가",
          "안전한 체중 관리 가이드"
        ]
      }
    ],
    
    // 섹션 4: 칼로리만으로는 불가능한 정보
    limitations: [
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "정확한 당뇨/고혈압 위험도",
        description: "당분, 나트륨 등 영양성분 데이터 필수",
        required: "영양성분 DB 연동"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "영양 불균형 (탄수화물/단백질/지방 비율)",
        description: "3대 영양소 및 미량 영양소 분석 필요",
        required: "영양성분 DB 연동"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "알레르기 정보",
        description: "식품 성분 및 알레르기 유발 물질 DB 필요",
        required: "영양성분 DB + 알레르기 DB 연동"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "특정 지방 위험 (포화지방/트랜스지방)",
        description: "지방산 구성 정보 필수",
        required: "상세 영양성분 DB 연동"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "비타민/미네랄 결핍",
        description: "미량 영양소 데이터 필요",
        required: "종합 영양성분 DB 연동"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "식이섬유/콜레스테롤 정보",
        description: "상세 영양 분석 데이터 필요",
        required: "영양성분 DB 연동"
      }
    ],
    
    // 결론
    conclusion: {
      title: "통합 시스템의 필요성",
      subtitle: "칼로리 + 영양성분 + 개인 건강정보 + AI 음식 인식",
      points: [
        {
          icon: "fa-check-circle",
          color: "green",
          title: "현재 가능",
          items: [
            "칼로리 기반 기본 건강 분석",
            "체중 관리 및 다이어트 지원",
            "식습관 패턴 분석",
            "비만/과식 조기 경고"
          ]
        },
        {
          icon: "fa-star",
          color: "blue",
          title: "영양성분 DB 연동 시 추가 가능",
          items: [
            "정밀한 질병 위험 예측 (당뇨, 고혈압, 고지혈증)",
            "영양 균형 분석 및 개선 제안",
            "알레르기 및 식품 안전 정보",
            "개인 맞춤 영양 관리 시스템"
          ]
        },
        {
          icon: "fa-rocket",
          color: "purple",
          title: "최종 목표",
          items: [
            "AI 음식 사진 인식 (Google Vision AI / YOLOv8)",
            "공개 영양성분 DB 통합 (식약처, USDA, RDA)",
            "개인 건강 정보 분석 (나이, 성별, 체중, 활동량)",
            "실시간 질병 위험 경고 및 맞춤 영양 코칭"
          ]
        }
      ]
    },
    
    // 버튼
    backButton: "메인으로 돌아가기",
    learnMoreButton: "더 알아보기"
  },
  
  en: {
    pageTitle: "Nutritional Information",
    pageSubtitle: "Calorie-based Nutrition Analysis & Health Information",
    
    section1Title: "Information Directly Verifiable from Calories",
    section1Subtitle: "Instantly available from food photo recognition results",
    
    section2Title: "Information Calculable from Calories",
    section2Subtitle: "Combined analysis of personal health info and calorie data",
    
    section3Title: "Risk Signals Possible with Calorie Data",
    section3Subtitle: "Early warning system for disease prevention",
    
    section4Title: "Information Impossible with Calories Alone",
    section4Subtitle: "Nutrition database integration required",
    
    conclusionTitle: "Conclusion & Recommendations",
    conclusionSubtitle: "Need for integrated system",
    
    features: [
      {
        icon: "fa-fire",
        title: "1. Total Energy (Food Energy)",
        items: [
          "kcal per serving size",
          "kcal per 100g",
          "kcal per actual intake (grams)",
          "Real-time calorie calculation & display"
        ]
      },
      {
        icon: "fa-chart-pie",
        title: "2. Ratio vs Daily Recommended Intake",
        items: [
          "Recommended calories by gender/age (e.g., Adult male 2,500kcal, female 2,000kcal)",
          "Intake ratio calculation (e.g., 1,000kcal / 2,300kcal = 43%)",
          "Breakfast/lunch/dinner recommended distribution comparison",
          "Excess/deficiency calorie alerts"
        ]
      },
      {
        icon: "fa-bullseye",
        title: "3. Difference from Diet/Weight Loss Goals",
        items: [
          "Current intake vs target calories",
          "Daily goal achievement rate display",
          "Weekly/monthly goal tracking",
          "Personalized calorie limit alerts"
        ]
      },
      {
        icon: "fa-running",
        title: "4. Exercise Equivalent for Calorie Burn",
        items: [
          "Walking: approx. 30 min (100kcal burn basis)",
          "Running: approx. 10 min (100kcal burn basis)",
          "Cycling: approx. 15 min (100kcal burn basis)",
          "Swimming: approx. 12 min (100kcal burn basis)"
        ]
      },
      {
        icon: "fa-balance-scale",
        title: "5. Calorie Comparison with Other Foods",
        items: [
          "Same category food comparison (e.g., Chicken vs Salad)",
          "High/low calorie alternative food recommendations",
          "Popular food calorie rankings",
          "Calorie density comparison (kcal/100g)"
        ]
      }
    ],
    
    calculations: [
      {
        icon: "fa-weight",
        title: "6. Weight Change Prediction",
        items: [
          "Principle: 1kg fat = 7,700kcal",
          "Daily excess calories × period = expected weight gain",
          "Example: 500kcal excess daily → approx. 0.45kg gain in 1 week",
          "Long-term diet simulation"
        ]
      },
      {
        icon: "fa-heartbeat",
        title: "7. Comparison vs Basal Metabolic Rate (BMR)",
        items: [
          "Harris-Benedict formula applied",
          "Male: BMR = 66 + (13.7 × weight) + (5 × height) - (6.8 × age)",
          "Female: BMR = 655 + (9.6 × weight) + (1.8 × height) - (4.7 × age)",
          "Intake calorie ratio analysis vs BMR"
        ]
      },
      {
        icon: "fa-battery-half",
        title: "8. Total Daily Energy Expenditure (TDEE) Balance",
        items: [
          "TDEE = BMR × activity factor (1.2~2.0)",
          "Intake calories - TDEE = energy balance",
          "Balanced: maintain weight, Surplus: gain, Deficit: lose",
          "Personalized TDEE calculation"
        ]
      },
      {
        icon: "fa-calendar-alt",
        title: "9. Dietary Pattern Analysis",
        items: [
          "Daily/weekly/monthly average calorie intake trends",
          "Calorie distribution by meal time",
          "High-calorie meal frequency analysis",
          "Dietary improvement suggestions"
        ]
      }
    ],
    
    risks: [
      {
        icon: "fa-exclamation-triangle",
        color: "red",
        title: "10. Obesity Risk",
        items: [
          "Continuous intake >120% of daily recommendation",
          "Overeating pattern 5+ times per week",
          "Correlation between BMI and calorie intake",
          "Early obesity risk warning"
        ]
      },
      {
        icon: "fa-lungs",
        color: "orange",
        title: "11. Fatty Liver Risk",
        items: [
          "Excessive calorie intake → liver fat accumulation",
          "High-calorie late-night eating pattern detection",
          "Alcohol + high-calorie combination alert",
          "Fatty liver prevention guide"
        ]
      },
      {
        icon: "fa-heart",
        color: "red",
        title: "12. Cardiovascular Disease Risk",
        items: [
          "Excessive calories → obesity → cardiovascular burden",
          "Increased heart rate after high-calorie meals",
          "Long-term overeating impact on heart health",
          "Cardiovascular health management tips"
        ]
      },
      {
        icon: "fa-tint",
        color: "blue",
        title: "13. Diabetes Risk (Indirect)",
        items: [
          "Excessive calories → increased insulin resistance",
          "High-calorie carbohydrate meal frequency",
          "Blood sugar spike possibility estimation",
          "Diabetes prevention dietary guide"
        ]
      },
      {
        icon: "fa-moon",
        color: "purple",
        title: "14. Late-night/Binge Eating Patterns",
        items: [
          "High-calorie intake detection after 10 PM",
          "Binge eating warning >1,500kcal per meal",
          "Irregular meal time patterns",
          "Healthy meal time suggestions"
        ]
      },
      {
        icon: "fa-chart-line",
        color: "red",
        title: "15. Rapid Weight Gain Health Risks",
        items: [
          "Warning for >1kg weight gain per week",
          "Short-term excessive calorie intake",
          "Increased metabolic syndrome risk",
          "Safe weight management guide"
        ]
      }
    ],
    
    limitations: [
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "Accurate Diabetes/Hypertension Risk",
        description: "Requires nutrition data like sugar, sodium",
        required: "Nutrition DB integration"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "Nutritional Imbalance (Carb/Protein/Fat Ratio)",
        description: "Requires macronutrient and micronutrient analysis",
        required: "Nutrition DB integration"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "Allergy Information",
        description: "Requires food ingredient and allergen database",
        required: "Nutrition DB + Allergy DB integration"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "Specific Fat Risks (Saturated/Trans Fats)",
        description: "Requires fatty acid composition data",
        required: "Detailed nutrition DB integration"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "Vitamin/Mineral Deficiency",
        description: "Requires micronutrient data",
        required: "Comprehensive nutrition DB integration"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "Dietary Fiber/Cholesterol Info",
        description: "Requires detailed nutrition analysis data",
        required: "Nutrition DB integration"
      }
    ],
    
    conclusion: {
      title: "Need for Integrated System",
      subtitle: "Calories + Nutrition + Personal Health + AI Food Recognition",
      points: [
        {
          icon: "fa-check-circle",
          color: "green",
          title: "Currently Available",
          items: [
            "Calorie-based basic health analysis",
            "Weight management and diet support",
            "Dietary pattern analysis",
            "Early obesity/overeating warnings"
          ]
        },
        {
          icon: "fa-star",
          color: "blue",
          title: "Available with Nutrition DB Integration",
          items: [
            "Precise disease risk prediction (diabetes, hypertension, hyperlipidemia)",
            "Nutritional balance analysis and improvement suggestions",
            "Allergy and food safety information",
            "Personalized nutrition management system"
          ]
        },
        {
          icon: "fa-rocket",
          color: "purple",
          title: "Ultimate Goal",
          items: [
            "AI food photo recognition (Google Vision AI / YOLOv8)",
            "Public nutrition DB integration (MFDS, USDA, RDA)",
            "Personal health info analysis (age, gender, weight, activity)",
            "Real-time disease risk alerts and personalized nutrition coaching"
          ]
        }
      ]
    },
    
    backButton: "Back to Main",
    learnMoreButton: "Learn More"
  },
  
  zh: {
    pageTitle: "营养成分信息",
    pageSubtitle: "基于卡路里的营养分析与健康信息",
    
    section1Title: "可从卡路里直接验证的信息",
    section1Subtitle: "从食物照片识别结果立即可用",
    
    section2Title: "可从卡路里计算的信息",
    section2Subtitle: "个人健康信息与卡路里数据的综合分析",
    
    section3Title: "卡路里数据可能的风险信号",
    section3Subtitle: "疾病预防的早期预警系统",
    
    section4Title: "仅靠卡路里无法获得的信息",
    section4Subtitle: "需要营养成分数据库集成",
    
    conclusionTitle: "结论与建议",
    conclusionSubtitle: "综合系统的必要性",
    
    features: [
      {
        icon: "fa-fire",
        title: "1. 总热量（食物能量）",
        items: [
          "每份的千卡",
          "每100克的千卡",
          "实际摄入量（克）的千卡",
          "实时卡路里计算和显示"
        ]
      },
      {
        icon: "fa-chart-pie",
        title: "2. 与每日推荐摄入量的比率",
        items: [
          "按性别/年龄推荐卡路里（例如：成年男性2,500千卡，女性2,000千卡）",
          "摄入比率计算（例如：1,000千卡 / 2,300千卡 = 43%）",
          "早餐/午餐/晚餐推荐分配比较",
          "超量/不足卡路里警报"
        ]
      },
      {
        icon: "fa-bullseye",
        title: "3. 与饮食/减重目标的差异",
        items: [
          "当前摄入量与目标卡路里",
          "每日目标达成率显示",
          "每周/每月目标跟踪",
          "个性化卡路里限制警报"
        ]
      },
      {
        icon: "fa-running",
        title: "4. 卡路里消耗运动量换算",
        items: [
          "步行：约30分钟（100千卡消耗基准）",
          "跑步：约10分钟（100千卡消耗基准）",
          "骑自行车：约15分钟（100千卡消耗基准）",
          "游泳：约12分钟（100千卡消耗基准）"
        ]
      },
      {
        icon: "fa-balance-scale",
        title: "5. 与其他食物的卡路里比较",
        items: [
          "同类食物比较（例如：鸡肉 vs 沙拉）",
          "高/低卡路里替代食物推荐",
          "热门食物卡路里排名",
          "卡路里密度比较（千卡/100克）"
        ]
      }
    ],
    
    calculations: [
      {
        icon: "fa-weight",
        title: "6. 体重变化预测",
        items: [
          "原理：1公斤脂肪 = 7,700千卡",
          "每日超量卡路里 × 周期 = 预期体重增加",
          "示例：每天超量500千卡 → 1周后约增加0.45公斤",
          "长期饮食模拟"
        ]
      },
      {
        icon: "fa-heartbeat",
        title: "7. 与基础代谢率（BMR）的比较",
        items: [
          "应用Harris-Benedict公式",
          "男性：BMR = 66 + (13.7 × 体重) + (5 × 身高) - (6.8 × 年龄)",
          "女性：BMR = 655 + (9.6 × 体重) + (1.8 × 身高) - (4.7 × 年龄)",
          "摄入卡路里与BMR的比率分析"
        ]
      },
      {
        icon: "fa-battery-half",
        title: "8. 总每日能量消耗（TDEE）平衡",
        items: [
          "TDEE = BMR × 活动系数（1.2~2.0）",
          "摄入卡路里 - TDEE = 能量平衡",
          "平衡：维持体重，盈余：增加，赤字：减少",
          "个性化TDEE计算"
        ]
      },
      {
        icon: "fa-calendar-alt",
        title: "9. 饮食模式分析",
        items: [
          "每日/每周/每月平均卡路里摄入趋势",
          "按用餐时间的卡路里分布",
          "高卡路里餐频率分析",
          "饮食改善建议"
        ]
      }
    ],
    
    risks: [
      {
        icon: "fa-exclamation-triangle",
        color: "red",
        title: "10. 肥胖风险",
        items: [
          "持续摄入超过每日推荐量的120%",
          "每周5次以上的过度饮食模式",
          "BMI与卡路里摄入的关联",
          "早期肥胖风险警告"
        ]
      },
      {
        icon: "fa-lungs",
        color: "orange",
        title: "11. 脂肪肝风险",
        items: [
          "过量卡路里摄入 → 肝脏脂肪积累",
          "高卡路里深夜饮食模式检测",
          "酒精+高卡路里组合警报",
          "脂肪肝预防指南"
        ]
      },
      {
        icon: "fa-heart",
        color: "red",
        title: "12. 心血管疾病风险",
        items: [
          "过量卡路里 → 肥胖 → 心血管负担",
          "高卡路里餐后心率增加",
          "长期过度饮食对心脏健康的影响",
          "心血管健康管理提示"
        ]
      },
      {
        icon: "fa-tint",
        color: "blue",
        title: "13. 糖尿病风险（间接）",
        items: [
          "过量卡路里 → 胰岛素抵抗增加",
          "高卡路里碳水化合物餐频率",
          "血糖峰值可能性估计",
          "糖尿病预防饮食指南"
        ]
      },
      {
        icon: "fa-moon",
        color: "purple",
        title: "14. 深夜/暴食模式",
        items: [
          "晚上10点后高卡路里摄入检测",
          "每餐超过1,500千卡的暴食警告",
          "不规律的用餐时间模式",
          "健康用餐时间建议"
        ]
      },
      {
        icon: "fa-chart-line",
        color: "red",
        title: "15. 快速增重健康风险",
        items: [
          "每周增重超过1公斤的警告",
          "短期过量卡路里摄入",
          "代谢综合征风险增加",
          "安全体重管理指南"
        ]
      }
    ],
    
    limitations: [
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "准确的糖尿病/高血压风险",
        description: "需要糖、钠等营养数据",
        required: "营养数据库集成"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "营养失衡（碳水/蛋白质/脂肪比率）",
        description: "需要宏量营养素和微量营养素分析",
        required: "营养数据库集成"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "过敏信息",
        description: "需要食品成分和过敏原数据库",
        required: "营养数据库+过敏数据库集成"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "特定脂肪风险（饱和/反式脂肪）",
        description: "需要脂肪酸组成数据",
        required: "详细营养数据库集成"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "维生素/矿物质缺乏",
        description: "需要微量营养素数据",
        required: "综合营养数据库集成"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "膳食纤维/胆固醇信息",
        description: "需要详细营养分析数据",
        required: "营养数据库集成"
      }
    ],
    
    conclusion: {
      title: "综合系统的必要性",
      subtitle: "卡路里 + 营养 + 个人健康 + AI食物识别",
      points: [
        {
          icon: "fa-check-circle",
          color: "green",
          title: "目前可用",
          items: [
            "基于卡路里的基本健康分析",
            "体重管理和饮食支持",
            "饮食模式分析",
            "早期肥胖/过度饮食警告"
          ]
        },
        {
          icon: "fa-star",
          color: "blue",
          title: "营养数据库集成后可用",
          items: [
            "精确疾病风险预测（糖尿病、高血压、高脂血症）",
            "营养平衡分析和改善建议",
            "过敏和食品安全信息",
            "个性化营养管理系统"
          ]
        },
        {
          icon: "fa-rocket",
          color: "purple",
          title: "最终目标",
          items: [
            "AI食物照片识别（Google Vision AI / YOLOv8）",
            "公共营养数据库集成（MFDS、USDA、RDA）",
            "个人健康信息分析（年龄、性别、体重、活动量）",
            "实时疾病风险警报和个性化营养指导"
          ]
        }
      ]
    },
    
    backButton: "返回主页",
    learnMoreButton: "了解更多"
  },
  
  ja: {
    pageTitle: "栄養成分情報",
    pageSubtitle: "カロリーベースの栄養分析と健康情報",
    
    section1Title: "カロリーから直接確認可能な情報",
    section1Subtitle: "食品写真認識結果からすぐに利用可能",
    
    section2Title: "カロリーから計算可能な情報",
    section2Subtitle: "個人の健康情報とカロリーデータの統合分析",
    
    section3Title: "カロリーデータで可能なリスクシグナル",
    section3Subtitle: "疾病予防のための早期警告システム",
    
    section4Title: "カロリーだけでは不可能な情報",
    section4Subtitle: "栄養成分データベースの統合が必須",
    
    conclusionTitle: "結論と推奨事項",
    conclusionSubtitle: "統合システムの必要性",
    
    features: [
      {
        icon: "fa-fire",
        title: "1. 総熱量（食品エネルギー）",
        items: [
          "1食分あたりのkcal",
          "100gあたりのkcal",
          "実際の摂取量（グラム）あたりのkcal",
          "リアルタイムカロリー計算と表示"
        ]
      },
      {
        icon: "fa-chart-pie",
        title: "2. 1日推奨摂取量に対する比率",
        items: [
          "性別/年齢別推奨カロリー（例：成人男性2,500kcal、女性2,000kcal）",
          "摂取比率計算（例：1,000kcal / 2,300kcal = 43%）",
          "朝食/昼食/夕食の推奨配分比較",
          "過剰/不足カロリーアラート"
        ]
      },
      {
        icon: "fa-bullseye",
        title: "3. ダイエット/減量目標との差",
        items: [
          "目標カロリーに対する現在の摂取量",
          "1日の目標達成率表示",
          "週次/月次目標追跡",
          "パーソナライズされたカロリー制限アラート"
        ]
      },
      {
        icon: "fa-running",
        title: "4. カロリー消費運動量換算",
        items: [
          "ウォーキング：約30分（100kcal消費基準）",
          "ランニング：約10分（100kcal消費基準）",
          "サイクリング：約15分（100kcal消費基準）",
          "水泳：約12分（100kcal消費基準）"
        ]
      },
      {
        icon: "fa-balance-scale",
        title: "5. 他の食品とのカロリー比較",
        items: [
          "同じカテゴリーの食品比較（例：チキン vs サラダ）",
          "高/低カロリー代替食品推奨",
          "人気食品カロリーランキング",
          "カロリー密度比較（kcal/100g）"
        ]
      }
    ],
    
    calculations: [
      {
        icon: "fa-weight",
        title: "6. 体重変化予測",
        items: [
          "原理：脂肪1kg = 7,700kcal",
          "1日の過剰カロリー × 期間 = 予想体重増加",
          "例：毎日500kcal過剰 → 1週間後約0.45kg増加",
          "長期ダイエットシミュレーション"
        ]
      },
      {
        icon: "fa-heartbeat",
        title: "7. 基礎代謝量（BMR）との比較",
        items: [
          "Harris-Benedict式を適用",
          "男性：BMR = 66 + (13.7 × 体重) + (5 × 身長) - (6.8 × 年齢)",
          "女性：BMR = 655 + (9.6 × 体重) + (1.8 × 身長) - (4.7 × 年齢)",
          "BMRに対する摂取カロリー比率分析"
        ]
      },
      {
        icon: "fa-battery-half",
        title: "8. 総1日エネルギー消費量（TDEE）バランス",
        items: [
          "TDEE = BMR × 活動係数（1.2~2.0）",
          "摂取カロリー - TDEE = エネルギーバランス",
          "バランス：体重維持、余剰：増加、不足：減少",
          "パーソナライズされたTDEE計算"
        ]
      },
      {
        icon: "fa-calendar-alt",
        title: "9. 食習慣パターン分析",
        items: [
          "1日/週次/月次平均カロリー摂取トレンド",
          "食事時間帯別カロリー分布",
          "高カロリー食頻度分析",
          "食習慣改善提案"
        ]
      }
    ],
    
    risks: [
      {
        icon: "fa-exclamation-triangle",
        color: "red",
        title: "10. 肥満リスク",
        items: [
          "1日推奨量の120%以上を継続的に摂取",
          "週5回以上の過食パターン",
          "BMIとカロリー摂取の相関関係",
          "早期肥満リスク警告"
        ]
      },
      {
        icon: "fa-lungs",
        color: "orange",
        title: "11. 脂肪肝リスク",
        items: [
          "過剰なカロリー摂取 → 肝臓脂肪蓄積",
          "高カロリー深夜食パターン検出",
          "アルコール+高カロリー組み合わせ警報",
          "脂肪肝予防ガイド"
        ]
      },
      {
        icon: "fa-heart",
        color: "red",
        title: "12. 心血管疾患リスク",
        items: [
          "過剰なカロリー → 肥満 → 心血管負担",
          "高カロリー食後の心拍数増加",
          "長期過食が心臓健康に与える影響",
          "心血管健康管理のヒント"
        ]
      },
      {
        icon: "fa-tint",
        color: "blue",
        title: "13. 糖尿病リスク（間接的）",
        items: [
          "過剰なカロリー → インスリン抵抗性増加",
          "高カロリー炭水化物食の頻度",
          "血糖スパイクの可能性推定",
          "糖尿病予防食習慣ガイド"
        ]
      },
      {
        icon: "fa-moon",
        color: "purple",
        title: "14. 深夜/過食パターン",
        items: [
          "午後10時以降の高カロリー摂取検出",
          "1食1,500kcal以上の過食警告",
          "不規則な食事時間パターン",
          "健康的な食事時間提案"
        ]
      },
      {
        icon: "fa-chart-line",
        color: "red",
        title: "15. 急激な体重増加健康リスク",
        items: [
          "週1kg以上の体重増加警告",
          "短期間の過剰カロリー摂取",
          "メタボリックシンドロームリスク増加",
          "安全な体重管理ガイド"
        ]
      }
    ],
    
    limitations: [
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "正確な糖尿病/高血圧リスク",
        description: "糖分、ナトリウムなどの栄養データが必須",
        required: "栄養データベース統合"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "栄養不均衡（炭水化物/タンパク質/脂肪比率）",
        description: "主要栄養素と微量栄養素の分析が必要",
        required: "栄養データベース統合"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "アレルギー情報",
        description: "食品成分とアレルゲンデータベースが必要",
        required: "栄養データベース+アレルギーデータベース統合"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "特定脂肪リスク（飽和/トランス脂肪）",
        description: "脂肪酸組成データが必須",
        required: "詳細な栄養データベース統合"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "ビタミン/ミネラル欠乏",
        description: "微量栄養素データが必要",
        required: "総合栄養データベース統合"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "食物繊維/コレステロール情報",
        description: "詳細な栄養分析データが必要",
        required: "栄養データベース統合"
      }
    ],
    
    conclusion: {
      title: "統合システムの必要性",
      subtitle: "カロリー + 栄養 + 個人健康 + AI食品認識",
      points: [
        {
          icon: "fa-check-circle",
          color: "green",
          title: "現在利用可能",
          items: [
            "カロリーベースの基本健康分析",
            "体重管理とダイエットサポート",
            "食習慣パターン分析",
            "早期肥満/過食警告"
          ]
        },
        {
          icon: "fa-star",
          color: "blue",
          title: "栄養データベース統合時に追加可能",
          items: [
            "精密な疾病リスク予測（糖尿病、高血圧、高脂血症）",
            "栄養バランス分析と改善提案",
            "アレルギーおよび食品安全情報",
            "パーソナライズされた栄養管理システム"
          ]
        },
        {
          icon: "fa-rocket",
          color: "purple",
          title: "最終目標",
          items: [
            "AI食品写真認識（Google Vision AI / YOLOv8）",
            "公開栄養データベース統合（MFDS、USDA、RDA）",
            "個人健康情報分析（年齢、性別、体重、活動量）",
            "リアルタイム疾病リスク警報とパーソナライズされた栄養コーチング"
          ]
        }
      ]
    },
    
    backButton: "メインに戻る",
    learnMoreButton: "詳細を見る"
  },
  
  vi: {
    pageTitle: "Thông Tin Dinh Dưỡng",
    pageSubtitle: "Phân Tích Dinh Dưỡng Dựa Trên Calo & Thông Tin Sức Khỏe",
    
    section1Title: "Thông Tin Có Thể Xác Minh Trực Tiếp Từ Calo",
    section1Subtitle: "Có sẵn ngay lập tức từ kết quả nhận diện ảnh thực phẩm",
    
    section2Title: "Thông Tin Có Thể Tính Toán Từ Calo",
    section2Subtitle: "Phân tích kết hợp thông tin sức khỏe cá nhân và dữ liệu calo",
    
    section3Title: "Tín Hiệu Rủi Ro Có Thể Với Dữ Liệu Calo",
    section3Subtitle: "Hệ thống cảnh báo sớm để phòng ngừa bệnh tật",
    
    section4Title: "Thông Tin Không Thể Chỉ Với Calo",
    section4Subtitle: "Yêu cầu tích hợp cơ sở dữ liệu dinh dưỡng",
    
    conclusionTitle: "Kết Luận & Khuyến Nghị",
    conclusionSubtitle: "Nhu cầu về hệ thống tích hợp",
    
    features: [
      {
        icon: "fa-fire",
        title: "1. Tổng Năng Lượng (Năng Lượng Thực Phẩm)",
        items: [
          "kcal mỗi khẩu phần",
          "kcal mỗi 100g",
          "kcal theo lượng tiêu thụ thực tế (gram)",
          "Tính toán và hiển thị calo theo thời gian thực"
        ]
      },
      {
        icon: "fa-chart-pie",
        title: "2. Tỷ Lệ So Với Lượng Khuyến Nghị Hàng Ngày",
        items: [
          "Calo khuyến nghị theo giới tính/độ tuổi (ví dụ: Nam trưởng thành 2,500kcal, Nữ 2,000kcal)",
          "Tính tỷ lệ tiêu thụ (ví dụ: 1,000kcal / 2,300kcal = 43%)",
          "So sánh phân bổ khuyến nghị bữa sáng/trưa/tối",
          "Cảnh báo calo dư thừa/thiếu hụt"
        ]
      },
      {
        icon: "fa-bullseye",
        title: "3. Chênh Lệch Với Mục Tiêu Ăn Kiêng/Giảm Cân",
        items: [
          "Lượng tiêu thụ hiện tại so với calo mục tiêu",
          "Hiển thị tỷ lệ đạt mục tiêu hàng ngày",
          "Theo dõi mục tiêu hàng tuần/tháng",
          "Cảnh báo giới hạn calo cá nhân hóa"
        ]
      },
      {
        icon: "fa-running",
        title: "4. Quy Đổi Lượng Vận Động Đốt Calo",
        items: [
          "Đi bộ: khoảng 30 phút (đốt 100kcal)",
          "Chạy: khoảng 10 phút (đốt 100kcal)",
          "Đạp xe: khoảng 15 phút (đốt 100kcal)",
          "Bơi lội: khoảng 12 phút (đốt 100kcal)"
        ]
      },
      {
        icon: "fa-balance-scale",
        title: "5. So Sánh Calo Với Thực Phẩm Khác",
        items: [
          "So sánh thực phẩm cùng loại (ví dụ: Gà vs Salad)",
          "Khuyến nghị thực phẩm thay thế calo cao/thấp",
          "Xếp hạng calo thực phẩm phổ biến",
          "So sánh mật độ calo (kcal/100g)"
        ]
      }
    ],
    
    calculations: [
      {
        icon: "fa-weight",
        title: "6. Dự Đoán Thay Đổi Cân Nặng",
        items: [
          "Nguyên lý: 1kg mỡ = 7,700kcal",
          "Calo dư thừa hàng ngày × thời gian = tăng cân dự kiến",
          "Ví dụ: Dư 500kcal mỗi ngày → tăng khoảng 0.45kg sau 1 tuần",
          "Mô phỏng chế độ ăn kiêng dài hạn"
        ]
      },
      {
        icon: "fa-heartbeat",
        title: "7. So Sánh Với Tỷ Lệ Trao Đổi Chất Cơ Bản (BMR)",
        items: [
          "Áp dụng công thức Harris-Benedict",
          "Nam: BMR = 66 + (13.7 × cân nặng) + (5 × chiều cao) - (6.8 × tuổi)",
          "Nữ: BMR = 655 + (9.6 × cân nặng) + (1.8 × chiều cao) - (4.7 × tuổi)",
          "Phân tích tỷ lệ calo tiêu thụ so với BMR"
        ]
      },
      {
        icon: "fa-battery-half",
        title: "8. Cân Bằng Tổng Năng Lượng Tiêu Hao Hàng Ngày (TDEE)",
        items: [
          "TDEE = BMR × hệ số hoạt động (1.2~2.0)",
          "Calo tiêu thụ - TDEE = cân bằng năng lượng",
          "Cân bằng: duy trì cân nặng, Thặng dư: tăng, Thiếu hụt: giảm",
          "Tính toán TDEE cá nhân hóa"
        ]
      },
      {
        icon: "fa-calendar-alt",
        title: "9. Phân Tích Mô Hình Chế Độ Ăn",
        items: [
          "Xu hướng tiêu thụ calo trung bình hàng ngày/tuần/tháng",
          "Phân bổ calo theo thời gian bữa ăn",
          "Phân tích tần suất bữa ăn calo cao",
          "Đề xuất cải thiện chế độ ăn"
        ]
      }
    ],
    
    risks: [
      {
        icon: "fa-exclamation-triangle",
        color: "red",
        title: "10. Nguy Cơ Béo Phì",
        items: [
          "Tiêu thụ liên tục >120% lượng khuyến nghị hàng ngày",
          "Mô hình ăn quá nhiều 5+ lần/tuần",
          "Tương quan giữa BMI và lượng calo tiêu thụ",
          "Cảnh báo sớm nguy cơ béo phì"
        ]
      },
      {
        icon: "fa-lungs",
        color: "orange",
        title: "11. Nguy Cơ Gan Nhiễm Mỡ",
        items: [
          "Tiêu thụ calo quá mức → tích tụ mỡ gan",
          "Phát hiện mô hình ăn khuya calo cao",
          "Cảnh báo kết hợp rượu + calo cao",
          "Hướng dẫn phòng ngừa gan nhiễm mỡ"
        ]
      },
      {
        icon: "fa-heart",
        color: "red",
        title: "12. Nguy Cơ Bệnh Tim Mạch",
        items: [
          "Calo quá mức → béo phì → gánh nặng tim mạch",
          "Tăng nhịp tim sau bữa ăn calo cao",
          "Ảnh hưởng ăn quá nhiều lâu dài đến sức khỏe tim",
          "Mẹo quản lý sức khỏe tim mạch"
        ]
      },
      {
        icon: "fa-tint",
        color: "blue",
        title: "13. Nguy Cơ Đái Tháo Đường (Gián Tiếp)",
        items: [
          "Calo quá mức → tăng kháng insulin",
          "Tần suất bữa ăn carbohydrate calo cao",
          "Ước tính khả năng tăng đường huyết đột ngột",
          "Hướng dẫn chế độ ăn phòng ngừa đái tháo đường"
        ]
      },
      {
        icon: "fa-moon",
        color: "purple",
        title: "14. Mô Hình Ăn Khuya/Ăn Quá Nhiều",
        items: [
          "Phát hiện tiêu thụ calo cao sau 10 giờ tối",
          "Cảnh báo ăn quá nhiều >1,500kcal/bữa",
          "Mô hình thời gian ăn không đều",
          "Đề xuất thời gian ăn uống lành mạnh"
        ]
      },
      {
        icon: "fa-chart-line",
        color: "red",
        title: "15. Nguy Cơ Sức Khỏe Tăng Cân Nhanh",
        items: [
          "Cảnh báo tăng >1kg cân nặng mỗi tuần",
          "Tiêu thụ calo quá mức ngắn hạn",
          "Tăng nguy cơ hội chứng chuyển hóa",
          "Hướng dẫn quản lý cân nặng an toàn"
        ]
      }
    ],
    
    limitations: [
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "Nguy Cơ Đái Tháo Đường/Tăng Huyết Áp Chính Xác",
        description: "Yêu cầu dữ liệu dinh dưỡng như đường, natri",
        required: "Tích hợp cơ sở dữ liệu dinh dưỡng"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "Mất Cân Bằng Dinh Dưỡng (Tỷ Lệ Carb/Protein/Chất Béo)",
        description: "Yêu cầu phân tích chất dinh dưỡng đa lượng và vi lượng",
        required: "Tích hợp cơ sở dữ liệu dinh dưỡng"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "Thông Tin Dị Ứng",
        description: "Yêu cầu cơ sở dữ liệu thành phần thực phẩm và chất gây dị ứng",
        required: "Tích hợp DB dinh dưỡng + DB dị ứng"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "Nguy Cơ Chất Béo Cụ Thể (Chất Béo Bão Hòa/Chuyển Hóa)",
        description: "Yêu cầu dữ liệu thành phần acid béo",
        required: "Tích hợp cơ sở dữ liệu dinh dưỡng chi tiết"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "Thiếu Vitamin/Khoáng Chất",
        description: "Yêu cầu dữ liệu chất dinh dưỡng vi lượng",
        required: "Tích hợp cơ sở dữ liệu dinh dưỡng toàn diện"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "Thông Tin Chất Xơ/Cholesterol",
        description: "Yêu cầu dữ liệu phân tích dinh dưỡng chi tiết",
        required: "Tích hợp cơ sở dữ liệu dinh dưỡng"
      }
    ],
    
    conclusion: {
      title: "Nhu Cầu Hệ Thống Tích Hợp",
      subtitle: "Calo + Dinh Dưỡng + Sức Khỏe Cá Nhân + Nhận Diện Thực Phẩm AI",
      points: [
        {
          icon: "fa-check-circle",
          color: "green",
          title: "Hiện Tại Có Sẵn",
          items: [
            "Phân tích sức khỏe cơ bản dựa trên calo",
            "Hỗ trợ quản lý cân nặng và chế độ ăn kiêng",
            "Phân tích mô hình chế độ ăn",
            "Cảnh báo sớm béo phì/ăn quá nhiều"
          ]
        },
        {
          icon: "fa-star",
          color: "blue",
          title: "Có Sẵn Khi Tích Hợp DB Dinh Dưỡng",
          items: [
            "Dự đoán nguy cơ bệnh chính xác (đái tháo đường, tăng huyết áp, tăng lipid máu)",
            "Phân tích cân bằng dinh dưỡng và đề xuất cải thiện",
            "Thông tin dị ứng và an toàn thực phẩm",
            "Hệ thống quản lý dinh dưỡng cá nhân hóa"
          ]
        },
        {
          icon: "fa-rocket",
          color: "purple",
          title: "Mục Tiêu Cuối Cùng",
          items: [
            "Nhận diện ảnh thực phẩm AI (Google Vision AI / YOLOv8)",
            "Tích hợp DB dinh dưỡng công khai (MFDS, USDA, RDA)",
            "Phân tích thông tin sức khỏe cá nhân (tuổi, giới tính, cân nặng, hoạt động)",
            "Cảnh báo nguy cơ bệnh theo thời gian thực và huấn luyện dinh dưỡng cá nhân hóa"
          ]
        }
      ]
    },
    
    backButton: "Quay Về Trang Chính",
    learnMoreButton: "Tìm Hiểu Thêm"
  },
  
  ar: {
    pageTitle: "معلومات التغذية",
    pageSubtitle: "تحليل التغذية على أساس السعرات الحرارية ومعلومات الصحة",
    
    section1Title: "معلومات يمكن التحقق منها مباشرة من السعرات الحرارية",
    section1Subtitle: "متاحة فوراً من نتائج التعرف على صور الطعام",
    
    section2Title: "معلومات يمكن حسابها من السعرات الحرارية",
    section2Subtitle: "تحليل مدمج لمعلومات الصحة الشخصية وبيانات السعرات الحرارية",
    
    section3Title: "إشارات المخاطر الممكنة مع بيانات السعرات الحرارية",
    section3Subtitle: "نظام إنذار مبكر للوقاية من الأمراض",
    
    section4Title: "معلومات مستحيلة بالسعرات الحرارية وحدها",
    section4Subtitle: "يتطلب تكامل قاعدة بيانات التغذية",
    
    conclusionTitle: "الاستنتاج والتوصيات",
    conclusionSubtitle: "الحاجة إلى نظام متكامل",
    
    features: [
      {
        icon: "fa-fire",
        title: "1. إجمالي الطاقة (طاقة الطعام)",
        items: [
          "سعرة حرارية لكل حصة",
          "سعرة حرارية لكل 100 جرام",
          "سعرة حرارية لكل كمية فعلية (جرام)",
          "حساب وعرض السعرات الحرارية في الوقت الفعلي"
        ]
      },
      {
        icon: "fa-chart-pie",
        title: "2. النسبة مقارنة بالمدخول اليومي الموصى به",
        items: [
          "السعرات الموصى بها حسب الجنس/العمر (مثال: ذكر بالغ 2,500 سعرة، أنثى 2,000 سعرة)",
          "حساب نسبة المدخول (مثال: 1,000 سعرة / 2,300 سعرة = 43%)",
          "مقارنة التوزيع الموصى به للإفطار/الغداء/العشاء",
          "تنبيهات السعرات الزائدة/الناقصة"
        ]
      },
      {
        icon: "fa-bullseye",
        title: "3. الفرق عن أهداف النظام الغذائي/فقدان الوزن",
        items: [
          "المدخول الحالي مقابل السعرات المستهدفة",
          "عرض معدل تحقيق الهدف اليومي",
          "تتبع الأهداف الأسبوعية/الشهرية",
          "تنبيهات حد السعرات الشخصية"
        ]
      },
      {
        icon: "fa-running",
        title: "4. معادلة التمرين لحرق السعرات",
        items: [
          "المشي: حوالي 30 دقيقة (حرق 100 سعرة)",
          "الجري: حوالي 10 دقائق (حرق 100 سعرة)",
          "ركوب الدراجات: حوالي 15 دقيقة (حرق 100 سعرة)",
          "السباحة: حوالي 12 دقيقة (حرق 100 سعرة)"
        ]
      },
      {
        icon: "fa-balance-scale",
        title: "5. مقارنة السعرات مع الأطعمة الأخرى",
        items: [
          "مقارنة الأطعمة من نفس الفئة (مثال: دجاج مقابل سلطة)",
          "توصيات الأطعمة البديلة عالية/منخفضة السعرات",
          "تصنيف السعرات للأطعمة الشائعة",
          "مقارنة كثافة السعرات (سعرة/100 جرام)"
        ]
      }
    ],
    
    calculations: [
      {
        icon: "fa-weight",
        title: "6. توقع تغير الوزن",
        items: [
          "المبدأ: 1 كجم دهون = 7,700 سعرة حرارية",
          "السعرات الزائدة اليومية × الفترة = زيادة الوزن المتوقعة",
          "مثال: 500 سعرة زائدة يومياً → زيادة حوالي 0.45 كجم في أسبوع",
          "محاكاة النظام الغذائي طويل الأمد"
        ]
      },
      {
        icon: "fa-heartbeat",
        title: "7. المقارنة مع معدل الأيض الأساسي (BMR)",
        items: [
          "تطبيق معادلة Harris-Benedict",
          "ذكر: BMR = 66 + (13.7 × الوزن) + (5 × الطول) - (6.8 × العمر)",
          "أنثى: BMR = 655 + (9.6 × الوزن) + (1.8 × الطول) - (4.7 × العمر)",
          "تحليل نسبة مدخول السعرات مقابل BMR"
        ]
      },
      {
        icon: "fa-battery-half",
        title: "8. توازن إجمالي النفقات اليومية للطاقة (TDEE)",
        items: [
          "TDEE = BMR × عامل النشاط (1.2~2.0)",
          "مدخول السعرات - TDEE = توازن الطاقة",
          "متوازن: الحفاظ على الوزن، فائض: زيادة، عجز: خسارة",
          "حساب TDEE الشخصي"
        ]
      },
      {
        icon: "fa-calendar-alt",
        title: "9. تحليل أنماط النظام الغذائي",
        items: [
          "اتجاهات متوسط مدخول السعرات اليومية/الأسبوعية/الشهرية",
          "توزيع السعرات حسب وقت الوجبة",
          "تحليل تكرار الوجبات عالية السعرات",
          "اقتراحات لتحسين النظام الغذائي"
        ]
      }
    ],
    
    risks: [
      {
        icon: "fa-exclamation-triangle",
        color: "red",
        title: "10. خطر السمنة",
        items: [
          "مدخول مستمر >120% من التوصية اليومية",
          "نمط الإفراط في الأكل 5+ مرات/أسبوع",
          "الارتباط بين مؤشر كتلة الجسم ومدخول السعرات",
          "تحذير مبكر لخطر السمنة"
        ]
      },
      {
        icon: "fa-lungs",
        color: "orange",
        title: "11. خطر الكبد الدهني",
        items: [
          "مدخول السعرات المفرط → تراكم دهون الكبد",
          "كشف نمط الأكل المتأخر عالي السعرات",
          "تنبيه مزيج الكحول + السعرات العالية",
          "دليل الوقاية من الكبد الدهني"
        ]
      },
      {
        icon: "fa-heart",
        color: "red",
        title: "12. خطر أمراض القلب والأوعية",
        items: [
          "السعرات المفرطة → السمنة → عبء القلب والأوعية",
          "زيادة معدل ضربات القلب بعد الوجبات عالية السعرات",
          "تأثير الإفراط في الأكل طويل الأمد على صحة القلب",
          "نصائح لإدارة صحة القلب والأوعية"
        ]
      },
      {
        icon: "fa-tint",
        color: "blue",
        title: "13. خطر مرض السكري (غير مباشر)",
        items: [
          "السعرات المفرطة → زيادة مقاومة الأنسولين",
          "تكرار الوجبات الكربوهيدراتية عالية السعرات",
          "تقدير احتمال ارتفاع السكر المفاجئ",
          "دليل النظام الغذائي للوقاية من مرض السكري"
        ]
      },
      {
        icon: "fa-moon",
        color: "purple",
        title: "14. أنماط الأكل المتأخر/النهم",
        items: [
          "كشف مدخول السعرات العالية بعد الساعة 10 مساءً",
          "تحذير الأكل بنهم >1,500 سعرة/وجبة",
          "أنماط أوقات الوجبات غير المنتظمة",
          "اقتراحات أوقات الوجبات الصحية"
        ]
      },
      {
        icon: "fa-chart-line",
        color: "red",
        title: "15. مخاطر صحية من زيادة الوزن السريعة",
        items: [
          "تحذير زيادة الوزن >1 كجم/أسبوع",
          "مدخول السعرات المفرط قصير الأمد",
          "زيادة خطر متلازمة التمثيل الغذائي",
          "دليل إدارة الوزن الآمن"
        ]
      }
    ],
    
    limitations: [
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "خطر مرض السكري/ضغط الدم الدقيق",
        description: "يتطلب بيانات التغذية مثل السكر والصوديوم",
        required: "تكامل قاعدة بيانات التغذية"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "عدم التوازن الغذائي (نسبة الكربوهيدرات/البروتين/الدهون)",
        description: "يتطلب تحليل المغذيات الكبيرة والدقيقة",
        required: "تكامل قاعدة بيانات التغذية"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "معلومات الحساسية",
        description: "يتطلب قاعدة بيانات مكونات الطعام والمواد المسببة للحساسية",
        required: "تكامل قاعدة بيانات التغذية + الحساسية"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "مخاطر الدهون المحددة (الدهون المشبعة/المتحولة)",
        description: "يتطلب بيانات تكوين الأحماض الدهنية",
        required: "تكامل قاعدة بيانات التغذية التفصيلية"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "نقص الفيتامينات/المعادن",
        description: "يتطلب بيانات المغذيات الدقيقة",
        required: "تكامل قاعدة بيانات التغذية الشاملة"
      },
      {
        icon: "fa-times-circle",
        color: "gray",
        title: "معلومات الألياف الغذائية/الكوليسترول",
        description: "يتطلب بيانات تحليل التغذية التفصيلية",
        required: "تكامل قاعدة بيانات التغذية"
      }
    ],
    
    conclusion: {
      title: "الحاجة إلى نظام متكامل",
      subtitle: "السعرات + التغذية + الصحة الشخصية + التعرف على الطعام بالذكاء الاصطناعي",
      points: [
        {
          icon: "fa-check-circle",
          color: "green",
          title: "متاح حالياً",
          items: [
            "تحليل الصحة الأساسي على أساس السعرات",
            "دعم إدارة الوزن والنظام الغذائي",
            "تحليل أنماط النظام الغذائي",
            "تحذيرات مبكرة للسمنة/الإفراط في الأكل"
          ]
        },
        {
          icon: "fa-star",
          color: "blue",
          title: "متاح مع تكامل قاعدة بيانات التغذية",
          items: [
            "توقع دقيق لخطر الأمراض (السكري، ضغط الدم، فرط شحميات الدم)",
            "تحليل التوازن الغذائي واقتراحات التحسين",
            "معلومات الحساسية وسلامة الأغذية",
            "نظام إدارة التغذية الشخصي"
          ]
        },
        {
          icon: "fa-rocket",
          color: "purple",
          title: "الهدف النهائي",
          items: [
            "التعرف على صور الطعام بالذكاء الاصطناعي (Google Vision AI / YOLOv8)",
            "تكامل قاعدة بيانات التغذية العامة (MFDS، USDA، RDA)",
            "تحليل معلومات الصحة الشخصية (العمر، الجنس، الوزن، النشاط)",
            "تنبيهات خطر الأمراض في الوقت الفعلي والتدريب الغذائي الشخصي"
          ]
        }
      ]
    },
    
    backButton: "العودة إلى الرئيسية",
    learnMoreButton: "معرفة المزيد"
  }
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = nutritionInfoData;
}
