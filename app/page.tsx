import Hero from "@/components/Hero";
import Prevention from "@/components/Prevention";
import TypeSelector from "@/components/TypeSelector";
import SignsScreening from "@/components/SignsScreening";
import Treatment from "@/components/Treatment";
import RiskCheck from "@/components/RiskCheck";
import Support from "@/components/Support";
import Faq from "@/components/Faq";
import Poster from "@/components/Poster";
import ArticlesTeaser from "@/components/ArticlesTeaser";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Hero />
      <div className="rule" />
      <Prevention />
      <div className="rule" />
      <TypeSelector />
      <div className="rule" />
      <SignsScreening />
      <div className="rule" />
      <Treatment />
      <div className="rule" />
      <RiskCheck />
      <div className="rule" />
      <ArticlesTeaser />
      <div className="rule" />
      <Support />
      <Faq />
      <Poster />
    </div>
  );
}
