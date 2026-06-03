import { Sun, Moon } from "lucide-react";
import logo from "../assets/logo.jpg";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="navbar sticky top-0 z-50 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="font-bold text-primary text-sm sm:text-lg">
            Smart Pillow
          </span>
        </div>

        {/* Theme Toggle Switch */}
        <button
          onClick={toggleTheme}
          className="
          relative
          w-16 h-8
          rounded-full
          
          transition-all duration-300
          
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          "
          style={{
            backgroundColor: isDark ? '#0f172a' : '#f1f5f9',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(15, 23, 42, 0.2)',
            borderWidth: '2px',
            boxShadow: isDark 
              ? '0 0 20px rgba(6, 182, 212, 0.3)' 
              : '0 0 20px rgba(8, 145, 178, 0.2)',
          }}
          title={isDark ? "Chế độ sáng" : "Chế độ tối"}
        >
          {/* Background gạt */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div 
              className="absolute inset-0 transition-all duration-300"
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, #0f172a, #1e293b)' 
                  : 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
              }}
            />
          </div>

          {/* Slider Circle */}
          <div
            className="
            absolute
            top-1
            w-6 h-6
            rounded-full
            
            flex items-center justify-center
            
            transition-all duration-300
            
            shadow-lg
            "
            style={{
              left: isDark ? '4px' : 'calc(100% - 28px)',
              background: isDark 
                ? 'linear-gradient(135deg, #06b6d4, #0ea5e9)' 
                : 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            }}
          >
            {isDark ? (
              <Moon size={14} className="text-white" />
            ) : (
              <Sun size={14} className="text-white" />
            )}
          </div>

          {/* Labels */}
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <span 
              className="text-xs font-bold transition-opacity duration-300"
              style={{
                color: isDark ? '#06b6d4' : 'transparent',
                opacity: isDark ? 1 : 0,
              }}
            >
              🌙
            </span>
            <span 
              className="text-xs font-bold transition-opacity duration-300"
              style={{
                color: isDark ? 'transparent' : '#f59e0b',
                opacity: isDark ? 0 : 1,
              }}
            >
              ☀️
            </span>
          </div>
        </button>
      </div>
    </nav>
  );
}