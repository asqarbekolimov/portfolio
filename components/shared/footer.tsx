"use client";
import { Github, Linkedin, Send } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <>
      <div className="w-full border-t border-[#232627]">
        <div className="flex flex-col justify-between xl:flex-row">
          <Link
            href={"https://github.com/asqarbekolimov/portfolio"}
            className="flex flex-1 cursor-pointer items-center justify-center border-b border-l border-r border-[#232627]"
          >
            <motion.div
              onHoverStart={() => setIsHovered1(true)}
              onHoverEnd={() => setIsHovered1(false)}
              className="w-full px-8 py-[28px] hover:bg-[#232627]"
            >
              <div className="flex h-5 flex-col items-center overflow-hidden">
                <motion.span
                  animate={{
                    y: isHovered1 ? -25 : 0,
                    transition: { duration: 0.5 },
                  }}
                  className="font-sourceCodePro text-base font-semibold uppercase opacity-30"
                >
                  Made by Asqarbek
                </motion.span>
                <motion.span
                  animate={{
                    y: isHovered1 ? -25 : 0,
                    transition: { duration: 0.5 },
                  }}
                  className="font-sourceCodePro text-base font-semibold uppercase opacity-100"
                >
                  Made by Asqarbek
                </motion.span>
              </div>
            </motion.div>
          </Link>
          <Link
            href={"https://www.fiverr.com/asqarbekdev"}
            target="_blank"
            className="flex flex-1 cursor-pointer items-center justify-center border-b border-l border-r border-[#232627]"
          >
            <motion.div
              onHoverStart={() => setIsHovered2(true)}
              onHoverEnd={() => setIsHovered2(false)}
              className="w-full px-8 py-[28px] hover:bg-[#232627]"
            >
              <div className="flex h-5 flex-col items-center overflow-hidden">
                <motion.span
                  animate={{
                    y: isHovered2 ? -25 : 0,
                    transition: { duration: 0.5 },
                  }}
                  className="font-sourceCodePro text-base font-semibold uppercase opacity-30"
                >
                  fiverr profile
                </motion.span>
                <motion.span
                  animate={{
                    y: isHovered2 ? -25 : 0,
                    transition: { duration: 0.5 },
                  }}
                  className="font-sourceCodePro text-base font-semibold uppercase opacity-100"
                >
                  fiverr profile
                </motion.span>
              </div>
            </motion.div>
          </Link>
          <div className="grid grid-cols-3 items-center justify-items-center xl:flex">
            <Link
              href={"https://github.com/asqarbekolimov"}
              target="_blank"
              className="flex w-full items-center justify-center border-l border-r border-[#232627] px-8 py-[26.5px] hover:bg-[#232627]"
            >
              <Github />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/asqarbekolimov/"}
              target="_blank"
              className="flex w-full items-center justify-center border-l border-r border-[#232627] px-8 py-[26.5px] hover:bg-[#232627]"
            >
              <Linkedin />
            </Link>
            <Link
              href={"https://asqarb3k.t.me"}
              target="_blank"
              className="flex w-full items-center justify-center border-l border-r border-[#232627] px-8 py-[26.5px] hover:bg-[#232627]"
            >
              <Send />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
