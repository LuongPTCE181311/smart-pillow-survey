import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ADMIN_USER = "admin123";
const ADMIN_PASS = "19062004";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username === ADMIN_USER && form.password === ADMIN_PASS) {
      localStorage.setItem("admin_auth", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Sai tài khoản hoặc mật khẩu.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 bg-primary overflow-hidden">
      {/* Glow */}
      <div className="fixed top-10 left-10 w-[400px] h-[400px] blur-[160px] rounded-full opacity-20 pointer-events-none bg-accent-cyan-light" />
      <div
        className="fixed bottom-10 right-10 w-[400px] h-[400px] blur-[160px] rounded-full opacity-20 pointer-events-none"
        style={{ backgroundColor: "#8b5cf6" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md bg-card border border-primary rounded-[32px] px-10 py-12 shadow-[0_0_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
      >
        <h1 className="text-3xl font-bold text-primary mb-2 text-center">
          Admin Dashboard
        </h1>
        <p className="text-sm text-slate text-center mb-8">
          Đăng nhập để xem kết quả khảo sát
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-secondary mb-1 block">Tài khoản</label>
            <input
              type="text"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              placeholder="Nhập tài khoản..."
              className="w-full p-4 rounded-2xl bg-card border border-primary outline-none focus:border-accent-cyan text-primary"
            />
          </div>

          <div>
            <label className="text-sm text-secondary mb-1 block">Mật khẩu</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Nhập mật khẩu..."
              className="w-full p-4 rounded-2xl bg-card border border-primary outline-none focus:border-accent-cyan text-primary"
            />
          </div>

          {error && (
            <p className="text-sm text-red-400 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="mt-2 w-full py-4 rounded-2xl text-white font-semibold text-lg"
            style={{ background: "linear-gradient(to right, var(--accent-cyan), #3b82f6)" }}
          >
            Đăng nhập
          </button>
        </form>
      </motion.div>
    </div>
  );
}
