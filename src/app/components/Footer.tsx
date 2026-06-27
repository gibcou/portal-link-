const links = ["Features", "Pricing", "Docs", "Blog", "Privacy", "Terms"];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "40px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700 }}>
        Portal<span style={{ color: "#6B5CE7" }}>Kit</span>
      </div>
      <div style={{ display: "flex", gap: "28px" }}>
        {links.map((link) => (
          <a
            key={link}
            href="#"
            style={{
              fontSize: "13px",
              color: "#666",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
          >
            {link}
          </a>
        ))}
      </div>
      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
        © 2026 PortalKit, Inc.
      </div>
    </footer>
  );
}
