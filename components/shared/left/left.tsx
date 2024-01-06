'use client';
import Link from 'next/link';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { LuGithub, LuInstagram, LuLinkedin, LuTwitter } from 'react-icons/lu';
import { PiTelegramLogo } from 'react-icons/pi';

const Left = () => {
  return (
    <div className="fixed bottom-0 z-10 hidden w-[40px] md:left-6 lg:left-14 lg:block">
      <Fade cascade damping={0.5}>
        <ul className="flex flex-col items-center gap-5 text-slate-400 after:m-auto after:block after:h-[110px] after:w-[1px] after:bg-slate-400">
          <li>
            <Link href={'https://github.com/asqarbekolimov'}>
              <LuGithub
                size={25}
                className="duration-200 hover:text-[#00b533]"
              />
            </Link>
          </li>
          <li>
            <Link href={'https://www.instagram.com/mr_asqarbek/'}>
              <LuInstagram
                size={25}
                className="duration-200 hover:text-[#00b533]"
              />
            </Link>
          </li>
          <li>
            <Link href={'https://www.linkedin.com/in/asqarbekolimov/'}>
              <LuLinkedin
                size={25}
                className="duration-200 hover:text-[#00b533]"
              />
            </Link>
          </li>
          <li>
            <Link href={'https://twitter.com/asqarbekdev'}>
              <LuTwitter
                size={25}
                className="duration-200 hover:text-[#00b533]"
              />
            </Link>
          </li>
          <li>
            <Link href={'https://asqarb3k.t.me'}>
              <PiTelegramLogo
                size={25}
                className="duration-200 hover:text-[#00b533]"
              />
            </Link>
          </li>
        </ul>
      </Fade>
    </div>
  );
};

export default Left;
