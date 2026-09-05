import CardIncidents from "@/app/components/incidents/CardIncidents";
import FilterIncidents from "@/app/components/incidents/FilterIncidents";
import TableIncidents from "@/app/components/incidents/TableIncidents";
import TitleIncidents from "@/app/components/incidents/TitleIncidents";

export default function IncidentPage() {
  return (
    <>
      {/* Section Title and Subtitle */}
      <section>
        <TitleIncidents />
      </section>

      {/* Section Filter Info */}
      <section>
        <FilterIncidents />
      </section>

      {/* Section Card Status */}
      <section className="mt-6">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <CardIncidents />
        </div>
      </section>

      {/* Section Table */}
      <section>
        <TableIncidents />
      </section>
    </>
  );
}
