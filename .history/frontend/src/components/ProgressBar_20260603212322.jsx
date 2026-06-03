import { useTheme } from "../context/ThemeContext";

export default function ProgressBar({ currentStep, totalSteps }) {
  const { theme } = useTheme();
  const percent = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-10">
      <div
        className={`
          flex
          justify-between
          mb-3
          transition-colors duration-300
          ${theme === "dark" ? "text-white" : "text-gray-900"}
        `}
      >
        <span>
          Bước {currentStep}/{totalSteps}
        </span>

        <span>{percent.toFixed(0)}%</span>
      </div>

      <div
        className={`
          h-3
          rounded-full
          overflow-hidden
          animate-pulse
          transition-colors duration-300
          ${theme === "dark" ? "bg-white/10" : "bg-gray-300"}
        `}
      >
        <div
          style={{
            width: `${percent}%`,
          }}
          className={`
            h-full
            bg-gradient-to-r
            transition-all
            duration-500
            ${
              theme === "dark"
                ? "from-cyan-400 via-blue-500 to-purple-500"
                : "from-blue-500 via-blue-600 to-purple-600"
            }
          `}
        />
      </div>
    </div>
  );
}
