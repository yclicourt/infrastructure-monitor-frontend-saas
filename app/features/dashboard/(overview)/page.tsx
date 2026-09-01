import { bebas } from "@/app/ui/font";

function DashboardOverview() {
  return (
    <main>
      <h1 className={`${bebas.className} mb-4 text-4xl md:text-2xl`}>Good Evening, Yoan</h1>
      <h3>Here&#39;s what&#39;s happening with your infrastructure</h3>

      {/* Section Card */}
      <section>
        Card Section
      </section>

        {/* Section Chart */}
      <section>
        <div>
            <h2>Infrastructure Health</h2>
            Chart Infrastructure status
        </div>
      </section>

        {/* Section alerts */}
      <section>

        <div>
            Recent Alerts
            Infrastructure Status
        </div>
      </section>
    </main>
  );
}

export default DashboardOverview;
