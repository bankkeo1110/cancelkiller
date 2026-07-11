"use client";

import { support } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function Support() {
  const { t } = useLang();
  return (
    <section
      className="wrap"
      style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(48px, 6vw, 96px)" }}
    >
      <div className="cols-2-center">
        <figure style={{ margin: 0 }}>
          <blockquote
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(24px, 2.8vw, 36px)",
              lineHeight: 1.25,
              letterSpacing: "-.015em",
              margin: 0,
              maxWidth: "20ch",
            }}
          >
            {t(support.quote)}
          </blockquote>
        </figure>
        <div>
          <span className="kicker">{t(support.kicker)}</span>
          {support.items.map((item, i) => (
            <div
              key={item.title.en}
              style={{
                borderTop: "2px solid var(--color-divider)",
                borderBottom:
                  i === support.items.length - 1 ? "2px solid var(--color-divider)" : undefined,
                padding: "18px 0",
              }}
            >
              <h3 style={{ fontSize: 18, margin: "0 0 6px" }}>{t(item.title)}</h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  margin: 0,
                  color: "color-mix(in srgb, var(--color-text) 76%, transparent)",
                }}
              >
                {t(item.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
