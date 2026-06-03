import { useTheme } from "../context/ThemeContext";

export default function QuestionCard({ question, value, onChange }) {
  const { theme } = useTheme();

  return (
    <div className="mb-10">
      <h2
        className={`
          text-4xl
          md:text-5xl
          font-bold
          leading-tight
          mb-10
          transition-colors duration-300
          ${theme === "dark" ? "text-white" : "text-gray-900"}
        `}
      >
        {question.question}
      </h2>

      {/* Radio Options */}
      {question.type === "radio" &&
        question.options.map((option) => {
          const selected = value === option;

          return (
            <div
              key={option}
              onClick={() => onChange(question.id, option)}
              className={`
                p-6
                rounded-3xl
                mb-4
                cursor-pointer
                transition-all
                duration-300
                border
                ${
                  selected
                    ? theme === "dark"
                      ? "border-cyan-400 bg-cyan-500/10 scale-[1.02] shadow-[0_0_40px_rgba(6,182,212,0.3)]"
                      : "border-blue-400 bg-blue-100 scale-[1.02] shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                    : theme === "dark"
                      ? "border-white/10 bg-white/5 hover:border-cyan-400/50"
                      : "border-gray-300 bg-gray-50 hover:border-blue-400/50"
                }
              `}
            >
              <span
                className={`
                  text-lg
                  transition-colors duration-300
                  ${theme === "dark" ? "text-white" : "text-gray-900"}
                `}
              >
                {option}
              </span>
            </div>
          );
        })}

      {/* Checkbox Options */}
      {question.type === "checkbox" &&
        question.options.map((option) => {
          const selected = value?.includes(option);

          return (
            <div
              key={option}
              onClick={() => {
                let updated = value || [];

                if (selected) {
                  updated = updated.filter((item) => item !== option);
                } else {
                  updated = [...updated, option];
                }

                onChange(question.id, updated);
              }}
              className={`
                p-6
                rounded-3xl
                mb-4
                cursor-pointer
                transition-all
                duration-300
                border
                ${
                  selected
                    ? theme === "dark"
                      ? "border-cyan-400 bg-cyan-500/10 scale-[1.02] shadow-[0_0_40px_rgba(6,182,212,0.3)]"
                      : "border-blue-400 bg-blue-100 scale-[1.02] shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                    : theme === "dark"
                      ? "border-white/10 bg-white/5 hover:border-cyan-400/50"
                      : "border-gray-300 bg-gray-50 hover:border-blue-400/50"
                }
              `}
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={selected}
                  readOnly
                  className={`
                    w-5
                    h-5
                    ${theme === "dark" ? "accent-cyan-400" : "accent-blue-600"}
                  `}
                />

                <span
                  className={`
                    text-lg
                    transition-colors duration-300
                    ${theme === "dark" ? "text-white" : "text-gray-900"}
                  `}
                >
                  {option}
                </span>
              </div>
            </div>
          );
        })}

      {/* Textarea */}
      {question.type === "textarea" && (
        <textarea
          value={value || ""}
          onChange={(e) => onChange(question.id, e.target.value)}
          rows={5}
          placeholder="Nhập ý kiến của bạn..."
          className={`
            w-full
            p-5
            rounded-2xl
            border
            outline-none
            transition-all
            duration-300
            ${
              theme === "dark"
                ? "bg-white/5 border-white/10 text-white placeholder-slate-400 focus:border-cyan-400"
                : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400"
            }
          `}
        />
      )}
    </div>
  );
}
