"use client";
import { useState, useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", agency: "", clients: "1-10 clients" });
  const touchStartY = useRef(0);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password) return;
    setLoading(true);
    try {
      await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // show success in demo regardless
    }
    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", password: "", agency: "", clients: "1-10 clients" });
    }, 300);
  };

  // Swipe down to close on mobile
  const onTouchStart = (e: React.TouchEvent) => { touchStartY.current = e.touches[0].clientY; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches[0].clientY - touchStartY.current > 80) handleClose();
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "var(--void-3)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    fontSize: "14px",
    color: "var(--white)",
    fontFamily: "var(--font-inter)",
    outline: "none",
  };

  return (
    <div
      className="fixed inset-0 z-[800] flex items-center justify-center p-5"
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="modal-anim w-full rounded-[20px] border border-white/10"
        style={{ maxWidth: "480px", background: "var(--void-2)", padding: "48px", boxShadow: "0 40px 80px rgba(0,0,0,0.6)" }}
      >
        {/* Drag handle — mobile only */}
        <div className="w-8 h-[3px] rounded-full mx-auto mb-6 md:hidden" style={{ background: "rgba(255,255,255,0.15)" }} />

        {!submitted ? (
          <>
            <div className="inline-flex items-center gap-1.5 rounded-full mb-5 border" style={{ background: "var(--indigo-dim)", borderColor: "rgba(107,92,231,0.25)", padding: "4px 12px" }}>
              <div className="w-[5px] h-[5px] rounded-full" style={{ background: "var(--indigo)" }} />
              <span className="text-[11px]" style={{ color: "rgba(107,92,231,0.9)" }}>14-day free trial</span>
            </div>

            <h2 className="font-[family-name:var(--font-syne)] text-[28px] font-extrabold tracking-[-1px] mb-1.5">
              Create your portal
            </h2>
            <p className="text-sm mb-7" style={{ color: "var(--muted)" }}>
              No credit card required. Up and running in minutes.
            </p>

            {[
              { label: "Your name", key: "name", type: "text", placeholder: "Alex Johnson", autoComplete: "name" },
              { label: "Work email", key: "email", type: "email", placeholder: "alex@youragency.com", autoComplete: "email" },
              { label: "Password", key: "password", type: "password", placeholder: "••••••••", autoComplete: "new-password" },
              { label: "Agency name", key: "agency", type: "text", placeholder: "Your Agency", autoComplete: "organization" },
            ].map((f) => (
              <div key={f.key} className="mb-3.5">
                <label className="block text-[11px] font-medium tracking-[0.5px] uppercase mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  autoComplete={f.autoComplete}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(107,92,231,0.5)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}
                />
              </div>
            ))}

            <div className="mb-3.5">
              <label className="block text-[11px] font-medium tracking-[0.5px] uppercase mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                Number of clients
              </label>
              <select
                value={form.clients}
                onChange={(e) => setForm((p) => ({ ...p, clients: e.target.value }))}
                style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none" } as React.CSSProperties}
              >
                <option>1-10 clients</option>
                <option>11-30 clients</option>
                <option>31-50 clients</option>
                <option>50+ clients</option>
              </select>
            </div>

            <div className="flex gap-2.5 mt-6">
              <button
                onClick={handleClose}
                className="flex-1 py-[13px] rounded-full text-sm cursor-pointer transition-all duration-150"
                style={{ background: "transparent", border: "1px solid var(--rule-dark)", color: "var(--muted)", fontFamily: "var(--font-inter)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--rule-dark)"; e.currentTarget.style.color = "var(--muted)"; }}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading || !form.name || !form.email || !form.password}
                className="flex-[2] py-[13px] rounded-full text-sm font-semibold cursor-pointer border-none transition-colors duration-150 disabled:opacity-50"
                style={{ background: "var(--white)", color: "var(--void)", fontFamily: "var(--font-inter)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--smoke)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--white)"; }}
              >
                {loading ? "Submitting…" : "Get started →"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-5">
            <span className="text-[52px] mb-4 block">🚀</span>
            <h3 className="font-[family-name:var(--font-syne)] text-[28px] font-extrabold tracking-[-1px] mb-2.5">
              You&apos;re in.
            </h3>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Check your inbox — we&apos;ve sent a link to set up your branded portal. Takes about 10 minutes.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer border-none transition-colors"
              style={{ background: "var(--white)", color: "var(--void)", fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--smoke)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--white)"; }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
