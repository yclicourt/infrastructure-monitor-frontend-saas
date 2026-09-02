import Card from "@/app/components/dashboard/Card";
import CardResentIncident from "@/app/components/dashboard/incidents/CardResentIncident";
import CardInfraStatus from "@/app/components/dashboard/infra-status/CardInfraStatus";
import { bebas } from "@/app/ui/font";

function DashboardOverview() {
  return (
    <main>
      <h1 className={`${bebas.className} mb-4 text-4xl md:text-2xl`}>
        Good Evening, Yoan
      </h1>
      <h3>Here&#39;s what&#39;s happening with your infrastructure</h3>

      {/* Section Card */}
      <section className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4 mt-2">
        <Card />
      </section>

      {/* Section Chart */}
      <section>
        <div>
          <h2>Infrastructure Health</h2>
          Chart Infrastructure status
        </div>
      </section>

      {/* Section alerts */}
      <section className="grid grid-cols-1 gap-10 md:grid-cols-2 mt-2 ">
        <CardResentIncident />

        <CardInfraStatus />
      </section>
    </main>
  );
}

export default DashboardOverview;
