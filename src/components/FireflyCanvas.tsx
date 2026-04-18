"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
  phaseSpeed: number;
  gold: boolean;
};

function clampParticles(w: number, h: number): number {
  const area = w * h;
  return Math.min(140, Math.max(36, Math.floor(area / 16000)));
}

function initParticles(w: number, h: number): Particle[] {
  const n = clampParticles(w, h);
  const out: Particle[] = [];
  for (let i = 0; i < n; i++) {
    out.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: 0.85 + Math.random() * 1.65,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.0008 + Math.random() * 0.0012,
      gold: Math.random() > 0.45,
    });
  }
  return out;
}

/**
 * 화면 전체에 얇게 깔리는 반빛불(파티클) — 골드·화이트.
 * pointer-events: none, 본문·헤더 아래가 아니라 배경 위 레이어.
 */
export function FireflyCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles = initParticles(window.innerWidth, window.innerHeight);
    let raf = 0;
    let start = performance.now();

    /**
     * 바깥: 넓은 소프트 글로우 / 가운데: 채도 있는 네온 코어 — 레이어 분리
     * (배경 → 외곽 bloom → 중간 halo → 네온 코어 → 하이라이트)
     */
    const drawNeonParticle = (p: Particle, pulse: number) => {
      const k = Math.min(1, Math.max(0.35, pulse));
      const { x, y } = p;
      const wobble = 1 + Math.sin(p.phase) * 0.08;

      // 1) 외곽 글로우 — 넓게 퍼지는 저채도 bloom
      const outerR = p.r * (6 + wobble);
      const gOuter = ctx.createRadialGradient(
        x,
        y,
        p.r * 1.2,
        x,
        y,
        outerR,
      );
      if (p.gold) {
        gOuter.addColorStop(0, `rgba(255, 210, 130, ${0.14 * k})`);
        gOuter.addColorStop(0.35, `rgba(218, 185, 110, ${0.07 * k})`);
        gOuter.addColorStop(0.7, `rgba(201, 162, 89, ${0.03 * k})`);
        gOuter.addColorStop(1, "rgba(201, 162, 89, 0)");
      } else {
        gOuter.addColorStop(0, `rgba(255, 255, 255, ${0.11 * k})`);
        gOuter.addColorStop(0.45, `rgba(248, 252, 255, ${0.05 * k})`);
        gOuter.addColorStop(1, "rgba(255, 255, 255, 0)");
      }
      ctx.fillStyle = gOuter;
      ctx.beginPath();
      ctx.arc(x, y, outerR, 0, Math.PI * 2);
      ctx.fill();

      // 2) 중간 halo — 코어와 외곽 사이 발광
      const midR = p.r * 2.6;
      const gMid = ctx.createRadialGradient(x, y, p.r * 0.15, x, y, midR);
      if (p.gold) {
        gMid.addColorStop(0, `rgba(255, 230, 160, ${0.38 * k})`);
        gMid.addColorStop(0.3, `rgba(255, 200, 95, ${0.22 * k})`);
        gMid.addColorStop(0.65, `rgba(240, 175, 70, ${0.08 * k})`);
        gMid.addColorStop(1, "rgba(255, 180, 80, 0)");
      } else {
        gMid.addColorStop(0, `rgba(255, 255, 255, ${0.42 * k})`);
        gMid.addColorStop(0.35, `rgba(255, 252, 255, ${0.18 * k})`);
        gMid.addColorStop(0.75, `rgba(235, 245, 255, ${0.06 * k})`);
        gMid.addColorStop(1, "rgba(255, 255, 255, 0)");
      }
      ctx.fillStyle = gMid;
      ctx.beginPath();
      ctx.arc(x, y, midR, 0, Math.PI * 2);
      ctx.fill();

      // 3) 가운데 네온 코어 — 선명한 고채도
      const neonR = p.r * 0.62;
      const gNeon = ctx.createRadialGradient(x, y, 0, x, y, neonR);
      if (p.gold) {
        gNeon.addColorStop(0, `rgba(255, 255, 248, ${0.98 * k})`);
        gNeon.addColorStop(0.22, `rgba(255, 228, 150, ${0.92 * k})`);
        gNeon.addColorStop(0.5, `rgba(255, 200, 85, ${0.55 * k})`);
        gNeon.addColorStop(0.85, `rgba(255, 170, 60, ${0.18 * k})`);
        gNeon.addColorStop(1, "rgba(255, 160, 50, 0)");
      } else {
        gNeon.addColorStop(0, `rgba(255, 255, 255, ${0.98 * k})`);
        gNeon.addColorStop(0.28, `rgba(255, 255, 255, ${0.72 * k})`);
        gNeon.addColorStop(0.6, `rgba(240, 248, 255, ${0.28 * k})`);
        gNeon.addColorStop(1, "rgba(255, 255, 255, 0)");
      }
      ctx.fillStyle = gNeon;
      ctx.beginPath();
      ctx.arc(x, y, neonR, 0, Math.PI * 2);
      ctx.fill();

      // 4) 중심 하이라이트 (네온 튜브 상단 반짝)
      const hotR = p.r * 0.16;
      ctx.fillStyle = `rgba(255, 255, 255, ${0.65 * k})`;
      ctx.beginPath();
      ctx.arc(x, y, hotR, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawParticle = (p: Particle, t: number) => {
      const pulse = 0.42 + 0.38 * Math.sin(t * p.phaseSpeed + p.phase);
      drawNeonParticle(p, pulse);
    };

    const drawParticleStatic = (p: Particle) => {
      const pulse = 0.62 + 0.12 * Math.sin(p.phase);
      drawNeonParticle(p, pulse);
    };

    const applyCanvasSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const drawStatic = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (const p of particles) drawParticleStatic(p);
      ctx.globalCompositeOperation = "source-over";
    };

    const tick = (now: number) => {
      if (mqReduce.matches) {
        return;
      }
      const t = (now - start) * 0.001;
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";
      for (const p of particles) {
        p.x += p.vx + Math.sin(t * 0.4 + p.phase) * 0.08;
        p.y += p.vy + Math.cos(t * 0.35 + p.phase) * 0.08;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
        drawParticle(p, t);
      }
      ctx.globalCompositeOperation = "source-over";

      raf = requestAnimationFrame(tick);
    };

    const resize = () => {
      applyCanvasSize();
      particles = initParticles(window.innerWidth, window.innerHeight);
      if (mqReduce.matches) {
        drawStatic();
        return;
      }
      start = performance.now();
    };

    resize();

    const onResize = () => {
      resize();
      if (!mqReduce.matches) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("resize", onResize);

    const onMotionChange = () => {
      cancelAnimationFrame(raf);
      resize();
      if (!mqReduce.matches) {
        start = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    mqReduce.addEventListener("change", onMotionChange);

    if (!mqReduce.matches) {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      mqReduce.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="firefly-canvas"
      id="lp-cvs"
      aria-hidden="true"
    />
  );
}
