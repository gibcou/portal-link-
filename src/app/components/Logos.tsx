const agencies = ["Northgate", "Reid Digital", "Spark Agency", "Velo Creative", "Onyx Media", "Fulcrum"];

export default function Logos() {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "60px 48px",
        background: "#111111",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            fontSize: "11px",
            color: "#666",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "36px",
          }}
        >
          Trusted by agencies from
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          {agencies.map((name) => (
            <div
              key={name}
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "16px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.15)",
                letterSpacing: "-0.5px",
                transition: "color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.15)")}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
