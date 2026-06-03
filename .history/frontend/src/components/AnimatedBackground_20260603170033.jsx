import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {/* Aurora nền */}

      <div
        className="
        absolute
        -top-40
        -left-40

        w-[700px]
        h-[700px]

        bg-cyan-500/20

        rounded-full

        blur-[180px]
        "
      />

      <div
        className="
        absolute
        -bottom-40
        -right-40

        w-[700px]
        h-[700px]

        bg-blue-500/20

        rounded-full

        blur-[180px]
        "
      />

      {/* Spotlight theo chuột */}

      <motion.div
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 25,
          mass: 0.8,
        }}
        className="
        absolute
        w-[500px]
        h-[500px]

        rounded-full

        blur-[120px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.35) 0%, rgba(34,211,238,0) 70%)",
        }}
      />
    </div>
  );
}