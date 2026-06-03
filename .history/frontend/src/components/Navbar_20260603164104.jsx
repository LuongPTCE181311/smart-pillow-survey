import logo from "../assets/logo.jpg";

export default function Navbar() {
  return (
    <nav
      className="
      sticky top-0 z-50
      bg-slate-950/80
      backdrop-blur-xl
      border-b border-white/10
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

        {/* Button */}

        <button
          className="
          bg-blue-600
          hover:bg-blue-500

          transition

          px-4 py-2
          rounded-xl

          text-white
        "
        >
          Khảo sát
        </button>

      </div>
    </nav>
  );
}