import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import ProductShowcase from "./ProductShowcase";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function HeroSection() {
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });
  const { theme } = useTheme();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = -((y - centerY) / centerY) * 10;

    setRotate({
      x: rotateX,
      y: rotateY,
    });
  };

  const resetRotation = () => {
    setRotate({
      x: 0,
      y: 0,
    });
  };

  return (
    <section className="relative">
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-20
        lg:py-32
        "
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div
              className={`
                inline-flex
                items-center
                px-4 py-2
                rounded-full
                border
                text-sm
                transition-colors duration-300
                ${
                  theme === "dark"
                    ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
                    : "bg-blue-100 border-blue-300 text-blue-600"
                }
              `}
            >
              AI Healthcare Innovation
            </div>

            <h1
              className={`
                mt-8
                font-bold
                leading-tight
                text-4xl
                sm:text-5xl
                lg:text-7xl
                transition-colors duration-300
                ${theme === "dark" ? "text-white" : "text-gray-900"}
              `}
            >
              Smart Pillow
              <br />
              <span
                className={`
                  ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}
                `}
              >
                For Elderly Care
              </span>
            </h1>

            <p
              className={`
                mt-6
                text-lg
                lg:text-xl
                max-w-xl
                transition-colors duration-300
                ${theme === "dark" ? "text-slate-300" : "text-gray-600"}
              `}
            >
              Gối thông minh theo dõi giấc ngủ, nhịp tim và các dấu hiệu bất
              thường của người cao tuổi theo thời gian thực.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/survey"
                className={`
                  inline-flex
                  items-center
                  gap-2
                  px-8 py-4
                  rounded-2xl
                  font-semibold
                  transition-all duration-300
                  hover:scale-105
                  ${
                    theme === "dark"
                      ? "bg-cyan-500 hover:bg-cyan-400 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }
                `}
              >
                Bắt đầu khảo sát
                <ArrowRight size={18} />
              </Link>

              <button
                className={`
                  px-8 py-4
                  rounded-2xl
                  border
                  backdrop-blur-xl
                  transition-all duration-300
                  ${
                    theme === "dark"
                      ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                      : "border-gray-300 bg-gray-50 text-gray-900 hover:bg-gray-100"
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <Play size={18} />
                  Xem video
                </div>
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={resetRotation}
              style={{
                transform: `
                  perspective(1200px)
                  rotateX(${rotate.x}deg)
                  rotateY(${rotate.y}deg)
                `,
                transition: "transform 0.1s ease",
              }}
              className={`
                rounded-[40px]
                border
                backdrop-blur-xl
                p-8
                shadow-2xl
                transition-colors duration-300
                ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-gray-900/5 border-gray-200"
                }
              `}
            >
              <ProductShowcase />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
