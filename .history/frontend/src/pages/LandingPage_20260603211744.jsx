import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import FeaturesDashboard from "../components/FeaturesDashboard";
import { useTheme } from "../context/ThemeContext";

export default function LandingPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`
        relative
        min-h-screen
        transition-colors duration-300
        ${
          theme === "dark"
            ? "text-white bg-[#020617]"
            : "text-gray-900 bg-white"
        }
      `}
    >
      <AnimatedBackground />

      <Navbar />

      <HeroSection />
      <VideoSection />
      <ProblemSection />

      <SolutionSection />
      <FeaturesDashboard />
    </div>
  );
}