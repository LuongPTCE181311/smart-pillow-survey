import { useState } from "react";
import { motion } from "framer-motion";

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

  const nextStep = () => {
  setStep((prev) => prev + 1);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  const sectionKeys = ["A", "B", "C", "D", "E"];

  const currentQuestions = surveyQuestions[sectionKeys[step - 1]] || [];

  return (
    <div
      className="
        relative
        min-h-screen

        bg-[#020617]

        text-white

        px-6
        py-16

        overflow-hidden
      "
    >
      {/* Glow Cyan */}
      <div
        className="
          fixed
          top-20
          left-20

          w-[500px]
          h-[500px]

          bg-cyan-500/20

          blur-[180px]

          rounded-full
        "
      />

      {/* Glow Purple */}
      <div
        className="
          fixed
          bottom-20
          right-20

          w-[500px]
          h-[500px]

          bg-purple-500/20

          blur-[180px]

          rounded-full
        "
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <ProgressBar currentStep={step} totalSteps={totalSteps} />

        <motion.div
          key={step}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            p-10
            md:p-16

            rounded-[40px]

            bg-white/5

            backdrop-blur-2xl

            border
            border-white/10

            shadow-[0_0_80px_rgba(0,0,0,0.3)]
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
        </motion.div>

        <div className="flex justify-between mt-10">
          <button
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
            className="
              px-6
              py-3

              rounded-xl

              bg-white/10

              hover:bg-white/20

              transition-all

              disabled:opacity-30
              disabled:hover:bg-white/10
            "
          >
            Quay lại
          </button>

          <button
            disabled={step === totalSteps}
            onClick={nextStep}
            className="
              px-6
              py-3

              rounded-xl

             bg-gradient-to-r
            from-cyan-500
            to-blue-600
            hover:scale-105
            transition-all
            duration-300

              hover:bg-cyan-400

              transition-all

              disabled:opacity-30
            "
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
}
