export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Glow 1 */}

      <div
        className="
        absolute
        top-0
        left-0

        w-[500px]
        h-[500px]

        bg-cyan-500/20

        rounded-full

        blur-[150px]
        "
      />

      {/* Glow 2 */}

      <div
        className="
        absolute
        bottom-0
        right-0

        w-[500px]
        h-[500px]

        bg-blue-600/20

        rounded-full

        blur-[150px]
        "
      />

    </div>
  );
}