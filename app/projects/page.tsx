import Button from "@/components/shared/button";
import Footer from "@/components/shared/footer";
import ProjectsCard from "@/components/shared/projects-card";
import { projects } from "@/constants";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <section className="mt-32 flex flex-1 flex-col items-center justify-center sm:mt-40">
      <div className="flex flex-col items-center">
        <div className="relative mb-16 flex w-full max-w-4xl flex-col items-center justify-center bg-grid-[#232627]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#141416] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <h1 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-center text-4xl font-bold tracking-wider text-transparent sm:text-7xl">
            Projects
          </h1>
          <p className="max-w-2xl text-center text-base tracking-tight text-neutral-300 sm:text-xl xl:text-lg xl:tracking-normal">
            My recent projects that I&apos;ve worked on. I&apos;m always open to
            new ideas and projects. Feel free to get in touch if you need help
            in my area of expertise.
          </p>
        </div>

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
              Feel free to get in touch if you need help in my area of
              expertise.
            </p>
            <Link href={"/contact"} className="mt-10 w-full sm:w-auto">
              <Button ghost className="text-center">
                Let&apos;s collaborate
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Page;
