'use client';
import React, { useEffect } from 'react';
import { Inter } from 'next/font/google';
import { projects } from '@/constants';
import Card from '@/components/shared/card/card';
import Lenis from '@studio-freight/lenis';
import { JackInTheBox } from 'react-awesome-reveal';

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
          return <Card key={index} project={project} index={index} />;
        })}
      </div>
    </section>
  );
};

export default ProjectsPageComponent;
