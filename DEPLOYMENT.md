# Cloudflare Pages 배포 가이드

## 🔑 Cloudflare API 토큰 권한 설정

현재 제공된 API 토큰은 권한이 부족하여 배포가 실패합니다. 다음 권한이 필요합니다:

### 필수 권한

1. **Account - Cloudflare Pages - Edit**
   - Pages 프로젝트 생성 및 배포에 필요

2. **User - User Details - Read** 
   - 사용자 정보 조회에 필요

3. **Account - Account Settings - Read**
   - 계정 정보 조회에 필요

### API 토큰 재생성 방법

1. Cloudflare 대시보드 접속: https://dash.cloudflare.com/profile/api-tokens
2. "Create Token" 클릭
3. "Custom token" 선택
4. 다음 권한 추가:
   ```
   Account - Cloudflare Pages - Edit
   User - User Details - Read
   Account - Account Settings - Read
   ```
5. "Continue to summary" → "Create Token"
6. 생성된 토큰 복사 보관

## 🚀 배포 방법

### 1. 환경 변수 설정

```bash
export CLOUDFLARE_API_TOKEN="your-new-token-here"
```

### 2. 프로젝트 생성 (최초 1회)

```bash
cd /home/user/webapp
npx wrangler pages project create puke365-biz --production-branch main
```

### 3. 빌드

```bash
npm run build
```

### 4. 배포

```bash
npx wrangler pages deploy dist --project-name puke365-biz
```

## 📝 배포 후 작업

### 커스텀 도메인 연결 (선택사항)

```bash
npx wrangler pages domain add puke365.biz --project-name puke365-biz
```

### D1 데이터베이스 마이그레이션 (필수)

```bash
# D1 데이터베이스 생성
npx wrangler d1 create webapp-production

# wrangler.jsonc에 database_id 업데이트 후
npx wrangler d1 migrations apply webapp-production
```

## 🌐 배포 URL

배포 완료 후 다음 URL에서 접속 가능:

- **Production**: `https://puke365-biz.pages.dev`
- **Branch**: `https://main.puke365-biz.pages.dev`
- **Custom Domain**: `https://puke365.biz` (설정 시)

## 🔧 자동 배포 설정 (GitHub Actions)

GitHub Actions를 통한 자동 배포를 원하시면 다음 워크플로우를 추가하세요:

`.github/workflows/deploy.yml`:

\`\`\`yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: \${{ secrets.CLOUDFLARE_API_TOKEN }}
          command: pages deploy dist --project-name puke365-biz
\`\`\`

GitHub Repository Settings에서 `CLOUDFLARE_API_TOKEN` Secret 추가 필요

## ⚠️ 문제 해결

### Authentication error [code: 10000]

→ API 토큰 권한 부족. 위의 "필수 권한" 참조하여 토큰 재생성

### Project not found

→ 프로젝트가 아직 생성되지 않음. "프로젝트 생성" 단계 실행

### Database not found

→ D1 데이터베이스 미생성. "D1 데이터베이스 마이그레이션" 단계 실행

## 📞 지원

문제가 지속되면 Cloudflare 대시보드에서 직접 배포하거나 다음을 확인하세요:

- wrangler 로그: `~/.config/.wrangler/logs/`
- Cloudflare 대시보드: https://dash.cloudflare.com/
