"use client";

import { ITags } from "@/type";
import { Hash } from "lucide-react";
import Link from "next/link";

import React from "react";
import { useTranslation } from "react-i18next";

const TagsPageComponent = (tag: ITags) => {
  console.log(tag);

  return (
    <Link
      href={`/tags/${tag.slug}`}
      className="flex items-center justify-center gap-4 rounded-md bg-secondary p-4 shadow-xl transition-colors hover:bg-secondary/80 dark:shadow-white/5 md:p-8"
    >
      <Hash />
      <h1 className="font-createRound text-2xl">{tag.name}</h1>
    </Link>
  );
};

export default TagsPageComponent;

export const TagsTitle = () => {
  const { t } = useTranslation();
  return (
    <h1
      className={` text-shadow-md font-mono text-5xl font-semibold uppercase text-slate-300 sm:text-6xl md:text-7xl lg:text-8xl`}
    >
      {t("tags", { ns: "project" })}
    </h1>
  );
};
