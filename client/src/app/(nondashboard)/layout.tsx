import React from "react";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className={`flex flex-col h-full w-full [pt-${NAVBAR_HEIGHT}rem]`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
