import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Ánh sáng theo chuột */}

      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        rounded-full
        blur-[120px]
        transition-all
        duration-300
        "
        style={{
          left: position.x - 250,
          top: position.y - 250,
          background: "rgba(34,211,238,0.25)",
        }}
      />

      {/* Glow phụ */}

      <div
        className="
        absolute
        top-0
        left-0

        w-[600px]
        h-[600px]

        rounded-full

        bg-cyan-500/20

        blur-[180px]
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0

        w-[600px]
        h-[600px]

        rounded-full

        bg-blue-500/20

        blur-[180px]
        "
      />
    </div>
  );
}
