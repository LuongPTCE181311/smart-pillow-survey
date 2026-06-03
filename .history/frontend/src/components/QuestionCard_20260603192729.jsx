export default function QuestionCard({ question, value, onChange }) {
  return (
    <div className="mb-10">
      <h2
        className="
        text-2xl
        font-semibold
        mb-5
        "
      >
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
              <span className="text-lg">{option}</span>
            </div>
          );
        })}
      {question.type === "checkbox" &&
        question.options.map((option) => (
          <label
            key={option}
            className="
        block
        p-5
        rounded-2xl
        bg-white/5
        border
        border-white/10
        mb-3
        cursor-pointer
        hover:border-cyan-400
        "
          >
            <input
              type="checkbox"
              checked={value?.includes(option) || false}
              onChange={(e) => {
                let updated = value || [];

                if (e.target.checked) {
                  updated = [...updated, option];
                } else {
                  updated = updated.filter((item) => item !== option);
                }

                onChange(question.id, updated);
              }}
              className="mr-3"
            />

            {option}
          </label>
        ))}
      {question.type === "textarea" && (
        <textarea
          value={value || ""}
          onChange={(e) => onChange(question.id, e.target.value)}
          rows={5}
          placeholder="Nhập ý kiến của bạn..."
          className="
      w-full

      p-5

      rounded-2xl

      bg-white/5

      border border-white/10

      outline-none

      focus:border-cyan-400
      "
        />
      )}
    </div>
  );
}
