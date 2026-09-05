export default function HealthChart() {
  return (
    <div className="relative h-full w-full">
      {/* Percentage labels */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          flex
          flex-col
          justify-between
          pb-7
          text-[10px]
          text-slate-500
        "
      >
        <span>100%</span>
        <span>95%</span>
        <span>90%</span>
        <span>85%</span>
        <span>80%</span>
      </div>

      {/* Chart */}
      <div className="ml-9 h-full">
        <svg
          viewBox="0 0 700 250"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="healthArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />

              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid */}
          {[20, 65, 110, 155, 200].map((y) => (
            <line
              key={y}
              x1="0"
              x2="700"
              y1={y}
              y2={y}
              stroke="#334155"
              strokeWidth="1"
              opacity="0.45"
            />
          ))}

          {/* Area */}
          <path
            d="
              M0 150
              L35 140
              L70 142
              L105 125
              L140 130
              L175 95
              L210 92
              L245 110
              L280 80
              L315 72
              L350 88
              L385 65
              L420 75
              L455 55
              L490 68
              L525 40
              L560 30
              L595 48
              L630 25
              L665 22
              L700 15
              L700 250
              L0 250
              Z
            "
            fill="url(#healthArea)"
          />

          {/* Main line */}
          <path
            d="
              M0 150
              L35 140
              L70 142
              L105 125
              L140 130
              L175 95
              L210 92
              L245 110
              L280 80
              L315 72
              L350 88
              L385 65
              L420 75
              L455 55
              L490 68
              L525 40
              L560 30
              L595 48
              L630 25
              L665 22
              L700 15
            "
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Incident point */}
          <circle
            cx="280"
            cy="80"
            r="5"
            fill="#EF4444"
            stroke="#121A2B"
            strokeWidth="3"
          />

          {/* Healthy point */}
          <circle
            cx="560"
            cy="30"
            r="4"
            fill="#22C55E"
            stroke="#121A2B"
            strokeWidth="3"
          />
        </svg>

        {/* X Axis */}
        <div className="mt-1 flex justify-between text-[10px] text-slate-500">
          <span>00</span>
          <span>04</span>
          <span>08</span>
          <span>12</span>
          <span>16</span>
          <span>20</span>
          <span>24</span>
        </div>
      </div>
    </div>
  );
}
