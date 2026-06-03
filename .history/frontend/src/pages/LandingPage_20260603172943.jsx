import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";

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
      <VideoSection />
    </div>
  );
}