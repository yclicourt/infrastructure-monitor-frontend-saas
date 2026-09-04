"use client";

import Footer from "@/app/components/common/Footer";
import Header from "@/app/components/common/Header";
import SideNav from "@/app/components/common/SideNav";

import { FC, PropsWithChildren, useState } from "react";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0B101D]">
      <SideNav isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <main
          className="flex-1
            overflow-y-auto
            bg-[#0B101D]
            p-4
            text-white
            sm:p-6
            lg:p-8"
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
