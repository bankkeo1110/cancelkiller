"use client";

import { useState } from "react";
import { risk } from "@/lib/content";
import { useLang } from "@/lib/i18n";

type Band = "low" | "mid" | "high";

const BAND_STYLES: Record<Band, { background: string; color: string }> = {
  low: { background: "var(--color-accent-100)", color: "var(--color-accent-900)" },
  mid: { background: "var(--color-accent-200)", color: "var(--color-accent-900)" },
  high: { background: "var(--color-accent)", color: "var(--color-bg)" },
};

export default function RiskCheck() {
  const { lang, t } = useLang();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const total = risk.questions.length;
  const answeredN = Object.keys(answers).length;

  let band: Band | null = null;
  if (submitted && answeredN === total) {
    const score = risk.questions.reduce(
      (sum, q) => sum + q.options[answers[q.id]].w,
      0
    );
    band = score <= 3 ? "low" : score <= 7 ? "mid" : "high";
  }

  const submit = () => {
    setSubmitted(true);
    if (answeredN !== total) return;
    const score = risk.questions.reduce(
      (sum, q) => sum + q.options[answers[q.id]].w,
      0
    );
    const b: Band = score <= 3 ? "low" : score <= 7 ? "mid" : "high";
    // Anonymous, fire-and-forget analytics — failures never block the UI.
    fetch("/api/risk-check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ score, band: b, answers, lang }),
    }).catch(() => {});
  };

  const result = band ? risk.bands[band] : null;

  return (
    <section id="danh-gia" className="wrap section">
      <span className="kicker">{t(risk.kicker)}</span>
      <h2 className="h2" style={{ maxWidth: "22ch" }}>
        {t(risk.h2)}
      </h2>
      <p
        style={{
          fontSize: 14,
          lineHeight: 1.55,
          maxWidth: "56ch",
          margin: "16px 0 0",
          color: "color-mix(in srgb, var(--color-text) 72%, transparent)",
        }}
      >
        {t(risk.disclaimer)}
      </p>

      <div style={{ marginTop: 36, border: "2px solid var(--color-divider)" }}>
        {risk.questions.map((q) => (
          <div
            key={q.id}
            style={{
              padding: "22px clamp(18px, 3vw, 32px)",
              borderBottom: "2px solid var(--color-divider)",
            }}
          >
            <p style={{ fontSize: 16, fontWeight: 600, margin: "0 0 14px", lineHeight: 1.4 }}>
              {t(q.text)}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {q.options.map((opt, oi) => {
                const sel = answers[q.id] === oi;
                return (
                  <button
                    key={opt.label.en}
                    type="button"
                    aria-pressed={sel}
                    onClick={() => setAnswers((s) => ({ ...s, [q.id]: oi }))}
                    style={{
                      padding: "10px 16px",
                      border: `2px solid ${sel ? "var(--color-accent)" : "var(--color-divider)"}`,
                      background: sel ? "var(--color-accent)" : "transparent",
                      color: sel ? "var(--color-bg)" : "var(--color-text)",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      fontSize: 13,
                      lineHeight: 1.5,
                      cursor: "pointer",
                    }}
                  >
                    {t(opt.label)}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        <div
          style={{
            padding: "22px clamp(18px, 3vw, 32px)",
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
          }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={submit}
            style={{ padding: "12px 20px", fontSize: 14 }}
          >
            {t(risk.submit)}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
            }}
            style={{ padding: "12px 20px", fontSize: 14 }}
          >
            {t(risk.reset)}
          </button>
          <span
            style={{
              fontSize: 13,
              color: "color-mix(in srgb, var(--color-text) 65%, transparent)",
            }}
          >
            {risk.answered(answeredN, total, lang)}
          </span>
        </div>
      </div>

      {result && band && (
        <div
          style={{
            marginTop: 24,
            padding: "clamp(24px, 3vw, 40px)",
            border: "2px solid var(--color-accent)",
            ...BAND_STYLES[band],
          }}
        >
          <p
            style={{
              fontSize: 12,
              letterSpacing: ".09em",
              textTransform: "uppercase",
              fontWeight: 600,
              margin: 0,
              opacity: 0.75,
            }}
          >
            {t(result.tag)}
          </p>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(26px, 3vw, 38px)",
              lineHeight: 1.1,
              margin: "10px 0 12px",
            }}
          >
            {t(result.title)}
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, margin: 0, maxWidth: "60ch", opacity: 0.92 }}>
            {t(result.desc)}
          </p>
        </div>
      )}
    </section>
  );
}
