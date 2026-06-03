import { motion } from "framer-motion";
import { Moon, HeartPulse, Users } from "lucide-react";

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
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-4xl lg:text-5xl font-bold text-primary">
            Những vấn đề hiện nay
          </h2>

          <p className="text-center text-slate-400 mt-5 max-w-3xl mx-auto">
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
                className="
                  p-8
                  rounded-[32px]

                  bg-white/5
                  backdrop-blur-xl

                  border border-white/10

                  hover:border-cyan-400/30

                  transition-all
                "
              >
                <div
                  className="
                  w-16
                  h-16

                  rounded-2xl

                  bg-cyan-500/10

                  flex
                  items-center
                  justify-center
                "
                >
                  <Icon size={30} className="text-cyan-400" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-slate-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
