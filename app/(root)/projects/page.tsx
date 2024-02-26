import { getProjects } from "@/services/project.service";
import { cookies } from "next/headers";
import React from "react";
import ProjectPageComponents, {
  ProjectPageTitle,
} from "../_components/project/project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All projects",
};

async function Page() {
  const cookieStore = cookies();
  const language = cookieStore.get("i18next");
  const projects = await getProjects();

  return (
    <section className="m-auto mt-24 w-full max-w-6xl pt-16 md:pt-32">
      <ProjectPageTitle />

      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectPageComponents key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Page;
