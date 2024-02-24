"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function HomePageComponent() {
  const { t } = useTranslation();
  return (
    <section className="m-auto w-full max-w-[1000px]">
      <h1 className={"font-inter text-[#00b533]"}>
        {t("my_name_is", { ns: "index" })}
      </h1>
      <h2
        className={`animate-text-gradient mt-5 inline-flex bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text font-inter text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl`}
      >
        {t("asqarbek_olimov", { ns: "index" })}.
      </h2>

      <h3
        className={`mt-3 font-inter text-4xl font-bold text-slate-400 sm:text-5xl md:text-6xl lg:text-7xl`}
      >
        {t("i_build_things", { ns: "index" })}
      </h3>

      <p
        className={`my-8 max-w-2xl font-inter leading-6 tracking-wider text-slate-400`}
      >
        {t("short_about", { ns: "index" })}
        <Link href={"/about"} className="ml-1 text-[#00b533] hover:underline">
          {t("more", { ns: "index" })}...
        </Link>
      </p>
      <div className="shadow-mdhover:border-transparent inline-block cursor-pointer rounded border-2 border-[#00b533] px-8  py-1">
        <Link href={"/resume.pdf"} target="_blank">
          <Button
            variant={"default"}
            className="bg-transparent text-base text-[#00b533] hover:bg-transparent"
          >
            {t("resume", { ns: "index" })}
          </Button>
        </Link>
      </div>
    </section>
  );
}
