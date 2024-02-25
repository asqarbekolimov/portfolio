"use client";
import Link from "next/link";
import { Inter } from "next/font/google";

import { Button } from "@/components/ui/button";

import { Fade, Zoom } from "react-awesome-reveal";
import {
  CourseraSkills,
  ITParkSkills,
  MohirdevSkills,
  SammiSkills,
  Skills,
} from "@/constants";

import { useTranslation } from "react-i18next";
import { TracingBeam } from "@/components/ui/tracing-beam";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const AboutPageComponents = () => {
  const { t } = useTranslation();

  return (
    <section className="m-auto mt-24 w-full">
      <TracingBeam>
        <div className="flex h-auto w-full flex-col items-start gap-10">
          <Fade direction="down" triggerOnce={true}>
            <section className="relative flex w-full items-start gap-6 sm:my-0">
              <div>
                <Fade direction="down" triggerOnce={true}>
                  <h1
                    className={`${inter.className} text-shadow-md text-5xl font-semibold uppercase text-slate-300 sm:text-6xl md:text-7xl lg:text-8xl`}
                  >
                    {t("about_me", { ns: "about" })}
                  </h1>
                </Fade>
                <Fade direction="down" triggerOnce={true}>
                  <p className="mt-10 w-full max-w-4xl text-justify leading-8 text-slate-400 md:mt-14">
                    {t("about_description", { ns: "about" })}
                  </p>
                </Fade>
                <Fade direction="up" triggerOnce={true}>
                  <h3 className="mb-5 mt-10 text-xl font-semibold text-slate-300">
                    {t("prg_lng", { ns: "about" })}
                  </h3>
                  <div className="flex flex-wrap items-end gap-4">
                    {/* <SiJavascript size={50} className="text-yellow-500" />
                  <SiTypescript size={50} className="text-blue-500" />
                  <TbBrandCpp size={50} className="text-red-500" /> */}
                  </div>
                  <h3 className="mb-5 mt-10 text-xl font-semibold text-slate-300">
                    {t("skills", { ns: "about" })}
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
                  {/* <FaCode className="absolute bottom-0 right-0 -z-30 h-52 w-52 text-blue-400/30 " /> */}
                </Zoom>
              </div>
            </section>
          </Fade>
          <Fade direction="down" triggerOnce={true}>
            <section className="relative flex w-full items-start gap-6 sm:my-0">
              <div>
                <Fade direction="down" triggerOnce={true}>
                  <h1
                    className={`${inter.className} text-shadow-md text-5xl font-semibold uppercase text-slate-300 sm:text-6xl md:text-7xl lg:text-8xl`}
                  >
                    IT PARK
                  </h1>
                </Fade>
                <Fade direction="down" triggerOnce={true}>
                  <p className="mt-10 w-full max-w-4xl text-justify leading-8 dark:text-slate-300 md:mt-14">
                    {t("it_descr", { ns: "about" })}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="dark:text-slate-100">
                      {t("june_2020", { ns: "about" })}
                    </span>
                    -
                    <span className="dark:text-slate-100">
                      {t("feb_2021", { ns: "about" })}
                    </span>
                  </div>
                  <h3 className="mb-5 mt-5 text-xl font-semibold text-slate-300">
                    {t("skills", { ns: "about" })}
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
                    <Button variant={"outline"} className="mt-5">
                      <Link
                        href={"https://it-park.uz/"}
                        target="_blank"
                        className="flex items-center gap-1 uppercase"
                      >
                        {/* <FaGraduationCap size={25} /> */}
                        <span className="font-semibold dark:text-slate-100">
                          {t("see_course", { ns: "about" })}
                        </span>
                      </Link>
                    </Button>
                    <Button variant={"secondary"} className="mt-5">
                      <Link
                        href={"https://www.itcenter.uz/cert/2021/"}
                        target="_blank"
                        className="flex items-center gap-1 uppercase"
                      >
                        {/* <PiCertificate size={25} /> */}
                        <span className="font-semibold dark:text-slate-100">
                          {t("see_cert", { ns: "about" })}
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
              <div>
                <Fade direction="down" triggerOnce={true}>
                  <h1
                    className={`${inter.className} text-shadow-md text-5xl font-semibold uppercase text-slate-300 sm:text-6xl md:text-7xl lg:text-8xl`}
                  >
                    mohirdev
                  </h1>
                </Fade>
                <Fade direction="down" triggerOnce={true}>
                  <p className="mt-10 w-full max-w-4xl text-justify leading-8 dark:text-slate-300 md:mt-14">
                    {t("mohir_descr", { ns: "about" })}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="dark:text-slate-100">
                      {t("march_2021", { ns: "about" })}
                    </span>
                    -
                    <span className="dark:text-slate-100">
                      {t("sept_2021", { ns: "about" })}
                    </span>
                  </div>
                  <h3 className="mb-5 mt-5 text-xl font-semibold text-slate-300">
                    {t("skills", { ns: "about" })}
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
                    <Button variant={"outline"} className="mt-5">
                      <Link
                        href={"https://mohirdev.uz/"}
                        className="flex items-center gap-1 uppercase"
                      >
                        {/* <FaGraduationCap size={25} /> */}
                        <span className="font-semibold dark:text-slate-100">
                          {t("see_course", { ns: "about" })}
                        </span>
                      </Link>
                    </Button>
                    <Button variant={"secondary"} className="mt-5">
                      <Link
                        href={
                          "https://mohirdev.uz/certificate/verify/?id=prac-N_0ndO6RS"
                        }
                        target="_blank"
                        className="flex items-center gap-1 uppercase"
                      >
                        {/* <PiCertificate size={25} /> */}
                        <span className="font-semibold dark:text-slate-100">
                          {t("see_cert", { ns: "about" })}
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
                    {t("sammi_descr", { ns: "about" })}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="dark:text-slate-100">
                      {t("june_2023", { ns: "about" })}
                    </span>
                    -
                    <span className="dark:text-slate-100">
                      {t("present", { ns: "about" })}
                    </span>
                  </div>
                  <h3 className="mb-5 mt-5 text-xl font-semibold text-slate-300">
                    {t("skills", { ns: "about" })}
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
                    <Button variant={"outline"} className="mt-5">
                      <Link
                        href={"https://sammi.ac/"}
                        className="flex items-center gap-1 uppercase"
                      >
                        {/* <FaGraduationCap size={25} /> */}
                        <span className="font-semibold dark:text-slate-100">
                          {t("see_course", { ns: "about" })}
                        </span>
                      </Link>
                    </Button>
                    <Button
                      variant={"secondary"}
                      disabled
                      className="mt-5 cursor-pointer uppercase"
                    >
                      {t("see_cert", { ns: "about" })}
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
                    {t("coursera_descr", { ns: "about" })}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="dark:text-slate-100">
                      {t("jan_2024", { ns: "about" })}
                    </span>
                  </div>
                  <h3 className="mb-5 mt-5 text-xl font-semibold text-slate-300">
                    {t("skills", { ns: "about" })}
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
                    <Button variant={"outline"} className="mt-5">
                      <Link
                        href={"https://mohirdev.uz/"}
                        className="flex items-center gap-1 uppercase"
                      >
                        {/* <FaGraduationCap size={25} /> */}
                        <span className="font-semibold dark:text-slate-100">
                          {t("see_course", { ns: "about" })}
                        </span>
                      </Link>
                    </Button>
                    <Button variant={"secondary"} className="mt-5">
                      <Link
                        href={
                          "https://coursera.org/share/5b53a119a4ec5cf14b9cf7d875d04960"
                        }
                        target="_blank"
                        className="flex items-center gap-1 uppercase"
                      >
                        {/* <PiCertificate size={25} /> */}
                        <span className="font-semibold dark:text-slate-100">
                          {t("see_cert", { ns: "about" })}
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
      </TracingBeam>
    </section>
  );
};

export default AboutPageComponents;
