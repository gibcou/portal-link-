import Image from 'next/image';

const logos = Array(6).fill('/globe.svg');

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
          {logos.map((logo, index) => (
            <Image key={index} src={logo} alt={`logo ${index + 1}`} width={100} height={40} />
          ))}
        </div>
      </div>
    </div>
  );
}
