"use client";

import type { Block } from "@/lib/articles";
import { imageCredits } from "@/lib/imageCredits";
import { useLang } from "@/lib/i18n";
import { Infographic } from "./Infographics";

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  const { lang, t } = useLang();

  return (
    <div className="article-body">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "lead":
            return (
              <p key={i} className="article-lead">
                {t(b.text)}
              </p>
            );
          case "heading":
            return (
              <h2 key={i} className="article-h2">
                {t(b.text)}
              </h2>
            );
          case "paragraph":
            return (
              <p key={i} className="article-p">
                {t(b.text)}
              </p>
            );
          case "list":
            return b.ordered ? (
              <ol key={i} className="article-list">
                {b.items[lang].map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="article-list">
                {b.items[lang].map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={i} className="article-table-wrap">
                <table className="table">
                  <thead>
                    <tr>
                      {b.headers[lang].map((h, j) => (
                        <th key={j}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c}>{t(cell)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "callout":
            return (
              <div key={i} className={`callout ${b.tone === "accent" ? "callout-accent" : ""}`}>
                <p className="callout-title">{t(b.title)}</p>
                <p className="callout-text">{t(b.text)}</p>
              </div>
            );
          case "figure":
            return (
              <figure key={i} className="article-figure">
                <div className="article-figure-frame">
                  <Infographic id={b.infographic} />
                </div>
                {(b.caption || b.source) && (
                  <figcaption className="article-figcaption">
                    {b.caption && <span>{t(b.caption)}</span>}
                    {b.source && <span className="article-figsource">{t(b.source)}</span>}
                  </figcaption>
                )}
              </figure>
            );
          case "image": {
            const cr = imageCredits[b.src];
            return (
              <figure key={i} className="article-figure">
                <div className="article-figure-frame article-photo-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/${b.src}`} alt={t(b.alt)} loading="lazy" decoding="async" />
                </div>
                <figcaption className="article-figcaption">
                  {b.caption && <span>{t(b.caption)}</span>}
                  {cr && (
                    <span className="article-figsource">
                      {t({ vi: "Ảnh", en: "Photo" })}: {cr.author} ·{" "}
                      <a href={cr.source} target="_blank" rel="noopener noreferrer">
                        {cr.license}
                      </a>{" "}
                      · {t({ vi: "hiển thị tông xám", en: "shown in grayscale" })}
                    </span>
                  )}
                </figcaption>
              </figure>
            );
          }
          case "quote":
            return (
              <blockquote key={i} className="article-quote">
                {t(b.text)}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
