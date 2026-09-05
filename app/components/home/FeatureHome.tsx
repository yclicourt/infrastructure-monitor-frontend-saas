import { Server, BellRing, Database, Activity } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export default function FeatureHome() {
  return (
    <section
      id="features"
      className="relative z-10 border-t border-white/5 bg-[#0E1524]/50 py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-cyan-400">PLATFORM FEATURES</p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Everything you need to monitor your infrastructure.
          </h2>

          <p className="mt-4 text-slate-400">
            A centralized platform designed to help you understand the health
            and performance of your systems.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Server}
            title="Asset Management"
            description="Keep track of servers, services, databases and infrastructure resources."
          />

          <FeatureCard
            icon={Activity}
            title="Real-time Monitoring"
            description="Monitor your infrastructure and detect potential issues quickly."
          />

          <FeatureCard
            icon={BellRing}
            title="Incident Management"
            description="Track alerts and incidents from detection to resolution."
          />

          <FeatureCard
            icon={Database}
            title="Infrastructure Insights"
            description="Understand the overall health and performance of your environment."
          />
        </div>
      </div>
    </section>
  );
}
