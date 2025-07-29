"use client";
import useTranslate from "@/hooks/use-translate";
import React from "react";

function HomePage() {
  const t = useTranslate();
  return <div>{t("welcome")}</div>;
}

export default HomePage;
