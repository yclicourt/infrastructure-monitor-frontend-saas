import { FaPowerOff, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function SideNav({ isOpen, onClose }: SideNavProps) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            backdrop-blur-sm
            lg:hidden
          "
        />
      )}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          h-screen
          w-64
          flex-col
          justify-between
          border-r
          border-[#1E293B]
          bg-[#0B101D]
          p-4
          select-none
          transition-transform
          duration-300
          lg:static
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center justify-between gap-3 border-b border-[#1E293B] px-2 pb-4">
            <Logo />

            {/* Close button - Mobile */}
            <button
              onClick={onClose}
              className="
                flex
                size-9
                items-center
                justify-center
                rounded-lg
                text-slate-400
                transition
                hover:bg-[#121A2B]
                hover:text-white
                lg:hidden
              "
              aria-label="Close navigation menu"
            >
              <FaTimes />
            </button>
          </div>

          {/* Navigation */}
          <NavLinks />
        </div>

        {/* Logout */}
        <div className="mt-4 border-t border-[#1E293B] pt-4">
          <button
            type="button"
            className="
              flex
              h-11
              w-full
              items-center
              gap-3
              rounded-lg
              border
              border-[#1E293B]
              bg-[#121A2B]
              px-3
              text-sm
              font-semibold
              text-slate-300
              transition-all
              hover:border-red-500/30
              hover:bg-red-500/10
              hover:text-red-400
            "
          >
            <FaPowerOff className="w-5" />

            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
