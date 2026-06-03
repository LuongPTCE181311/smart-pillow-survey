import { motion } from "framer-motion";
import { HeartPulse, Moon, Bell, Smartphone, Cloud, Radar } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const solutions = [
  {
    icon: Radar,
    title: "Theo dõi liên tục",
    desc: "Cảm biến radar giám sát người dùng ngay cả khi đang ngủ.",
  },
  {
    icon: HeartPulse,
    title: "Theo dõi nhịp tim",
    desc: "Thu thập dữ liệu nhịp tim theo thời gian thực.",
  },
  {
    icon: Moon,
    title: "Phân tích giấc ngủ",
    desc: "Đánh giá chất lượng giấc ngủ và phát hiện bất thường.",
  },
  {
    icon: Bell,
    title: "Cảnh báo sớm",
    desc: "Gửi cảnh báo khi phát hiện dấu hiệu nguy hiểm.",
  },
  {
    icon: Smartphone,
    title: "Kết nối ứng dụng",
    desc: "Người thân có thể theo dõi từ xa trên điện thoại.",
  },
  {
    icon: Cloud,
    title: "Lưu trữ dữ liệu",
    desc: "Lịch sử sức khỏe được lưu trữ để phân tích dài hạn.",
  },
];

export default function SolutionSection() {
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
            Smart Pillow giải quyết như thế nào?
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
            Kết hợp cảm biến thông minh, phân tích dữ liệu và cảnh báo thời gian
            thực.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.03,
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
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    transition-colors duration-300
                    ${theme === "dark" ? "bg-cyan-500/10" : "bg-blue-100"}
                  `}
                >
                  <Icon
                    size={28}
                    className={`
                      transition-colors duration-300
                      ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}
                    `}
                  />
                </div>

                <h3
                  className={`
                    mt-6
                    text-xl
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
