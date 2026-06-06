import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import FeaturesDashboard from "../components/FeaturesDashboard";
import TeamSection from "../components/TeamSection";

export default function LandingPage() {
  return (
    <div
      className="
      relative
      min-h-screen
      text-white
      bg-[#020617]
      "
    >
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesDashboard />
      <TeamSection />
    </div>
  );
}
