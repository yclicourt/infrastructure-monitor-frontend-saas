import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

export default function FilterIncidents() {
  return (
    <div className="mt-5 flex w-full flex-col gap-3 md:flex-row">
      {/* Status Select */}

      <div className="relative w-full md:w-40">
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
          <option>All Statuses</option>

          <option>Active</option>

          <option>Inactive</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
          <FaChevronDown className="text-xs" />
        </div>
      </div>

      {/* Severity */}
      <div className="relative w-full md:w-40">
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
          <option>All Severities</option>

          <option>Active</option>

          <option>Inactive</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
          <FaChevronDown className="text-xs" />
        </div>
      </div>

      {/* Search Options */}

      <div className="relative w-full flex-1">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-500">
          <FaSearch className="text-xs" />
        </span>

        <input
          type="text"
          placeholder="Search clients..."
          className="
                h-11
                w-full
                rounded-md
                border
                border-[#1E293B]
                bg-[#121A2B]
                py-2
                pl-10
                pr-4
                text-sm
                text-slate-200
                placeholder:text-slate-500
                outline-none
                transition-all
                hover:border-slate-600
                focus:border-[#00F2FE]
                focus:ring-1
                focus:ring-[#00F2FE]
            "
        />
      </div>
    </div>
  );
}
