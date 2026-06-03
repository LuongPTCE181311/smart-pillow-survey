import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import ProductShowcase from "./ProductShowcase";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });
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
              className="
              inline-flex
              items-center

              px-4 py-2

              rounded-full

              bg-cyan-500/10
              border border-cyan-500/20

              text-cyan-300
              text-sm
              "
            >
              AI Healthcare Innovation
            </div>

            <h1
              className="
              mt-8

              font-bold

              leading-tight

              text-4xl
              sm:text-5xl
              lg:text-7xl
              "
            >
              Smart Pillow
              <br />
              <span className="text-cyan-400">For Elderly Care</span>
            </h1>

            <p
              className="
              mt-6

              text-slate-300

              text-lg
              lg:text-xl

              max-w-xl
              "
            >
              Gối thông minh theo dõi giấc ngủ, nhịp tim và các dấu hiệu bất
              thường của người cao tuổi theo thời gian thực.
            </p>

            <div
              className="
              mt-10

              flex
              flex-col
              sm:flex-row

              gap-4
              "
            >
              <Link
                to="/survey"
                className="
    inline-flex
    items-center
    gap-2
    px-8 py-4
    rounded-2xl
    bg-cyan-500
    hover:bg-cyan-400
    transition
  "
              >
                Bắt đầu khảo sát
                <ArrowRight size={18} />
              </Link>

              <button
                className="
                px-8 py-4

                rounded-2xl

                border border-white/10

                bg-white/5

                backdrop-blur-xl
                "
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
              className="
      rounded-[40px]
      bg-white/5
      border border-white/10
      backdrop-blur-xl
      p-8
      shadow-2xl
    "
            >
              <ProductShowcase />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
