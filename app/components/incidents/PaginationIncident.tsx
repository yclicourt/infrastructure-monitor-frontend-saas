import React from "react";

export default function PaginationIncident() {
  return (
    <>
      {/* Pagination */}
      <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Information */}
        <p className="text-sm text-slate-500">
          Showing <span className="font-medium text-slate-300">1–10</span> of{" "}
          <span className="font-medium text-slate-300">24</span> incidents
        </p>

        {/* Pagination controls */}
        <div className="flex items-center gap-1">
          {/* Previous */}
          <button
            className="
            flex size-8 items-center justify-center
            rounded-md
            text-slate-500
            transition-colors
            hover:bg-white/5
            hover:text-white
            disabled:cursor-not-allowed
            disabled:opacity-40
            "
          >
            ←
          </button>

          {/* Current page */}
          <button
            className="
            flex size-8 items-center justify-center
            rounded-md
            bg-cyan-500/10
            text-sm
            font-medium
            text-cyan-400
            "
          >
            1
          </button>

          {/* Other pages */}
          <button
            className="
            flex size-8 items-center justify-center
            rounded-md
            text-sm
            text-slate-400
            transition-colors
            hover:bg-white/5
            hover:text-white
            "
          >
            2
          </button>

          <button
            className="
            flex size-8 items-center justify-center
            rounded-md
            text-sm
            text-slate-400
            transition-colors
            hover:bg-white/5
            hover:text-white
            "
          >
            3
          </button>

          {/* Next */}
          <button
            className="
            flex size-8 items-center justify-center
            rounded-md
            text-slate-400
            transition-colors
            hover:bg-white/5
            hover:text-white
            "
          >
            →
          </button>
        </div>
      </div>
    </>
  );
}
