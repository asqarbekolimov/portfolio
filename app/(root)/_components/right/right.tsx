"use client";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Right = () => {
  return (
    <div
      className={` fixed bottom-0 z-10 hidden w-[40px] text-slate-400 md:right-6 lg:right-14 lg:block`}
    >
      <div className="flex flex-col items-center gap-5 text-xl font-medium after:m-auto after:block after:h-[110px] after:w-[1px] after:bg-slate-400">
        <Fade direction="down">
          <Link
            className="vertical-writing-mode font-workSans transition-all duration-300 hover:text-blue-500"
            href={"mailto:info@asqarbekdev.uz"}
          >
            info@asqarbekdev.uz
          </Link>
        </Fade>
      </div>
    </div>
  );
};

export default Right;
