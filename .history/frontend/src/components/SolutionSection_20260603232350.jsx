import { motion } from "framer-motion";
import { HeartPulse, Moon, Bell, Smartphone, Cloud, Radar } from "lucide-react";

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
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-4xl lg:text-5xl font-bold text-primary">
            Smart Pillow giải quyết như thế nào?
          </h2>

          <p className="text-center text-secondary mt-5 max-w-3xl mx-auto">
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
                className="
                    p-8 rounded-[32px]
                    bg-card backdrop-blur-xl
                    border border-primary
                    hover:border-accent-cyan/30
                    transition-all
                    "
              >
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-cyan-500/10
                  flex
                  items-center
                  justify-center
                "
                >
                  <Icon size={28} className="text-cyan-400" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-slate-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
