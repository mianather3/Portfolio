"use client";
export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e8e8e3", padding: "2.5rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fafaf8" }}>
      <span style={{ fontSize: "0.82rem", color: "#9b9b93", fontFamily: "'DM Mono', monospace" }}>© 2026 Mian Ather Ali. All rights reserved.</span>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          { label: "GitHub", href: "https://github.com/mianather3" },
          { label: "LinkedIn", href: "https://linkedin.com/in/mianather" },
          { label: "Email", href: "mailto:mianather783@gmail.com" },
        ].map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "0.82rem", color: "#9b9b93", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#0f0f0e")}
            onMouseLeave={e => (e.currentTarget.style.color = "#9b9b93")}
          >{l.label}</a>
        ))}
      </div>
    </footer>
  );
}
