import { getTagsDetailed } from "@/services/tags.service";
import React from "react";
import ProjectPageComponents from "../../_components/project/project";
import { TagsTitle } from "../../_components/tags/tags";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tag",
};

async function Page({ params }: { params: { slug: string } }) {
  const projects = await getTagsDetailed(params.slug);

  return (
    <section className="m-auto mt-24 w-full max-w-6xl pt-16 md:pt-32">
      <TagsTitle />
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {projects.tag.projects.map((project) => (
          <ProjectPageComponents key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Page;
