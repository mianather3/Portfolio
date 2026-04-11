"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 2.5rem", height: "60px", display: "flex",
        alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(250,250,248,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #e8e8e3" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <Link href="/" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem", color: "#0f0f0e", textDecoration: "none" }}>
        Mian Ather Ali
      </Link>
      <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {links.map((l) => (
          <a key={l.href} href={l.href} style={{ fontSize: "0.84rem", fontWeight: 500, color: "#6b6b65", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#0f0f0e")}
            onMouseLeave={e => (e.currentTarget.style.color = "#6b6b65")}
          >{l.label}</a>
        ))}
        <a href="/resume.pdf" download style={{ fontSize: "0.82rem", fontWeight: 600, color: "#fafaf8", background: "#0f0f0e", padding: "0.45rem 1.1rem", borderRadius: "6px", textDecoration: "none", transition: "background 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#2d2d2a")}
          onMouseLeave={e => (e.currentTarget.style.background = "#0f0f0e")}
        >Resume ↓</a>
      </nav>
    </motion.header>
  );
}
