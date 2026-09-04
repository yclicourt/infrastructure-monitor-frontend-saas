import CardOrganizations from "@/app/components/organizations/CardOrganizations";
import TableOrganizations from "@/app/components/organizations/TableOrganizations";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default function OrganizationPage() {
  return (
    <>
      {/* Section Title and Subtitle */}
      <section>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Organizations
            </h1>
            <p className="mt-2 text-sm font-normal text-gray-500 sm:text-base">
              Manage and organize your infrastructure organizations
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <Link
              href={"#"}
              className="flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-md
          border
          border-blue-300
          bg-blue-400
          px-4
          py-3
          text-sm
          font-semibold
          text-black
          transition
          hover:text-white
          sm:w-auto
          sm:px-6
          sm:text-base"
            >
              <FaPlus className="text-sm" /> New Organization
            </Link>
          </div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="mt-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CardOrganizations />
        </div>
      </section>

      {/* Section Search */}
      <section>
        <div className="relative w-full mt-6">
          <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400 text-xs">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search organizations..."
            className=" w-full
        rounded-lg
        border
        border-[#1E293B]
        bg-[#121A2B]
        py-2.5
        pl-10
        pr-4
        text-sm
        text-slate-200
        placeholder-slate-500
        transition-all
        focus:border-[#00F2FE]
        focus:outline-none
        focus:ring-1
        focus:ring-[#00F2FE]
        sm:text-base"
          />
        </div>
      </section>

      {/* Section Table */}
      <section>
        <TableOrganizations />
      </section>
    </>
  );
}
