import Header from "@/app/components/common/Header";
import SideNav from "@/app/components/common/SideNav";

import { FC, PropsWithChildren } from "react";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0B101D]">
      <SideNav />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto bg-[#0B101D] p-8 text-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
