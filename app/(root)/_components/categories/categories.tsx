"use client";
import { ICategory } from "@/type";
import { Hash } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const CategoriesPageComponent = (category: ICategory) => {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="flex items-center justify-center gap-4 rounded-md bg-secondary p-4 shadow-xl transition-colors hover:bg-secondary/80 dark:shadow-white/5 md:p-8"
    >
      <Hash />
      <h1 className="font-createRound text-2xl">{category.name}</h1>
    </Link>
  );
};
export default CategoriesPageComponent;

export const CategoriesTitle = () => {
  const { t } = useTranslation();
  return (
    <h1
      className={` text-shadow-md font-mono text-5xl font-semibold uppercase text-slate-300 sm:text-6xl md:text-7xl lg:text-8xl`}
    >
      {t("category", { ns: "project" })}
    </h1>
  );
};
