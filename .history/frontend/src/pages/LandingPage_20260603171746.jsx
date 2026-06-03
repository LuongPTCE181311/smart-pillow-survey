import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import HeroSection from "../components/HeroSection";

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
    </div>
  );
}