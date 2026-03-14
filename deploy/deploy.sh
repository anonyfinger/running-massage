#!/bin/bash
# ============================================================
# deploy.sh — 로컬에서 실행하는 배포 스크립트
# 사용법: ./deploy/deploy.sh
#
# 사전 준비:
#   1. EC2_IP 환경변수 또는 아래 변수 직접 수정
#   2. KEY_PATH 에 .pem 파일 경로 지정
# ============================================================
set -e

# ---- 변수 설정 (본인 환경에 맞게 수정) ----
EC2_IP="${EC2_IP:-YOUR_EC2_IP}"
EC2_USER="ubuntu"
KEY_PATH="${KEY_PATH:-~/.ssh/paju-k.pem}"
REMOTE_DIR="/home/ubuntu/paju-k"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
# -------------------------------------------

if [ "$EC2_IP" = "YOUR_EC2_IP" ]; then
  echo "❌ EC2_IP 를 설정하세요."
  echo "   예) export EC2_IP=3.34.xxx.xxx && ./deploy/deploy.sh"
  exit 1
fi

SSH_CMD="ssh -i $KEY_PATH -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_IP}"

echo "=== [1/4] 코드 전송 (rsync) ==="
rsync -avz --delete \
  --exclude '.next' \
  --exclude 'node_modules' \
  --exclude '.git' \
  --exclude 'deploy' \
  --exclude '.DS_Store' \
  --exclude '*.pem' \
  -e "ssh -i $KEY_PATH -o StrictHostKeyChecking=no" \
  "$PROJECT_DIR/" \
  "${EC2_USER}@${EC2_IP}:${REMOTE_DIR}/"

echo "=== [2/4] 의존성 설치 ==="
$SSH_CMD "cd $REMOTE_DIR && npm install --omit=dev"

echo "=== [3/4] Next.js 빌드 ==="
$SSH_CMD "cd $REMOTE_DIR && npm run build"

echo "=== [4/4] PM2 재시작 ==="
$SSH_CMD "cd $REMOTE_DIR && pm2 restart ecosystem.config.js --update-env 2>/dev/null || pm2 start ecosystem.config.js"
$SSH_CMD "pm2 save"

echo ""
echo "✅ 배포 완료"
echo "   서버: http://${EC2_IP}"
