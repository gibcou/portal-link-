"use client";
import { useState } from "react";

const tabs = ["Overview", "Files", "Messages", "Approvals"];

const metrics = [
  { label: "Organic Sessions", value: "24,831", change: "+12.4%", up: true },
  { label: "Leads Generated", value: "184", change: "+8.7%", up: true },
  { label: "Cost per Lead", value: "$21.40", change: "-5.2%", up: false },
  { label: "Email Open Rate", value: "42.1%", change: "+3.1%", up: true },
];

const files = [
  { name: "Brand Guidelines v3.pdf", size: "4.2 MB", date: "Jun 24", type: "pdf" },
  { name: "Q2 Campaign Assets.zip", size: "118 MB", date: "Jun 20", type: "zip" },
  { name: "Website Copy — Final.docx", size: "840 KB", date: "Jun 18", type: "doc" },
  { name: "Ad Creative Set B.figma", size: "22 MB", date: "Jun 12", type: "fig" },
  { name: "SEO Audit Report.pdf", size: "3.1 MB", date: "Jun 5", type: "pdf" },
];

const messages = [
  {
    sender: "Jordan Mills",
    initials: "JM",
    bg: "#6B5CE7",
    time: "Today, 10:24 AM",
    text: "Hey! The revised landing page copy looks great. One small thing — can we tweak the CTA on the hero to say 'Get started free' instead?",
  },
  {
    sender: "You",
    initials: "YA",
    bg: "#0891B2",
    time: "Today, 10:41 AM",
    text: "Absolutely, I'll push that change now and deploy by EOD. Anything else while I'm in there?",
    isMe: true,
  },
  {
    sender: "Jordan Mills",
    initials: "JM",
    bg: "#6B5CE7",
    time: "Today, 10:45 AM",
    text: "That's it for now — thanks for being so quick on this!",
  },
];

const approvals = [
  {
    title: "Q3 Ad Creative — Facebook Set",
    desc: "6 static ads + 2 video variants for the August push.",
    status: "pending",
    date: "Due Jun 30",
  },
  {
    title: "July Email Newsletter",
    desc: "Monthly nurture send to 4,200 subscribers.",
    status: "approved",
    date: "Approved Jun 22",
  },
  {
    title: "Revised SEO Landing Pages (x4)",
    desc: "Updated copy and meta for service pages.",
    status: "pending",
    date: "Due Jul 3",
  },
  {
    title: "Google Ads Budget Increase",
    desc: "Proposed increase from $3k to $4.5k/mo for Search.",
    status: "approved",
    date: "Approved Jun 18",
  },
];

const fileIconColor: Record<string, string> = {
  pdf: "#EF4444",
  zip: "#F59E0B",
  doc: "#3B82F6",
  fig: "#8B5CF6",
};

export default function DemoPortal() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div style={{ minHeight: "100vh", background: "#080808", fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)", color: "#fff" }}>

      {/* ── Top bar ── */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: "60px", display: "flex", alignItems: "center",
        padding: "0 32px", justifyContent: "space-between",
        background: "rgba(8,8,8,0.95)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Back link */}
          <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#666", fontSize: "13px", textDecoration: "none", transition: "color 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </a>
          <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.08)" }} />
          {/* Agency brand */}
          <div style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 700, letterSpacing: "-0.5px" }}>
            Meridian<span style={{ color: "#6B5CE7" }}>.</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "100px", padding: "3px 10px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", display: "block", flexShrink: 0 }} className="demo-dot" />
            <span style={{ fontSize: "11px", fontWeight: 500, color: "#22C55E", letterSpacing: "0.5px" }}>Live demo</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{ fontSize: "13px", color: "#666" }}>Jordan Mills · Acme Corp</div>
          <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#6B5CE7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700 }}>JM</div>
        </div>
      </div>

      {/* ── Sidebar + content layout ── */}
      <div style={{ display: "flex", paddingTop: "60px", minHeight: "100vh" }}>

        {/* Sidebar */}
        <aside style={{
          width: "220px", flexShrink: 0,
          borderRight: "1px solid rgba(255,255,255,0.06)",
          padding: "32px 0",
          position: "sticky", top: "60px", height: "calc(100vh - 60px)",
          overflowY: "auto",
          background: "#0C0C0C",
        }}>
          <div style={{ padding: "0 20px", marginBottom: "28px" }}>
            <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "1.5px", color: "#444", textTransform: "uppercase", marginBottom: "12px" }}>Workspace</div>
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  width: "100%", textAlign: "left", background: activeTab === t ? "rgba(107,92,231,0.1)" : "transparent",
                  border: "none", borderRadius: "8px", padding: "9px 12px",
                  fontSize: "13px", fontWeight: activeTab === t ? 600 : 400,
                  color: activeTab === t ? "#fff" : "#666",
                  cursor: "pointer", marginBottom: "2px",
                  transition: "background 0.15s, color 0.15s",
                }}
                onMouseEnter={(e) => { if (activeTab !== t) { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "#ccc"; }}}
                onMouseLeave={(e) => { if (activeTab !== t) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#666"; }}}
              >
                {sidebarIcon(t)}
                {t}
                {t === "Approvals" && (
                  <span style={{ marginLeft: "auto", background: "#6B5CE7", color: "#fff", fontSize: "10px", fontWeight: 700, borderRadius: "100px", padding: "1px 7px" }}>2</span>
                )}
              </button>
            ))}
          </div>

          <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 20px 24px" }} />

          <div style={{ padding: "0 20px" }}>
            <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "1.5px", color: "#444", textTransform: "uppercase", marginBottom: "12px" }}>Projects</div>
            {["Website Redesign", "Google Ads Q3", "SEO Sprint"].map((p) => (
              <div key={p} style={{ fontSize: "12px", color: "#555", padding: "8px 12px", borderRadius: "8px", cursor: "pointer", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#999")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >{p}</div>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, padding: "40px 48px", maxWidth: "1000px" }}>

          {activeTab === "Overview" && <OverviewTab />}
          {activeTab === "Files" && <FilesTab />}
          {activeTab === "Messages" && <MessagesTab />}
          {activeTab === "Approvals" && <ApprovalsTab />}

        </main>
      </div>
    </div>
  );
}

function sidebarIcon(tab: string) {
  const icons: Record<string, React.ReactNode> = {
    Overview: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><rect x="8" y="1" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><rect x="1" y="8" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><rect x="8" y="8" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/></svg>,
    Files: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2.5A1.5 1.5 0 013.5 1h4.086a1.5 1.5 0 011.06.44l2.914 2.914A1.5 1.5 0 0112 5.414V11.5A1.5 1.5 0 0110.5 13h-7A1.5 1.5 0 012 11.5v-9z" stroke="currentColor" strokeWidth="1.3"/></svg>,
    Messages: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 2.5A1.5 1.5 0 012.5 1h9A1.5 1.5 0 0113 2.5v7A1.5 1.5 0 0111.5 11H8l-3 2v-2H2.5A1.5 1.5 0 011 9.5v-7z" stroke="currentColor" strokeWidth="1.3"/></svg>,
    Approvals: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  };
  return icons[tab] ?? null;
}

function OverviewTab() {
  return (
    <>
      <div style={{ marginBottom: "36px" }}>
        <div style={{ fontSize: "11px", fontWeight: 500, color: "#666", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "20px", height: "1px", background: "#444", display: "block" }} />
          June 2026
        </div>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: "6px" }}>
          Performance Overview
        </h1>
        <p style={{ fontSize: "14px", color: "#666", fontWeight: 300 }}>Acme Corp · Updated today at 10:00 AM</p>
      </div>

      {/* Metrics grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", marginBottom: "32px" }}>
        {metrics.map((m) => (
          <div key={m.label} style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "24px 28px" }}>
            <div style={{ fontSize: "12px", color: "#555", marginBottom: "10px", fontWeight: 500 }}>{m.label}</div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <div style={{ fontFamily: "var(--font-syne)", fontSize: "30px", fontWeight: 800, letterSpacing: "-1px" }}>{m.value}</div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: m.up ? "#22C55E" : "#EF4444", background: m.up ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.08)", padding: "3px 10px", borderRadius: "100px" }}>
                {m.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Activity feed */}
      <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "28px" }}>
        <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "20px", color: "rgba(255,255,255,0.8)" }}>Recent Activity</div>
        {[
          { text: "Jordan approved the Q2 creative brief", time: "2h ago", dot: "#22C55E" },
          { text: "New file uploaded: Website Copy — Final.docx", time: "5h ago", dot: "#6B5CE7" },
          { text: "Jordan left a message in Website Redesign", time: "Yesterday", dot: "#0891B2" },
          { text: "Monthly report published for May 2026", time: "Jun 24", dot: "#F59E0B" },
        ].map((a, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingBottom: "16px", marginBottom: i < 3 ? "16px" : 0, borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: a.dot, marginTop: "5px", flexShrink: 0 }} />
            <div style={{ flex: 1, fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{a.text}</div>
            <div style={{ fontSize: "11px", color: "#444", whiteSpace: "nowrap" }}>{a.time}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function FilesTab() {
  return (
    <>
      <div style={{ marginBottom: "36px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#666", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "1px", background: "#444", display: "block" }} />
            Shared files
          </div>
          <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.1 }}>Files</h1>
        </div>
        <button style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#6B5CE7", color: "#fff", border: "none", borderRadius: "100px", padding: "10px 20px", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "opacity 0.15s" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          Upload file
        </button>
      </div>

      <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", overflow: "hidden" }}>
        {files.map((f, i) => (
          <div key={f.name} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 24px", borderBottom: i < files.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", transition: "background 0.15s", cursor: "pointer" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: `${fileIconColor[f.type]}18`, border: `1px solid ${fileIconColor[f.type]}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "10px", fontWeight: 700, color: fileIconColor[f.type], textTransform: "uppercase" }}>{f.type}</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.85)", marginBottom: "2px" }}>{f.name}</div>
              <div style={{ fontSize: "11px", color: "#444" }}>{f.size}</div>
            </div>
            <div style={{ fontSize: "12px", color: "#444" }}>{f.date}</div>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "#444" }}>
              <path d="M2.5 7h9M8 3l3.5 4L8 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        ))}
      </div>
    </>
  );
}

function MessagesTab() {
  return (
    <>
      <div style={{ marginBottom: "36px" }}>
        <div style={{ fontSize: "11px", fontWeight: 500, color: "#666", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "20px", height: "1px", background: "#444", display: "block" }} />
          Website Redesign
        </div>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.1 }}>Messages</h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "28px" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", gap: "14px", flexDirection: m.isMe ? "row-reverse" : "row" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, flexShrink: 0 }}>{m.initials}</div>
            <div style={{ maxWidth: "75%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px", flexDirection: m.isMe ? "row-reverse" : "row" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{m.sender}</span>
                <span style={{ fontSize: "11px", color: "#444" }}>{m.time}</span>
              </div>
              <div style={{ background: m.isMe ? "rgba(107,92,231,0.15)" : "#1A1A1A", border: m.isMe ? "1px solid rgba(107,92,231,0.2)" : "1px solid rgba(255,255,255,0.06)", borderRadius: m.isMe ? "16px 4px 16px 16px" : "4px 16px 16px 16px", padding: "14px 18px", fontSize: "13.5px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, fontWeight: 300 }}>
                {m.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reply box */}
      <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
        <input
          type="text"
          placeholder="Reply to Jordan…"
          style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: "13.5px", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-inter)", fontWeight: 300 }}
        />
        <button style={{ background: "#6B5CE7", color: "#fff", border: "none", borderRadius: "8px", padding: "8px 16px", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "opacity 0.15s", display: "inline-flex", alignItems: "center", gap: "6px" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Send
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 6h9M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </>
  );
}

function ApprovalsTab() {
  const [statuses, setStatuses] = useState<Record<number, string>>(
    Object.fromEntries(approvals.map((a, i) => [i, a.status]))
  );

  return (
    <>
      <div style={{ marginBottom: "36px" }}>
        <div style={{ fontSize: "11px", fontWeight: 500, color: "#666", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "20px", height: "1px", background: "#444", display: "block" }} />
          Action required
        </div>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.1 }}>Approvals</h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {approvals.map((a, i) => (
          <div key={i} style={{ background: "#111", border: `1px solid ${statuses[i] === "approved" ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.07)"}`, borderRadius: "14px", padding: "24px 28px", display: "flex", alignItems: "center", gap: "20px", transition: "border-color 0.2s" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: "5px" }}>{a.title}</div>
              <div style={{ fontSize: "13px", color: "#555", fontWeight: 300, marginBottom: "8px" }}>{a.desc}</div>
              <div style={{ fontSize: "11px", color: "#444" }}>{statuses[i] === "approved" ? a.date.replace("Due", "Approved") : a.date}</div>
            </div>
            {statuses[i] === "approved" ? (
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "100px", padding: "7px 16px", color: "#22C55E", fontSize: "12px", fontWeight: 600, flexShrink: 0 }}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><circle cx="5.5" cy="5.5" r="5" stroke="#22C55E" strokeWidth="1.2"/><path d="M3.5 5.5l1.5 1.5 2.5-2.5" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Approved
              </div>
            ) : (
              <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                <button
                  onClick={() => setStatuses((s) => ({ ...s, [i]: "approved" }))}
                  style={{ background: "#22C55E", color: "#fff", border: "none", borderRadius: "100px", padding: "8px 18px", fontSize: "12px", fontWeight: 600, cursor: "pointer", transition: "opacity 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Approve
                </button>
                <button style={{ background: "transparent", color: "#666", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "100px", padding: "8px 16px", fontSize: "12px", fontWeight: 500, cursor: "pointer", transition: "color 0.15s, border-color 0.15s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#666"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  Request changes
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
