export default function InfraChart() {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/10
        bg-slate-900/60
        p-5
      "
    >
      {/* Header */}

      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-base font-semibold text-white">
            Infrastructure Health
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Overall infrastructure performance
          </p>
        </div>

        <div className="text-right">
          <div className="flex items-center justify-end gap-2">
            <span className="text-2xl font-semibold text-white">98.7%</span>

            <span
              className="
                rounded-md
                bg-emerald-500/10
                px-2
                py-1
                text-xs
                font-medium
                text-emerald-400
              "
            >
              ↑ 1.2%
            </span>
          </div>

          <p className="mt-1 text-xs text-slate-500">
            Compared to previous period
          </p>
        </div>
      </div>

      {/* Chart */}

      <div className="relative h-64 w-full">
        {/* Horizontal grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            flex
            flex-col
            justify-between
          "
        >
          {[1, 2, 3, 4, 5].map((line) => (
            <div key={line} className="w-full border-t border-white/5" />
          ))}
        </div>

        {/* Y labels */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            flex
            flex-col
            justify-between
            pb-6
            text-[10px]
            text-slate-600
          "
        >
          <span>100%</span>
          <span>98%</span>
          <span>96%</span>
          <span>94%</span>
          <span>92%</span>
        </div>

        {/* SVG */}

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="healthGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />

              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area */}

          <path
            d="
              M 0 200
              L 70 185
              L 120 190
              L 180 150
              L 240 155
              L 300 110
              L 360 105
              L 420 135
              L 480 90
              L 540 95
              L 600 70
              L 660 80
              L 720 45
              L 780 55
              L 850 25
              L 920 30
              L 1000 10
              L 1000 300
              L 0 300
              Z
            "
            fill="url(#healthGradient)"
          />

          {/* Main line */}

          <path
            d="
              M 0 200
              L 70 185
              L 120 190
              L 180 150
              L 240 155
              L 300 110
              L 360 105
              L 420 135
              L 480 90
              L 540 95
              L 600 70
              L 660 80
              L 720 45
              L 780 55
              L 850 25
              L 920 30
              L 1000 10
            "
            fill="none"
            stroke="#38bdf8"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Incident event */}

          <circle
            cx="420"
            cy="135"
            r="7"
            fill="#ef4444"
            stroke="#0f172a"
            strokeWidth="4"
          />

          {/* Recovery event */}

          <circle
            cx="720"
            cy="45"
            r="7"
            fill="#22c55e"
            stroke="#0f172a"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* Footer */}

      <div
        className="
          mt-2
          flex
          flex-col
          gap-4
          border-t
          border-white/5
          pt-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* Time labels */}

        <div className="flex flex-1 justify-between text-xs text-slate-500">
          <span>00</span>
          <span>04</span>
          <span>08</span>
          <span>12</span>
          <span>16</span>
          <span>20</span>
          <span>24</span>
        </div>

        {/* Range selector */}

        <div
          className="
            flex
            w-fit
            items-center
            rounded-lg
            border
            border-white/5
            bg-black/20
            p-1
          "
        >
          <button
            className="
              rounded-md
              bg-slate-700
              px-3
              py-1.5
              text-xs
              font-medium
              text-white
            "
          >
            24h
          </button>

          <button
            className="
              px-3
              py-1.5
              text-xs
              text-slate-400
              transition
              hover:text-white
            "
          >
            7d
          </button>

          <button
            className="
              px-3
              py-1.5
              text-xs
              text-slate-400
              transition
              hover:text-white
            "
          >
            30d
          </button>
        </div>
      </div>
    </div>
  );
}
