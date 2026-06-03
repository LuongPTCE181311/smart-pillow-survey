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
              type="radio"
              name={question.id}
              value={option}
              checked={value === option}
              onChange={(e) => onChange(question.id, e.target.value)}
              className="mr-3"
            />

            {option}
          </label>
        ))}
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
      {
  question.type === "textarea" && (
    <textarea
      value={value || ""}
      onChange={(e) =>
        onChange(
          question.id,
          e.target.value
        )
      }
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
  )
}
    </div>
  )
}
