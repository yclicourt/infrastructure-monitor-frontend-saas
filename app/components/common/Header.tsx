import { FaSearch, FaBell, FaChevronDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header
      className="relative
    flex
    h-16
    w-full
    items-center
    gap-3
    border-b
    border-[#1E293B]
    bg-[#0B101D]
    px-3
    select-none
    sm:px-5
    md:px-8"
    >
      {/* Hamburger */}
      <button
        type="button"
        onClick={onMenuClick}
        className="
          flex
          size-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-[#1E293B]
          bg-[#121A2B]
          text-slate-400
          transition
          hover:text-white
          lg:hidden
        "
        aria-label="Open navigation menu"
      >
        <FaBars className="text-sm" />
      </button>
      {/* 2. Barra de búsqueda (con margen izquierdo para separarse de la línea divisoria) */}
      <div className="flex min-w-0 flex-1 items-center">
        <div className="relative w-full">
          <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-xs text-slate-400">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search infrastructure..."
            className="w-full
          rounded-lg
          border
          border-[#1E293B]
          bg-[#121A2B]
          py-2
          pl-10
          pr-3
          text-sm
          text-slate-200
          placeholder-slate-500
          transition-all
          focus:border-[#00F2FE]
          focus:outline-none
          focus:ring-1
          focus:ring-[#00F2FE]
          sm:pr-4
          sm:text-base"
          />
        </div>
      </div>

      {/* 3. Lado Derecho: Notificaciones, Divisor interior y Perfil */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        {/* Botón de Notificaciones */}
        <button
          type="button"
          className="relative
        flex
        size-9
        shrink-0
        items-center
        justify-center
        rounded-lg
        border
        border-[#1E293B]
        bg-[#121A2B]
        text-slate-400
        transition-all
        hover:border-slate-700
        hover:text-white"
          aria-label="Notifications"
        >
          <FaBell className="text-xs" />
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#00F2FE]"></span>
        </button>

        {/* Divisor vertical entre campana y perfil */}
        <div className="mx-1 hidden h-6 w-px bg-[#1E293B] sm:block"></div>

        {/* Perfil de Usuario */}
        <div
          className="flex
        shrink-0
        items-center
        gap-3
        rounded-xl
        border
        border-[#1E293B]
        bg-[#121A2B]
        p-1.5
        sm:px-3"
        >
          <div className="flex size-7 items-center justify-center rounded-full bg-linear-to-br from-[#2563EB] to-[#00F2FE] text-xs font-bold text-white shadow">
            Y
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <span className="text-xs font-semibold text-slate-200">Yoan</span>
            <FaChevronDown className="text-[9px] text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
