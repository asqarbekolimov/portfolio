import Button from "@/components/shared/button";
import Footer from "@/components/shared/footer";
import ProjectsCard from "@/components/shared/projects-card";
import { projects } from "@/constants";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <section className="mt-32 flex flex-1 flex-col items-center justify-center sm:mt-52">
      <div className="flex flex-col items-center px-5 pb-12 xl:px-10 xl:pb-32">
        <div className="relative flex w-full max-w-4xl flex-col items-center justify-center bg-grid-[#232627]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#141416] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <h1 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-center text-4xl font-bold tracking-wider text-transparent sm:text-7xl">
            Fontend & Mobile App Developer
          </h1>
          <p className="text-center text-base tracking-tight text-neutral-300 sm:text-xl xl:text-lg xl:tracking-normal">
            I&apos;m Askarbek, currently a React developer. I have more than 2
            year of experience working with the ReactJS library, and I
            specialize in developing web and mobile applications using React.
          </p>
        </div>

        <div className="mt-10 flex w-full flex-col justify-center gap-5 sm:flex-row">
          <Link href={"/contact"}>
            <Button ghost className="text-center">
              Let&apos;s work together
            </Button>
          </Link>
          <Link download={true} href="/resume.pdf">
            <Button className="text-center">Resume</Button>
          </Link>
        </div>
      </div>
      {/* <div className="h-px w-full bg-[#232627]" /> */}
      <div className="grid w-full grid-cols-1 justify-between xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex flex-col items-center px-5 py-12 xl:px-10 xl:py-32">
        <div className="relative flex w-full max-w-4xl flex-col items-center justify-center bg-grid-[#232627]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#141416] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <h1 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text pb-4 text-center text-2xl font-bold tracking-wider text-transparent sm:py-8 sm:text-6xl">
            Have an idea in mind? Let’s build cool thing together
          </h1>
          <p className="text-center text-base tracking-tight text-neutral-300 sm:text-xl xl:text-lg xl:tracking-normal">
            Feel free to get in touch if you need help in my area of expertise.
          </p>
          <Link href={"/contact"} className="mt-10 w-full sm:w-auto">
            <Button ghost className="text-center">
              Let&apos;s collaborate
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}
