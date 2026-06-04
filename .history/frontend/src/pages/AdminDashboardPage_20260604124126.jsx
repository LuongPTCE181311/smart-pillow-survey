import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import api from "../services/api";
import surveyQuestions from "../data/surveyQuestions";

const COLORS = [
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#f59e0b",
  "#10b981",
  "#ef4444",
  "#ec4899",
  "#f97316",
];

const SECTION_TITLES = {
  A: "Phần A — Thông tin cá nhân",
  B: "Phần B — Thực trạng giấc ngủ",
  C: "Phần C — Đánh giá sản phẩm",
  D: "Phần D — Thị trường & Giá cả",
  E: "Phần E — Góp ý mở",
};

const SECTION_KEYS = {
  A: "sectionA",
  B: "sectionB",
  C: "sectionC",
  D: "sectionD",
  E: "sectionE",
};

// Đếm số lần xuất hiện của mỗi đáp án
function processQuestion(responses, sectionKey, questionId, type) {
  if (type === "textarea") {
    return responses
      .map((r) => r[sectionKey]?.[questionId])
      .filter((v) => v && v.trim() !== "");
  }

  const counts = {};
  responses.forEach((r) => {
    const val = r[sectionKey]?.[questionId];
    if (!val) return;
    const list = Array.isArray(val) ? val : [val];
    list.forEach((opt) => {
      counts[opt] = (counts[opt] || 0) + 1;
    });
  });

  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  return Object.entries(counts).map(([name, value]) => ({
    name,
    value,
    percent: total > 0 ? Math.round((value / total) * 100) : 0,
  }));
}

function PieCard({ question, data }) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-card admin-card border border-primary rounded-3xl p-6">
        <p className="text-sm font-semibold text-primary mb-2">{question}</p>
        <p className="text-sm text-muted">Chưa có dữ liệu</p>
      </div>
    );
  }

  return (
    <div className="bg-card admin-card border border-primary rounded-3xl p-6 flex gap-8 items-center">
      {/* Biểu đồ tròn - bên trái */}
      <div className="shrink-0" style={{ width: 220, height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={85}
              dataKey="value"
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value} phiếu`, name]}
              contentStyle={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-primary)",
                borderRadius: "12px",
                color: "var(--text-primary)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Tiêu đề + Legend - bên phải */}
      <div className="flex-1 min-w-0">
        <p className="text-base font-semibold text-primary mb-4">{question}</p>
        <div className="flex flex-col gap-3">
          {data.map((entry, i) => (
            <div key={i} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: COLORS[i % COLORS.length] }}
                />
                <span className="text-sm text-secondary truncate">
                  {entry.name}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-muted">{entry.value} phiếu</span>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: COLORS[i % COLORS.length] }}
                >
                  {entry.percent}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TextareaCard({ question, answers }) {
  return (
    <div className="bg-card admin-card border border-primary rounded-3xl p-6">
      <p className="text-sm font-semibold text-primary mb-4">{question}</p>
      {answers.length === 0 ? (
        <p className="text-sm text-muted">Chưa có phản hồi</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {answers.map((ans, i) => (
            <li key={i} className="flex gap-3">
              <span
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: "var(--accent-cyan)" }}
              >
                {i + 1}
              </span>
              <p className="text-sm text-secondary leading-relaxed">{ans}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Thêm vào trong AdminDashboardPage, ngay sau khai báo state
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.className;
    html.classList.remove("dark-theme");
    html.classList.add("light-theme");
    return () => {
      html.className = prev; // Khôi phục theme khi rời trang admin
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("admin_auth") !== "true") {
      navigate("/admin");
      return;
    }
    api
      .get("/admin/responses")
      .then((res) => setResponses(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    navigate("/admin");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <p className="text-secondary text-lg">Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary admin-bg px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-primary">Admin Dashboard</h1>
            <p className="text-secondary mt-1">
              Tổng cộng:{" "}
              <span className="text-accent-cyan font-bold">
                {responses.length}
              </span>{" "}
              phiếu khảo sát
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-xl border border-primary text-secondary hover:text-primary text-sm transition-all"
          >
            Đăng xuất
          </button>
        </div>

        {/* Sections */}
        {Object.entries(surveyQuestions).map(([sectionLetter, questions]) => (
          <motion.section
            key={sectionLetter}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-xl font-bold text-accent-cyan mb-6 border-b border-primary pb-3">
              {SECTION_TITLES[sectionLetter]}
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {questions.map((q) => {
                const sectionKey = SECTION_KEYS[sectionLetter];
                const data = processQuestion(
                  responses,
                  sectionKey,
                  q.id,
                  q.type,
                );

                if (q.type === "textarea") {
                  return (
                    <TextareaCard
                      key={q.id}
                      question={q.question}
                      answers={data}
                    />
                  );
                }

                return <PieCard key={q.id} question={q.question} data={data} />;
              })}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
