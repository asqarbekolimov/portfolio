"use client";
import React, { ReactNode, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  ghost?: boolean;
}

const Button = ({ children, ghost }: ButtonProps) => {
  const [hoverActive, setHoverActive] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHoverActive(true)}
      onHoverEnd={() => setHoverActive(false)}
      className={cn(
        "group relative px-6 py-5 transition-colors duration-200 ease-in-out hover:bg-white/80",
        ghost ? "bg-white/5" : "border border-[#232627]",
      )}
    >
      <div
        className={cn(
          "absolute left-0 top-0 size-2 border-l-2 border-t-2 transition-all duration-300 ease-in-out group-hover:left-1 group-hover:top-1 group-hover:border-black",
          ghost ? "opacity-100" : "opacity-50 group-hover:opacity-100",
        )}
      ></div>
      <div
        className={cn(
          "absolute right-0 top-0 size-2 border-r-2 border-t-2 transition-all duration-300 ease-in-out group-hover:right-1 group-hover:top-1 group-hover:border-black",
          ghost ? "opacity-100" : "opacity-50 group-hover:opacity-100",
        )}
      ></div>
      <div
        className={cn(
          "absolute bottom-0 left-0 size-2 border-b-2 border-l-2 transition-all duration-300 ease-in-out group-hover:bottom-1 group-hover:left-1 group-hover:border-black",
          ghost ? "opacity-100" : "opacity-50 group-hover:opacity-100",
        )}
      ></div>
      <div
        className={cn(
          "absolute bottom-0 right-0 size-2 border-b-2 border-r-2 transition-all duration-300 ease-in-out group-hover:bottom-1 group-hover:right-1 group-hover:border-black",
          ghost ? "opacity-100" : "opacity-50 group-hover:opacity-100",
        )}
      ></div>
      <div className="relative flex h-5 flex-col overflow-hidden">
        <motion.span
          animate={{
            y: hoverActive ? -25 : 0,
            transition: { duration: 0.5 },
          }}
          className={cn(
            "font-sourceCodePro text-base font-semibold uppercase group-hover:text-black",
            !ghost && "opacity-25",
          )}
        >
          {children}
        </motion.span>
        <motion.span
          animate={{
            y: hoverActive ? -25 : 0,
            transition: { duration: 0.5 },
          }}
          className={cn(
            "font-sourceCodePro text-base font-semibold uppercase group-hover:text-black",
          )}
        >
          {children}
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Button;
