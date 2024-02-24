"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Fade } from "react-awesome-reveal";

export default function HomePageComponent() {
  const { t } = useTranslation();
  return (
    <section className="m-auto mt-24 w-full max-w-6xl">
      <Fade direction="down" triggerOnce={true}>
        <h1 className={"font-firacode text-blue-500"}>
          {t("my_name_is", { ns: "index" })}
        </h1>
        <h2
          className={`animate-text-gradient mt-5 inline-flex bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text font-inter text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl`}
        >
          {t("asqarbek_olimov", { ns: "index" })}.
        </h2>
      </Fade>

      <Fade triggerOnce={true}>
        <h3
          className={`mt-3 font-inter text-4xl font-bold text-slate-400 sm:text-5xl md:text-6xl`}
        >
          {t("i_build_things", { ns: "index" })}
        </h3>
      </Fade>

      <Fade direction="up" triggerOnce={true}>
        <TextGenerateEffect
          words={t("short_about", { ns: "index" })}
          className="my-8 max-w-2xl font-workSans text-lg font-medium leading-6 tracking-wider text-slate-400"
        />

        <div className="shadow-mdhover:border-transparent inline-block cursor-pointer rounded border-2 border-blue-600 px-8  py-1">
          <Link href={"/resume.pdf"} target="_blank">
            <Button
              variant={"default"}
              className="bg-transparent text-base text-blue-600 hover:bg-transparent"
            >
              {t("resume", { ns: "index" })}
            </Button>
          </Link>
        </div>
      </Fade>
    </section>
  );
}
