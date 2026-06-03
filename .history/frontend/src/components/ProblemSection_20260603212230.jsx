import { motion } from "framer-motion";
import { Moon, HeartPulse, Users } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const problems = [
  {
    icon: Moon,
    title: "Khó theo dõi chất lượng giấc ngủ",
    desc: "Người cao tuổi thường gặp các vấn đề về giấc ngủ nhưng khó được theo dõi liên tục.",
  },
  {
    icon: HeartPulse,
    title: "Nguy cơ phát hiện muộn",
    desc: "Những bất thường về hô hấp hoặc nhịp tim có thể xảy ra trong lúc ngủ.",
  },
  {
    icon: Users,
    title: "Gia đình không thể giám sát 24/7",
    desc: "Người thân không phải lúc nào cũng ở bên để theo dõi sức khỏe.",
  },
];

export default function ProblemSection() {
  const { theme } = useTheme();

  return (
    <section className={`py-32 px-6 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2
            className={`
              text-center
              text-4xl
              lg:text-5xl
              font-bold
              transition-colors duration-300
              ${theme === "dark" ? "text-white" : "text-gray-900"}
            `}
          >
            Những vấn đề hiện nay
          </h2>

          <p
            className={`
              text-center
              mt-5
              max-w-3xl
              mx-auto
              transition-colors duration-300
              ${theme === "dark" ? "text-slate-400" : "text-gray-600"}
            `}
          >
            Việc theo dõi sức khỏe người cao tuổi trong khi ngủ vẫn còn nhiều
            hạn chế và phụ thuộc vào sự quan sát thủ công.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                }}
                className={`
                  p-8
                  rounded-[32px]
                  backdrop-blur-xl
                  border
                  transition-all duration-300
                  ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 hover:border-cyan-400/30"
                      : "bg-gray-50 border-gray-200 hover:border-blue-300"
                  }
                `}
              >
                <div
                  className={`
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    transition-colors duration-300
                    ${theme === "dark" ? "bg-cyan-500/10" : "bg-blue-100"}
                  `}
                >
                  <Icon
                    size={30}
                    className={`
                      transition-colors duration-300
                      ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}
                    `}
                  />
                </div>

                <h3
                  className={`
                    mt-6
                    text-2xl
                    font-semibold
                    transition-colors duration-300
                    ${theme === "dark" ? "text-white" : "text-gray-900"}
                  `}
                >
                  {item.title}
                </h3>

                <p
                  className={`
                    mt-4
                    transition-colors duration-300
                    ${theme === "dark" ? "text-slate-400" : "text-gray-600"}
                  `}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
