import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

export default function TitleIncidents() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Incidents</h1>
        <p className="mt-2 text-sm font-normal text-gray-500 sm:text-base">
          Track and manage infrastructure incidents
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
          <FaPlus className="text-sm" /> New Asset
        </Link>
      </div>
    </div>
  );
}
