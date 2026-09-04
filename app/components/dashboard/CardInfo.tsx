import { cards } from "@/app/constants/cards";

export default function CardInfo() {
  return cards.map((card) => {
    const LinIcon = card.icon;
    return (
      <div
        key={card.title}
        className="
        relative
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
        <div className="mb-3 flex items-center justify-between">
          <div
            className={`
            flex size-9 items-center justify-center
            rounded-lg bg-white/5
            ${card.iconColor}
          `}
          >
            <LinIcon className="size-5" />
          </div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              {card.title}
            </p>

            <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
              {card.value}
            </p>
          </div>
        </div>
      </div>
    );
  });
}
