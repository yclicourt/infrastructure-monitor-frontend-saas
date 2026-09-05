import { CheckCircle2 } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/10
        bg-[#121A2B]/60
        p-6
        transition
        hover:-translate-y-1
        hover:border-cyan-400/20
        hover:bg-[#121A2B]
      "
    >
      <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-500/10">
        <Icon className="size-5 text-cyan-400" />
      </div>

      <h3 className="mt-5 font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

export function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="size-5 shrink-0 text-cyan-400" />

      <span className="text-sm text-slate-300">
        {text}
      </span>
    </div>
  );
}

export function StatusRow({
  name,
  status,
  statusColor,
}: {
  name: string;
  status: string;
  statusColor: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/5 bg-black/10 px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="size-2 rounded-full bg-emerald-400" />

        <span className="text-sm text-slate-300">
          {name}
        </span>
      </div>

      <span className={`text-xs font-medium ${statusColor}`}>
        {status}
      </span>
    </div>
  );
}