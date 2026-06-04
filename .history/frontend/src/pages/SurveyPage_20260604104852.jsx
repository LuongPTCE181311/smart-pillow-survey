import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

import surveyQuestions from "../data/surveyQuestions";
import surveySteps from "../data/surveySteps";

export default function SurveyPage() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const totalSteps = surveySteps.length;
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const current = surveySteps[step - 1];

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    currentQuestions.forEach((q) => {
      // Bỏ qua textarea (không bắt buộc)
      if (q.type === "textarea") return;

      const val = answers[q.id];
      if (!val || (Array.isArray(val) && val.length === 0)) {
        newErrors[q.id] = "Vui lòng trả lời câu hỏi này";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextStep = () => {
    if (!validate()) return; // Dừng nếu có lỗi
    setErrors({});
    setStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sectionKeys = ["A", "B", "C", "D", "E"];

  const currentQuestions = surveyQuestions[sectionKeys[step - 1]] || [];

  const handleSubmit = async () => {
  if (!validate()) return;

  // Map answers theo từng section dựa vào ID câu hỏi
  const sectionKeys = { A: "sectionA", B: "sectionB", C: "sectionC", D: "sectionD", E: "sectionE" };
  const payload = {};

  Object.entries(surveyQuestions).forEach(([key, questions]) => {
    const sectionName = sectionKeys[key];
    payload[sectionName] = {};
    questions.forEach((q) => {
      if (answers[q.id] !== undefined) {
        payload[sectionName][q.id] = answers[q.id];
      }
    });
  });
  return (
    <div
      className="
        relative
        min-h-screen
        px-6
        py-16
        overflow-hidden
      "
      style={{
        backgroundColor: getComputedStyle(
          document.documentElement,
        ).getPropertyValue("--bg-primary"),
        color: getComputedStyle(document.documentElement).getPropertyValue(
          "--text-primary",
        ),
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Glow Cyan */}
      <div
        className="
          fixed
          top-20
          left-20
          w-[500px]
          h-[500px]
          blur-[180px]
          rounded-full
          opacity-20
          pointer-events-none
        "
        style={{
          backgroundColor: getComputedStyle(
            document.documentElement,
          ).getPropertyValue("--accent-cyan"),
        }}
      />

      {/* Glow Purple */}
      <div
        className="
          fixed
          bottom-20
          right-20
          w-[500px]
          h-[500px]
          blur-[180px]
          rounded-full
          opacity-20
          pointer-events-none
        "
        style={{
          backgroundColor: "#8b5cf6",
        }}
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
            backdrop-blur-2xl
            border
            shadow-[0_0_80px_rgba(0,0,0,0.3)]
          "
          style={{
            backgroundColor: getComputedStyle(
              document.documentElement,
            ).getPropertyValue("--bg-card"),
            borderColor: getComputedStyle(
              document.documentElement,
            ).getPropertyValue("--border-primary"),
          }}
        >
          <h1
            className="text-5xl font-bold"
            style={{
              color: getComputedStyle(
                document.documentElement,
              ).getPropertyValue("--text-primary"),
            }}
          >
            {current.title}
          </h1>

          <p
            className="mt-4"
            style={{
              color: getComputedStyle(
                document.documentElement,
              ).getPropertyValue("--text-secondary"),
            }}
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
                error={errors[q.id]}
              />
            ))}
          </div>
        </motion.div>

        <div className="flex justify-between mt-10">
          <button
            disabled={step === 1}
            onClick={prevStep}
            className="
              px-6
              py-3
              rounded-xl
              transition-all
              disabled:opacity-30
              disabled:hover:bg-white/10
            "
            style={{
              backgroundColor: getComputedStyle(
                document.documentElement,
              ).getPropertyValue("--bg-card"),
              color: getComputedStyle(
                document.documentElement,
              ).getPropertyValue("--text-primary"),
              borderColor: getComputedStyle(
                document.documentElement,
              ).getPropertyValue("--border-primary"),
              borderWidth: "1px",
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = "0.8";
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = step === 1 ? "0.3" : "1";
            }}
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
              transition-all
              duration-300
              hover:scale-105
              disabled:opacity-30
            "
            style={{
              background: `linear-gradient(to right, ${getComputedStyle(document.documentElement).getPropertyValue("--accent-cyan")}, #3b82f6)`,
              color: "#ffffff",
            }}
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
}
