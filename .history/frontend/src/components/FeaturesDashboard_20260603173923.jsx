import { motion } from "framer-motion";
import CountUp from "react-countup";
import { HeartPulse, Moon, Wifi, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: HeartPulse,
    title: "Heart Rate",
    value: 72,
    unit: " BPM",
  },
  {
    icon: Moon,
    title: "Sleep Score",
    value: 92,
    unit: "%",
  },
  {
    icon: Wifi,
    title: "Monitoring",
    value: 100,
    unit: "%",
  },
  {
    icon: ShieldCheck,
    title: "Safety Status",
    value: 99,
    unit: "%",
  },
];

export default function FeaturesDashboard() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Theo dõi sức khỏe thời gian thực
          </h2>

          <p className="mt-5 text-slate-400">
            Dữ liệu được cập nhật liên tục từ Smart Pillow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {features.map((item, index) => {
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
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="
                p-8

                rounded-[32px]

                bg-white/5

                backdrop-blur-xl

                border border-white/10

                hover:border-cyan-400/30
                "
              >
                <div className="flex justify-between items-center">
                  <div>
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
                      <Icon className="text-cyan-400" size={28} />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  </div>

                  <div className="text-4xl font-bold text-cyan-400">
                    <CountUp end={item.value} duration={3} />
                    {item.unit}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
