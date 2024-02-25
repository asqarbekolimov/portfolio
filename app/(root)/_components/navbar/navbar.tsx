"use client";
import ModeToggle from "@/components/shared/mode-toggle";
import { menuItems } from "@/constants";
import { cn } from "@/lib/utils";
import { MenuItemsProps } from "@/type";
import { Code2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";
import Mobile from "./mobile";
import TranslateBtn from "@/components/shared/drop-down";

const Navbar = () => {
  const pathname = usePathname();
  const { t } = useTranslation();
  return (
    <div className="fixed left-0 right-0 top-0 !z-50 flex items-center justify-between border-b px-5 py-2 text-slate-400 backdrop-blur-lg dark:bg-slate-950/50 md:px-6 md:py-5 lg:px-14 lg:py-5">
      <Link href={"/"}>
        <Code2 size={40} />
      </Link>
      <div className={"hidden items-center space-x-4 lg:flex"}>
        {menuItems.map((item: MenuItemsProps, idx: number) => (
          <Link
            href={item.path}
            key={item.id}
            className={cn(
              "cursor-pointer rounded-md px-3 py-1 transition-colors hover:bg-blue-400/20",
              pathname === item.path && "text-blue-600/95",
            )}
          >
            <div>
              <span className="text-blue-500">0{idx + 1}.</span>
              <span>{t(item.title, { ns: "index" })}</span>
            </div>
          </Link>
        ))}
        <TranslateBtn />
        <ModeToggle />
      </div>
      <div className="flex gap-2 lg:hidden">
        <ModeToggle />
        <TranslateBtn />
        <Mobile />
      </div>
    </div>
  );
};

export default Navbar;
