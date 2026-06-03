export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Glow trái */}

      <div
        className="
        absolute
        -top-40
        -left-40

        w-[700px]
        h-[700px]

        bg-cyan-400/40

        rounded-full

        blur-[180px]
        "
      />

      {/* Glow phải */}

      <div
        className="
        absolute
        -bottom-40
        -right-40

        w-[700px]
        h-[700px]

        bg-blue-500/40

        rounded-full

        blur-[180px]
        "
      />
    </div>
  );
}
