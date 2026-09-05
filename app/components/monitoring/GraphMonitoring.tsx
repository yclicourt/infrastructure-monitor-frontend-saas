import InfrastructureHealth from "./InfrastructureHealth";
import MetricCard from "./MetricCard";
import RecentAlerts from "./RecentAlerts";

export default function GraphMonitoring() {
  return (
    <div
      className="
        mt-4
        grid
        grid-cols-1
        gap-4
        xl:grid-cols-[280px_minmax(0,1fr)]
      "
    >
      {/* Metrics Column */}
      <div className="flex flex-col gap-3">
        <MetricCard
          title="CPU Usage"
          value="42%"
          trend="+2.4%"
          trendType="positive"
        />

        <MetricCard
          title="Memory Usage"
          value="68%"
          trend="+1.7%"
          trendType="positive"
        />

        <MetricCard
          title="Disk Usage"
          value="35%"
          trend="-3.5%"
          trendType="positive"
        />

        <MetricCard
          title="Network In"
          value="245 Mbps"
          trend="+12.5%"
          trendType="positive"
        />
      </div>

      {/* Graph-Alert COLUMN */}
      <div className="flex min-w-0 flex-col gap-4">
        <InfrastructureHealth />

        <RecentAlerts />
      </div>
    </div>
  );
}
