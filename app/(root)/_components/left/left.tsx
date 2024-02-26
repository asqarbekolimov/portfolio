"use client";
import { Github, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Left = () => {
  return (
    <div className="fixed bottom-0 z-10 hidden w-[40px] md:left-6 lg:left-14 lg:block">
      <Fade cascade damping={0.5}>
        <ul className="flex flex-col items-center gap-5 text-slate-400 after:m-auto after:block after:h-[110px] after:w-[1px] after:bg-slate-400">
          <li>
            <Link href={"https://github.com/asqarbekolimov"}>
              <Github size={25} className="duration-200 hover:text-blue-500" />
            </Link>
          </li>
          <li>
            <Link href={"https://www.instagram.com/mr_asqarbek/"}>
              <Instagram
                size={25}
                className="duration-200 hover:text-blue-500"
              />
            </Link>
          </li>
          <li>
            <Link href={"https://www.linkedin.com/in/asqarbekolimov/"}>
              <Linkedin
                size={25}
                className="duration-200 hover:text-blue-500"
              />
            </Link>
          </li>
          <li>
            <Link href={"https://twitter.com/asqarbekdev"}>
              <Twitter size={25} className="duration-200 hover:text-blue-500" />
            </Link>
          </li>
          <li>
            <Link href={"https://asqarb3k.t.me"}>
              <Send size={25} className="duration-200 hover:text-blue-500" />
            </Link>
          </li>
        </ul>
      </Fade>
    </div>
  );
};

export default Left;
