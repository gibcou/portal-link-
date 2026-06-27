"use client";
import { DomainIcon, DataIcon, ApprovalIcon, MessagingIcon, PermissionsIcon } from "./FeatureIcons";
import { useEffect, useRef } from "react";

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".bento-card");
    if (!cards) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((c) => {
      (c as HTMLElement).style.opacity = "0";
      (c as HTMLElement).style.transform = "translateY(24px)";
      (c as HTMLElement).style.transition = "opacity 0.5s ease, transform 0.5s ease";
      obs.observe(c);
    });
    return () => obs.disconnect();
  }, []);

  const cardBase: React.CSSProperties = {
    background: "#111111",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "36px",
    overflow: "hidden",
    position: "relative",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="features"
      style={{ padding: "120px 48px", maxWidth: "1200px", margin: "0 auto" }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "11px",
          fontWeight: 500,
          color: "#666",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        <span style={{ width: "20px", height: "1px", background: "#666", display: "block" }} />
        Features
      </div>

      <h2
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 800,
          letterSpacing: "-2px",
          lineHeight: 1,
          marginBottom: "60px",
          maxWidth: "600px",
        }}
      >
        Everything under your brand. Nothing under ours.
      </h2>

      <div
        ref={ref}
        className="bento-grid"
      >
        {/* Card 1 — span 5 */}
        <div
          className="bento-card"
          style={{ ...cardBase, gridColumn: "span 5" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
        >
          <div className="bento-glow" />
          <div style={{ width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "20px", background: "rgba(107,92,231,0.12)", border: "1px solid rgba(107,92,231,0.2)" }}><DomainIcon /></div>
          <div style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, marginBottom: "10px", letterSpacing: "-0.5px" }}>Your domain. Fully.</div>
          <div style={{ fontSize: "14px", color: "#999", lineHeight: 1.65, fontWeight: 300 }}>Clients land on your URL, your logo, your palette. PortalKit is completely invisible.</div>
          <div style={{ marginTop: "24px", background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ background: "rgba(107,92,231,0.1)", color: "#6B5CE7", padding: "10px 14px", fontSize: "13px", fontWeight: 500, borderRight: "1px solid rgba(255,255,255,0.06)", whiteSpace: "nowrap" }}>clients.</div>
              <div style={{ padding: "10px 14px", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>youragency.com</div>
            </div>
          </div>
        </div>

        {/* Card 2 — span 7 */}
        <div
          className="bento-card"
          style={{ ...cardBase, gridColumn: "span 7" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
        >
          <div className="bento-glow" />
          <div style={{ width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "20px", background: "rgba(107,92,231,0.12)", border: "1px solid rgba(107,92,231,0.2)" }}><DataIcon /></div>
          <div style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, marginBottom: "10px", letterSpacing: "-0.5px" }}>Live data, zero copy-paste</div>
          <div style={{ fontSize: "14px", color: "#999", lineHeight: 1.65, fontWeight: 300 }}>Connect Google Analytics, Search Console, Meta Ads, and more. Dashboards update automatically — no more manual reporting.</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginTop: "16px" }}>
            {[
              { icon: "📈", label: "Analytics" },
              { icon: "🔍", label: "Search Console" },
              { icon: "👥", label: "Meta Ads" },
              { icon: "🛒", label: "Shopify" },
              { icon: "✉️", label: "Klaviyo" },
              { icon: "➕", label: "+12 more" },
            ].map((int) => (
              <div
                key={int.label}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "10px", textAlign: "center", fontSize: "11px", color: "rgba(255,255,255,0.4)", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}
              >
                <span style={{ fontSize: "18px" }}>{int.icon}</span>
                {int.label}
              </div>
            ))}
          </div>
        </div>

        {/* Card 3 — span 4 */}
        <div
          className="bento-card"
          style={{ ...cardBase, gridColumn: "span 4" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
        >
          <div className="bento-glow" />
          <div style={{ width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "20px", background: "rgba(107,92,231,0.12)", border: "1px solid rgba(107,92,231,0.2)" }}><ApprovalIcon /></div>
          <div style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, marginBottom: "10px", letterSpacing: "-0.5px" }}>Approval flows</div>
          <div style={{ fontSize: "14px", color: "#999", lineHeight: 1.65, fontWeight: 300 }}>Clients approve deliverables in one click. No more email chains, no “did you get my reply?”</div>
        </div>

        {/* Card 4 — span 4 */}
        <div
          className="bento-card"
          style={{ ...cardBase, gridColumn: "span 4" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
        >
          <div className="bento-glow" />
          <div style={{ width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "20px", background: "rgba(107,92,231,0.12)", border: "1px solid rgba(107,92,231,0.2)" }}><MessagingIcon /></div>
          <div style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, marginBottom: "10px", letterSpacing: "-0.5px" }}>Threaded messaging</div>
          <div style={{ fontSize: "14px", color: "#999", lineHeight: 1.65, fontWeight: 300 }}>Per-project conversations keep every decision documented and findable — not buried in inboxes.</div>
        </div>

        {/* Card 5 — span 4 */}
        <div
          className="bento-card"
          style={{ ...cardBase, gridColumn: "span 4" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
        >
          <div className="bento-glow" />
          <div style={{ width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "20px", background: "rgba(107,92,231,0.12)", border: "1px solid rgba(107,92,231,0.2)" }}><PermissionsIcon /></div>
          <div style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, marginBottom: "10px", letterSpacing: "-0.5px" }}>Role permissions</div>
          <div style={{ fontSize: "14px", color: "#999", lineHeight: 1.65, fontWeight: 300 }}>Control exactly what each client sees. Add team members with granular access levels.</div>
        </div>
      </div>
    </section>
  );
}
