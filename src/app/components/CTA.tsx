interface CTAProps {
  onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
  return (
    <section style={{ padding: "80px 48px 120px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BG glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(107,92,231,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <h2
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 800,
            letterSpacing: "-2.5px",
            lineHeight: 1,
            marginBottom: "20px",
            position: "relative",
            zIndex: 1,
          }}
        >
          Your clients deserve better than a shared Drive folder.
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "#999",
            marginBottom: "40px",
            position: "relative",
            zIndex: 1,
            fontWeight: 300,
          }}
        >
          14-day free trial. No credit card. Set up in under an hour.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            position: "relative",
            zIndex: 1,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={onOpenModal}
            style={{
              background: "#fff",
              color: "#080808",
              fontFamily: "var(--font-inter)",
              fontSize: "14px",
              fontWeight: 600,
              padding: "14px 28px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              transition: "transform 0.2s, box-shadow 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,255,255,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Create your portal
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <a
            href="#proof"
            style={{
              background: "transparent",
              color: "#999",
              fontFamily: "var(--font-inter)",
              fontSize: "14px",
              fontWeight: 400,
              padding: "14px 24px",
              borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.08)",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.color = "#999";
            }}
          >
            Read customer stories
          </a>
        </div>
      </div>
    </section>
  );
}
