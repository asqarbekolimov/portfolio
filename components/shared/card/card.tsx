'use client';
import { ProjectProps } from '@/type';
import React, { useRef } from 'react';
import CustomImage from '../images';

const Card = ({ project, index }: ProjectProps) => {
  const container = useRef(null);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center"
    >
      <div
        style={{ top: `calc(0% + ${index * 25}px)` }}
        className="mx-w-[1000px] relative flex h-full max-h-[500px] w-full origin-top flex-col rounded-md border bg-slate-900 p-10"
      >
        <div className="flex h-full flex-col gap-10 pb-10 ">
          {/* img container */}
          <div className="relative h-full w-[100%] overflow-hidden rounded-md">
            <div className="h-full w-full">
              <CustomImage project={project} fill />
            </div>
          </div>
          {/* description */}
          <div className="relative top-[10%]">
            <h2>{project.title}</h2>
            <p className="text-justify">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
