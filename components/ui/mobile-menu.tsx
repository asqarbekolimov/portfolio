"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";
import { NavItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  isMobileNav: boolean;
  setIsMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  handleMobileNav: () => void;
}

const MobileMenu = ({ isMobileNav, handleMobileNav }: MobileMenuProps) => {
  const pathname = usePathname();
  return (
    <motion.div
      className="fixed left-0 top-0 z-40 w-full bg-[#141416]/90 backdrop-blur-lg"
      initial={{ y: "-100%" }}
      animate={{
        y: isMobileNav ? 70 : "-100%",
        transition: { duration: 0.5 },
      }}
    >
      {NavItems.map((item) => (
        <Link href={item.href} key={item.title}>
          <motion.div
            className={cn(
              "relative w-full border-b border-[#232627] px-10 py-7",
              item.href === pathname ? "bg-[#232627]/80" : "",
            )}
            onClick={handleMobileNav}
          >
            <div className="flex h-5 flex-col overflow-hidden">
              <motion.span
                className={`font-sourceCodePro text-base font-semibold uppercase text-[#5b5b5c] ${item.href === pathname ? "text-white" : ""}`}
              >
                {item.title}
              </motion.span>
              <motion.span
                className={`font-sourceCodePro text-base font-semibold uppercase text-[#5b5b5c] ${item.href === pathname ? "text-white" : ""}`}
              >
                {item.title}
              </motion.span>
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};

export default MobileMenu;
