import FilterMonitoring from "@/app/components/monitoring/FilterMonitoring";
import GraphMonitoring from "@/app/components/monitoring/GraphMonitoring";
import MonitoringTitle from "@/app/components/monitoring/MonitoringTitle";

export default function MonitoringPage() {
  return (
    <>
      {/* Title Section  */}
      <section>
        <MonitoringTitle />
      </section>

      {/* Filter Section */}
      <section>
        <FilterMonitoring />
      </section>

      {/* Graph Section */}

      <section>
        <GraphMonitoring />
      </section>
    </>
  );
}
