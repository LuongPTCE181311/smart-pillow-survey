import logo from "../assets/logo.jpg";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`
        sticky top-0 z-50
        backdrop-blur-xl
        border-b
        transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-slate-950/80 border-white/10"
            : "bg-slate-50/80 border-gray-200"
        }
      `}
    >
      <div
        className={`
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          h-16
          flex
          items-center
          justify-between
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10" />

          <span
            className={`
              font-bold
              text-sm
              sm:text-lg
              transition-colors duration-300
              ${theme === "dark" ? "text-white" : "text-gray-900"}
            `}
          >
            Smart Pillow
          </span>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`
            p-2
            rounded-xl
            transition-all duration-300
            flex items-center justify-center
            ${
              theme === "dark"
                ? "bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400"
                : "bg-slate-200 hover:bg-slate-300 text-slate-800"
            }
          `}
          title={theme === "dark" ? "Chế độ sáng" : "Chế độ tối"}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}
