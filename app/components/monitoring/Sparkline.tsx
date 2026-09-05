export default function Sparkline() {
  return (
    <svg
      viewBox="0 0 220 40"
      className="h-10 w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />

          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area */}
      <path
        d="
          M0 30
          L15 27
          L30 28
          L45 20
          L60 23
          L75 18
          L90 22
          L105 17
          L120 25
          L135 20
          L150 21
          L165 14
          L180 18
          L195 10
          L220 8
          L220 40
          L0 40
          Z
        "
        fill="url(#sparkGradient)"
      />

      {/* Line */}
      <path
        d="
          M0 30
          L15 27
          L30 28
          L45 20
          L60 23
          L75 18
          L90 22
          L105 17
          L120 25
          L135 20
          L150 21
          L165 14
          L180 18
          L195 10
          L220 8
        "
        fill="none"
        stroke="#3B82F6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
