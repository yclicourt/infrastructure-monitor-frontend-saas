import CardInfraItem from "./CardInfraItem";

export default function CardInfraStatus() {
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
        <h2 className="text-xl font-semibold text-left">
          Infrastructure Status
        </h2>
        <CardInfraItem />
      </div>
    </>
  );
}
