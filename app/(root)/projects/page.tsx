import { getProjects } from "@/services/project.service";
import { cookies } from "next/headers";
import React from "react";
import ProjectPageComponents from "./project";

async function Page() {
  const cookieStore = cookies();
  const language = cookieStore.get("i18next");
  const projects = await getProjects(language?.value as string);

  return (
    <section className="m-auto mt-24 w-full max-w-6xl">
      <h1
        className={` text-shadow-md font-mono text-5xl font-semibold uppercase text-slate-300 sm:text-6xl md:text-7xl lg:text-8xl`}
      >
        Projects
      </h1>

      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectPageComponents key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Page;
