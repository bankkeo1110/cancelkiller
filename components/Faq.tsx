"use client";

import { useState } from "react";
import { faqSection } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="wrap"
      style={{
        paddingTop: "clamp(32px, 4vw, 64px)",
        paddingBottom: "clamp(48px, 6vw, 88px)",
      }}
    >
      <span className="kicker">{t(faqSection.kicker)}</span>
      <h2 className="h2" style={{ marginBottom: 32 }}>
        {t(faqSection.h2)}
      </h2>
      <div style={{ borderTop: "2px solid var(--color-divider)" }}>
        {faqSection.faqs.map((f, i) => {
          const on = open === i;
          return (
            <div key={f.q.en} style={{ borderBottom: "2px solid var(--color-divider)" }}>
              <button
                type="button"
                aria-expanded={on}
                onClick={() => setOpen((s) => (s === i ? null : i))}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  background: "transparent",
                  border: 0,
                  cursor: "pointer",
                  padding: "20px 4px",
                  textAlign: "left",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  color: "var(--color-text)",
                  lineHeight: 1.3,
                }}
              >
                <span>{t(f.q)}</span>
                <span
                  aria-hidden
                  style={{
                    flex: "none",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: 26,
                    color: "var(--color-accent)",
                    lineHeight: 1,
                    transition: "transform .2s",
                    transform: on ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  overflow: "hidden",
                  transition: "all .2s",
                  maxHeight: on ? 400 : 0,
                  padding: on ? "0 4px 22px" : "0 4px",
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: 0,
                    maxWidth: "66ch",
                    color: "color-mix(in srgb, var(--color-text) 80%, transparent)",
                  }}
                >
                  {t(f.a)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
