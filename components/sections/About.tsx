"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const certs = [
  "Wells Fargo SWE Simulation",
  "JP Morgan SWE Simulation",
  "AWS Solutions Architecture",
  "SQL — Intel Certification",
  "Python & Data Analysis — Grammy Awards",
  "AI Professional Skills — OpenAI",
  "Full-Stack Development — Mimo",
  "Intercultural Skills — UNESCO",
];

const orgs = [
  { name: "Adobe Student Ambassador", detail: "AI/ML + Creative Cloud workshops" },
  { name: "Association for Computing Machinery", detail: "ACM chapter member" },
  { name: "Artificial Intelligence for U", detail: "AI research & community" },
  { name: "Hinckley Global Career Accelerator", detail: "Leadership cohort" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ padding: "8rem 2.5rem", background: "linear-gradient(180deg, #fafaf8, #f3f3ef)" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "4rem" }}
        >
          <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#9b9b93", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "1rem" }}>About</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0f0f0e", lineHeight: 1.1 }}>
            The engineer behind the systems.
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
          {/* Left col */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Education */}
            <div style={{ background: "#fff", border: "1px solid #e8e8e3", borderRadius: "12px", padding: "1.75rem 2rem", marginBottom: "1.5rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #cc0000, transparent)" }} />
              <div style={{ fontSize: "0.66rem", fontWeight: 700, color: "#cc0000", letterSpacing: "0.12em", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", marginBottom: "0.75rem" }}>Education</div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.3rem", color: "#0f0f0e", marginBottom: "0.25rem" }}>University of Utah</div>
              <div style={{ fontSize: "0.88rem", color: "#4a4a45", marginBottom: "0.2rem" }}>BS Computer Science — Honors College</div>
              <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.75rem" }}>
                <div>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.4rem", color: "#0f0f0e" }}>3.6</div>
                  <div style={{ fontSize: "0.72rem", color: "#9b9b93", fontWeight: 500 }}>GPA</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.4rem", color: "#0f0f0e" }}>2027</div>
                  <div style={{ fontSize: "0.72rem", color: "#9b9b93", fontWeight: 500 }}>Graduation</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.4rem", color: "#0f0f0e" }}>Honors</div>
                  <div style={{ fontSize: "0.72rem", color: "#9b9b93", fontWeight: 500 }}>College track</div>
                </div>
              </div>
              <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid #f0f0ec" }}>
                <div style={{ fontSize: "0.72rem", color: "#9b9b93", fontFamily: "'DM Mono', monospace", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Relevant Coursework</div>
                <div style={{ fontSize: "0.82rem", color: "#6b6b65", lineHeight: 1.65 }}>
                  Software Practice · Computer Organization · Data Structures & Algorithms · Linear Algebra · Discrete Mathematics · Probability & Statistics
                </div>
              </div>
            </div>

            {/* Bio */}
            <div style={{ background: "#fff", border: "1px solid #e8e8e3", borderRadius: "12px", padding: "1.75rem 2rem" }}>
              <div style={{ fontSize: "0.66rem", fontWeight: 700, color: "#9b9b93", letterSpacing: "0.12em", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", marginBottom: "1rem" }}>Focus</div>
              <p style={{ fontSize: "0.92rem", color: "#4a4a45", lineHeight: 1.8, marginBottom: "1rem" }}>
                I build systems that sit at the intersection of AI and real-time data — from a GPT-powered F1 strategy engine to a spreadsheet app with a custom formula parser and LLM tool-calling built entirely from primitives.
              </p>
              <p style={{ fontSize: "0.92rem", color: "#4a4a45", lineHeight: 1.8 }}>
                My focus is on full-stack engineering where the backend is the hard part: schema design, deployment architecture, and integrating AI in ways that actually change user behavior — not just demo well.
              </p>
            </div>
          </motion.div>

          {/* Right col */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Orgs */}
            <div style={{ background: "#fff", border: "1px solid #e8e8e3", borderRadius: "12px", padding: "1.75rem 2rem", marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "0.66rem", fontWeight: 700, color: "#9b9b93", letterSpacing: "0.12em", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", marginBottom: "1rem" }}>Organizations</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {orgs.map(o => (
                  <div key={o.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "0.85rem", borderBottom: "1px solid #f0f0ec" }}>
                    <div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#0f0f0e" }}>{o.name}</div>
                      <div style={{ fontSize: "0.78rem", color: "#9b9b93", marginTop: "0.15rem" }}>{o.detail}</div>
                    </div>
                    <span style={{ fontSize: "0.7rem", color: "#9b9b93", fontFamily: "'DM Mono', monospace", marginTop: "0.1rem" }}>→</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div style={{ background: "#fff", border: "1px solid #e8e8e3", borderRadius: "12px", padding: "1.75rem 2rem" }}>
              <div style={{ fontSize: "0.66rem", fontWeight: 700, color: "#9b9b93", letterSpacing: "0.12em", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", marginBottom: "1rem" }}>Certifications & Simulations</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {certs.map(c => (
                  <span key={c} style={{ fontSize: "0.75rem", fontWeight: 500, color: "#4a4a45", background: "#f0f0ec", border: "1px solid #e8e8e3", borderRadius: "4px", padding: "0.25rem 0.6rem", fontFamily: "'DM Mono', monospace" }}>{c}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
