import { useState, useEffect } from "react";
import Image from 'next/image';

interface NavProps {
  onOpenModal: () => void;
}

export default function Nav({ onOpenModal }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Customers", href: "#proof" },
    { label: "Docs", href: "#" },
  ];

  const demoLink = { label: "Demo Site", href: "/demo" };

  return (
    <>
      {/* ── Nav bar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 500,
          height: "64px",
          display: "flex",
          alignItems: "center",
          padding: "0 var(--page-x)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(8,8,8,0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Logo — always left */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: '#fff',
          }}
        >
          <Image src="/globe.svg" alt="logo" width={24} height={24} />
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            Portal Link
          </span>
        </a>

        {/* Center links — desktop only, truly centered with auto margins */}
        <div
          className="hidden md:flex"
          style={{
            gap: "36px",
            alignItems: "center",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: "13px",
                fontWeight: 400,
                color: "var(--muted-light)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-light)")}
            >
              {l.label}
            </a>
          ))}
          {/* Demo Site link with green pulsing dot */}
          <a
            href={demoLink.href}
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "#22C55E",
              textDecoration: "none",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <span className="demo-dot" />
            {demoLink.label}
          </a>
        </div>

        {/* Right group — marginLeft:auto pushes it to the far right on ALL screen sizes */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "12px" }}>

          {/* Desktop only: Log in + Start free trial */}
          <a
            href="#"
            className="hidden md:block"
            style={{
              fontSize: "13px",
              fontWeight: 400,
              color: "var(--muted-light)",
              textDecoration: "none",
              transition: "color 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-light)")}
          >
            Log in
          </a>
          <button
            onClick={onOpenModal}
            className="hidden md:block"
            style={{
              background: "#fff",
              color: "#080808",
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 600,
              padding: "9px 20px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "background 0.15s, transform 0.15s",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#F8F8F6"; e.currentTarget.style.transform = "scale(1.02)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "scale(1)"; }}
            onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.97)"; }}
            onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1.02)"; }}
          >
            Start free trial
          </button>

          {/* Mobile only: compact CTA + hamburger */}
          <button
            onClick={onOpenModal}
            className="md:hidden"
            style={{
              background: "#fff",
              color: "#080808",
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 600,
              padding: "8px 14px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              lineHeight: 1,
              minHeight: "36px",
            }}
          >
            Start free
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className={`hamburger md:hidden${menuOpen ? " open" : ""}`}
            aria-label="Toggle menu"
            style={{
              flexDirection: "column",
              gap: "5px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              borderRadius: "6px",
              flexShrink: 0,
            }}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            left: 0, right: 0, bottom: 0,
            zIndex: 490,
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            background: "var(--void-2)",
            padding: "32px var(--page-x) 40px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "20px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                padding: "18px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                letterSpacing: "-0.5px",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href={demoLink.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "20px",
              fontWeight: 700,
              color: "#22C55E",
              textDecoration: "none",
              padding: "18px 0",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              letterSpacing: "-0.5px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span className="demo-dot" />
            {demoLink.label}
          </a>
          <button
            onClick={() => { setMenuOpen(false); onOpenModal(); }}
            style={{
              marginTop: "28px",
              background: "#fff",
              color: "#080808",
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              fontWeight: 600,
              padding: "18px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              textAlign: "center",
              minHeight: "56px",
              lineHeight: 1,
            }}
          >
            Start free trial
          </button>
        </div>
      )}
    </>
  );
}
