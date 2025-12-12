import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import FeatureSwipeDeck from "../components/FeatureSwipeDeck";

export default function Home() {
  return (
    <div className="page-container">
      <div className="page-inner">
        <HeroSection />
        <HowItWorksSection />
        <FeatureSwipeDeck />
      </div>
    </div>
  );
}
