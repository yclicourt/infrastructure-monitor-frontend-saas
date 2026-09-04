import CardIncidentItem from "./CardIncidentItem";

export default function CardResentIncident() {
  return (
    <>
      <div
        className="relative
        min-h-30
        rounded-xl
        border
        border-white/10
        bg-slate-900/60
        p-4
        transition-colors
        hover:border-white/20
      "
      >
        <h2 className="text-xl font-semibold text-left">Recent Incidents</h2>
        <CardIncidentItem />
      </div>
    </>
  );
}
