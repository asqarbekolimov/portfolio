'use client';
import { Inter } from 'next/font/google';
import React from 'react';
import { FaRegCircle, FaFreeCodeCamp } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import {
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from 'react-icons/si';
import { RiReactjsFill } from 'react-icons/ri';
import Link from 'next/link';
import { FaGraduationCap } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { IoMdWifi } from 'react-icons/io';
import { Fade, Zoom } from 'react-awesome-reveal';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const AboutPageComponents = () => {
  return (
    <section className="m-auto w-full">
      <div className="flex h-auto w-full flex-col items-start gap-10">
        <Fade direction="down" triggerOnce={true}>
          <section className="relative flex w-full items-start gap-6 sm:my-0">
            <div className="flex h-full flex-col items-center justify-start gap-3 p-1">
              <Zoom>
                <FaRegCircle />
              </Zoom>
              <Fade direction="down">
                <div className="h-96 w-1 rounded-md bg-gradient-to-b from-transparent to-blue-500" />
              </Fade>
            </div>
            <div>
              <Fade direction="down" triggerOnce={true}>
                <h1
                  className={`${inter.className} text-shadow-md text-5xl font-semibold uppercase text-slate-300 sm:text-6xl md:text-7xl lg:text-8xl`}
                >
                  ABOUT ME
                </h1>
              </Fade>
              <Fade direction="down" triggerOnce={true}>
                <p className="mt-10 w-full max-w-4xl text-justify leading-8 text-slate-400 md:mt-14">
                  Hello there. my name is Askarbek. I live in Uzbekistan.
                  Currently, I am a frontend (Reactjs) developer with more than
                  a year of experience and I am learning additional backend
                  (Node.js, Nestjs). In addition, I am learning mobile
                  programming for ios and android in React Native.
                </p>
              </Fade>
              <Fade direction="up" triggerOnce={true}>
                <div className="mt-10 flex flex-wrap items-end gap-4">
                  <SiJavascript size={50} className="text-yellow-500" />
                  <SiTypescript size={50} className="text-blue-500" />
                  <SiNextdotjs size={50} />
                  <RiReactjsFill size={50} className="text-blue-600" />
                  <SiHtml5 size={50} className="text-orange-600" />
                  <SiCss3 size={50} className="text-blue-600" />
                  <SiTailwindcss size={50} className="text-blue-600" />
                  <Link
                    href={'https://github.com/asqarbekolimov'}
                    className="text-blue-600 underline"
                  >
                    more info
                  </Link>
                </div>
              </Fade>
              <Zoom triggerOnce={true}>
                <FaCode className="absolute bottom-0 right-0 -z-30 h-52 w-52 text-blue-400/30 " />
              </Zoom>
            </div>
          </section>
        </Fade>
        <Fade direction="down" triggerOnce={true}>
          <section className="relative flex w-full items-start gap-6 sm:my-0">
            <div className="flex h-full flex-col items-center justify-start gap-3">
              <Zoom delay={2}>
                <div className="relative p-1">
                  <FaGraduationCap className="" size={20} />
                  <div className=" absolute inset-0 -z-10 bg-blue-500 blur-md" />
                </div>
                <Fade direction="down" delay={1}>
                  <div className="h-96 w-1 rounded-md bg-gradient-to-b from-blue-500 to-green-500" />
                </Fade>
              </Zoom>
            </div>
            <div>
              <Fade direction="down" triggerOnce={true}>
                <h1
                  className={`${inter.className} text-shadow-md text-5xl font-semibold uppercase text-slate-300 sm:text-6xl md:text-7xl lg:text-8xl`}
                >
                  IT PARK
                </h1>
              </Fade>
              <Fade direction="down" triggerOnce={true}>
                <p className="mt-10 w-full max-w-4xl text-justify leading-8 text-slate-400 md:mt-14">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi magnam reprehenderit perspiciatis, provident vitae
                  eos a ipsa porro dolore facilis neque dolorem sequi voluptatem
                  exercitationem fuga, veniam officia debitis quibusdam quos
                  animi unde. Similique, accusantium vitae porro unde tempore,
                  facere expedita cumque totam, obcaecati eligendi numquam eum
                  aut ipsum nam.
                </p>
              </Fade>
              <Fade direction="up" triggerOnce={true}>
                <div className="flex gap-5">
                  <Button variant={'outline'} className="mt-5">
                    <Link href={'https://mohirdev.uz/'} className="uppercase">
                      see course
                    </Link>
                  </Button>
                  <Button variant={'secondary'} className="mt-5">
                    <Link href={'https://mohirdev.uz/'} className="uppercase">
                      see certificate
                    </Link>
                  </Button>
                </div>
              </Fade>
            </div>
            <img
              src="/itpark.png"
              className="absolute bottom-0 right-0 -z-30 h-52 w-52 text-blue-400/30"
              alt=""
            />
          </section>
        </Fade>
        <Fade direction="down" triggerOnce={true}>
          <section className="relative  flex w-full items-start gap-6 sm:my-0">
            <div className="flex h-full flex-col items-center justify-start gap-3">
              <Zoom delay={2}>
                <div className="relative p-1">
                  <IoMdWifi className="" size={20} />
                  <div className=" absolute inset-0 -z-10 bg-green-500 blur-md" />
                </div>
              </Zoom>
              <Fade direction="down" delay={1}>
                <div className="h-96 w-1 rounded-md bg-gradient-to-b from-green-500 to-cyan-500" />
              </Fade>
            </div>
            <div>
              <Fade direction="down" triggerOnce={true}>
                <h1
                  className={`${inter.className} text-shadow-md text-5xl font-semibold uppercase text-slate-300 sm:text-6xl md:text-7xl lg:text-8xl`}
                >
                  mohirdev
                </h1>
              </Fade>
              <Fade direction="down" triggerOnce={true}>
                <p className="mt-10 w-full max-w-4xl text-justify leading-8 text-slate-400 md:mt-14">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi magnam reprehenderit perspiciatis, provident vitae
                  eos a ipsa porro dolore facilis neque dolorem sequi voluptatem
                  exercitationem fuga, veniam officia debitis quibusdam quos
                  animi unde. Similique, accusantium vitae porro unde tempore,
                  facere expedita cumque totam, obcaecati eligendi numquam eum
                  aut ipsum nam.
                </p>
              </Fade>
              <Fade direction="up" triggerOnce={true}>
                <div className="flex gap-5">
                  <Button variant={'outline'} className="mt-5">
                    <Link href={'https://mohirdev.uz/'} className="uppercase">
                      see course
                    </Link>
                  </Button>
                  <Button variant={'secondary'} className="mt-5">
                    <Link href={'https://mohirdev.uz/'} className="uppercase">
                      see certificate
                    </Link>
                  </Button>
                </div>
              </Fade>
            </div>
            <img
              src="/mohirdev.png"
              className="absolute bottom-0 right-0 -z-30 text-blue-400/30"
              alt=""
            />
          </section>
        </Fade>
        <Fade direction="down" triggerOnce={true}>
          <section className="relative flex  w-full items-start gap-6 sm:my-0">
            <div className="flex h-full flex-col items-center justify-start gap-3">
              <Zoom delay={2}>
                <div className="relative p-1">
                  <FaFreeCodeCamp className="" size={20} />
                  <div className=" absolute inset-0 -z-10 bg-cyan-500 blur-md" />
                </div>
              </Zoom>
              <Fade direction="down" delay={1}>
                <div className="h-96 w-1 rounded-md bg-gradient-to-b from-cyan-500 to-transparent" />
              </Fade>
            </div>
            <div>
              <Fade direction="down" triggerOnce={true}>
                <h1
                  className={`${inter.className} text-shadow-md text-5xl font-semibold uppercase text-slate-300 sm:text-6xl md:text-7xl lg:text-8xl`}
                >
                  mern sammi
                </h1>
              </Fade>
              <Fade direction="down" triggerOnce={true}>
                <p className="mt-10 w-full max-w-4xl text-justify leading-8 text-slate-400 md:mt-14">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi magnam reprehenderit perspiciatis, provident vitae
                  eos a ipsa porro dolore facilis neque dolorem sequi voluptatem
                  exercitationem fuga, veniam officia debitis quibusdam quos
                  animi unde. Similique, accusantium vitae porro unde tempore,
                  facere expedita cumque totam, obcaecati eligendi numquam eum
                  aut ipsum nam.
                </p>
              </Fade>
              <Fade direction="up" triggerOnce={true}>
                <div className="flex gap-5">
                  <Button variant={'outline'} className="mt-5">
                    <Link href={'https://mohirdev.uz/'} className="uppercase">
                      see course
                    </Link>
                  </Button>
                  <Button variant={'secondary'} disabled className="mt-5">
                    <Link href={'https://mohirdev.uz/'} className="uppercase">
                      see certificate
                    </Link>
                  </Button>
                </div>
              </Fade>
            </div>
            <img
              src="/sammi.svg"
              className="absolute bottom-0 right-0 -z-30 h-52 w-52 text-blue-400/30"
              alt=""
            />
          </section>
        </Fade>
      </div>
    </section>
  );
};

export default AboutPageComponents;
