import { FaChevronDown } from "react-icons/fa6";

export default function FilterMonitoring() {
  return (
    <>
      <div className="mt-10 flex w-full flex-col gap-3 md:flex-row">
        <div className="relative w-full md:w-44">
          <select
            className="
                h-11
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
                focus:ring-[#00F2FE]
                "
          >
            <option value="">All Clients</option>

            {/* {organizations.map((org) => (
            <option key={org.id} value={org.id}>
              {org.name}
            </option>
          ))} */}
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
            <FaChevronDown className="text-xs" />
          </div>
        </div>

        {/* Client select */}
        <div className="relative w-full md:w-44">
          <select
            className="
                h-11
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
                focus:ring-[#00F2FE]
                "
          >
            <option value="">All Assets</option>

            {/* {organizations.map((org) => (
            <option key={org.id} value={org.id}>
              {org.name}
            </option>
          ))} */}
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
            <FaChevronDown className="text-xs" />
          </div>
        </div>
      </div>
    </>
  );
}
