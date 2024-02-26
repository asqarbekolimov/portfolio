import { getTags } from "@/services/tags.service";
import React from "react";
import TagsPageComponent, { TagsTitle } from "../_components/tags/tags";

async function Page() {
  const tags = await getTags();

  return (
    <section className="m-auto mt-24 w-full max-w-6xl pt-16 md:pt-32">
      <TagsTitle />
      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tags.map((tag) => (
          <TagsPageComponent key={tag.slug} {...tag} />
        ))}
      </div>
    </section>
  );
}

export default Page;
