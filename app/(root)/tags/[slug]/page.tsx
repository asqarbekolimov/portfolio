import { getTagsDetailed } from "@/services/tags.service";
import React from "react";
import ProjectPageComponents from "../../_components/project/project";
import { cookies } from "next/headers";
import { TagsTitle } from "../../_components/tags/tags";

async function Page({ params }: { params: { slug: string } }) {
  const cookieStore = cookies();
  const language = cookieStore.get("i18next");
  const projects = await getTagsDetailed(
    params.slug,
    language?.value as string,
  );

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
