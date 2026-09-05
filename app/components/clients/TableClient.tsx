import { MoreVertical } from "lucide-react";
import PaginationClients from "./PaginationClients";

export default function TableClient() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 mt-10">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-white/10 bg-white/2">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Client
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Organization
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Assets
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Alert
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Status
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                Created At
              </th>

              <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-slate-500">
                Actions
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
                      Acme WebApp
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4 text-sm text-slate-300">
                <div>
                  <p className="text-sm font-medium text-white">Acme Corporation</p>
                </div>
              </td>

              <td className="px-6 py-4 text-sm text-slate-300">8</td>

              <td className="px-6 py-4 text-sm text-slate-300">24</td>

              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400" />

                  <span className="text-sm text-emerald-400">Active</span>
                </div>
              </td>

              <td className="px-6 py-4">
                <span className="px-6 py-4 text-sm text-slate-300">
                  {Date.name}
                </span>
              </td>

              <td className="px-6 py-4 text-right">
                <button className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white">
                  <MoreVertical className="size-5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PaginationClients />
    </div>
  );
}
