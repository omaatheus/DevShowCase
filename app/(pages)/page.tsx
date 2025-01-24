import FAQ from "../components/landing-page/faq";
import { Footer } from "../components/landing-page/footer";
import Header from "../components/landing-page/header";
import Hero from "../components/landing-page/hero";
import Pricing from "../components/landing-page/pricing";
import VideoExplanation from "../components/landing-page/videoExplanation";

export default function Home() {
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
