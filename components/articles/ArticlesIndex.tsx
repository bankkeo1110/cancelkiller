"use client";

import { useState } from "react";
import {
  articles,
  articlesPage,
  categoryMeta,
  type Category,
} from "@/lib/articles";
import { useLang } from "@/lib/i18n";
import ArticleCard from "./ArticleCard";

const CATEGORY_ORDER: Category[] = ["types", "prevention", "screening", "treatment", "support"];

export default function ArticlesIndex() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Category | "all">("all");

  const shown = filter === "all" ? articles : articles.filter((a) => a.category === filter);

  const chips: { key: Category | "all"; label: string }[] = [
    { key: "all", label: t(articlesPage.all) },
    ...CATEGORY_ORDER.map((c) => ({ key: c, label: t(categoryMeta[c].label) })),
  ];

  return (
    <section className="wrap section">
      <span className="kicker">{t(articlesPage.kicker)}</span>
      <h1 className="article-index-h1">{t(articlesPage.h1)}</h1>
      <p className="article-index-lead">{t(articlesPage.lead)}</p>

      <div className="article-filter">
        {chips.map((c) => (
          <button
            key={c.key}
            type="button"
            aria-pressed={filter === c.key}
            onClick={() => setFilter(c.key)}
            className={`article-filter-chip ${filter === c.key ? "is-active" : ""}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="article-grid">
        {shown.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </section>
  );
}
