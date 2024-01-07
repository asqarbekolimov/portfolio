'use client';
import React, { useEffect } from 'react';
import { Inter } from 'next/font/google';
import { projects } from '@/constants';
import Lenis from '@studio-freight/lenis';
import { JackInTheBox } from 'react-awesome-reveal';
import { TfiWorld } from 'react-icons/tfi';
import { AiFillGithub } from 'react-icons/ai';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import CustomImage from '@/components/shared/images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ProjectsPageComponent = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  const { t } = useTranslation();

  return (
    <section className="w-full">
      <JackInTheBox triggerOnce={true}>
        <h1
          className={`${inter.className} text-shadow-md font-mono text-5xl font-semibold uppercase text-slate-300 sm:text-6xl md:text-7xl lg:text-8xl`}
        >
          Projects
        </h1>
      </JackInTheBox>
      <div className="relative flex w-full flex-col items-center justify-center gap-10">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="sticky top-0 flex h-screen w-full items-center justify-center"
            >
              <Card
                style={{ top: `calc(0% + ${index * 25}px)` }}
                className="flex h-full max-h-[500px] w-full max-w-[10000px] flex-col items-start gap-5 px-5 py-5 md:flex-row"
              >
                <CardHeader className="relative h-[50%] w-full rounded-md border md:h-[100%] md:w-[50%]">
                  <CustomImage project={project} fill />
                </CardHeader>
                <CardContent className="flex h-full flex-col justify-between p-0">
                  <CardTitle>{t(project.title, { ns: 'project' })}</CardTitle>
                  <CardDescription className="mt-3 line-clamp-3 max-w-lg text-justify md:line-clamp-none">
                    {t(project.description, { ns: 'project' })}
                  </CardDescription>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.skills.split(', ').map((c, id) => (
                      <Badge key={id} className="flex items-center space-x-2">
                        <p>{c}</p>
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-5">
                    <Link href={project.link} target="_blank">
                      <Button variant={'outline'} className="uppercase">
                        <span className="mr-1">
                          <TfiWorld size={20} />
                        </span>
                        <span>{t('demo', { ns: 'project' })}</span>
                      </Button>
                    </Link>
                    <Link href={project.repo} target="_blank">
                      <Button variant={'outline'} className="uppercase">
                        <span className="mr-1">
                          <AiFillGithub size={20} />
                        </span>
                        <span>{t('git_repo', { ns: 'project' })}</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsPageComponent;
