'use client';
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const Dropdown = () => {
  const { i18n } = useTranslation();

  const [position, setPosition] = useState<string | undefined>(
    i18n.resolvedLanguage,
  );

  return (
    <div className="w-28">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bg-transparent">
            {position}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-slate-900">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            {language.map((lang) => {
              const onLanguage = (lng: string) => {
                i18n.changeLanguage(lng);
              };

              return (
                <DropdownMenuRadioItem
                  key={lang.lng}
                  value={lang.lng}
                  onClick={() => onLanguage(lang.lng)}
                >
                  {lang.name}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;

const language = [
  { name: 'Eng', lng: 'en' },
  { name: 'Uzb', lng: 'uz' },
  { name: 'Ru', lng: 'ru' },
];
