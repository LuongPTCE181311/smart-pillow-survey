import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden bg-primary">
      {/* Glow Cyan */}
      <div className="fixed top-10 left-10 w-[500px] h-[500px] blur-[180px] rounded-full opacity-20 pointer-events-none bg-accent-cyan-light" />

      {/* Glow Purple */}
      <div
        className="fixed bottom-10 right-10 w-[500px] h-[500px] blur-[180px] rounded-full opacity-20 pointer-events-none"
        style={{ backgroundColor: "#8b5cf6" }}
      />

      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-card border border-primary rounded-[40px] px-10 py-16 shadow-[0_0_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
        >
          {/* Checkmark icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="flex items-center justify-center mx-auto mb-8 w-24 h-24 rounded-full bg-accent-cyan-light"
            style={{ border: "2px solid var(--accent-cyan)" }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent-cyan)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              />
            </svg>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-5xl font-bold text-primary mb-4"
          >
            Cảm ơn bạn!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg text-secondary mb-2"
          >
            Phản hồi của bạn đã được ghi nhận thành công.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-base text-slate mb-10"
          >
            Ý kiến của bạn giúp chúng tôi phát triển{" "}
            <span className="text-accent-cyan font-semibold">Respyn</span> tốt
            hơn mỗi ngày.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="h-px mb-10"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--accent-cyan), transparent)",
            }}
          />

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center gap-12 mb-12"
          >
            {[
              { value: "5", label: "Phần khảo sát" },
              { value: "33+", label: "Câu hỏi" },
              { value: "100%", label: "Hoàn thành" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-accent-cyan">
                  {stat.value}
                </p>
                <p className="text-sm text-slate mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/")}
            className="px-10 py-4 rounded-2xl text-white font-semibold text-lg shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            style={{
              background:
                "linear-gradient(to right, var(--accent-cyan), #3b82f6)",
            }}
          >
            Về trang chủ
          </motion.button>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-8 text-sm text-muted"
        >
          Dự án <span className="text-accent-cyan font-medium">Respyn</span> —
          Smart Pillow &amp; Health Monitor
        </motion.p>
      </div>
    </div>
  );
}
