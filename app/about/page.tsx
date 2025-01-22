import Button from "@/components/shared/button";
import Footer from "@/components/shared/footer";
import { experience, Skills } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio | About",
  description:
    "Discover more about me and my journey as a developer. Explore snippets of my personal life and things I take pride in.",
};

function AboutPage() {
  return (
    <section className="mt-32 flex flex-1 flex-col items-center justify-center sm:mt-52">
      <div className="flex flex-col items-center px-5 pb-12 xl:px-10 xl:pb-32">
        <div className="relative flex w-full max-w-4xl flex-col items-center justify-center bg-grid-[#232627]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#141416] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <h1 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-center text-4xl font-bold tracking-wider text-transparent sm:text-7xl">
            About Me
          </h1>
          <p className="text-center text-base tracking-tight text-neutral-300 sm:text-xl xl:text-lg xl:tracking-normal">
            Discover more about me and my journey as a developer. Explore
            snippets of my personal life and things I take pride in.
          </p>
        </div>
      </div>

      <div className="w-full border border-[#232627] px-5 py-14 sm:px-24 sm:py-32">
        <div className="flex flex-col-reverse items-center justify-between gap-10 sm:flex-row sm:gap-20">
          <p className="max-w-3xl font-sora text-neutral-300 sm:text-justify sm:text-xl">
            Hi! I&apos;m Askarbek. 2 years of experience, specializing in
            creating web and mobile applications using the ReactJS library. I am
            proficient in modern front-end technologies, including JavaScript,
            TypeScript, Redux, and React Native, and has a strong understanding
            of UI/UX principles. I am passionate about delivering high-quality,
            scalable, and maintainable code while staying up-to-date with the
            latest industry trends and best practices.
          </p>
          <Image src={"/avatar.png"} alt="Avatar" width={180} height={200} />
        </div>
        <div className="mt-12 flex flex-col gap-5 sm:flex-row">
          <Link href={"/contact"}>
            <Button ghost className="text-center">
              What i can help you
            </Button>
          </Link>
          <Link download={true} href="/resume.pdf">
            <Button className="text-center">Resume</Button>
          </Link>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-20 pt-14 sm:pt-28">
        <div className="max-w-2xl px-5">
          <h1 className="relative z-20 py-8 text-center text-5xl font-bold tracking-wider text-transparent text-white sm:text-6xl">
            Tech & Skills
          </h1>
          <p className="text-center font-sora text-base tracking-wide text-[#888A8B]">
            About my technical skills and tools that I use in my daily work.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {Skills.map((skill) => (
            <div
              key={skill.id}
              className="group relative flex w-full items-center justify-center border border-[#232627] px-5 py-16 transition-all duration-300 ease-linear hover:cursor-pointer hover:bg-[#ffffff0d] md:py-24"
            >
              <div
                className={
                  "absolute left-0 top-0 z-30 size-3 border-l-2 border-t-2 opacity-0 transition-all duration-300 ease-linear group-hover:left-3 group-hover:top-3 group-hover:opacity-100"
                }
              />
              <div
                className={
                  "absolute right-0 top-0 z-30 size-3 border-r-2 border-t-2 opacity-0 transition-all duration-300 ease-linear group-hover:right-3 group-hover:top-3 group-hover:opacity-100"
                }
              />
              <div
                className={
                  "absolute bottom-0 left-0 z-30 size-3 border-b-2 border-l-2 opacity-0 transition-all duration-300 ease-linear group-hover:bottom-3 group-hover:left-3 group-hover:opacity-100"
                }
              />
              <div
                className={
                  "absolute bottom-0 right-0 z-30 size-3 border-b-2 border-r-2 opacity-0 transition-all duration-300 ease-linear group-hover:bottom-3 group-hover:right-3 group-hover:opacity-100"
                }
              />
              <div className="justify-self-end">
                <div className="font-sourceCodePro text-lg font-normal uppercase opacity-65 transition-all duration-300 ease-linear group-hover:opacity-100">
                  {skill.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-20 py-14 sm:py-28">
        <div className="max-w-2xl px-5">
          <h1 className="relative z-20 py-8 text-center text-5xl font-bold tracking-wider text-transparent text-white sm:text-6xl">
            Education & Experience
          </h1>
          <p className="text-center font-sora text-base tracking-wide text-[#888A8B]">
            Deeply appreciative of the companies that have granted me the
            opportunity to collaborate and collectively shape products that
            evoke a sense of pride every time they come to mind.
          </p>
        </div>
        <div className="w-full">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="grid w-full grid-cols-2 gap-y-5 border border-[#232627] px-5 py-10 sm:grid-cols-3 sm:px-24"
            >
              <div className="col-span-2 sm:col-span-1">
                <div className="font-sourceCodePro text-sm font-medium uppercase text-white/30">
                  Company name
                </div>
                <div className="font-sourceCodePro text-lg font-normal capitalize">
                  {exp.company}
                </div>
              </div>
              <div>
                <div className="font-sourceCodePro text-sm font-medium uppercase text-white/30">
                  Position
                </div>
                <div className="font-sourceCodePro text-lg font-normal capitalize">
                  {exp.title}
                </div>
              </div>
              <div className="justify-self-end">
                <div className="font-sourceCodePro text-sm font-medium uppercase text-white/30">
                  Period
                </div>
                <div className="font-sourceCodePro text-lg font-normal uppercase">
                  {exp.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex max-w-2xl flex-col items-center px-5 pb-12 xl:pb-32">
        <div className="relative flex w-full max-w-4xl flex-col items-center justify-center bg-grid-[#232627]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#141416] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <h1 className="relative z-20 py-8 text-center font-sora text-4xl font-bold tracking-wider text-white/80 sm:text-5xl">
            What should I do next?
          </h1>
          <p className="text-center text-base tracking-tight text-neutral-300 sm:text-xl xl:text-lg xl:tracking-normal">
            Craft your unique website with me or go live in seconds using my
            easy templates.
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col justify-center gap-5 sm:flex-row">
          <Link href={"/contact"}>
            <Button ghost className="text-center">
              Let&apos;s collaborate
            </Button>
          </Link>
          <Link href="/services">
            <Button className="text-center">My Services</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default AboutPage;
