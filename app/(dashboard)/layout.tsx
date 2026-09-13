"use client";

import Footer from "@/app/components/common/Footer";
import Header from "@/app/components/common/Header";

import { useState } from "react";
import SideNav from "../components/common/SideNav";
import OrganizationInitializer from "../components/common/OrganizationInitializer";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0B101D]">
      <OrganizationInitializer />
      <SideNav
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
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
