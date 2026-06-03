import { useState } from "react";

import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import surveyQuestions from "../data/surveyQuestions";
import surveySteps from "../data/surveySteps";

export default function SurveyPage() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const totalSteps = surveySteps.length;

  const current = surveySteps[step - 1];

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const sectionKeys = ["A", "B", "C", "D", "E"];
  const currentQuestions = surveyQuestions[sectionKeys[step - 1]] || [];

  return (
    <div
      className="
      min-h-screen

      bg-[#020617]

      text-white

      px-6
      py-16
      "
    >
      <div className="max-w-4xl mx-auto">
        <ProgressBar currentStep={step} totalSteps={totalSteps} />

        <div
          className="
            p-10
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            "
        >
          <h1 className="text-5xl font-bold">{current.title}</h1>

          <p className="mt-4 text-slate-400">{current.description}</p>

          <div className="mt-10">
            {currentQuestions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                value={answers[q.id]}
                onChange={handleAnswer}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <button
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
            className="
            px-6 py-3

            rounded-xl

            bg-white/10

            disabled:opacity-30
            "
          >
            Quay lại
          </button>

          <button
            disabled={step === totalSteps}
            onClick={() => setStep(step + 1)}
            className="
            px-6 py-3

            rounded-xl

            bg-cyan-500
            "
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
}
