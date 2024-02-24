"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { menuItems } from "@/constants";
import { cn } from "@/lib/utils";
import { MenuItemsProps } from "@/type";
import { Code2, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Mobile = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button size={"icon"} variant={"ghost"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <Link href={"/"} className="">
          <Code2 className="cursor-pointer" size={40} />
        </Link>
        {/* <Separator className="my-3" /> */}
        <div className="mt-5 flex flex-col space-y-3">
          {menuItems.map((nav: MenuItemsProps) => (
            <Link
              key={nav.id}
              href={nav.path}
              className={cn(
                "cursor-pointer rounded-md px-3 py-1 transition-colors hover:bg-blue-400/20",
                pathname === nav.path && "text-blue-400",
              )}
            >
              <SheetTrigger className="w-full text-start">
                {nav.title}
              </SheetTrigger>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Mobile;
