export default function ProgressBar({ currentStep, totalSteps }) {
  const percent = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-10">
      <div className="flex justify-between mb-3">
        <span>
          Bước {currentStep}/{totalSteps}
        </span>

        <span>{percent.toFixed(0)}%</span>
      </div>

      <div
        className="
        h-3
        bg-white/10
        rounded-full
        overflow-hidden
        "
      >
        <div
          style={{
            width: `${percent}%`,
          }}
          className="
          h-full

          bg-gradient-to-r
         from-cyan-400
            via-blue-500
            to-purple-500

          transition-all
          duration-500
          "
        />
      </div>
    </div>
  );
}
