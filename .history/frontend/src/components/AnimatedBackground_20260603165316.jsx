export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="
        absolute
        top-0
        left-0

        w-[600px]
        h-[600px]

        bg-cyan-400/50

        rounded-full

        blur-[200px]
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0

        w-[600px]
        h-[600px]

        bg-blue-500/50

        rounded-full

        blur-[200px]
        "
      />
    </div>
  );
}
