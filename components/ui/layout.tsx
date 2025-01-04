import React, { ReactNode } from "react";
import TopHeader from "./top-header";
import Sidebar from "./sidebar";

const LayoutPages = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <TopHeader />

        <div className="flex flex-1">
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
};

export default LayoutPages;
