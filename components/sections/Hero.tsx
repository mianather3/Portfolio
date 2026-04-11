"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function AnimatedCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    let t = 0;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const dots: { x: number; y: number; vx: number; vy: number; r: number }[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.004;

      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(15,15,14,0.12)";
        ctx.fill();
      });

      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(15,15,14,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
}

const stats = [
  { value: "5+", label: "Production systems" },
  { value: "3", label: "Cloud deployments" },
  { value: "2", label: "AI-integrated apps" },
  { value: "3.6", label: "GPA / Honors" },
];

export default function Hero() {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 2.5rem", paddingTop: "80px", overflow: "hidden", background: "linear-gradient(160deg, #fafaf8 0%, #f3f3ef 50%, #eef0f8 100%)" }}>
      <AnimatedCanvas />

      {/* Subtle grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(15,15,14,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,15,14,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: "900px", zIndex: 1 }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", border: "1px solid #e8e8e3", borderRadius: "100px", padding: "0.35rem 0.9rem 0.35rem 0.6rem", marginBottom: "2.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
        >
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 2px rgba(34,197,94,0.25)", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ fontSize: "0.78rem", fontWeight: 500, color: "#6b6b65", fontFamily: "'DM Mono', monospace", letterSpacing: "0.02em" }}>
            Open to SWE internships · Summer 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#0f0f0e", marginBottom: "1.5rem" }}
        >
          Building systems that
          <br />
          <span style={{ fontStyle: "italic", color: "#3b5bdb" }}>think, scale,</span>
          <br />
          and <span style={{ fontStyle: "italic" }}>ship.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "1.1rem", color: "#6b6b65", lineHeight: 1.65, maxWidth: "580px", marginBottom: "2.5rem", fontWeight: 400 }}
        >
          Full-stack engineer specializing in AI-integrated systems, real-time architectures,
          and production-grade backend engineering. CS Honors at University of Utah.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginBottom: "4rem" }}
        >
          <a href="#projects" style={{ fontSize: "0.9rem", fontWeight: 600, color: "#fafaf8", background: "#0f0f0e", padding: "0.75rem 1.6rem", borderRadius: "8px", textDecoration: "none", transition: "all 0.2s", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1a1a18"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#0f0f0e"; e.currentTarget.style.transform = "translateY(0)"; }}
          >View Projects <span>→</span></a>
          <a href="/resume.pdf" download style={{ fontSize: "0.9rem", fontWeight: 600, color: "#0f0f0e", background: "transparent", padding: "0.75rem 1.6rem", borderRadius: "8px", textDecoration: "none", border: "1.5px solid #d0d0c8", transition: "all 0.2s", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#0f0f0e"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#d0d0c8"; e.currentTarget.style.transform = "translateY(0)"; }}
          >Download Resume ↓</a>
          <a href="#contact" style={{ fontSize: "0.9rem", fontWeight: 500, color: "#6b6b65", padding: "0.75rem 1.2rem", borderRadius: "8px", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#0f0f0e")}
            onMouseLeave={e => (e.currentTarget.style.color = "#6b6b65")}
          >Contact</a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
          style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}
        >
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.08 }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem", color: "#0f0f0e", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: "0.78rem", color: "#9b9b93", marginTop: "0.25rem", fontWeight: 500, letterSpacing: "0.01em" }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
      >
        <div style={{ fontSize: "0.7rem", color: "#9b9b93", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>scroll</div>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, #9b9b93, transparent)" }}
        />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 2px rgba(34,197,94,0.25); }
          50% { box-shadow: 0 0 0 4px rgba(34,197,94,0.15); }
        }
      `}</style>
    </section>
  );
}
