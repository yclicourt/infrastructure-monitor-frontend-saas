import React from "react";
import PaginationIncident from "./PaginationIncident";

export default function TableIncidents() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 mt-10">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-white/10 bg-white/2">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Incident
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Severtiy
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Status
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Started At
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Updated At
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
                      Api Gateway Latency Spike
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4 text-sm text-slate-300">
                <div>
                  <p className="border text-center bg-red-400 rounded-md">
                    Critical
                  </p>
                </div>
              </td>

              <td className="px-6 py-4 text-sm text-center text-slate-300">
                <div>
                  <p className="border  bg-red-400 rounded-md">Active</p>
                </div>
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white">May 12,2026 18:45</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="px-6 py-4 text-sm text-slate-300">
                  2 min ago
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PaginationIncident />
    </div>
  );
}
