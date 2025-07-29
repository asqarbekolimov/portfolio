import { Icons } from "@/lib/icons";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { LngDropdown } from "./lng-dropdown";

const Header = () => {
  return (
    <div className="m-auto w-full max-w-5xl">
      <div className="flex w-full items-center justify-between py-4">
        <Icons.logo />
        <ModeToggle />
        <LngDropdown />
      </div>
    </div>
  );
};

export default Header;
