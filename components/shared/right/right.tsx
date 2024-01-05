'use client';
import Link from 'next/link';
import React from 'react';
import { Dosis } from 'next/font/google';
import { Fade } from 'react-awesome-reveal';

const font = Dosis({ subsets: ['latin'] });

const Right = () => {
  return (
    <div
      className={`${font.className} fixed bottom-0 z-10 hidden w-[40px] text-slate-400 md:right-6 lg:right-14 lg:block`}
    >
      <div className="flex flex-col items-center gap-5 text-xl font-medium after:m-auto after:block after:h-[110px] after:w-[1px] after:bg-slate-400">
        <Fade direction="down">
          <Link
            className="vertical-writing-mode "
            href={'mailto:asqarbekdev@gmail.com'}
          >
            asqarbekdev@gmail.com
          </Link>
        </Fade>
      </div>
    </div>
  );
};

export default Right;
