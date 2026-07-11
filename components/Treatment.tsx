"use client";

import { treatment } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function Treatment() {
  const { t } = useLang();
  return (
    <section id="dieu-tri" className="wrap section">
      <span className="kicker">{t(treatment.kicker)}</span>
      <h2 className="h2" style={{ maxWidth: "22ch" }}>
        {t(treatment.h2)}
      </h2>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.6,
          maxWidth: "54ch",
          margin: "18px 0 0",
          color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
        }}
      >
        {t(treatment.lead)}
      </p>

      <div style={{ marginTop: 40 }}>
        {treatment.methods.map((m, i) => (
          <div
            key={m.title.en}
            className="treatment-row"
            style={
              i === treatment.methods.length - 1
                ? { borderBottom: "2px solid var(--color-divider)" }
                : undefined
            }
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: 15,
                margin: 0,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: 22,
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {t(m.title)}
            </h3>
            <p
              className="treatment-desc"
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                margin: 0,
                color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
                maxWidth: "52ch",
              }}
            >
              {t(m.desc)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
