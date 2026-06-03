import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDarkTheme =
        document.documentElement.classList.contains("dark-theme");
      setIsLightMode(!isDarkTheme);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Aurora Layer 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-64 -left-64 w-[1200px] h-[1200px] rounded-full blur-[200px] transition-opacity duration-300"
        style={{
          background: isLightMode
            ? "conic-gradient(from 0deg, #e0f2fe, #bfdbfe, #dbeafe, #e0f2fe)"
            : "conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)",
          opacity: isLightMode ? 0.4 : 0.15,
        }}
      />

      {/* Aurora Layer 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-64 -right-64 w-[1200px] h-[1200px] rounded-full blur-[220px] transition-opacity duration-300"
        style={{
          background: isLightMode
            ? "conic-gradient(from 180deg, #e0f2fe, #bae6fd, #e0e7ff, #e0f2fe)"
            : "conic-gradient(from 180deg, #0ea5e9, #22d3ee, #6366f1, #0ea5e9)",
          opacity: isLightMode ? 0.3 : 0.1,
        }}
      />

      {/* Spotlight 1 */}
      <motion.div
        animate={{ x: mouse.x - 350, y: mouse.y - 350 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px] transition-opacity duration-300"
        style={{
          background: isLightMode
            ? "radial-gradient(circle, rgba(8, 145, 178, 0.4) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(34,211,238,0.35) 0%, transparent 70%)",
          opacity: isLightMode ? 0.5 : 1,
        }}
      />

      {/* Spotlight 2 */}
      <motion.div
        animate={{ x: mouse.x - 200, y: mouse.y - 200 }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] transition-opacity duration-300"
        style={{
          background: isLightMode
            ? "radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          opacity: isLightMode ? 0.4 : 1,
        }}
      />

      {/* Spotlight 3 */}
      <motion.div
        animate={{ x: mouse.x - 100, y: mouse.y - 100 }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
        className="absolute w-[200px] h-[200px] rounded-full blur-[60px] transition-opacity duration-300"
        style={{
          background: isLightMode
            ? "radial-gradient(circle, rgba(8, 145, 178, 0.4) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
          opacity: isLightMode ? 0.5 : 1,
        }}
      />
    </div>
  );
}
