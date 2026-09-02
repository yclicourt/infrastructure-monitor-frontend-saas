import CardInfraItem from "./CardInfraItem";

export default function CardInfraStatus() {
  return (
    <>
      <div
        className="relative
      w-full
      p-6
      rounded-2xl
      bg-linear-to-br
      from-slate-700
      via-slate-800
      to-slate-900
      border border-white/10
      shadow-lg
      backdrop-blur
      transition
      hover:scale-[1.02]
      hover:shadow-xl
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
