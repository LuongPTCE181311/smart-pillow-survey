import logo from "../assets/logo.jpg";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-[var(--nav-border)] bg-[var(--nav-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="font-bold text-[var(--text)] text-sm sm:text-lg">
            Smart Pillow
          </span>
        </div>

        <button
          onClick={toggleTheme}
          className="bg-[var(--button-bg)] text-[var(--button-text)] transition px-4 py-2 rounded-xl"
        >
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </nav>
  );
}
