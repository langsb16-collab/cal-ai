# CALCARE AI - AI 기반 음식 사진 인식 칼로리·영양소·질병 위험도 분석

> 사진 한 장으로 음식을 인식하고 칼로리를 자동 계산하며 질병 위험도를 예측하는 혁신적인 헬스케어 플랫폼

## 🎯 프로젝트 개요

**CALCARE AI**는 AI 기반 음식 사진 인식 기술을 활용하여 음식의 칼로리, 영양소를 자동으로 분석하고, 개인 건강 정보를 기반으로 질병 위험도(비만, 당뇨, 고혈압, 고지혈증)를 예측하는 디지털 헬스케어 웹 애플리케이션입니다.

### 핵심 목표
- 📸 **사진 한 장으로 간편한 칼로리 추적**
- 🧠 **AI 기반 자동 음식 인식 및 영양소 분석**
- ⚕️ **FDA/USDA 기반 질병 위험도 예측**
- 📊 **개인 맞춤형 영양 데이터 시각화**
- 💎 **무료/프리미엄 회원제 운영**

## 🌐 URLs

### 개발 환경
- **Sandbox URL**: https://3000-ismvflxixhglnx1zslq6x-2e1b9533.sandbox.novita.ai
- **로컬 개발**: http://localhost:3000
- **API Base**: `/api/*`

### 프로덕션
- **도메인**: puke365.biz (배포 예정)
- **GitHub**: https://github.com/langsb16-collab/cal-ai

## ✨ 주요 기능

### ✅ 현재 완료된 기능

#### 1. AI 음식 인식 시스템
- [x] 사진 업로드/촬영 인터페이스
- [x] Mock AI 분석 엔진 (프로토타입)
- [x] 40종+ 음식 데이터베이스 (한식, 양식, 중식, 디저트)

#### 2. 영양소 자동 계산
- [x] 칼로리, 단백질, 탄수화물, 지방 계산
- [x] 당류, 나트륨, 식이섬유, 콜레스테롤 추적
- [x] 1회 제공량 기준 영양소 표시

#### 3. 질병 위험도 예측
- [x] 비만 위험도 (BMI 기반)
- [x] 당뇨 위험도 (당류/탄수화물 분석)
- [x] 고혈압 위험도 (나트륨/지방 분석)
- [x] 고지혈증 위험도 (지방/콜레스테롤 분석)
- [x] 3단계 리스크 레벨 (낮음/보통/높음)

#### 4. 회원 관리 시스템
- [x] 무료 회원 (2회 체험 제한)
- [x] 프리미엄 회원 (무제한 분석)
- [x] 사용자 프로필 관리 (나이, 성별, 키, 몸무게, 활동량, 목표)

#### 5. 일일 영양 통계
- [x] 하루 총 칼로리/영양소 집계
- [x] Harris-Benedict 공식 기반 권장 칼로리 계산
- [x] 실시간 영양소 차트 (Chart.js 도넛 차트)
- [x] 식사 시간대 자동 분류 (아침/점심/저녁/간식)

#### 6. 음식 검색 기능
- [x] 실시간 음식 검색 (한글/영문)
- [x] 카테고리별 분류
- [x] 음식 선택 시 즉시 분석 결과 표시

#### 7. 데이터 관리
- [x] Cloudflare D1 SQLite 데이터베이스
- [x] 사용자, 음식, 섭취 기록, 질병 위험도 테이블
- [x] 일일 요약 통계 자동 집계

#### 8. 다국어 지원 🌍
- [x] 한국어 (Korean) - 기본 언어
- [x] 영어 (English)
- [x] 중국어 (中文)
- [x] 일본어 (日本語)
- [x] 베트남어 (Tiếng Việt)
- [x] 아랍어 (العربية) - RTL 지원
- [x] 실시간 언어 전환
- [x] localStorage 기반 언어 설정 저장
- [x] 모든 UI 텍스트 및 메시지 번역
- [x] RTL(Right-to-Left) 레이아웃 지원

#### 9. 반응형 디자인 📱💻
- [x] 모바일 최적화 (320px~768px)
- [x] 태블릿 지원 (768px~1024px)
- [x] PC 데스크톱 (1024px+)
- [x] 터치 친화적 버튼 크기 (최소 44px)
- [x] iOS zoom 방지 (input font-size 16px)
- [x] 커스텀 스크롤바
- [x] 모바일 헤더 최적화
- [x] 검색 결과 터치 피드백

### 🔄 기능별 URI 요약

#### API Endpoints

| Method | Path | 파라미터 | 설명 |
|--------|------|---------|------|
| GET | `/api/user/:email` | email | 사용자 정보 조회 |
| POST | `/api/user` | email, name, age, gender, height, weight, activity_level, goal | 사용자 생성/업데이트 |
| GET | `/api/foods/search` | q (query string) | 음식 검색 |
| GET | `/api/foods/category/:category` | category | 카테고리별 음식 조회 |
| POST | `/api/intake` | user_id, food_name, serving_size, calories, protein, carbs, fat, sugar, sodium, meal_type | 음식 섭취 기록 |
| GET | `/api/stats/:user_id/:date` | user_id, date (YYYY-MM-DD) | 일일 통계 조회 |
| GET | `/api/stats/weekly/:user_id` | user_id | 주간 통계 조회 |
| POST | `/api/upgrade` | user_id | 프리미엄 업그레이드 |

#### 프론트엔드 페이지

| Path | 설명 |
|------|------|
| `/` | 메인 대시보드 (음식 분석, 통계) |

### ⏳ 미구현 기능

#### 1. AI 비전 모델 통합
- [ ] Google Vision AI / YOLOv8 연동
- [ ] 실제 이미지 객체 인식
- [ ] 음식 부피/양 추정 (Depth Sensor)

#### 2. 고급 영양 분석
- [ ] 비타민/미네랄 분석
- [ ] 알레르기 성분 검사
- [ ] 식품 첨가물 정보

#### 3. AI 영양 코칭
- [ ] GPT 기반 식단 추천
- [ ] 맞춤형 영양 조언
- [ ] 식습관 개선 코칭

#### 4. 추가 건강 기능
- [ ] AI 운동 인식
- [ ] AI 생리주기 분석 (여성 건강)
- [ ] 혈당 추적 연동

#### 5. 소셜 기능
- [ ] 식단 공유
- [ ] 친구 비교
- [ ] 챌린지/목표 설정

#### 6. 결제 시스템
- [ ] Stripe 결제 연동
- [ ] 구독 관리
- [ ] 영수증 발행

#### 7. 다국어 지원
- [x] 한국어, 영어, 중국어, 일본어 (완료)
- [x] 베트남어, 아랍어 (완료)
- [x] RTL(아랍어) 레이아웃 지원 (완료)
- [x] i18n 국제화 시스템 (완료)

## 📊 데이터 아키텍처

### 데이터 모델

#### 1. Users (사용자)
```sql
- id, email, name, age, gender
- height, weight, activity_level, goal
- membership_type (free/premium)
- free_trial_count, subscription_expires_at
```

#### 2. Foods (음식 DB)
```sql
- id, name, name_ko, category
- serving_size, calories, protein, carbs, fat
- sugar, sodium, fiber, cholesterol
```

#### 3. Food Intakes (섭취 기록)
```sql
- id, user_id, food_name, image_url
- serving_size, calories, protein, carbs, fat
- meal_type (breakfast/lunch/dinner/snack)
- intake_date
```

#### 4. Health Risks (질병 위험도)
```sql
- id, user_id, intake_id
- obesity_risk, diabetes_risk
- hypertension_risk, hyperlipidemia_risk
```

#### 5. Daily Summaries (일일 요약)
```sql
- id, user_id, summary_date
- total_calories, total_protein, total_carbs, total_fat
- recommended_calories
```

### 데이터 저장 서비스

- **Cloudflare D1 Database**: SQLite 기반 관계형 데이터베이스
  - 사용자 정보, 음식 DB, 섭취 기록, 질병 위험도, 일일 통계
  - 로컬 개발: `.wrangler/state/v3/d1` (SQLite)
  - 프로덕션: Cloudflare D1 분산 데이터베이스

- **데이터 플로우**:
  1. 사진 업로드 → AI 인식 (Mock)
  2. 영양소 계산 → D1 저장
  3. 질병 위험도 예측 → D1 저장
  4. 일일 요약 자동 집계 → D1 저장
  5. 차트 시각화 (Chart.js)

## 📖 사용자 가이드

### 시작하기

1. **회원 가입 없이 체험**
   - 기본 테스트 사용자로 자동 로그인
   - 무료 회원은 2회 체험 가능

2. **음식 분석하기**
   - 📸 카메라 아이콘 클릭 → 사진 업로드
   - 🤖 "AI 분석 시작" 버튼 클릭
   - ✅ 영양소 및 질병 위험도 확인

3. **음식 검색하기**
   - 🔍 검색창에 음식명 입력
   - 리스트에서 음식 선택
   - 자동으로 영양 정보 표시

4. **섭취 기록 저장**
   - 💾 "섭취 기록 저장" 버튼 클릭
   - 오늘의 영양 섭취 통계 자동 업데이트
   - 차트로 영양소 비율 확인

5. **프리미엄 업그레이드**
   - 무료 체험 2회 소진 시 팝업 표시
   - 👑 "지금 업그레이드" 클릭
   - 연간 $9.99로 무제한 이용

### 주요 화면 설명

#### 언어 선택
- **상단 우측**: 6개 언어 버튼 (한국어/English/中文/日本語/Tiếng Việt/العربية)
- 클릭 시 즉시 전체 UI 언어 변경
- 선택한 언어는 자동으로 저장됨
- 아랍어 선택 시 RTL(오른쪽→왼쪽) 레이아웃 자동 전환

#### 메인 대시보드
- **좌측**: 사진 업로드 & 음식 검색
- **우측**: 분석 결과 & 질병 위험도
- **하단**: 오늘의 영양 섭취 통계 & 차트

#### 질병 위험도 해석
- 🟢 **낮음 (0-30%)**: 안전한 수준
- 🟡 **보통 (30-60%)**: 주의 필요
- 🔴 **높음 (60-100%)**: 위험, 식단 조절 필요

## 🚀 배포 정보

### 기술 스택
- **프레임워크**: Hono (lightweight web framework)
- **런타임**: Cloudflare Workers
- **데이터베이스**: Cloudflare D1 (SQLite)
- **프론트엔드**: Vanilla JavaScript + Tailwind CSS
- **차트**: Chart.js
- **HTTP 클라이언트**: Axios

### 개발 환경 설정

```bash
# 의존성 설치
npm install

# DB 마이그레이션
npm run db:migrate:local

# DB 시드 데이터
npm run db:seed

# 빌드
npm run build

# PM2로 개발 서버 시작
pm2 start ecosystem.config.cjs

# 로그 확인
pm2 logs webapp --nostream

# 서비스 상태 확인
pm2 list

# 서비스 중지
pm2 stop webapp
pm2 delete webapp
```

### 프로덕션 배포

```bash
# Cloudflare Pages 배포
npm run deploy:prod

# D1 마이그레이션 (프로덕션)
npm run db:migrate:prod
```

### 배포 상태
- **플랫폼**: Cloudflare Pages
- **프로젝트명**: puke365-biz
- **도메인**: puke365.biz (설정 예정)
- **GitHub**: https://github.com/langsb16-collab/cal-ai
- **상태**: ✅ 개발 완료 (배포 대기)
- **마지막 업데이트**: 2025-11-29

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: #A8C4A4 (Soft Green)
- **Background Gradient**: #A8C4A4 → #C8DCC5
- **Card**: rgba(255, 255, 255, 0.95)
- **영양소 색상**:
  - 칼로리: Orange (#F97316)
  - 단백질: Blue (#3B82F6)
  - 탄수화물: Green (#22C55E)
  - 지방: Yellow (#FBBF24)

### UI 특징
- ✨ 카드 기반 미니멀 디자인
- 🎨 부드러운 그린 그라데이션 배경
- 📱 반응형 레이아웃 (모바일 우선)
- 🖼️ 글래스모피즘 효과
- 📊 직관적인 차트 시각화

## 🔮 향후 개발 계획

### Phase 1: AI 모델 통합 (1-2개월)
- [ ] Google Vision AI / YOLOv8 연동
- [ ] 실제 음식 인식 구현
- [ ] 음식 DB 확장 (1000종+)

### Phase 2: 고급 기능 (2-3개월)
- [ ] AI 영양 코칭 (GPT 연동)
- [ ] 운동 인식 기능
- [ ] 생리주기 분석 (여성 건강)

### Phase 3: 비즈니스 모델 (3-4개월)
- [ ] Stripe 결제 시스템
- [x] 다국어 지원 (6개 언어 완료: 한/영/중/일/베/아랍)
- [x] RTL 레이아웃 지원 (아랍어)
- [ ] 마케팅 페이지 및 랜딩 페이지

### Phase 4: 글로벌 확장 (4-6개월)
- [ ] 헬스케어/보험사 API 제휴
- [ ] 병원/피트니스 센터 B2B 서비스
- [ ] 모바일 앱 개발 (Flutter)

## 📝 라이선스

Copyright © 2025 CALCARE AI. All rights reserved.

## 🤝 기여

현재 비공개 개발 프로젝트입니다.

---

**Made with ❤️ by CALCARE AI Team**
