"use client";

import Link from "next/link";
import { articles, articlesPage } from "@/lib/articles";
import { useLang } from "@/lib/i18n";
import ArticleCard from "./articles/ArticleCard";

export default function ArticlesTeaser() {
  const { t } = useLang();
  const latest = articles.slice(0, 3);
  return (
    <section id="bai-viet" className="wrap section">
      <div className="teaser-head">
        <div>
          <span className="kicker">{t(articlesPage.kicker)}</span>
          <h2 className="h2" style={{ maxWidth: "20ch" }}>
            {t(articlesPage.h1)}
          </h2>
        </div>
        <Link href="/bai-viet" className="btn btn-secondary teaser-all">
          {t(articlesPage.all)} →
        </Link>
      </div>
      <div className="article-grid" style={{ marginTop: 36 }}>
        {latest.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </section>
  );
}
