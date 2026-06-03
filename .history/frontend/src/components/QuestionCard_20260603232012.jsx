export default function QuestionCard({ question, value, onChange }) {
  return (
    <div className="mb-10">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10 text-primary">
        {question.question}
      </h2>
      {question.type === "radio" &&
        question.options.map((option) => {
          const selected = value === option;
          return (
            <div
              key={option}
              onClick={() => onChange(question.id, option)}
              className={`
          p-6 rounded-3xl mb-4 cursor-pointer
          transition-all duration-300 border
          ${
            selected
              ? `
                border-accent-cyan
                bg-accent-cyan-light
                scale-[1.02]
                shadow-[0_0_40px_rgba(6,182,212,0.3)]
              `
              : `
                border-primary
                bg-card
                hover:border-accent-cyan/50
              `
          }
        `}
            >
              <span className="text-lg text-primary">{option}</span>
            </div>
          );
        })}
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
              ? `
                border-cyan-400
                bg-cyan-500/10
                scale-[1.02]
                shadow-[0_0_40px_rgba(6,182,212,0.3)]
              `
              : `
                border-white/10
                bg-white/5
                hover:border-cyan-400/50
              `
          }
        `}
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={selected}
                  readOnly
                  className="
              w-5
              h-5
              accent-cyan-400
            "
                />

                <span className="text-lg">{option}</span>
              </div>
            </div>
          );
        })}
      {question.type === "textarea" && (
        <textarea
          value={value || ""}
          onChange={(e) => onChange(question.id, e.target.value)}
          rows={5}
          placeholder="Nhập ý kiến của bạn..."
          className="
      w-full p-5 rounded-2xl
      bg-card border border-primary
      outline-none
      focus:border-accent-cyan
      text-primary
    "
        />
      )}
    </div>
  );
}
