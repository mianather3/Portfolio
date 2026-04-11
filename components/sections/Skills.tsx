"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    name: "Languages",
    color: "#3b5bdb",
    items: ["C++", "Python", "Java", "C#", "Swift", "TypeScript", "JavaScript", "SQL", "C", "HTML/CSS"],
  },
  {
    name: "Full-Stack",
    color: "#2f9e44",
    items: ["React", "Next.js", "Node.js", "Express.js", "Flask", "Blazor", "SwiftUI", ".NET", "REST APIs", "Tailwind CSS"],
  },
  {
    name: "AI / ML",
    color: "#6741d9",
    items: ["OpenAI API", "GPT-4o-mini", "LLM Integration", "Ollama", "qwen3", "Prompt Engineering", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    name: "Databases & Cloud",
    color: "#e8590c",
    items: ["PostgreSQL", "SQLite", "MySQL", "H2", "Azure App Service", "AWS Elastic Beanstalk", "Vercel", "Railway", "Git/GitHub"],
  },
];

function SkillPill({ label, color }: { label: string; color: string }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "0.5rem",
      background: "#fff", border: "1px solid #e8e8e3", borderRadius: "8px",
      padding: "0.55rem 1rem", whiteSpace: "nowrap", flexShrink: 0,
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
    }}>
      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, display: "inline-block", flexShrink: 0 }} />
      <span style={{ fontSize: "0.84rem", fontWeight: 500, color: "#0f0f0e", fontFamily: "'DM Mono', monospace" }}>{label}</span>
    </div>
  );
}

function SkillRow({ category, direction, speed }: { category: typeof categories[0]; direction: "left" | "right"; speed: number }) {
  const doubled = [...category.items, ...category.items, ...category.items];
  return (
    <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
      <motion.div
        animate={{ x: direction === "left" ? [0, -33.33 + "%"] : [-33.33 + "%", 0] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: "0.6rem", width: "max-content" }}
      >
        {doubled.map((item, i) => <SkillPill key={`${item}-${i}`} label={item} color={category.color} />)}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" style={{ padding: "8rem 0", background: "linear-gradient(180deg, #fafaf8, #f3f3ef)" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 2.5rem" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "4rem" }}
        >
          <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#9b9b93", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "1rem" }}>Technical Stack</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0f0f0e", lineHeight: 1.1 }}>
            Built across the stack.
          </h2>
        </motion.div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {categories.map((cat, i) => (
          <div key={cat.name}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", paddingLeft: "2.5rem", marginBottom: "0.75rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: cat.color, display: "inline-block" }} />
              <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#9b9b93", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>{cat.name}</span>
            </div>
            <SkillRow category={cat} direction={i % 2 === 0 ? "left" : "right"} speed={20 + i * 4} />
          </div>
        ))}
      </div>
    </section>
  );
}
