"use client";
import { NavItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion } from "motion/react";

const Sidebar = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="sticky top-0 hidden h-screen w-60 border-r border-[#232627] xl:block">
      <div className="flex h-full flex-col justify-end">
        {NavItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <motion.div
              onHoverStart={() => {
                if (item.href !== pathname) {
                  setHoveredIndex(index);
                }
              }}
              onHoverEnd={() => setHoveredIndex(null)}
              className={cn(
                "relative w-full border-b border-[#232627] px-10 py-7 hover:bg-[#232627]",
                item.href === pathname
                  ? "bg-[#232627] before:absolute before:right-0 before:top-0 before:size-2 before:border-r-2 before:border-t-2 after:absolute after:bottom-0 after:right-0 after:size-2 after:border-b-2 after:border-r-2"
                  : "",
              )}
            >
              <div className="flex h-5 flex-col overflow-hidden">
                <motion.span
                  animate={{
                    y: hoveredIndex === index ? -25 : 0,
                    transition: { duration: 0.5 },
                  }}
                  className={`font-sourceCodePro text-base font-semibold uppercase text-[#5b5b5c] ${item.href === pathname ? "text-white" : ""}`}
                >
                  {item.title}
                </motion.span>
                <motion.span
                  animate={{
                    y: hoveredIndex === index ? -25 : 0,
                    transition: { duration: 0.5 },
                  }}
                  className={`font-sourceCodePro text-base font-semibold uppercase text-[#5b5b5c] ${item.href === pathname ? "text-white" : ""}`}
                >
                  {item.title}
                </motion.span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
