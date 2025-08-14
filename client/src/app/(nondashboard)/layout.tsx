import React from "react";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main
        className={`flex flex-col h-full w-full`}
        //Tailwind JIT does not recognize values in template constants
        style={{ paddingTop: `${NAVBAR_HEIGHT}rem` }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
