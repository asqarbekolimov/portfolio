import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Badge } from "@/components/ui/badge";
import { IProject } from "@/type";
import { Hash, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectPageComponents = (project: IProject) => {
  return (
    <>
      {" "}
      <CardContainer className="inter-var">
        <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-slate-900/30 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {project.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="mt-2 line-clamp-3 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
          >
            {project.description}
          </CardItem>
          <CardItem translateZ="100" className="mt-4 w-full">
            <Image
              src={project.image.url}
              height="1000"
              width="1000"
              className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
              alt={project.title}
            />
          </CardItem>
          <CardItem translateZ="100" className="mt-4 w-full">
            <h3 className="mb-2">Tags:</h3>
            {project.tags.map((item) => (
              <Link href={`/tags/${item.slug}`} key={item.slug}>
                <Badge variant={"outline"} className="">
                  <span className="mr-1">
                    <Hash className="h-3 w-3" />
                  </span>
                  <span>{item.name}</span>
                </Badge>
              </Link>
            ))}
          </CardItem>
          <CardItem translateZ="100" className="mt-4 w-full">
            <h3 className="mb-2">Category:</h3>
            <Link
              href={`/categories/${project.category.slug}`}
              key={project.category.slug}
            >
              <Badge variant={"secondary"} className="">
                <span className="mr-1">
                  <Tag className="h-3 w-3" />
                </span>
                <span>{project.category.name}</span>
              </Badge>
            </Link>
          </CardItem>
          <div className="mt-10 flex items-center justify-between">
            <CardItem
              translateZ={20}
              translateX={-40}
              as="button"
              className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
            >
              <Link href={project.demo} target="_blank">
                Live
              </Link>
            </CardItem>
            <CardItem
              translateZ={20}
              translateX={40}
              as="button"
              className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
            >
              <Link href={`/projects/${project.slug}`}>More Info</Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default ProjectPageComponents;
