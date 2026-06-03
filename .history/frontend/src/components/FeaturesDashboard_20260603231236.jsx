import { HeartPulse, Moon, Wifi } from "lucide-react";

export default function FeaturesDashboard() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-primary font-bold text-center">
          Dashboard Test
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-card rounded-3xl border border-primary">
            <HeartPulse className="text-red-400" />
            <h3 className="text-primary mt-4 font-semibold">Heart Rate</h3>
            <p className="text-accent-cyan text-3xl mt-2">72 BPM</p>
          </div>

          <div className="p-6 bg-white/5 rounded-3xl">
            <Moon className="text-cyan-400" />
            <h3 className="text-white mt-4">Sleep Score</h3>
            <p className="text-cyan-400 text-3xl">92%</p>
          </div>

          <div className="p-6 bg-white/5 rounded-3xl">
            <Wifi className="text-green-400" />
            <h3 className="text-white mt-4">Monitoring</h3>
            <p className="text-cyan-400 text-3xl">Online</p>
          </div>
        </div>
      </div>
    </section>
  );
}
