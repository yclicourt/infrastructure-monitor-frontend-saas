import GeneralSettings from "@/app/components/settings/GeneralSettings";
import SettingsNavigation from "@/app/components/settings/SettingsNavigation";
import SettingsTitle from "@/app/components/settings/SettingsTitle";

export default function SettingsPage() {
  return (
    <>
      {/* Title Section */}
      <section>
        <SettingsTitle />
      </section>

      {/* Setting Navigation Section */}
      <section
        className=" mt-8
        grid
        grid-cols-1
        gap-6
        lg:grid-cols-[280px_minmax(0,1fr)]"
      >
        <SettingsNavigation />

        <GeneralSettings />
      </section>
    </>
  );
}
