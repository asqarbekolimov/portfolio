"use client";
import { useTranslation } from "@/i18n/client";
import { useParams } from "next/navigation";
import React from "react";

function HomePage() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string);
  return <div>{t("welcome")}</div>;
}

export default HomePage;
