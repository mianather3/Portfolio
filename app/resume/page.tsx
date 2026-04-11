"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: "2.5rem" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
      <h2 style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", fontWeight: 700, color: "#9b9b93", letterSpacing: "0.14em", textTransform: "uppercase" }}>{title}</h2>
      <div style={{ flex: 1, height: "1px", background: "#e8e8e3" }} />
    </div>
    {children}
  </div>
);

const Bullet = ({ text }: { text: string }) => (
  <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.5rem" }}>
    <span style={{ color: "#9b9b93", fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", marginTop: "0.1rem", flexShrink: 0 }}>–</span>
    <span style={{ fontSize: "0.88rem", color: "#4a4a45", lineHeight: 1.65 }}>{text}</span>
  </div>
);

export default function ResumePage() {
  return (
    <main style={{ minHeight: "100vh", background: "#fafaf8", padding: "2rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem", padding: "0.75rem 1.25rem", background: "#fff", border: "1px solid #e8e8e3", borderRadius: "8px" }}
        >
          <Link href="/" style={{ fontSize: "0.84rem", color: "#6b6b65", textDecoration: "none", fontFamily: "'DM Mono', monospace", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#0f0f0e")}
            onMouseLeave={e => (e.currentTarget.style.color = "#6b6b65")}
          >← Back to Portfolio</Link>
          <a href="/resume.pdf" download style={{ fontSize: "0.82rem", fontWeight: 600, color: "#fafaf8", background: "#0f0f0e", padding: "0.45rem 1.1rem", borderRadius: "6px", textDecoration: "none" }}>
            Download PDF ↓
          </a>
        </motion.div>

        {/* Resume card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: "#fff", border: "1px solid #e8e8e3", borderRadius: "16px", padding: "3rem 3.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
        >
          {/* Header */}
          <div style={{ marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid #e8e8e3" }}>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.5rem", color: "#0f0f0e", marginBottom: "0.5rem" }}>Mian Ather Ali</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", fontSize: "0.82rem", color: "#6b6b65", fontFamily: "'DM Mono', monospace" }}>
              <span>Salt Lake City, UT</span>
              <span>(832) 540-7884</span>
              <a href="mailto:mianather783@gmail.com" style={{ color: "#3b5bdb", textDecoration: "none" }}>mianather783@gmail.com</a>
              <a href="https://linkedin.com/in/mianather" target="_blank" rel="noopener noreferrer" style={{ color: "#3b5bdb", textDecoration: "none" }}>LinkedIn</a>
              <a href="https://github.com/mianather3" target="_blank" rel="noopener noreferrer" style={{ color: "#3b5bdb", textDecoration: "none" }}>GitHub</a>
            </div>
          </div>

          <Section title="Education">
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "#0f0f0e" }}>University of Utah – Honors College</div>
                <div style={{ fontSize: "0.88rem", color: "#4a4a45", marginTop: "0.2rem" }}>Bachelor of Science in Computer Science — GPA: 3.6/4.0</div>
                <div style={{ fontSize: "0.82rem", color: "#6b6b65", marginTop: "0.4rem" }}>
                  Coursework: Software Practice, Computer Organization, Data Structures & Algorithms, Linear Algebra, Discrete Mathematics, Probability & Statistics
                </div>
                <div style={{ fontSize: "0.82rem", color: "#6b6b65", marginTop: "0.3rem" }}>
                  Organizations: Adobe Student Ambassador, ACM, Artificial Intelligence for U, Hinckley Global Career Accelerator
                </div>
              </div>
              <div style={{ textAlign: "right", fontSize: "0.82rem", color: "#6b6b65", fontFamily: "'DM Mono', monospace" }}>
                <div>Salt Lake City, UT</div>
                <div>May 2027</div>
              </div>
            </div>
          </Section>

          <Section title="Technical Skills">
            {[
              { label: "Languages", value: "C++, Python, Java, C#, .NET, Swift, C, SQL, JavaScript, TypeScript, HTML, CSS" },
              { label: "Frameworks", value: "React, Node.js, Express.js, Flask, Blazor, SwiftUI, Pandas, NumPy, Matplotlib, Chart.js" },
              { label: "AI & Cloud", value: "OpenAI API (GPT-4o-mini), LLM Integration (Ollama/qwen3), Azure App Service, AWS Elastic Beanstalk, REST APIs" },
              { label: "Databases & Tools", value: "PostgreSQL, SQLite, H2, Git/GitHub, VS Code, IntelliJ, PyCharm, Xcode, Vercel, Railway" },
              { label: "Competencies", value: "Full-Stack Development, System Architecture, AI/ML Integration, Agile, Unit Testing, Web Security" },
            ].map(row => (
              <div key={row.label} style={{ display: "flex", gap: "1rem", marginBottom: "0.4rem", fontSize: "0.87rem" }}>
                <span style={{ fontWeight: 600, color: "#0f0f0e", minWidth: "110px", flexShrink: 0 }}>{row.label}:</span>
                <span style={{ color: "#4a4a45" }}>{row.value}</span>
              </div>
            ))}
          </Section>

          <Section title="Experience">
            {[
              {
                company: "Adobe", role: "Student Ambassador", period: "November 2025 – Present", location: "Salt Lake City, UT",
                bullets: [
                  "Developed and delivered AI/ML and Creative Cloud workshop frameworks end-to-end, driving measurable software adoption across a 50+ student user base per session.",
                  "Partnered with community organizations to scale engagement initiatives, increasing student participation by 40%; applied Adobe generative AI tools to real student-facing projects.",
                ]
              },
              {
                company: "University of Utah", role: "Office Assistant", period: "June 2024 – Present", location: "Salt Lake City, UT",
                bullets: [
                  "Designed and implemented end-to-end data integrity automation workflows for 500+ records, optimizing system processing time by 30%.",
                  "Engineered complex SQL queries within PeopleSoft and Slate, ensuring 100% data accuracy for critical student records; collaborated across teams to build scalable workflow improvements.",
                ]
              }
            ].map(exp => (
              <div key={exp.company} style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0f0f0e" }}>{exp.company}</span>
                    <span style={{ color: "#6b6b65", fontSize: "0.88rem" }}> · {exp.role}</span>
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#6b6b65", fontFamily: "'DM Mono', monospace" }}>{exp.location} · {exp.period}</div>
                </div>
                {exp.bullets.map((b, i) => <Bullet key={i} text={b} />)}
              </div>
            ))}
          </Section>

          <Section title="Projects">
            {[
              {
                name: "PitWall v2.0", stack: "Swift, SwiftUI, C#, Blazor, .NET, React, OpenAI API, Azure, Vercel", period: "March 2026",
                bullets: [
                  "Architected and shipped a production-grade AI-powered F1 race strategy app across iOS and web, engineering a SwiftUI frontend, React web app, and Blazor C#/.NET REST API backend integrated with the OpenF1 API for live 2025 race data across a 4-screen navigation flow.",
                  "Engineered a GPT-4o-mini strategy engine ingesting real-time parameters — tire compound, lap delta, track position, and weather — to generate context-aware pit stop recommendations with compound suggestions and risk assessments, deployed on Microsoft Azure App Service.",
                  "Iterated from v1.0 to v2.0 in under two weeks, expanding to a cross-platform product with live driver standings, circuit intelligence dashboards, and weather integration — deployed at Vercel.",
                ]
              },
              {
                name: "Spreadsheet AI", stack: "C#, .NET, Blazor, LLM Integration (Ollama/qwen3)", period: "Spring 2026",
                bullets: [
                  "Engineered a full-stack spreadsheet application with a custom Formula parser, Dependency Graph engine, and a 26×50 interactive grid GUI supporting real-time formula evaluation across dependent cells.",
                  "Integrated a local LLM (qwen3:8b via Ollama) as an AI assistant with custom tool-calling functions, enabling natural language cell manipulation — setting values, reading contents, and filling ranges.",
                  "Implemented JSON-based save/load persistence, circular dependency detection, dark mode, keyboard navigation, and per-cell color highlighting across a polished production UI.",
                ]
              },
              {
                name: "Personal Finance Dashboard", stack: "React, TypeScript, Python, Flask, PostgreSQL, AWS", period: "March 2026",
                bullets: [
                  "Built and shipped a full-stack finance dashboard with Flask REST API, PostgreSQL database, and React/TypeScript frontend supporting CSV upload and real-time budget tracking.",
                  "Architected PostgreSQL schemas for efficient data storage; optimized backend logic and integrated external APIs for deployment to AWS Elastic Beanstalk.",
                ]
              },
              {
                name: "LinkSnap", stack: "Node.js, Express, SQLite, JavaScript, Railway", period: "February 2026",
                bullets: [
                  "Built and deployed a full-stack URL shortener with a REST API and real-time Chart.js analytics dashboard tracking click trends, referrers, and usage metrics; deployed on Railway.",
                ]
              },
            ].map(proj => (
              <div key={proj.name} style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0f0f0e" }}>{proj.name}</span>
                    <span style={{ color: "#6b6b65", fontSize: "0.82rem" }}> | {proj.stack}</span>
                  </div>
                  <span style={{ fontSize: "0.82rem", color: "#6b6b65", fontFamily: "'DM Mono', monospace" }}>{proj.period}</span>
                </div>
                {proj.bullets.map((b, i) => <Bullet key={i} text={b} />)}
              </div>
            ))}
          </Section>

          <Section title="Certifications & Simulations">
            <div style={{ fontSize: "0.87rem", color: "#4a4a45", lineHeight: 1.8 }}>
              <div><strong>Professional Simulations:</strong> Wells Fargo Software Engineering, JP Morgan Software Engineering, AWS Solutions Architecture</div>
              <div><strong>Technical Certifications:</strong> Querying Data – SQL (Intel), Python & Data Analysis (The Grammy Awards), AI Professional Skills (OpenAI), Full-Stack Development (Mimo)</div>
              <div><strong>Leadership:</strong> Intercultural Skills Certification (UNESCO), L'Oréal Product Innovation Challenge Participant</div>
            </div>
          </Section>
        </motion.div>
      </div>
    </main>
  );
}
