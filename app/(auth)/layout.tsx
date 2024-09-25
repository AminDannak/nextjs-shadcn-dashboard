import ThemeToggler from "@/components/theme-toggler";
import React, { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      {children}
      <div className="absolute bottom-5 right-0 text-white">
        <ThemeToggler />
      </div>
    </div>
  );
}

export default AuthLayout;
