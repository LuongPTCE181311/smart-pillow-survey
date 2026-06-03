import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.jpg";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />
      <AnimatedBackground />
      <Navbar />
      {/* HERO */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full">
              AI Healthcare Innovation
            </span>

            <h1 className="text-6xl font-bold mt-6 leading-tight">
              Smart Pillow
              <br />
              For Elderly Care
            </h1>

            <p className="mt-6 text-slate-300 text-lg">
              Gối thông minh giúp theo dõi nhịp tim, giấc ngủ và phát hiện dấu
              hiệu bất thường của người cao tuổi theo thời gian thực.
            </p>

            <button
              className="
              mt-8
              px-8 py-4
              rounded-2xl
              bg-blue-600
              hover:bg-blue-500
              transition
              flex items-center gap-2
            "
            >
              Bắt đầu khảo sát
              <ArrowRight size={18} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="
              rounded-3xl
              p-10
              border border-white/10
              bg-white/5
              backdrop-blur-xl
            "
            >
              <img src={logo} alt="Smart Pillow" className="w-full" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
