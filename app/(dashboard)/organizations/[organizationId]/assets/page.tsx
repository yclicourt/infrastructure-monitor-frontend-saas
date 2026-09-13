import CardAssetsStatus from "@/app/components/assets/CardAssetsStatus";
import FilterAssets from "@/app/components/assets/FilterAssets";
import TableAssets from "@/app/components/assets/TableAssets";
import TitleAssets from "@/app/components/assets/TitleAssets";



async function AssetPage() {
  return (
    <>
      {/* Section Title and Subtitle */}
      <section>
        <TitleAssets />
      </section>

      {/* Section Filter Info */}
      <section>
        <FilterAssets/>
      </section>

      {/* Section Card Status */}
      <section className="mt-6">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <CardAssetsStatus />
        </div>
      </section>

      {/* Section Table */}
      <section>
        <TableAssets />
      </section>
    </>
  );
}
export default AssetPage;
