import { motion } from "framer-motion";
import videoDemo from "../assets/intro.mp4";

export default function VideoSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2
            className="
            text-center
            text-4xl
            lg:text-5xl
            font-bold
          "
          >
            Trải nghiệm Smart Pillow
          </h2>

          <p
            className="
            text-center
            text-slate-400
            mt-5
            max-w-2xl
            mx-auto
          "
          >
            Khám phá cách Smart Pillow theo dõi sức khỏe người cao tuổi trong
            thời gian thực.
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
          mt-16

          rounded-[40px]

          overflow-hidden

          border border-white/10

          bg-white/5

          backdrop-blur-xl

          shadow-[0_0_80px_rgba(34,211,238,0.1)]
          "
        >
          <video
            controls
            className="
            w-full
            "
          >
            <source src={videoDemo} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
