"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const TranslateBtn = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const params = useParams<{ slug: string; item: string }>();
  const [position, setPosition] = useState<string | undefined>(
    i18n.resolvedLanguage,
  );
  const { t } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="bg-transparent">
          <Languages size={20} className="text-slate-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white dark:bg-slate-900">
        <DropdownMenuLabel>{t("choose_lng")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {language.map((lang) => {
            const onLanguage = (lng: string) => {
              i18n.changeLanguage(lng);
            };

            const onChangeLng = (lang: string) => {
              onLanguage(lang);
              if (params.slug) {
                router.back();
              } else {
                router.refresh();
              }
              router.refresh();
            };

            return (
              <DropdownMenuRadioItem
                key={lang.lng}
                value={lang.lng}
                onClick={() => onChangeLng(lang.lng)}
              >
                {lang.name}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TranslateBtn;

const language = [
  { name: "Eng", lng: "en" },
  { name: "Uzb", lng: "uz" },
  { name: "Ru", lng: "ru" },
];
