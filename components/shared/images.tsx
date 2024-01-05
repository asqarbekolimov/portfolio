'use client';
import React from 'react';
import { ProjectsProps } from '@/type';
import Image from 'next/image';
import { FC, useState } from 'react';

interface Props {
  project: ProjectsProps;
  fill?: boolean;
}

const CustomImage: FC<Props> = ({ project, fill }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={project.link}
      alt={project.title}
      fill={fill}
      className={`object-cover duration-300 ease-in-out group-hover:opacity-75 ${
        isLoading
          ? 'scale-110  blur-2xl grayscale'
          : 'scale-100 rounded-md  blur-0 grayscale-0'
      }}`}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default CustomImage;
