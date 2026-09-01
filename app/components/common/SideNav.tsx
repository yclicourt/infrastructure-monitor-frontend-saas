import { FaPowerOff } from "react-icons/fa";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
export default function SideNav() {
  return (
    <aside className="flex h-screen w-64 flex-col justify-between bg-[#0B101D] border-r border-[#1E293B] p-4 select-none">
      <div className="flex flex-col gap-6 overflow-y-auto">
        {/* LOGO AREA */}
        <div className="flex items-center gap-3 px-2 pb-4 border-b border-[#1E293B]">
          <Logo/>
        </div>

        {/* NAVIGATION LINKS POR DOMINIOS */}
        <NavLinks />
      </div>

      {/* FOOTER / LOGOUT BUTTON */}
      <div className="pt-4 border-t border-[#1E293B]">
        <button
          type="submit"
          className="flex h-11 w-full items-center gap-3 rounded-lg bg-[#121A2B] border border-[#1E293B] px-3 text-sm font-semibold text-slate-300 hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400 transition-all"
        >
          <FaPowerOff className="w-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
