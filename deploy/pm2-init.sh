#!/bin/bash
# ============================================================
# pm2-init.sh — 서버에서 최초 1회 실행 (PM2 기동 + 자동시작 등록)
# 사용법: 서버 SSH 접속 후  bash /home/ubuntu/paju-k/deploy/pm2-init.sh
# ============================================================
set -e

REMOTE_DIR="/home/ubuntu/paju-k"

# 로그 디렉토리 생성
mkdir -p /home/ubuntu/logs

cd "$REMOTE_DIR"

echo "=== PM2 앱 시작 ==="
pm2 start ecosystem.config.js

echo "=== PM2 프로세스 목록 저장 ==="
pm2 save

echo "=== 서버 재시작 시 자동 실행 등록 ==="
# 아래 명령이 출력하는 'sudo env PATH=...' 명령을 복사해서 실행해야 함
pm2 startup

echo ""
echo "✅ PM2 초기화 완료"
echo "   pm2 list        — 실행 중인 프로세스 확인"
echo "   pm2 logs paju-k — 실시간 로그 확인"
echo "   pm2 monit       — 모니터링 대시보드"
