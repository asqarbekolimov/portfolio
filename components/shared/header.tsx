"use client";
import { Icons } from "@/lib/icons";
import React, { useState, useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import { LngDropdown } from "./lng-dropdown";
import { navLinks } from "@/constants";
import Link from "next/link";
import AnimatedContent from "../ui/animated-content";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-4 z-50 mx-auto max-w-5xl">
      <AnimatedContent
        direction="vertical"
        reverse={true}
        distance={50}
        duration={0.5}
        ease="power3.out"
      >
        <div
          className={`flex h-[60px] items-center justify-between rounded-2xl px-8 shadow-xs saturate-100 backdrop-blur-[10px] transition-all duration-300 ${
            isScrolled
              ? "bg-background/80 shadow-lg"
              : "bg-background/30 shadow-xs"
          }`}
        >
          <div className="flex w-full items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo />
            </Link>
            <nav className="flex items-center gap-2">
              <ul className="hidden items-center gap-2 md:flex">
                {navLinks.map(
                  (item) =>
                    item.isVisible && (
                      <li
                        key={item.href}
                        className="relative flex h-[60px] items-center justify-center"
                      >
                        <Link
                          className="text-muted-foreground hover:text-foreground rounded-sm px-3 py-2 font-mono text-sm font-medium transition-colors"
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ),
                )}
              </ul>
              <ModeToggle />
              <LngDropdown />
            </nav>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default Header;
