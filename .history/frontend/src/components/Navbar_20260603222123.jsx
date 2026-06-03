import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  // Load theme từ localStorage khi mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const dark = JSON.parse(savedTheme);
      setIsDark(dark);
      applyTheme(dark);
    } else {
      // Mặc định dark mode
      applyTheme(true);
    }
  }, []);

  // Hàm áp dụng theme
  const applyTheme = (dark) => {
    const html = document.documentElement;
    if (dark) {
      html.style.backgroundColor = '#0f172a';
      html.style.color = '#ffffff';
      document.body.style.backgroundColor = '#0f172a';
      document.body.style.color = '#ffffff';
    } else {
      html.style.backgroundColor = '#f8fafc';
      html.style.color = '#1e293b';
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#1e293b';
    }
  };

  // Hàm toggle theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', JSON.stringify(newTheme));
    applyTheme(newTheme);
  };

  return (
    <nav
      className="
      sticky top-0 z-50
      bg-slate-950/80
      backdrop-blur-xl
      border-b border-white/10
      transition-colors duration-300
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        h-16
        flex
        items-center
        justify-between
      "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10"
          />
          <span
            className="
            font-bold
            text-white
            text-sm
            sm:text-lg
          "
          >
            Smart Pillow
          </span>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="
          relative
          w-12 h-12
          rounded-xl
          
          bg-slate-800
          hover:bg-slate-700
          
          border border-white/20
          
          flex items-center justify-center
          
          transition-all duration-300
          hover:scale-110
          "
          title={isDark ? "Chế độ sáng" : "Chế độ tối"}
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-400 transition-all" />
          ) : (
            <Moon className="w-5 h-5 text-blue-300 transition-all" />
          )}
        </button>
      </div>
    </nav>
  );
}