#!/bin/bash
# ============================================================
# certbot-setup.sh — Let's Encrypt HTTPS 적용 스크립트
# 사용법: bash /home/ubuntu/paju-k/deploy/certbot-setup.sh YOUR_DOMAIN
#
# 전제 조건:
#   - DNS A 레코드가 이 서버 IP를 가리키고 있어야 함
#   - Nginx가 80 포트로 실행 중이어야 함
# ============================================================
set -e

DOMAIN="${1:-}"

if [ -z "$DOMAIN" ]; then
  echo "❌ 도메인을 인자로 전달하세요."
  echo "   예) bash certbot-setup.sh example.com"
  exit 1
fi

echo "=== [1/3] Certbot 설치 ==="
sudo apt install -y certbot python3-certbot-nginx

echo "=== [2/3] SSL 인증서 발급 (도메인: $DOMAIN, www.$DOMAIN) ==="
sudo certbot --nginx \
  -d "$DOMAIN" \
  -d "www.$DOMAIN" \
  --non-interactive \
  --agree-tos \
  --redirect \
  -m "admin@$DOMAIN"

echo "=== [3/3] 자동 갱신 테스트 ==="
sudo certbot renew --dry-run

echo ""
echo "✅ HTTPS 적용 완료"
echo "   https://$DOMAIN"
echo ""
echo "인증서 만료일 확인:"
sudo certbot certificates
