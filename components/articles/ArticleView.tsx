"use client";

import Link from "next/link";
import {
  type Article,
  articles,
  articlesPage,
  categoryMeta,
} from "@/lib/articles";
import { useLang } from "@/lib/i18n";
import ArticleBody from "./ArticleBody";
import ArticleCard from "./ArticleCard";

export default function ArticleView({ article }: { article: Article }) {
  const { lang, t } = useLang();

  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <article>
      <header className="wrap article-head">
        <Link href="/bai-viet" className="article-back">
          {t(articlesPage.backToList)}
        </Link>
        <span className="kicker" style={{ marginTop: 24 }}>
          {t(categoryMeta[article.category].label)}
        </span>
        <h1 className="article-title">{t(article.title)}</h1>
        <p className="article-excerpt">{t(article.excerpt)}</p>
        <p className="article-meta">
          {articlesPage.minRead(article.readingMin, lang)} · {t(articlesPage.updated)} {article.updated}
        </p>
      </header>

      <div className="wrap article-main">
        <ArticleBody blocks={article.blocks} />

        <div className="callout" style={{ marginTop: 40 }}>
          <p className="callout-text" style={{ margin: 0 }}>
            {t(articlesPage.disclaimer)}
          </p>
        </div>

        <div className="article-sources">
          <p className="article-sources-title">{t(articlesPage.sourcesTitle)}</p>
          <ul>
            {article.sources.map((s, i) => (
              <li key={i}>{t(s)}</li>
            ))}
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <>
          <div className="rule" />
          <section className="wrap section">
            <span className="kicker">{t(articlesPage.moreInCategory)}</span>
            <div className="article-grid" style={{ marginTop: 28 }}>
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        </>
      )}
    </article>
  );
}
