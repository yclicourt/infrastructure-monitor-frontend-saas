import HealthChart from "./HealthChart";

export default function InfrastructureHealth() {
  return (
    <div
      className="
        rounded-lg
        border
        border-[#1E293B]
        bg-[#121A2B]
        p-4
        sm:p-5
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-sm font-semibold text-white sm:text-base">
            Infrastructure Health
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Overall infrastructure availability
          </p>
        </div>

        <span className="text-xl font-bold text-white">98.7%</span>
      </div>

      {/* Chart */}
      <div className="mt-6 h-55 w-full sm:h-65">
        <HealthChart />
      </div>
    </div>
  );
}
