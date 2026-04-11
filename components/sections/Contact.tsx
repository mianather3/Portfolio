"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const contactItems = [
  { label: "Email", value: "mianather783@gmail.com", href: "mailto:mianather783@gmail.com", copyable: true },
  { label: "GitHub", value: "github.com/mianather3", href: "https://github.com/mianather3", copyable: false },
  { label: "LinkedIn", value: "linkedin.com/in/mianather", href: "https://linkedin.com/in/mianather", copyable: false },
];

function ContactCard({ item }: { item: typeof contactItems[0] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!item.copyable) return;
    await navigator.clipboard.writeText(item.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
      style={{
        background: "#fff",
        border: "1px solid #e8e8e3",
        borderRadius: "12px",
        padding: "1.5rem 1.75rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        transition: "box-shadow 0.25s",
      }}
    >
      <div>
        <div style={{ fontSize: "0.68rem", fontWeight: 600, color: "#9b9b93", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "0.3rem" }}>{item.label}</div>
        <a
          href={item.href}
          target={item.copyable ? undefined : "_blank"}
          rel="noopener noreferrer"
          style={{ fontSize: "0.95rem", fontWeight: 500, color: "#0f0f0e", textDecoration: "none", fontFamily: "'DM Mono', monospace", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#3b5bdb")}
          onMouseLeave={e => (e.currentTarget.style.color = "#0f0f0e")}
        >
          {item.value}
        </a>
      </div>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
        {item.copyable && (
          <button
            onClick={handleCopy}
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              color: copied ? "#2f9e44" : "#6b6b65",
              background: copied ? "#f0fff4" : "#f8f8f6",
              border: `1px solid ${copied ? "#bbf7d0" : "#e8e8e3"}`,
              borderRadius: "6px",
              padding: "0.35rem 0.85rem",
              cursor: "pointer",
              transition: "all 0.2s",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        )}
        <a
          href={item.href}
          target={item.copyable ? undefined : "_blank"}
          rel="noopener noreferrer"
          style={{ fontSize: "0.78rem", fontWeight: 600, color: "#6b6b65", textDecoration: "none", padding: "0.35rem 0.85rem", border: "1px solid #e8e8e3", borderRadius: "6px", background: "#f8f8f6", transition: "all 0.2s", fontFamily: "'DM Mono', monospace" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#0f0f0e"; e.currentTarget.style.color = "#0f0f0e"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8e8e3"; e.currentTarget.style.color = "#6b6b65"; }}
        >
          Open ↗
        </a>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" style={{ padding: "8rem 2.5rem", background: "#fafaf8" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#9b9b93", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "1rem" }}>Get in Touch</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0f0f0e", lineHeight: 1.1, marginBottom: "1rem" }}>
            Let's build something.
          </h2>
          <p style={{ fontSize: "1rem", color: "#6b6b65", lineHeight: 1.7, maxWidth: "440px", margin: "0 auto" }}>
            Open to SWE internships for Summer 2026. Fast response guaranteed — I check email daily.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2.5rem" }}
        >
          {contactItems.map(item => <ContactCard key={item.label} item={item} />)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{ textAlign: "center" }}
        >
          <a
            href="mailto:mianather783@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#fafaf8",
              background: "#0f0f0e",
              padding: "0.85rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1a1a18"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#0f0f0e"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Send me an email →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
