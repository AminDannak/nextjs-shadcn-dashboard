import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";
import React, { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="hidden md:block h-[100vh] w-[300px]">
          <SideBar />
        </div>
        <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
      </div>
    </>
  );
}

export default MainLayout;
