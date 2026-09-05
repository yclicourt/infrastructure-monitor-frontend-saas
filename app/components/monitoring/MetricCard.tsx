import Sparkline from "./Sparkline";

interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  trendType: "positive" | "negative";
}
export default function MetricCard({
  title,
  value,
  trend,
  trendType,
}: MetricCardProps) {
  const trendColor =
    trendType === "positive" ? "text-emerald-400" : "text-red-400";

  return (
    <div
      className="
        rounded-lg
        border
        border-[#1E293B]
        bg-[#121A2B]
        p-3
        transition
        hover:border-slate-600
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400">{title}</span>

        <span className="text-sm font-semibold text-white">{value}</span>
      </div>

      {/* Chart */}
      <div className="mt-2">
        <Sparkline />
      </div>

      {/* Trend */}
      <div className="mt-1 flex justify-end">
        <span className={`text-xs font-medium ${trendColor}`}>{trend}</span>
      </div>
    </div>
  );
}
