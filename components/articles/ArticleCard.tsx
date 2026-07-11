"use client";

import Link from "next/link";
import type { Article } from "@/lib/articles";
import { articlesPage, categoryMeta } from "@/lib/articles";
import { useLang } from "@/lib/i18n";
import { Infographic } from "./Infographics";

export default function ArticleCard({ article }: { article: Article }) {
  const { lang, t } = useLang();
  return (
    <Link href={`/bai-viet/${article.slug}`} className="article-card">
      <div className="article-card-cover">
        <Infographic id={article.cover} />
      </div>
      <div className="article-card-body">
        <span className="article-card-cat">{t(categoryMeta[article.category].label)}</span>
        <h3 className="article-card-title">{t(article.title)}</h3>
        <p className="article-card-excerpt">{t(article.excerpt)}</p>
        <span className="article-card-meta">
          {articlesPage.minRead(article.readingMin, lang)}
        </span>
      </div>
    </Link>
  );
}
