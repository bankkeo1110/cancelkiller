import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allSlugs, getArticle } from "@/lib/articles";
import ArticleView from "@/components/articles/ArticleView";

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Không tìm thấy bài viết — Vững Tâm" };
  return {
    title: `${article.title.vi} — Vững Tâm`,
    description: article.excerpt.vi,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticleView article={article} />;
}
