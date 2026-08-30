import { ReactNode } from "react";

export const Background = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full overflow-hidden bg-[#030914]">
      <div className="pointer-events-none absolute -right-40 -top-40 h-150 w-150 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
