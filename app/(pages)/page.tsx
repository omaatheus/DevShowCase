
import FAQ from "../components/landing-page/faq";
import { Footer } from "../components/landing-page/footer";
import Header from "../components/landing-page/header";
import Hero from "../components/landing-page/hero";
import Pricing from "../components/landing-page/pricing";
import VideoExplanation from "../components/landing-page/videoExplanation";
import { trackServerEvent } from "../lib/mixpanel";
import { Metadata } from "next";
import { getSEOTags } from "../lib/seo";

export const metadata: Metadata = getSEOTags({
  appName: "LinkShowCase",
  appDescription:
    "LinkShowCase - Ajude seus seguidores a descobrir tudo o que você faz, com um simples link.",
  keywords: ["LinkShowCase", "projetos", "redes sociais", "link"],
  appDomain: "https://dev-show-case.vercel.app/",
  canonicalUrlRelative: "/",
});

export default function Home() {

  trackServerEvent("page_view", {
    page: "home",
  })

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
