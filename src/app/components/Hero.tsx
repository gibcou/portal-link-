"use client";
import { useEffect, useRef } from "react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const mockupRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const wrap = wrapRef.current;
    const mockup = mockupRef.current;
    if (!wrap || !mockup || isTouch || window.innerWidth < 960) return;

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      mockup.style.transform = `rotateY(${-8 + x * 10}deg) rotateX(${4 - y * 8}deg)`;
    };
    const onLeave = () => { mockup.style.transform = "rotateY(-8deg) rotateX(4deg)"; };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "calc(60px + 48px) var(--page-x) 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(107,92,231,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 10% 90%, rgba(107,92,231,0.04) 0%, transparent 60%)" }} />
      <div className="hero-grid" />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gap: "48px",
          alignItems: "center",
        }}
        className="hero-two-col"
      >
        {/* ── LEFT: Content ── */}
        <div>
          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(38px, 9vw, 72px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "clamp(-1.5px, -0.04em, -3px)",
              color: "var(--white)",
              marginBottom: "20px",
            }}
          >
            Your brand.<br />
            <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Their portal.</span><br />
            <span style={{ color: "var(--indigo)" }}>Their trust.</span>
          </h1>

          <p style={{ fontSize: "clamp(14px,2.5vw,16px)", color: "var(--muted-light)", lineHeight: 1.7, fontWeight: 300, maxWidth: "460px", marginBottom: "32px" }}>
            PortalKit gives every client a stunning, branded portal to view reports, approve work, and stay in sync — all under your domain, your colors, your name.
          </p>

          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
            <button
              onClick={onOpenModal}
              style={{
                background: "var(--white)", color: "var(--void)", fontFamily: "var(--font-inter)",
                fontSize: "14px", fontWeight: 600, padding: "14px 24px", borderRadius: "100px",
                border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center",
                gap: "8px", minHeight: "48px", transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,255,255,0.12)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.97)"; }}
            >
              Get started free
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a
              href="#features"
              style={{
                background: "transparent", color: "var(--muted-light)", fontFamily: "var(--font-inter)",
                fontSize: "14px", fontWeight: 400, padding: "14px 20px", borderRadius: "100px",
                border: "1px solid var(--rule-dark)", textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "48px",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--rule-dark)"; e.currentTarget.style.color = "var(--muted-light)"; }}
            >
              See features →
            </a>
          </div>

          {/* Social proof */}
          <div style={{ marginTop: "40px", paddingTop: "40px", borderTop: "1px solid var(--rule-dark)", display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexShrink: 0 }}>
              {[{ bg: "#7C3AED", l: "M" }, { bg: "#0891B2", l: "S" }, { bg: "#D97706", l: "R" }, { bg: "#BE185D", l: "K" }, { bg: "#16A34A", l: "T" }].map((av, i) => (
                <div key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", border: "2px solid var(--void)", background: av.bg, marginLeft: i === 0 ? 0 : "-7px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, color: "#fff" }}>
                  {av.l}
                </div>
              ))}
            </div>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>
              Trusted by <strong style={{ color: "var(--white)", fontWeight: 500 }}>200+ agencies</strong> managing<br />
              <strong style={{ color: "var(--white)", fontWeight: 500 }}>14,000+ client portals</strong> worldwide
            </p>
          </div>
        </div>

        {/* ── RIGHT: Mockup ── */}
        <div ref={wrapRef} style={{ position: "relative", borderRadius: "16px", overflow: "hidden", perspective: "1200px" }} className="mockup-outer">
          <div style={{ position: "absolute", width: "80%", height: "50%", bottom: "-10%", left: "10%", background: "var(--indigo)", filter: "blur(70px)", opacity: 0.15, borderRadius: "50%", pointerEvents: "none", zIndex: 0 }} />
          <div
            ref={mockupRef}
            className="mockup-3d"
            style={{
              position: "relative", zIndex: 1, background: "#141414",
              border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", overflow: "hidden",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
              transition: "transform 0.3s ease",
            }}
          >
            {/* Top bar */}
            <div style={{ background: "#0D0D0D", padding: "10px 14px", display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
                <div key={c} style={{ width: "9px", height: "9px", borderRadius: "50%", background: c }} />
              ))}
              <div style={{ flex: 1, textAlign: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "5px", padding: "4px 10px", fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                clients.northgatemarketing.com
              </div>
            </div>

            {/* Body */}
            <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", height: "340px" }}>
              {/* Sidebar */}
              <div style={{ background: "#0D0D0D", padding: "18px 12px", borderRight: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: "var(--font-syne)", fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "5px" }}>Northgate</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginBottom: "18px", paddingBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>Client portal</div>
                {[{ icon: "◉", label: "Dashboard", active: true }, { icon: "◈", label: "Reports" }, { icon: "◇", label: "Approvals" }, { icon: "○", label: "Files" }, { icon: "◻", label: "Messages" }].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 8px", borderRadius: "7px", fontSize: "11px", marginBottom: "2px", background: item.active ? "rgba(107,92,231,0.15)" : "transparent", color: item.active ? "rgba(107,92,231,0.9)" : "rgba(255,255,255,0.3)" }}>
                    <span>{item.icon}</span>{item.label}
                  </div>
                ))}
                <div style={{ marginTop: "auto", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", color: "var(--green)", fontSize: "10px", fontWeight: 500, padding: "6px 8px", borderRadius: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--green)" }} className="pulse" />
                  Campaign live
                </div>
              </div>

              {/* Main */}
              <div style={{ padding: "16px", overflow: "hidden", background: "#111" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px", gap: "8px" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-syne)", fontSize: "14px", fontWeight: 700, color: "#fff" }}>April Overview</div>
                    <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>Updated 2 min ago</div>
                  </div>
                  <div style={{ background: "var(--indigo)", color: "#fff", fontSize: "10px", fontWeight: 600, padding: "6px 10px", borderRadius: "100px", whiteSpace: "nowrap", flexShrink: 0 }}>Approve</div>
                </div>
                {/* KPIs */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "6px", marginBottom: "10px" }}>
                  {[{ l: "Traffic", v: "52K", d: "↑14%" }, { l: "Leads", v: "4.1K", d: "↑9%" }, { l: "ROI", v: "4.8×", d: "↑0.6" }].map((k) => (
                    <div key={k.l} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "9px" }}>
                      <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", marginBottom: "4px" }}>{k.l}</div>
                      <div style={{ fontFamily: "var(--font-syne)", fontSize: "17px", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{k.v}</div>
                      <div style={{ fontSize: "9px", marginTop: "3px", color: "var(--green)" }}>{k.d}</div>
                    </div>
                  ))}
                </div>
                {/* Chart */}
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "10px", marginBottom: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>Weekly sessions</span>
                    <span style={{ fontFamily: "var(--font-syne)", fontSize: "12px", fontWeight: 700, color: "#fff" }}>+18.3%</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "40px" }}>
                    {[35, 50, 45, 65, 80, 92, 100].map((h, i) => (
                      <div key={i} style={{ flex: 1, borderRadius: "2px 2px 0 0", height: `${h}%`, background: i >= 4 ? "var(--indigo)" : i >= 2 ? "rgba(107,92,231,0.4)" : "rgba(255,255,255,0.06)" }} />
                    ))}
                  </div>
                </div>
                {/* Files */}
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  {[{ icon: "📄", name: "April Report.pdf", badge: "Approved", ok: true }, { icon: "🎨", name: "May Creatives v1", badge: "Pending", ok: false }].map((f) => (
                    <div key={f.name} style={{ display: "flex", alignItems: "center", gap: "7px", padding: "7px 8px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "7px" }}>
                      <span style={{ fontSize: "12px", flexShrink: 0 }}>{f.icon}</span>
                      <span style={{ flex: 1, fontSize: "10px", fontWeight: 500, color: "rgba(255,255,255,0.7)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</span>
                      <span style={{ fontSize: "9px", fontWeight: 600, padding: "2px 7px", borderRadius: "100px", flexShrink: 0, background: f.ok ? "rgba(34,197,94,0.12)" : "rgba(245,158,11,0.12)", color: f.ok ? "var(--green)" : "var(--amber)" }}>{f.badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive two-column at 960px+ */}
      <style>{`
        @media (min-width: 960px) {
          .hero-two-col { grid-template-columns: 1fr 1fr !important; gap: 80px !important; }
          .mockup-outer { overflow: visible !important; border-radius: 0 !important; }
        }
        @media (min-width: 768px) {
          #hero { padding-top: calc(64px + 60px) !important; }
        }
      `}</style>
    </section>
  );
}
