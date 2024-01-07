'use client';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import React, { useEffect } from 'react';
import { FaRegCircle, FaFreeCodeCamp } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { FaGraduationCap } from 'react-icons/fa';
import { CiMobile2 } from 'react-icons/ci';
import { Button } from '@/components/ui/button';
import { IoMdWifi } from 'react-icons/io';
import { Fade, Zoom } from 'react-awesome-reveal';
import {
  CourseraSkills,
  ITParkSkills,
  MohirdevSkills,
  SammiSkills,
  Skills,
} from '@/constants';
import { PiCertificate } from 'react-icons/pi';
import Lenis from '@studio-freight/lenis';
import { useTranslation } from 'react-i18next';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const AboutPageComponents = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  const { t } = useTranslation();

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
                <div className="h-[800px] w-1 rounded-md bg-gradient-to-b from-transparent via-purple-500 to-blue-500  md:h-[550px]" />
              </Fade>
            </div>
            <div>
              <Fade direction="down" triggerOnce={true}>
                <h1
                  className={`${inter.className} text-shadow-md text-5xl font-semibold uppercase text-slate-300 sm:text-6xl md:text-7xl lg:text-8xl`}
                >
                  {t('about_me', { ns: 'about' })}
                </h1>
              </Fade>
              <Fade direction="down" triggerOnce={true}>
                <p className="mt-10 w-full max-w-4xl text-justify leading-8 text-slate-400 md:mt-14">
                  {t('about_description', { ns: 'about' })}
                </p>
              </Fade>
              <Fade direction="up" triggerOnce={true}>
                <h3 className="mb-5 mt-10 text-xl font-semibold text-slate-300">
                  {t('prg_lng', { ns: 'about' })}
                </h3>
                <div className="flex flex-wrap items-end gap-4">
                  <SiJavascript size={50} className="text-yellow-500" />
                  <SiTypescript size={50} className="text-blue-500" />
                  <TbBrandCpp size={50} className="text-red-500" />
                </div>
                <h3 className="mb-5 mt-10 text-xl font-semibold text-slate-300">
                  {t('skills', { ns: 'about' })}
                </h3>
                <div className="flex w-full max-w-4xl flex-wrap items-end gap-4">
                  {Skills.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-md bg-blue-500/50 px-2 py-1 font-bold text-white"
                    >
                      {item.name}
                    </div>
                  ))}
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
                  <div className="h-[580px] w-1 rounded-md bg-gradient-to-b from-blue-500 to-green-500 md:h-[400px]" />
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
                <p className="mt-10 w-full max-w-4xl text-justify leading-8 md:mt-14 dark:text-slate-300">
                  {t('it_descr', { ns: 'about' })}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="dark:text-slate-100">
                    {t('june_2020', { ns: 'about' })}
                  </span>
                  -
                  <span className="dark:text-slate-100">
                    {t('feb_2021', { ns: 'about' })}
                  </span>
                </div>
                <h3 className="mb-5 mt-5 text-xl font-semibold text-slate-300">
                  {t('skills', { ns: 'about' })}
                </h3>
                <div className="flex w-full max-w-4xl flex-wrap items-end gap-4">
                  {ITParkSkills.map((item, index) => (
                    <div
                      key={index}
                      className="cursor-pointer rounded-md bg-[#00b533]/80 px-2 py-1 font-bold text-white"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </Fade>
              <Fade direction="up" triggerOnce={true}>
                <div className="flex flex-wrap gap-1">
                  <Button variant={'outline'} className="mt-5">
                    <Link
                      href={'https://it-park.uz/'}
                      target="_blank"
                      className="flex items-center gap-1 uppercase"
                    >
                      <FaGraduationCap size={25} />
                      <span className="font-semibold dark:text-slate-100">
                        {t('see_course', { ns: 'about' })}
                      </span>
                    </Link>
                  </Button>
                  <Button variant={'secondary'} className="mt-5">
                    <Link
                      href={'https://www.itcenter.uz/cert/2021/'}
                      target="_blank"
                      className="flex items-center gap-1 uppercase"
                    >
                      <PiCertificate size={25} />
                      <span className="font-semibold dark:text-slate-100">
                        {t('see_cert', { ns: 'about' })}
                      </span>
                    </Link>
                  </Button>
                </div>
              </Fade>
            </div>
            <img
              src="/itpark.png"
              className="absolute bottom-0 right-0 -z-30 h-52 w-52 text-blue-400/30 opacity-80"
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
                <div className="h-[750px] w-1 rounded-md bg-gradient-to-b from-green-500 to-cyan-500 md:h-[450px]" />
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
                <p className="mt-10 w-full max-w-4xl text-justify leading-8 md:mt-14 dark:text-slate-300">
                  {t('mohir_descr', { ns: 'about' })}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="dark:text-slate-100">
                    {t('march_2021', { ns: 'about' })}
                  </span>
                  -
                  <span className="dark:text-slate-100">
                    {t('sept_2021', { ns: 'aboutq' })}
                  </span>
                </div>
                <h3 className="mb-5 mt-5 text-xl font-semibold text-slate-300">
                  {t('skills', { ns: 'about' })}
                </h3>
                <div className="flex w-full max-w-4xl flex-wrap items-end gap-4">
                  {MohirdevSkills.map((item, index) => (
                    <div
                      key={index}
                      className="cursor-pointer rounded-md bg-cyan-500/70 px-2 py-1 font-bold text-white"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </Fade>
              <Fade direction="up" triggerOnce={true}>
                <div className="flex flex-wrap gap-1">
                  <Button variant={'outline'} className="mt-5">
                    <Link
                      href={'https://mohirdev.uz/'}
                      className="flex items-center gap-1 uppercase"
                    >
                      <FaGraduationCap size={25} />
                      <span className="font-semibold dark:text-slate-100">
                        {t('see_course', { ns: 'about' })}
                      </span>
                    </Link>
                  </Button>
                  <Button variant={'secondary'} className="mt-5">
                    <Link
                      href={
                        'https://mohirdev.uz/certificate/verify/?id=prac-N_0ndO6RS'
                      }
                      target="_blank"
                      className="flex items-center gap-1 uppercase"
                    >
                      <PiCertificate size={25} />
                      <span className="font-semibold dark:text-slate-100">
                        {t('see_cert', { ns: 'about' })}
                      </span>
                    </Link>
                  </Button>
                </div>
              </Fade>
            </div>
            <img
              src="/mohirdev.png"
              className="absolute bottom-0 right-0 -z-30 text-blue-400/30 opacity-80"
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
                <div className="h-[750px] w-1 rounded-md bg-gradient-to-b from-cyan-500 to-sky-500 md:h-[480px]" />
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
                  {t('sammi_descr', { ns: 'about' })}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="dark:text-slate-100">
                    {t('june_2023', { ns: 'about' })}
                  </span>
                  -
                  <span className="dark:text-slate-100">
                    {t('present', { ns: 'about' })}
                  </span>
                </div>
                <h3 className="mb-5 mt-5 text-xl font-semibold text-slate-300">
                  {t('skills', { ns: 'about' })}
                </h3>
                <div className="flex w-full max-w-4xl flex-wrap items-end gap-4">
                  {SammiSkills.map((item, index) => (
                    <div
                      key={index}
                      className="cursor-pointer rounded-md bg-neutral-500/70 px-2 py-1 font-bold text-white"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </Fade>
              <Fade direction="up" triggerOnce={true}>
                <div className="flex flex-wrap gap-1">
                  <Button variant={'outline'} className="mt-5">
                    <Link
                      href={'https://sammi.ac/'}
                      className="flex items-center gap-1 uppercase"
                    >
                      <FaGraduationCap size={25} />
                      <span className="font-semibold dark:text-slate-100">
                        {t('see_course', { ns: 'about' })}
                      </span>
                    </Link>
                  </Button>
                  <Button
                    variant={'secondary'}
                    disabled
                    className="mt-5 cursor-pointer uppercase"
                  >
                    {t('see_cert', { ns: 'about' })}
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
        <Fade direction="down" triggerOnce={true}>
          <section className="relative mb-10  flex w-full items-start gap-6">
            <div className="flex h-full flex-col items-center justify-start gap-3">
              <Zoom delay={2}>
                <div className="relative p-1">
                  <CiMobile2 className="" size={20} />
                  <div className=" absolute inset-0 -z-10 bg-cyan-500 blur-md" />
                </div>
              </Zoom>
              <Fade direction="down" delay={1}>
                <div className="h-[450px] w-1 rounded-md bg-gradient-to-b from-cyan-500 to-transparent md:h-[350px]" />
              </Fade>
            </div>
            <div>
              <Fade direction="down" triggerOnce={true}>
                <h1
                  className={`${inter.className} text-shadow-md text-5xl font-semibold uppercase text-slate-300 sm:text-6xl md:text-7xl lg:text-8xl`}
                >
                  Coursera
                </h1>
              </Fade>
              <Fade direction="down" triggerOnce={true}>
                <p className="mt-10 w-full max-w-4xl text-justify leading-8 text-slate-400 md:mt-14">
                  {t('coursera_descr', { ns: 'about' })}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="dark:text-slate-100">
                    {t('jan_2024', { ns: 'about' })}
                  </span>
                </div>
                <h3 className="mb-5 mt-5 text-xl font-semibold text-slate-300">
                  {t('skills', { ns: 'about' })}
                </h3>
                <div className="flex w-full max-w-4xl flex-wrap items-end gap-4">
                  {CourseraSkills.map((item, index) => (
                    <div
                      key={index}
                      className="cursor-pointer rounded-md bg-indigo-500/70 px-2 py-1 font-bold text-white"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </Fade>
              <Fade direction="up" triggerOnce={true}>
                <div className="flex flex-wrap gap-1">
                  <Button variant={'outline'} className="mt-5">
                    <Link
                      href={'https://mohirdev.uz/'}
                      className="flex items-center gap-1 uppercase"
                    >
                      <FaGraduationCap size={25} />
                      <span className="font-semibold dark:text-slate-100">
                        {t('see_course', { ns: 'about' })}
                      </span>
                    </Link>
                  </Button>
                  <Button variant={'secondary'} className="mt-5">
                    <Link
                      href={
                        'https://coursera.org/share/5b53a119a4ec5cf14b9cf7d875d04960'
                      }
                      target="_blank"
                      className="flex items-center gap-1 uppercase"
                    >
                      <PiCertificate size={25} />
                      <span className="font-semibold dark:text-slate-100">
                        {t('see_cert', { ns: 'about' })}
                      </span>
                    </Link>
                  </Button>
                </div>
              </Fade>
            </div>
            <img
              src="/coursera.svg"
              className="absolute bottom-0 right-0 -z-30 h-60 w-80 text-blue-400/30"
              alt=""
            />
          </section>
        </Fade>
      </div>
    </section>
  );
};

export default AboutPageComponents;
