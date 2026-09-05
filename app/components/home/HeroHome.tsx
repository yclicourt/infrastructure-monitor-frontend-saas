import { ArrowRight, Activity } from "lucide-react";
import Link from "next/link";

export default function HeroHome() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-6 sm:pt-28 lg:pb-28">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}

        <div
          className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/5
              px-4
              py-2
              text-xs
              font-medium
              text-cyan-400
            "
        >
          <Activity className="size-4" />
          Infrastructure monitoring platform
        </div>

        {/* Title */}

        <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
          Monitor your infrastructure
          <span className="block bg-linear-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            with confidence.
          </span>
        </h1>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          Infra Monitor gives you a centralized view of your infrastructure,
          assets, clients and incidents — helping you identify problems before
          they become critical.
        </p>

        {/* Buttons */}

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/login"
            className="
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-blue-500
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-blue-600
                hover:shadow-lg
                hover:shadow-blue-500/20
              "
          >
            Get Started
            <ArrowRight className="size-4" />
          </Link>

          <a
            href="#features"
            className="
                flex
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                bg-white/2
                px-6
                py-3
                text-sm
                font-semibold
                text-slate-300
                transition
                hover:border-white/20
                hover:bg-white/5
                hover:text-white
              "
          >
            Explore Features
          </a>
        </div>
      </div>

      {/* Dashboard Preview */}

      <div className="relative mx-auto mt-16 max-w-6xl">
        <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-blue-500/20 to-cyan-400/20 blur-xl" />

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E1524] shadow-2xl">
          {/* Fake Header */}

          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-red-400" />

              <span className="size-2 rounded-full bg-yellow-400" />

              <span className="size-2 rounded-full bg-emerald-400" />
            </div>

            <div className="h-6 w-32 rounded-md bg-white/5 sm:w-48" />

            <div className="size-6 rounded-full bg-white/5" />
          </div>

          {/* Dashboard Content */}

          <div className="grid min-h-87.5 grid-cols-1 lg:grid-cols-[180px_1fr]">
            {/* Sidebar */}

            <aside className="hidden border-r border-white/10 bg-[#0B101D] p-4 lg:block">
              <p className="mb-5 text-xs font-medium uppercase tracking-wider text-slate-600">
                Overview
              </p>

              <div className="space-y-2">
                {[
                  "Overview",
                  "Organizations",
                  "Clients",
                  "Assets",
                  "Monitoring",
                  "Incidents",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-md px-3 py-2 text-xs ${
                      index === 0
                        ? "bg-blue-500/10 text-cyan-400"
                        : "text-slate-500"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>

            {/* Preview Content */}

            <div className="p-5 sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="h-6 w-40 rounded bg-white/10" />

                  <div className="mt-3 h-3 w-56 rounded bg-white/5" />
                </div>

                <div className="hidden h-8 w-24 rounded bg-blue-500/40 sm:block" />
              </div>

              {/* Stats */}

              <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {[
                  ["Assets", "156"],
                  ["Online", "142"],
                  ["Alerts", "8"],
                  ["Uptime", "99.8%"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-white/10 bg-white/2 p-4"
                  >
                    <p className="text-xs text-slate-500">{label}</p>

                    <p className="mt-2 text-xl font-semibold text-white">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart */}

              <div className="mt-5 rounded-xl border border-white/10 bg-white/2 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">
                    Infrastructure Health
                  </p>

                  <span className="text-xs text-emerald-400">+2.4%</span>
                </div>

                <div className="relative mt-8 h-28 overflow-hidden">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[1, 2, 3, 4].map((line) => (
                      <div key={line} className="border-t border-white/5" />
                    ))}
                  </div>

                  <svg
                    viewBox="0 0 500 100"
                    preserveAspectRatio="none"
                    className="relative size-full"
                  >
                    <defs>
                      <linearGradient
                        id="homeChartGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#38BDF8"
                          stopOpacity="0.3"
                        />

                        <stop
                          offset="100%"
                          stopColor="#38BDF8"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 80 L60 70 L110 75 L170 55 L230 60 L300 40 L360 50 L420 25 L500 15 L500 100 L0 100 Z"
                      fill="url(#homeChartGradient)"
                    />

                    <path
                      d="M0 80 L60 70 L110 75 L170 55 L230 60 L300 40 L360 50 L420 25 L500 15"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
