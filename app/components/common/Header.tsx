
import { FaSearch, FaBell, FaChevronDown } from "react-icons/fa";

export default function Header() {
  return (
    <header className="relative flex h-16 w-full items-center justify-between border-b border-[#1E293B] bg-[#0B101D] px-8 select-none">
    

      {/* 2. Barra de búsqueda (con margen izquierdo para separarse de la línea divisoria) */}
      <div className="flex w-full max-w-sm ml-6 items-center">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400 text-xs">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search infrastructure..."
            className="w-full rounded-lg bg-[#121A2B] border border-[#1E293B] py-2 pl-10 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:border-[#00F2FE] focus:outline-none focus:ring-1 focus:ring-[#00F2FE] transition-all"
          />
        </div>
      </div>

      {/* 3. Lado Derecho: Notificaciones, Divisor interior y Perfil */}
      <div className="flex items-center gap-4">
        {/* Botón de Notificaciones */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#121A2B] border border-[#1E293B] text-slate-400 hover:text-white hover:border-slate-700 transition-all relative"
          aria-label="Notifications"
        >
          <FaBell className="text-xs" />
          <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-[#00F2FE]"></span>
        </button>

        {/* Divisor vertical entre campana y perfil */}
        <div className="h-6 w-px bg-[#1E293B] mx-1"></div>

        {/* Perfil de Usuario */}
        <div className="flex items-center gap-3 bg-[#121A2B] border border-[#1E293B] py-1.5 px-3 rounded-xl cursor-pointer hover:border-slate-700 transition-all">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br from-[#2563EB] to-[#00F2FE] text-white text-xs font-bold shadow">
            Y
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-200">Yoan</span>
            <FaChevronDown className="text-[9px] text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
