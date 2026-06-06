import { useState } from "react";

const members = [
  {
    avatar: "/avatar/avatar1.jpg",
    name: "Phạm Thanh Lượng",
    studentId: "CE181311",
  },
  {
    avatar: "/avatar/avatar2.jpg",
    name: "Lê Nguyễn Minh Uyên",
    studentId: "CS190195",
  },
  {
    avatar: "/avatar/avatar3.jpg",
    name: "Diệp Đại Phú",
    studentId: "CS191395",
  },
  {
    avatar: "/avatar/avatar4.jpg",
    name: "Lê Thị Thúy Duy",
    studentId: "CE180875",
  },
  {
    avatar: "/avatar/avatar5.jpg",
    name: "Nguyễn Tín Hưng",
    studentId: "CE180765",
  },
  {
    avatar: "/avatar/avatar6.jpg",
    name: "Đỗ Huỳnh Tường Vi",
    studentId: "CE191085",
  },
];

export default function TeamSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[120px] rounded-full opacity-10 pointer-events-none bg-cyan-400" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              backgroundColor: "rgba(6,182,212,0.1)",
              color: "var(--accent-cyan)",
            }}
          >
            Đội ngũ phát triển
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Những người đứng sau{" "}
            <span style={{ color: "var(--accent-cyan)" }}>Respyn</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Nhóm sinh viên đam mê công nghệ và chăm sóc sức khỏe cộng đồng.
          </p>
        </div>

        {/* Grid thành viên */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {members.map((member, i) => (
            <div key={i} className="group flex flex-col items-center gap-3">
              {/* Avatar */}
              <div
                onClick={() => setSelected(member)}
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 cursor-pointer transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(6,182,212,0.5)]"
                style={{ borderColor: "rgba(6,182,212,0.3)" }}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                {/* Icon zoom khi hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(6,182,212,0.25)" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>

              {/* Tên + MSSV */}
              <div className="text-center">
                <p className="text-white text-sm font-semibold leading-tight">
                  {member.name}
                </p>
                <p
                  className="text-xs mt-1 font-mono"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  {member.studentId}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative flex flex-col items-center gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ảnh phóng to */}
            <div
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 shadow-[0_0_60px_rgba(6,182,212,0.4)]"
              style={{ borderColor: "var(--accent-cyan)" }}
            >
              <img
                src={selected.avatar}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tên + MSSV */}
            <div className="text-center">
              <p className="text-white text-xl font-bold">{selected.name}</p>
              <p
                className="font-mono mt-1"
                style={{ color: "var(--accent-cyan)" }}
              >
                {selected.studentId}
              </p>
            </div>

            {/* Nút đóng */}
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold transition-opacity hover:opacity-70"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
