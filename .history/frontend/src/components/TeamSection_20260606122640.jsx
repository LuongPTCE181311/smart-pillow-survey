const members = [
  { avatar: "/avatar/avatar1.jpg", name: "Phạm Thanh Lượng", studentId: "CE181311" },
  { avatar: "/avatar/avatar2.jpg", name: "Lê Nguyễn Minh Uyên", studentId: "CS190195" },
  { avatar: "/avatar/avatar3.jpg", name: "Diệp Đại Phú", studentId: "CS191395" },
  { avatar: "/avatar/avatar4.jpg", name: "Lê Thị Thúy Duy", studentId: "CE000004" },
  { avatar: "/avatar/avatar5.jpg", name: "Họ và Tên 5", studentId: "CE000005" },
  { avatar: "/avatar/avatar6.jpg", name: "Họ và Tên 6", studentId: "CE000006" },
];

export default function TeamSection() {
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
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(6,182,212,0.5)]"
                style={{ borderColor: "rgba(6,182,212,0.3)" }}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay khi hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, rgba(6,182,212,0.2))",
                  }}
                />
              </div>

              {/* Tên */}
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
    </section>
  );
}
