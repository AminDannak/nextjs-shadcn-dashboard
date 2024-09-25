import React, { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      {children}
    </div>
  );
}

export default AuthLayout;
