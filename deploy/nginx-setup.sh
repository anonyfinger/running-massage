#!/bin/bash
# ============================================================
# nginx-setup.sh — 서버에서 실행하는 Nginx 설정 스크립트
# 사용법: bash /home/ubuntu/paju-k/deploy/nginx-setup.sh YOUR_DOMAIN
# ============================================================
set -e

DOMAIN="${1:-}"

if [ -z "$DOMAIN" ]; then
  echo "❌ 도메인을 인자로 전달하세요."
  echo "   예) bash nginx-setup.sh example.com"
  exit 1
fi

NGINX_CONF="/etc/nginx/sites-available/paju-k"
SOURCE_CONF="/home/ubuntu/paju-k/deploy/nginx.conf"

echo "=== [1/4] nginx.conf 복사 및 도메인 치환 ==="
sudo cp "$SOURCE_CONF" "$NGINX_CONF"
sudo sed -i "s/YOUR_DOMAIN/$DOMAIN/g" "$NGINX_CONF"

echo "=== [2/4] 기본 사이트 비활성화 ==="
sudo rm -f /etc/nginx/sites-enabled/default

echo "=== [3/4] paju-k 사이트 활성화 ==="
sudo ln -sf "$NGINX_CONF" /etc/nginx/sites-enabled/paju-k

echo "=== [4/4] Nginx 설정 검증 및 재시작 ==="
sudo nginx -t
sudo systemctl reload nginx

echo ""
echo "✅ Nginx 설정 완료"
echo "   도메인: http://$DOMAIN"
echo ""
echo "다음 단계: HTTPS 적용"
echo "   bash /home/ubuntu/paju-k/deploy/certbot-setup.sh $DOMAIN"
