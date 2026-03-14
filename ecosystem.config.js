/** @type {import('pm2').StartOptions} */
module.exports = {
  apps: [
    {
      name: "paju-k",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/home/ubuntu/paju-k",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      // 로그 파일 위치
      out_file: "/home/ubuntu/logs/paju-k-out.log",
      error_file: "/home/ubuntu/logs/paju-k-err.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
