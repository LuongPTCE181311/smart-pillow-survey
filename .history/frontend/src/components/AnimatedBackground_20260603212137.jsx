import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function AnimatedBackground() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });
  const { theme } = useTheme();

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Aurora Layer 1 */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`
          absolute
          -top-64
          -left-64
          w-[1200px]
          h-[1200px]
          rounded-full
          blur-[200px]
          ${theme === "dark" ? "opacity-15" : "opacity-5"}
        `}
        style={{
          background:
            theme === "dark"
              ? "conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)"
              : "conic-gradient(from 0deg, #60a5fa, #93c5fd, #dbeafe, #60a5fa)",
        }}
      />

      {/* Aurora Layer 2 */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`
          absolute
          -bottom-64
          -right-64
          w-[1200px]
          h-[1200px]
          rounded-full
          blur-[220px]
          ${theme === "dark" ? "opacity-10" : "opacity-5"}
        `}
        style={{
          background:
            theme === "dark"
              ? "conic-gradient(from 180deg, #0ea5e9, #22d3ee, #6366f1, #0ea5e9)"
              : "conic-gradient(from 180deg, #93c5fd, #bfdbfe, #ddd6fe, #93c5fd)",
        }}
      />

      {/* Spotlight 1 */}

      <motion.div
        animate={{
          x: mouse.x - 350,
          y: mouse.y - 350,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px]"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(34,211,238,0.35) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Spotlight 2 */}

      <motion.div
        animate={{
          x: mouse.x - 200,
          y: mouse.y - 200,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 18,
        }}
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(147,51,234,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Spotlight 3 */}

      <motion.div
        animate={{
          x: mouse.x - 100,
          y: mouse.y - 100,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 15,
        }}
        className="absolute w-[200px] h-[200px] rounded-full blur-[60px]"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
