import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";
import React, { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar/>
      <div className="flex w-full">
        <div className="hidden md:block max-h-full w-[300px]">
          <SideBar/>
        </div>
        <div className="w-full h-[100vh] flex justify-center">
          <div className="p-5 w-full flex flex-col max-w-[1140px]">{children}</div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
