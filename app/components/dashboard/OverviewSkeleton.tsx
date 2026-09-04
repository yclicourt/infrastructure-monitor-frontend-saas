export function CardInfoSkeleton() {
  return (
    <div className="relative w-full p-6 rounded-2xl bg-slate-800/50 border border-white/5 shadow-lg backdrop-blur animate-pulse">
      <div className="flex justify-between items-center mb-4">
        <div className="h-4 bg-slate-700 rounded w-1/3"></div>
        <div className="h-8 w-8 bg-slate-700 rounded-xl"></div>
      </div>
      <div className="h-8 bg-slate-700 rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-slate-700/60 rounded w-1/4"></div>
    </div>
  );
}

// Skeleton para la sección del Gráfico (InfraChart)
export function InfraChartSkeleton() {
  return (
    <div className="relative w-full p-6 rounded-2xl bg-linear-to-br from-slate-700/50 via-slate-800/50 to-slate-900/50 border border-white/10 shadow-lg backdrop-blur animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-2">
          <div className="h-6 bg-slate-700 rounded w-48"></div>
          <div className="h-3 bg-slate-700/60 rounded w-32"></div>
        </div>
        <div className="h-10 bg-slate-700 rounded-xl w-24"></div>
      </div>
      <div className="w-full h-48 bg-slate-800/80 rounded-xl my-4"></div>
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div className="h-4 bg-slate-700 rounded w-1/3"></div>
        <div className="h-8 bg-slate-700 rounded-lg w-28"></div>
      </div>
    </div>
  );
}

// Skeleton para las tarjetas inferiores (Recientes / Status)
export function CardSectionStatusSkeleton() {
  return (
    <div className="relative w-full p-6 rounded-2xl bg-linear-to-br from-slate-700/50 via-slate-800/50 to-slate-900/50 border border-white/10 shadow-lg backdrop-blur animate-pulse">
      <div className="h-6 bg-slate-700 rounded w-1/3 mb-6"></div>
      <div className="space-y-4">
        <div className="h-12 bg-slate-800 rounded-xl w-full"></div>
        <div className="h-12 bg-slate-800 rounded-xl w-full"></div>
        <div className="h-12 bg-slate-800 rounded-xl w-full"></div>
      </div>
    </div>
  );
}

export function OverviewSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardInfoSkeleton />
        <CardInfoSkeleton />
        <CardInfoSkeleton />
        <CardInfoSkeleton />
      </div>

      <div className="mt-6">
        <InfraChartSkeleton />
      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 mt-6">
        <CardSectionStatusSkeleton />
        <CardSectionStatusSkeleton />
      </div>
    </div>
  );
}
