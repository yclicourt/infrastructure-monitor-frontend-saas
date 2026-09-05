import FilterClient from "@/app/components/clients/FilterClient";
import TableClient from "@/app/components/clients/TableClient";
import TitleClient from "@/app/components/clients/TitleClient";

export default function ClientPage() {
  return (
    <>
      {/* Section Title and Subtitle */}
      <section>
        <TitleClient />
      </section>

      {/* Section Filter Info */}
      <section>
        <FilterClient />
      </section>

      {/* Table Section */}
      <section>
        <TableClient />
      </section>
    </>
  );
}
