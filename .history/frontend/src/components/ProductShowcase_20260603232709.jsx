import { motion } from "framer-motion";
import { HeartPulse, Moon, Wifi } from "lucide-react";

import logo from "../assets/logo.jpg";

export default function ProductShowcase() {
  return (
    <motion.div
      className="
        relative
        rounded-[40px]
        bg-card
        border border-primary
        backdrop-blur-xl
        p-8
        "
    >
      {/* Card chính */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
        relative

        rounded-[40px]

        bg-white/5

        border border-white/10

        backdrop-blur-xl

        p-8
        "
      >
        <img
          src={logo}
          alt=""
          className="
          w-full
          rounded-3xl
          "
        />
      </motion.div>

      {/* Card Heart */}

      <motion.div className="
  absolute
  -top-5
  -left-10
  p-4
  rounded-2xl
  bg-secondary
  border border-accent-cyan/20
  backdrop-blur-xl
">
  <div className="flex items-center gap-3">
    <HeartPulse size={22} className="text-red-400" />
    <div>
      <p className="text-xs text-secondary">Heart Rate</p>
      <p className="font-bold text-primary">72 BPM</p>
    </div>
  </div>
</motion.div>

      {/* Sleep */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
        absolute

        top-1/2
        -right-10

        p-4

        rounded-2xl

        bg-slate-900/80

        border border-cyan-500/20

        backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          <Moon size={22} className="text-cyan-400" />

          <div>
            <p className="text-xs text-slate-400">Sleep Score</p>

            <p className="font-bold">92%</p>
          </div>
        </div>
      </motion.div>

      {/* Monitoring */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="
        absolute

        -bottom-5
        left-10

        p-4

        rounded-2xl

        bg-slate-900/80

        border border-cyan-500/20

        backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          <Wifi size={22} className="text-green-400" />

          <div>
            <p className="text-xs text-slate-400">Status</p>

            <p className="font-bold">Online</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
