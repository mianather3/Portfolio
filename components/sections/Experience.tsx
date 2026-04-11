"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "Adobe",
    role: "Student Ambassador",
    period: "Nov 2025 – Present",
    location: "Salt Lake City, UT",
    color: "#e8590c",
    bullets: [
      "Developed and delivered AI/ML + Creative Cloud workshop frameworks end-to-end, driving measurable software adoption across 50+ student users per session",
      "Partnered with community organizations to scale engagement initiatives, increasing student participation by 40%",
      "Applied Adobe generative AI tools to real student-facing projects",
    ],
    tags: ["AI/ML Workshops", "Community Engagement", "Generative AI"],
  },
  {
    company: "University of Utah",
    role: "Office Assistant",
    period: "Jun 2024 – Present",
    location: "Salt Lake City, UT",
    color: "#cc0000",
    bullets: [
      "Designed and implemented end-to-end data integrity automation workflows for 500+ records, optimizing system processing time by 30%",
      "Engineered complex SQL queries within PeopleSoft and Slate, ensuring 100% data accuracy for critical student records",
      "Collaborated across teams to build scalable workflow improvements",
    ],
    tags: ["SQL", "PeopleSoft", "Data Automation", "Workflow Design"],
  },
];

function ExpCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ background: "#fff", border: "1px solid #e8e8e3", borderRadius: "12px", padding: "2rem 2.5rem", position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: exp.color, borderRadius: "3px 0 0 3px" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1.25rem" }}>
        <div>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: exp.color, fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem" }}>{exp.company}</div>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.4rem", color: "#0f0f0e" }}>{exp.role}</h3>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "0.82rem", fontFamily: "'DM Mono', monospace", color: "#6b6b65" }}>{exp.period}</div>
          <div style={{ fontSize: "0.78rem", color: "#9b9b93", marginTop: "0.2rem" }}>{exp.location}</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.25rem" }}>
        {exp.bullets.map((b, j) => (
          <div key={j} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
            <span style={{ color: exp.color, fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", marginTop: "0.15rem", flexShrink: 0 }}>→</span>
            <span style={{ fontSize: "0.88rem", color: "#4a4a45", lineHeight: 1.65 }}>{b}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {exp.tags.map(t => (
          <span key={t} style={{ fontSize: "0.72rem", fontWeight: 500, color: "#4a4a45", background: "#f0f0ec", border: "1px solid #e8e8e3", borderRadius: "4px", padding: "0.2rem 0.55rem", fontFamily: "'DM Mono', monospace" }}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" style={{ padding: "8rem 2.5rem", background: "#fafaf8" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ marginBottom: "4rem" }}>
          <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#9b9b93", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "1rem" }}>Experience</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0f0f0e", lineHeight: 1.1 }}>Where I work part time.</h2>
        </motion.div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {experiences.map((exp, i) => <ExpCard key={exp.company} exp={exp} index={i} />)}
        </div>
      </div>
    </section>
  );
}
