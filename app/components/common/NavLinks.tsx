"use client"

import { navigationSections } from "@/app/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      {navigationSections.map((section) => (
        <div key={section.title} className="flex flex-col gap-1">
          {/* Título del Dominio */}
          <span className="px-3 text-[15px] font-bold tracking-widest text-slate-500 uppercase">
            {section.title}
          </span>

          {/* Items del Dominio */}
          {section.items.map((link) => {
            const LinkIcon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#1D2A44] text-white border-l-4 border-[#00F2FE] pl-2.5" 
                    : "text-[#94A3B8] hover:bg-[#121A2B]/60 hover:text-white" 
                }`}
              >
                <LinkIcon
                  className={`text-lg w-5 ${isActive ? "text-[#00F2FE]" : "text-slate-400"}`}
                />
                <span className="whitespace-nowrap">{link.name}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}
