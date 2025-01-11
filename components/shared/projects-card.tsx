import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  project: {
    name: string;
    path: string;
    description: string;
    tag: string;
    image: string;
  };
}

const ProjectsCard = ({ project }: Props) => {
  return (
    <Link
      href={project.path}
      className="relative flex flex-col border border-[#232627] from-[#ababab00] to-[#ffffff05] p-7 transition-colors delay-300 duration-300 ease-in-out hover:bg-gradient-to-t xl:p-10"
    >
      <div className="group relative h-full w-full overflow-hidden">
        <div
          className={
            "absolute left-0 top-0 z-30 size-3 border-l-2 border-t-2 opacity-0 transition-all duration-300 ease-in-out group-hover:left-5 group-hover:top-5 group-hover:opacity-100"
          }
        />
        <div
          className={
            "absolute right-0 top-0 z-30 size-3 border-r-2 border-t-2 opacity-0 transition-all duration-300 ease-in-out group-hover:right-5 group-hover:top-5 group-hover:opacity-100"
          }
        />
        <div
          className={
            "absolute bottom-0 left-0 z-30 size-3 border-b-2 border-l-2 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-5 group-hover:left-5 group-hover:opacity-100"
          }
        />
        <div
          className={
            "absolute bottom-0 right-0 z-30 size-3 border-b-2 border-r-2 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-5 group-hover:right-5 group-hover:opacity-100"
          }
        />
        <Image
          src={project.image}
          alt={project.name}
          width={390}
          height={390}
          className="w-full object-cover transition-all duration-300 ease-linear group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <div className="font-sora text-base font-bold">{project.name}</div>
          <div className="mt-3 font-sora text-sm opacity-35">
            {project.description}
          </div>
        </div>
        <div className="h-fit border border-[#232627] px-4 py-1 font-sora text-xs text-[#888A8B]">
          {project.tag}
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
