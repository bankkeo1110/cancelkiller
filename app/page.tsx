import { LangProvider } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Prevention from "@/components/Prevention";
import TypeSelector from "@/components/TypeSelector";
import SignsScreening from "@/components/SignsScreening";
import Treatment from "@/components/Treatment";
import RiskCheck from "@/components/RiskCheck";
import Support from "@/components/Support";
import Faq from "@/components/Faq";
import Poster from "@/components/Poster";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <div style={{ minHeight: "100vh" }}>
        <Nav />
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
        <Support />
        <Faq />
        <Poster />
        <Footer />
      </div>
    </LangProvider>
  );
}
