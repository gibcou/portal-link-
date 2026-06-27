"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "Clients used to email us for every single update. Now they log in and see everything. We saved 8 hours a week in the first month alone.",
    name: "Marcus Reid",
    role: "Founder, Reid Digital",
    bg: "#7C3AED",
    initial: "M",
  },
  {
    quote: "We raised retainers by $300/month across 20 clients after launching the portal. They saw it as a premium service upgrade and didn't push back once.",
    name: "Sofia Chen",
    role: "Director, Spark Agency",
    bg: "#0891B2",
    initial: "S",
  },
  {
    quote: "Setup took one afternoon. We had 12 clients onboarded by Friday. Nobody asked us to go back to Google Drive. Not one person.",
    name: "Ryan Osei",
    role: "CEO, Northgate Marketing",
    bg: "#16A34A",
    initial: "R",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".proof-card");
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

  return (
    <section
      id="proof"
      style={{
        background: "#111111",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "100px 48px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
          Customers
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
          Agencies that switched never went back.
        </h2>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2px",
            marginTop: "0",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="proof-card"
              style={{
                background: "#111111",
                padding: "40px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1A1A1A")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#111111")}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "20px" }}>
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} style={{ color: "#6B5CE7", fontSize: "14px" }}>★</span>
                ))}
              </div>
              {/* Quote */}
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  fontWeight: 300,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "white",
                    flexShrink: 0,
                    background: t.bg,
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: "#666", marginTop: "1px" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
