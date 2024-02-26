import { getCategories } from "@/services/category.service";
import React from "react";
import TagsPageComponent from "../_components/tags/tags";
import CategoriesPageComponent, {
  CategoriesTitle,
} from "../_components/categories/categories";

async function Page() {
  const category = await getCategories();

  return (
    <section className="m-auto mt-24 w-full max-w-6xl pt-16 md:pt-32">
      <CategoriesTitle />
      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {category.map((category) => (
          <CategoriesPageComponent key={category.slug} {...category} />
        ))}
      </div>
    </section>
  );
}

export default Page;
