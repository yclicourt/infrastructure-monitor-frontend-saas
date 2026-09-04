import CardInfo from "@/app/components/dashboard/CardInfo";
import {
  CardSectionStatusSkeleton,
  CardInfoSkeleton,
  InfraChartSkeleton,
} from "@/app/components/dashboard/OverviewSkeleton";
import InfraChart from "@/app/components/dashboard/chartInfra/InfraChart";
import CardResentIncident from "@/app/components/dashboard/incidents/CardResentIncident";
import CardInfraStatus from "@/app/components/dashboard/infra-status/CardInfraStatus";
import { bebas } from "@/app/ui/font";
import { Suspense } from "react";

function DashboardOverview() {
  return (
    <main>
      <h1 className={`${bebas.className} mb-4 text-4xl md:text-2xl`}>
        Good Evening, Yoan
      </h1>
      <h3>Here&#39;s what&#39;s happening with your infrastructure</h3>

      {/* Section Card */}
      <section className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 mt-2">
        <Suspense fallback={<CardInfoSkeleton />}>
          <CardInfo />
        </Suspense>
      </section>

      {/* Section Chart */}
      <section className="grid grid-cols-1 gap-4 mt-2">
        <div>
          <Suspense fallback={<InfraChartSkeleton />}>
            <InfraChart />
          </Suspense>
        </div>
      </section>

      {/* Section alerts */}
      <section className="grid grid-cols-1 gap-7 md:grid-cols-2 mt-2">
        <Suspense fallback={<CardSectionStatusSkeleton />}>
          <CardResentIncident />
          <CardInfraStatus />
        </Suspense>
      </section>
    </main>
  );
}

export default DashboardOverview;
