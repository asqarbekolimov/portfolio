'use client';
import React from 'react';
import { Fira_Code, Inter } from 'next/font/google';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
const fira_code = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
export default function HomePageComponent() {
  const { t } = useTranslation();
  return (
    <section className="m-auto w-full max-w-[1000px]">
      <Fade direction="down" triggerOnce={true}>
        <h1 className={`${fira_code.className} text-[#00b533]`}>
          {t('my_name_is', { ns: 'index' })}
        </h1>
        <h2
          className={`${inter.className} animate-text-gradient mt-5 inline-flex bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl`}
        >
          {t('asqarbek_olimov', { ns: 'index' })}.
        </h2>
      </Fade>
      <Fade triggerOnce={true}>
        <h3
          className={`${inter.className} mt-3 text-4xl font-bold text-slate-400 sm:text-5xl md:text-6xl lg:text-7xl`}
        >
          {t('i_build_things', { ns: 'index' })}
        </h3>
      </Fade>
      <Fade direction="up" triggerOnce={true}>
        <p
          className={`${inter.className} my-8 max-w-2xl leading-6 tracking-wider text-slate-400`}
        >
          {t('short_about', { ns: 'index' })}
          <Link href={'/about'} className="ml-1 text-[#00b533] hover:underline">
            {t('more', { ns: 'index' })}...
          </Link>
        </p>
        <div className="shadow-mdhover:border-transparent inline-block cursor-pointer rounded border-2 border-[#00b533] px-8  py-1">
          <Button
            variant={'default'}
            className="bg-transparent text-base text-[#00b533] hover:bg-transparent"
          >
            {t('resume', { ns: 'index' })}
          </Button>
        </div>
      </Fade>
    </section>
  );
}
