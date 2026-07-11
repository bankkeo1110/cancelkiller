import type { Metadata } from "next";
import ArticlesIndex from "@/components/articles/ArticlesIndex";

export const metadata: Metadata = {
  title: "Bài viết về ung thư — Vững Tâm",
  description:
    "Thư viện bài viết song ngữ về phòng ngừa, tầm soát, điều trị ung thư và chăm sóc người bệnh — dễ hiểu, ưu tiên bảng và hình.",
};

export default function ArticlesPage() {
  return <ArticlesIndex />;
}
