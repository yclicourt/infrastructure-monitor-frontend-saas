import PaginationAssets from "./PaginationAssets";

export default function TableAssets() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 mt-10">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-white/10 bg-white/2">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Assets
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Type
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Client
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Status
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Uptime
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Last Seen
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-white/5 transition-colors hover:bg-white/3">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-500/10 text-sm font-semibold text-cyan-400">
                    A
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      prduction-api
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4 text-sm text-slate-300">
                <div>
                  <select
                    className="h-11
                w-full
                appearance-none
                rounded-md
                border
                border-[#1E293B]
                bg-[#121A2B]
                px-4
                pr-10
                text-sm
                text-slate-300
                outline-none
                transition-all
                hover:border-slate-600
                focus:border-[#00F2FE]
                focus:ring-1
                focus:ring-[#00F2FE]"
                  >
                    <option>All Types</option>

                    <option>SERVER</option>

                    <option>VM</option>
                    <option>NETWORK_DEVICE</option>
                    <option>WEBSITE</option>
                    <option>DATABASE</option>
                    <option>SERVICE</option>
                  </select>
                </div>
              </td>

              <td className="px-6 py-4 text-sm text-slate-300">
                <div>
                  <p className="text-sm font-medium text-white">Acme Web App</p>
                </div>
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400" />

                  <span className="text-sm text-emerald-400">UP</span>
                </div>
              </td>

              <td className="px-6 py-4 text-sm text-slate-300">98.9%</td>
              <td className="px-6 py-4">
                <span className="px-6 py-4 text-sm text-slate-300">
                  2 min ago
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PaginationAssets />
    </div>
  );
}
