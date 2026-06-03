import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

import surveyQuestions from "../data/surveyQuestions";
import surveySteps from "../data/surveySteps";

export default function SurveyPage() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const { theme } = useTheme();

  const totalSteps = surveySteps.length;

  const current = surveySteps[step - 1];

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
      className={`
        relative
        min-h-screen
        px-6
        py-16
        overflow-hidden
        transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-[#020617] text-white"
            : "bg-white text-gray-900"
        }
      `}
    >
      {/* Glow Cyan */}
      <div
        className={`
          fixed
          top-20
          left-20
          w-[500px]
          h-[500px]
          blur-[180px]
          rounded-full
          ${theme === "dark" ? "bg-cyan-500/20" : "bg-cyan-500/10"}
        `}
      />

      {/* Glow Purple */}
      <div
        className={`
          fixed
          bottom-20
          right-20
          w-[500px]
          h-[500px]
          blur-[180px]
          rounded-full
          ${theme === "dark" ? "bg-purple-500/20" : "bg-purple-500/10"}
        `}
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
          className={`
            p-10
            md:p-16
            rounded-[40px]
            backdrop-blur-2xl
            border
            transition-colors duration-300
            shadow-[0_0_80px_rgba(0,0,0,0.3)]
            ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-gray-900/5 border-gray-200"
            }
          `}
        >
          <h1 className="text-5xl font-bold">{current.title}</h1>

          <p
            className={`
              mt-4
              ${theme === "dark" ? "text-slate-400" : "text-gray-600"}
            `}
          >
            {current.description}
          </p>

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
            onClick={prevStep}
            className={`
              px-6
              py-3
              rounded-xl
              transition-all
              disabled:opacity-30
              disabled:hover:bg-white/10
              ${
                theme === "dark"
                  ? "bg-white/10 hover:bg-white/20"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-900"
              }
            `}
          >
            Quay lại
          </button>

          <button
            disabled={step === totalSteps}
            onClick={nextStep}
            className={`
              px-6
              py-3
              rounded-xl
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              disabled:opacity-30
              ${
                theme === "dark"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
              }
            `}
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
}
