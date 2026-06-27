const items = [
  "White-label portals",
  "Live reporting dashboards",
  "Custom domains",
  "Client approval flows",
  "Threaded messaging",
  "File management",
  "Role permissions",
  "Google Analytics sync",
];

export default function Ticker() {
  const all = [...items, ...items]; // duplicate for seamless loop

  return (
    <div
      className="border-b border-white/[0.08] py-3.5 overflow-hidden"
      style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "64px" }}
    >
      <div className="ticker-track">
        {all.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-10 px-10 text-[12px] text-[#666] font-medium tracking-[1.5px] uppercase whitespace-nowrap"
          >
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: "#6B5CE7" }}
            />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
