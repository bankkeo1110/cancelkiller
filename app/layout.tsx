import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Vững Tâm — Hiểu đúng về ung thư, phòng ngừa trong tầm tay",
  description:
    "Cẩm nang song ngữ, dễ hiểu về ung thư — phòng ngừa, phát hiện sớm, điều trị và đồng hành. A plain-language, bilingual guide to cancer prevention, detection, treatment and support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={archivo.variable}>
      <body>
        <LangProvider>
          <Nav />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
