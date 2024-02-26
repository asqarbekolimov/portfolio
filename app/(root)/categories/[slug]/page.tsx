import { getCategoriesDetailed } from "@/services/category.service";
import React from "react";
import ProjectPageComponents from "../../_components/project/project";
import { CategoriesTitle } from "../../_components/categories/categories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catogory",
};

async function Page({ params }: { params: { slug: string } }) {
  const category = await getCategoriesDetailed(params.slug);
  console.log();

  return (
    <section className="m-auto mt-24 w-full max-w-6xl pt-16 md:pt-32">
      <CategoriesTitle />
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {category.category.projects.map((project) => (
          <ProjectPageComponents key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Page;
