import { ShieldCheck } from "lucide-react";
import { Benefit, StatusRow } from "./FeatureCard";

export default function BenefitHome() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium text-cyan-400">
            BUILT FOR INFRASTRUCTURE
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            A clearer view of your entire infrastructure.
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Manage organizations, clients, assets and incidents from a single
            centralized platform.
          </p>

          <div className="mt-8 space-y-4">
            <Benefit text="Centralized infrastructure visibility" />

            <Benefit text="Real-time monitoring and metrics" />

            <Benefit text="Incident tracking and management" />

            <Benefit text="Multi-organization infrastructure management" />
          </div>
        </div>

        {/* Right panel */}

        <div className="rounded-2xl border border-white/10 bg-[#121A2B]/60 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Infrastructure Status</p>

              <p className="mt-1 text-3xl font-bold text-white">98.7%</p>
            </div>

            <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-500/10">
              <ShieldCheck className="size-6 text-emerald-400" />
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <StatusRow
              name="production-api"
              status="Operational"
              statusColor="text-emerald-400"
            />

            <StatusRow
              name="postgres-primary"
              status="Operational"
              statusColor="text-emerald-400"
            />

            <StatusRow
              name="redis-cache"
              status="Operational"
              statusColor="text-emerald-400"
            />

            <StatusRow
              name="worker-02"
              status="Warning"
              statusColor="text-amber-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
