import { HeartPulse, Moon, Wifi } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function FeaturesDashboard() {
  const { theme } = useTheme();

  return (
    <section className={`py-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className={`
            text-4xl
            font-bold
            text-center
            transition-colors duration-300
            ${theme === "dark" ? "text-white" : "text-gray-900"}
          `}
        >
          Dashboard Test
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* Heart Rate Card */}
          <div
            className={`
              p-6
              rounded-3xl
              transition-colors duration-300
              ${
                theme === "dark"
                  ? "bg-white/5 border border-white/10"
                  : "bg-gray-50 border border-gray-200"
              }
            `}
          >
            <HeartPulse className="text-red-400" size={32} />
            <h3
              className={`
                mt-4
                transition-colors duration-300
                ${theme === "dark" ? "text-white" : "text-gray-900"}
              `}
            >
              Heart Rate
            </h3>
            <p
              className={`
                text-3xl
                font-bold
                mt-2
                transition-colors duration-300
                ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}
              `}
            >
              72 BPM
            </p>
          </div>

          {/* Sleep Score Card */}
          <div
            className={`
              p-6
              rounded-3xl
              transition-colors duration-300
              ${
                theme === "dark"
                  ? "bg-white/5 border border-white/10"
                  : "bg-gray-50 border border-gray-200"
              }
            `}
          >
            <Moon className="text-cyan-400" size={32} />
            <h3
              className={`
                mt-4
                transition-colors duration-300
                ${theme === "dark" ? "text-white" : "text-gray-900"}
              `}
            >
              Sleep Score
            </h3>
            <p
              className={`
                text-3xl
                font-bold
                mt-2
                transition-colors duration-300
                ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}
              `}
            >
              92%
            </p>
          </div>

          {/* Monitoring Card */}
          <div
            className={`
              p-6
              rounded-3xl
              transition-colors duration-300
              ${
                theme === "dark"
                  ? "bg-white/5 border border-white/10"
                  : "bg-gray-50 border border-gray-200"
              }
            `}
          >
            <Wifi className="text-green-400" size={32} />
            <h3
              className={`
                mt-4
                transition-colors duration-300
                ${theme === "dark" ? "text-white" : "text-gray-900"}
              `}
            >
              Monitoring
            </h3>
            <p
              className={`
                text-3xl
                font-bold
                mt-2
                transition-colors duration-300
                ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}
              `}
            >
              Online
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
