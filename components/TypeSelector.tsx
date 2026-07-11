"use client";

import { useState } from "react";
import { typeSection, types } from "@/lib/content";
import { useLang } from "@/lib/i18n";

const colHeadStyle: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: ".08em",
  textTransform: "uppercase",
  color: "var(--color-accent-700)",
  fontWeight: 600,
  margin: "0 0 12px",
  paddingBottom: 10,
  borderBottom: "2px solid var(--color-divider)",
};

const listStyle: React.CSSProperties = {
  margin: 0,
  paddingLeft: 18,
  fontSize: 14,
  lineHeight: 1.6,
  color: "color-mix(in srgb, var(--color-text) 82%, transparent)",
};

export default function TypeSelector() {
  const { t, pick } = useLang();
  const [typeId, setTypeId] = useState("lung");
  const active = types.find((x) => x.id === typeId) ?? types[0];

  return (
    <section id="loai" className="wrap section">
      <span className="kicker">{t(typeSection.kicker)}</span>
      <h2 className="h2" style={{ maxWidth: "22ch" }}>
        {t(typeSection.h2)}
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          background: "var(--color-divider)",
          border: "2px solid var(--color-divider)",
          marginTop: 36,
        }}
      >
        {types.map((ty) => {
          const on = ty.id === typeId;
          return (
            <button
              key={ty.id}
              type="button"
              onClick={() => setTypeId(ty.id)}
              style={{
                flex: "1 1 auto",
                minWidth: 120,
                padding: "16px 14px",
                border: 0,
                cursor: "pointer",
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: 14,
                textAlign: "left",
                background: on ? "var(--color-accent)" : "var(--color-bg)",
                color: on ? "var(--color-bg)" : "var(--color-text)",
              }}
            >
              {t(ty.name)}
            </button>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 2,
          border: "2px solid var(--color-divider)",
          borderTop: 0,
          padding: "clamp(24px, 3vw, 40px)",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: 28,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {t(active.name)}
        </h3>
        <p
          style={{
            fontSize: 15.5,
            lineHeight: 1.6,
            maxWidth: "60ch",
            margin: "14px 0 0",
            color: "color-mix(in srgb, var(--color-text) 80%, transparent)",
          }}
        >
          {t(active.blurb)}
        </p>
        <div className="type-detail-cols">
          <div>
            <p style={colHeadStyle}>{t(typeSection.colSigns)}</p>
            <ul style={listStyle}>
              {pick(active.signs).map((s) => (
                <li key={s} style={{ marginBottom: 8 }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={colHeadStyle}>{t(typeSection.colRisks)}</p>
            <ul style={listStyle}>
              {pick(active.risks).map((r) => (
                <li key={r} style={{ marginBottom: 8 }}>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={colHeadStyle}>{t(typeSection.colScreen)}</p>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                lineHeight: 1.6,
                color: "color-mix(in srgb, var(--color-text) 82%, transparent)",
              }}
            >
              {t(active.screen)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
