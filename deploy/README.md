# EC2 배포 가이드 — paju-k

## 아키텍처

```
Browser → Nginx (443 HTTPS) → PM2 (localhost:3000) → Next.js
```

---

## 최초 배포 순서

### 1. AWS EC2 인스턴스 생성 (콘솔에서 수동)

| 항목 | 값 |
|---|---|
| AMI | Ubuntu Server 22.04 LTS |
| Instance Type | t3.small (권장) / t3.micro (프리 티어) |
| Storage | 20GB gp3 |
| Key Pair | 새 .pem 생성 후 저장 |

**Security Group 인바운드:**
- 22 (SSH) — 내 IP
- 80 (HTTP) — 0.0.0.0/0
- 443 (HTTPS) — 0.0.0.0/0

**Elastic IP 할당:**
EC2 콘솔 → 탄력적 IP → 할당 → 인스턴스에 연결

---

### 2. 서버 초기 환경 구성

```bash
# .pem 파일 권한 설정 (로컬에서)
chmod 400 ~/.ssh/paju-k.pem

# SSH 접속
ssh -i ~/.ssh/paju-k.pem ubuntu@<EC2_IP>

# 서버에서 실행
bash /tmp/server-setup.sh
```

> server-setup.sh를 먼저 서버로 전송해야 합니다:
> ```bash
> scp -i ~/.ssh/paju-k.pem deploy/server-setup.sh ubuntu@<EC2_IP>:/tmp/
> ```

---

### 3. 코드 배포

```bash
# 로컬에서 실행
export EC2_IP=<EC2_ELASTIC_IP>
export KEY_PATH=~/.ssh/paju-k.pem
./deploy/deploy.sh
```

---

### 4. PM2 초기화 (서버에서 1회)

```bash
ssh -i ~/.ssh/paju-k.pem ubuntu@<EC2_IP>
bash /home/ubuntu/paju-k/deploy/pm2-init.sh

# pm2 startup 출력 명령을 복사해서 실행 (예시):
# sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
```

---

### 5. Nginx 설정 (서버에서)

```bash
bash /home/ubuntu/paju-k/deploy/nginx-setup.sh example.com
```

---

### 6. DNS A 레코드 연결

| 레코드 타입 | 이름 | 값 |
|---|---|---|
| A | @ (또는 yourdomain.com) | EC2 Elastic IP |
| A | www | EC2 Elastic IP |

- **Route53**: 호스팅 영역 → 레코드 생성 → A 유형
- **외부 도메인**: 도메인 등록 업체 DNS 설정

DNS 전파 확인:
```bash
dig +short yourdomain.com
```

---

### 7. HTTPS 적용 (DNS 전파 후 서버에서)

```bash
bash /home/ubuntu/paju-k/deploy/certbot-setup.sh example.com
```

---

## 이후 재배포

코드를 수정한 뒤:

```bash
export EC2_IP=<EC2_ELASTIC_IP>
export KEY_PATH=~/.ssh/paju-k.pem
./deploy/deploy.sh
```

---

## 유용한 서버 명령어

```bash
# PM2 상태 확인
pm2 list

# 실시간 로그
pm2 logs paju-k

# 모니터링 대시보드
pm2 monit

# Nginx 상태
sudo systemctl status nginx

# Nginx 로그
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# 인증서 만료일 확인
sudo certbot certificates
```
