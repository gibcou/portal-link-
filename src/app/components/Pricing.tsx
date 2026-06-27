"use client";
import { useEffect, useRef } from "react";

interface PricingProps {
  onOpenModal: () => void;
}

const plans = [
  {
    tier: "Starter",
    price: "99",
    period: "per month · billed monthly",
    features: [
      "Up to 10 client portals",
      "Custom domain",
      "File sharing & approvals",
      "Basic dashboards",
      "Email support",
    ],
    featured: false,
  },
  {
    tier: "Growth",
    price: "199",
    period: "per month · billed monthly",
    features: [
      "Up to 50 client portals",
      "White-label domain + email",
      "Live data integrations",
      "Approval workflows",
      "Threaded messaging",
      "Priority support",
    ],
    featured: true,
    tag: "Most popular",
  },
  {
    tier: "Agency",
    price: "399",
    period: "per month · billed monthly",
    features: [
      "Unlimited portals",
      "Full white-label suite",
      "Custom API integrations",
      "Team roles & permissions",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    featured: false,
  },
];

export default function Pricing({ onOpenModal }: PricingProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".p-card");
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
      id="pricing"
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
        Pricing
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
        One retainer pays for a year.
      </h2>

      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {plans.map((plan) => (
          <div
            key={plan.tier}
            className="p-card"
            style={{
              position: "relative",
              borderRadius: "16px",
              padding: "36px",
              border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.08)",
              background: plan.featured ? "#6B5CE7" : "#111111",
              boxShadow: plan.featured ? "0 0 60px rgba(107,92,231,0.3)" : "none",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            {/* Popular tag */}
            {"tag" in plan && plan.tag && (
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#fff",
                  color: "#080808",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "5px 16px",
                  borderRadius: "100px",
                  whiteSpace: "nowrap",
                }}
              >
                {plan.tag}
              </div>
            )}

            <div
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: plan.featured ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)",
                marginBottom: "16px",
              }}
            >
              {plan.tier}
            </div>

            <div
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "52px",
                fontWeight: 800,
                letterSpacing: "-3px",
                lineHeight: 1,
                marginBottom: "6px",
              }}
            >
              <span style={{ fontSize: "32px", fontWeight: 800, marginRight: "2px", verticalAlign: "baseline" }}>$</span>
              {plan.price}
            </div>

            <div
              style={{
                fontSize: "12px",
                color: plan.featured ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.35)",
                marginBottom: "32px",
              }}
            >
              {plan.period}
            </div>

            <div
              style={{
                height: "1px",
                background: plan.featured ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)",
                marginBottom: "28px",
              }}
            />

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {plan.features.map((f) => (
                <li
                  key={f}
                  style={{
                    fontSize: "13.5px",
                    color: plan.featured ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)",
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: plan.featured ? "rgba(255,255,255,0.9)" : "#22C55E", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={onOpenModal}
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                padding: "14px",
                borderRadius: "100px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "var(--font-inter)",
                transition: "all 0.2s",
                border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.12)",
                background: plan.featured ? "#fff" : "transparent",
                color: plan.featured ? "#6B5CE7" : "rgba(255,255,255,0.6)",
              }}
              onMouseEnter={(e) => {
                if (plan.featured) {
                  e.currentTarget.style.background = "#F8F8F6";
                  e.currentTarget.style.transform = "scale(1.02)";
                } else {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (plan.featured) {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "scale(1)";
                } else {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                }
              }}
            >
              Start free trial
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
