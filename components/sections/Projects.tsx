"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Tag = ({ label }: { label: string }) => (
  <span style={{ fontSize: "0.72rem", fontWeight: 500, color: "#4a4a45", background: "#f0f0ec", border: "1px solid #e8e8e3", borderRadius: "4px", padding: "0.2rem 0.55rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.01em", whiteSpace: "nowrap" }}>
    {label}
  </span>
);

const Metric = ({ value, label }: { value: string; label: string }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", color: "#0f0f0e" }}>{value}</div>
    <div style={{ fontSize: "0.72rem", color: "#9b9b93", marginTop: "0.15rem", fontWeight: 500 }}>{label}</div>
  </div>
);

const projects = [
  {
    id: "pitwall",
    label: "FLAGSHIP",
    name: "PitWall v2.0",
    tagline: "AI-powered F1 race strategy. Cross-platform. Production-grade.",
    desc: "A production-grade race strategy platform that ingests live OpenF1 race data and runs it through a GPT-4o-mini decision engine to generate context-aware pit stop recommendations — tire compound, lap delta, track position, and weather — in real-time.",
    arch: "SwiftUI iOS frontend · React web app · Blazor C#/.NET REST API · OpenF1 live data · GPT-4o-mini strategy engine · Azure App Service · Vercel deployment",
    challenges: [
      "Designed a real-time data pipeline ingesting OpenF1 telemetry and normalizing lap delta + tire state into LLM-consumable context",
      "Engineered prompt schema with compound-specific heuristics for GPT-4o-mini to output structured pit window + risk scores",
      "Iterated v1.0 → v2.0 in under two weeks: cross-platform expansion, circuit intelligence dashboards, weather integration",
      "Deployed across Azure (backend) + Vercel (web), coordinating iOS simulator + web builds in parallel",
    ],
    stack: ["Swift", "SwiftUI", "C#", "Blazor", ".NET", "React", "OpenAI API", "Azure", "Vercel", "OpenF1"],
    metrics: [{ value: "4", label: "screen flows" }, { value: "2", label: "platforms" }, { value: "~2wk", label: "v1→v2" }],
    github: "https://github.com/mianather3/PitWall",
    live: "https://pit-wall.vercel.app",
    filter: ["AI", "Full-stack"],
    accent: "#3b5bdb",
  },
  {
    id: "snake",
    label: "SYSTEMS",
    name: "Multiplayer Snake",
    tagline: "Real-time networking, custom TCP, 60 FPS canvas. Built from primitives.",
    desc: "A real-time multiplayer game built on a custom TCP networking library — no socket.io, no third-party game engines. Every frame is deserialized JSON game-state, rendered at 60 FPS with a full camera system and MVC architecture.",
    arch: "C# TCP server · Custom binary protocol · JSON game-state deserialization · Blazor canvas renderer · MySQL live stats · Custom HTTP analytics server",
    challenges: [
      "Built a custom TCP networking library handling connection lifecycle, packet framing, and reconnect logic without any library scaffolding",
      "Designed a JSON game-state schema that serializes 60 FPS updates efficiently across multiple clients",
      "Implemented a camera system with smooth follow, bounds clamping, and viewport culling for performance",
      "Engineered a custom HTTP server in C# to serve real-time analytics dashboards backed by MySQL",
    ],
    stack: ["C#", "Blazor", "TCP", "JSON", "Canvas API", "MySQL", "MVC", "HTTP Server"],
    metrics: [{ value: "60", label: "FPS render" }, { value: "TCP", label: "custom lib" }, { value: "MVC", label: "architecture" }],
    github: "https://github.com/mianather3",
    live: null,
    filter: ["Systems"],
    accent: "#0f0f0e",
  },
  {
    id: "spreadsheet",
    label: "SYSTEMS",
    name: "Spreadsheet AI",
    tagline: "Formula parser, dependency graph, LLM tool-calling. Engineered from scratch.",
    desc: "A full-stack spreadsheet engine built without any spreadsheet library — custom formula parser, topological dependency graph for cell evaluation order, circular dependency detection, and a local LLM (qwen3:8b) integrated as an AI assistant with custom tool-calling.",
    arch: "Custom formula parser · Dependency Graph engine · 26×50 interactive grid · LLM tool-calling (Ollama/qwen3) · JSON persistence · Blazor C#/.NET",
    challenges: [
      "Implemented a recursive descent formula parser handling nested expressions, cell references, and function calls",
      "Built a topological sort-based dependency graph to determine evaluation order and detect circular references",
      "Integrated qwen3:8b via Ollama with custom tool definitions enabling natural language → cell manipulation",
      "Implemented JSON-based save/load, dark mode, keyboard navigation, and per-cell color highlighting",
    ],
    stack: ["C#", ".NET", "Blazor", "Ollama", "qwen3", "JSON", "LLM", "Tool-calling"],
    metrics: [{ value: "26×50", label: "cell grid" }, { value: "LLM", label: "tool-calling" }, { value: "0", label: "libs used" }],
    github: "https://github.com/mianather3",
    live: null,
    filter: ["AI", "Systems"],
    accent: "#6741d9",
  },
  {
    id: "finance",
    label: "FULL-STACK",
    name: "Personal Finance Dashboard",
    tagline: "Flask REST API · PostgreSQL · React/TypeScript · AWS Elastic Beanstalk",
    desc: "A full-stack finance dashboard supporting CSV ingestion, real-time budget tracking, and PostgreSQL-backed data persistence. Flask REST backend with optimized schema, deployed to AWS Elastic Beanstalk.",
    arch: "React/TypeScript SPA · Flask REST API · PostgreSQL schemas · CSV ingestion pipeline · AWS Elastic Beanstalk deployment",
    challenges: [
      "Designed PostgreSQL schemas for efficient transaction storage and budget aggregation queries",
      "Built CSV parsing pipeline normalizing heterogeneous bank export formats into a unified schema",
      "Integrated external APIs for enrichment; deployed backend to AWS with environment-based config",
    ],
    stack: ["React", "TypeScript", "Python", "Flask", "PostgreSQL", "AWS", "REST API"],
    metrics: [{ value: "AWS", label: "deployed" }, { value: "CSV", label: "ingestion" }, { value: "REST", label: "API" }],
    github: "https://github.com/mianather3",
    live: null,
    filter: ["Full-stack"],
    accent: "#2f9e44",
  },
  {
    id: "linksnap",
    label: "FULL-STACK",
    name: "LinkSnap",
    tagline: "URL shortener with real-time Chart.js analytics. Node.js · SQLite · Railway",
    desc: "A production URL shortener with full analytics dashboard tracking click trends, referrers, and usage metrics in real-time. Deployed on Railway with persistent SQLite storage.",
    arch: "Node.js + Express REST API · SQLite persistence · Chart.js analytics · Railway deployment",
    challenges: [
      "Built a collision-resistant hash-based slug generation system with SQLite transaction safety",
      "Implemented real-time analytics aggregation with Chart.js dashboard for click trends and referrer tracking",
      "Deployed to Railway with persistent volume for SQLite; zero-downtime redeploys",
    ],
    stack: ["Node.js", "Express", "SQLite", "JavaScript", "Chart.js", "Railway", "REST API"],
    metrics: [{ value: "↑↓", label: "analytics" }, { value: "REST", label: "API" }, { value: "Live", label: "Railway" }],
    github: "https://github.com/mianather3",
    live: null,
    filter: ["Full-stack"],
    accent: "#e8590c",
  },
];

const filters = ["All", "AI", "Systems", "Full-stack"];

function ProjectCard({ project, featured }: { project: typeof projects[0]; featured?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  if (featured) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: "#fff", border: "1px solid #e8e8e3", borderRadius: "16px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 16px 48px rgba(0,0,0,0.04)", marginBottom: "1.5rem" }}
      >
        {/* Top accent */}
        <div style={{ height: "3px", background: `linear-gradient(90deg, ${project.accent}, ${project.accent}88)` }} />

        <div style={{ padding: "2.5rem 3rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: project.accent, letterSpacing: "0.12em", fontFamily: "'DM Mono', monospace", textTransform: "uppercase" }}>{project.label}</span>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#d0d0c8", display: "inline-block" }} />
                <span style={{ fontSize: "0.68rem", color: "#9b9b93", fontFamily: "'DM Mono', monospace" }}>March 2026</span>
              </div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.2rem", color: "#0f0f0e", marginBottom: "0.5rem", lineHeight: 1.1 }}>{project.name}</h3>
              <p style={{ fontSize: "0.95rem", color: "#6b6b65", fontStyle: "italic" }}>{project.tagline}</p>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              {project.metrics.map(m => <Metric key={m.label} {...m} />)}
            </div>
          </div>

          <p style={{ fontSize: "0.95rem", color: "#4a4a45", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "72ch" }}>{project.desc}</p>

          {/* Architecture */}
          <div style={{ background: "#f8f8f6", border: "1px solid #e8e8e3", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "2rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#9b9b93", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "0.5rem" }}>Architecture</div>
            <p style={{ fontSize: "0.85rem", color: "#4a4a45", fontFamily: "'DM Mono', monospace", lineHeight: 1.6 }}>{project.arch}</p>
          </div>

          {/* Challenges */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#9b9b93", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "1rem" }}>Key Engineering Decisions</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {project.challenges.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: project.accent, fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", marginTop: "0.1rem", flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: "0.85rem", color: "#4a4a45", lineHeight: 1.55 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {project.stack.map(s => <Tag key={s} label={s} />)}
            </div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "0.84rem", fontWeight: 600, color: "#0f0f0e", textDecoration: "none", padding: "0.5rem 1.1rem", border: "1.5px solid #d0d0c8", borderRadius: "6px", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#0f0f0e"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#d0d0c8"; }}
              >GitHub ↗</a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "0.84rem", fontWeight: 600, color: "#fafaf8", background: project.accent, textDecoration: "none", padding: "0.5rem 1.1rem", borderRadius: "6px", transition: "opacity 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >Live Demo ↗</a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ background: "#fff", border: "1px solid #e8e8e3", borderRadius: "12px", padding: "1.75rem 2rem", position: "relative", overflow: "hidden", transition: "box-shadow 0.25s, transform 0.25s", cursor: "default" }}
      whileHover={{ y: -3, boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
        <div>
          <span style={{ fontSize: "0.66rem", fontWeight: 700, color: project.accent, letterSpacing: "0.12em", fontFamily: "'DM Mono', monospace", textTransform: "uppercase" }}>{project.label}</span>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.4rem", color: "#0f0f0e", marginTop: "0.3rem", lineHeight: 1.2 }}>{project.name}</h3>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.78rem", color: "#9b9b93", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#0f0f0e")}
            onMouseLeave={e => (e.currentTarget.style.color = "#9b9b93")}
          >↗ GitHub</a>
        </div>
      </div>

      <p style={{ fontSize: "0.88rem", color: "#6b6b65", lineHeight: 1.65, marginBottom: "1.25rem" }}>{project.desc}</p>

      <div style={{ background: "#f8f8f6", borderRadius: "6px", padding: "0.75rem 1rem", marginBottom: "1.25rem" }}>
        <div style={{ fontSize: "0.66rem", color: "#9b9b93", fontFamily: "'DM Mono', monospace", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Engineering highlights</div>
        {project.challenges.slice(0, 2).map((c, i) => (
          <div key={i} style={{ display: "flex", gap: "0.5rem", marginTop: "0.4rem" }}>
            <span style={{ color: project.accent, fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", flexShrink: 0 }}>→</span>
            <span style={{ fontSize: "0.82rem", color: "#4a4a45", lineHeight: 1.5 }}>{c}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {project.stack.slice(0, 6).map(s => <Tag key={s} label={s} />)}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const featured = projects[0];
  const rest = projects.slice(1).filter(p => activeFilter === "All" || p.filter.includes(activeFilter));

  return (
    <section id="projects" style={{ padding: "8rem 2.5rem", background: "#fafaf8" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "4rem" }}
        >
          <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#9b9b93", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "1rem" }}>Selected Work</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0f0f0e", lineHeight: 1.1 }}>
              Systems that ship.
            </h2>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {filters.map(f => (
                <button key={f} onClick={() => setActiveFilter(f)}
                  style={{ fontSize: "0.8rem", fontWeight: 500, padding: "0.4rem 1rem", borderRadius: "6px", border: "1.5px solid", cursor: "pointer", transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif",
                    borderColor: activeFilter === f ? "#0f0f0e" : "#d0d0c8",
                    background: activeFilter === f ? "#0f0f0e" : "transparent",
                    color: activeFilter === f ? "#fafaf8" : "#6b6b65",
                  }}
                >{f}</button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured */}
        <ProjectCard project={featured} featured />

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: "1.25rem" }}>
          {rest.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
