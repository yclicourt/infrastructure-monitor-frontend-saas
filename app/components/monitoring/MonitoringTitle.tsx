export default function MonitoringTitle() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          Monitoring
        </h1>
        <p className="mt-2 text-sm font-normal text-gray-500 sm:text-base">
          Real-time infrastructure monitoring and metrics
        </p>
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
              bg-blue-600
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
  );
}
