#!/bin/bash
# ============================================================
# server-setup.sh — EC2 초기 환경 구성 스크립트
# Ubuntu 22.04 LTS 기준
# 사용법: SSH 접속 후 bash server-setup.sh
# ============================================================
set -e

echo "=== [1/5] 패키지 업데이트 ==="
sudo apt update && sudo apt upgrade -y

echo "=== [2/5] Node.js 20 LTS 설치 ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v

echo "=== [3/5] PM2 전역 설치 ==="
sudo npm install -g pm2
pm2 -v

echo "=== [4/5] Nginx 설치 ==="
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx

echo "=== [5/5] UFW 방화벽 설정 ==="
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable
sudo ufw status

echo ""
echo "✅ 서버 초기 환경 구성 완료"
echo "   Node: $(node -v)"
echo "   npm:  $(npm -v)"
echo "   PM2:  $(pm2 -v)"
echo ""
echo "다음 단계: deploy.sh 를 로컬에서 실행해 코드를 전송하세요."
