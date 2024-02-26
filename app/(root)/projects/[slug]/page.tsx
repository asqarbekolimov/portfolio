import ShareBtns from "@/components/shared/share-btns";
import { getProjectDetail } from "@/services/project.service";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import { format } from "date-fns";
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  Hash,
  Minus,
  Tag,
} from "lucide-react";
import { getReadingTime } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectDetail(params.slug);
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image.url,
    },
  };
}

async function Page({ params }: { params: { slug: string } }) {
  const project = await getProjectDetail(params.slug);

  return (
    <div className="m-auto mt-24 w-full max-w-6xl pt-16 md:pt-32">
      <h1 className="font-creteRound text-4xl md:text-5xl lg:text-6xl">
        {project.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 max-md:justify-center">
        <div className="flex items-center gap-2">
          <Image
            src={"/dev.png"}
            alt={"Asqarbek Olimov"}
            width={30}
            height={30}
            className="rounded-sm object-cover"
          />
          <Link href={"/"}>by Asqarbek Olimov</Link>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          <p>{getReadingTime(project.content.html)} min read</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5" />
          <p>{format(new Date(project.createdAt), "MMM dd, yyyy")}</p>
        </div>
      </div>

      <Image
        src={project.image.url}
        alt={project.title}
        width={`1120`}
        height={`595`}
        className="mt-4 rounded-md"
      />

      <div className="relative mt-12 flex max-md:flex-col-reverse md:gap-12">
        <div className="flex flex-col space-y-3">
          <div className="sticky top-36">
            <p className="text-lg uppercase text-muted-foreground">Share</p>
            <ShareBtns />
          </div>
        </div>
        <div className="prose dark:prose-invert flex-1 text-slate-300">
          {parse(project.content.html)}

          <div className="clear-start my-10 flex flex-col gap-2">
            <div className="flex gap-1">
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
            </div>
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
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-6 max-md:flex-col">
        <Image
          src={"/dev.png"}
          alt="author"
          width="155"
          height="155"
          className="rounded-md max-md:self-start"
        />
        <div className="flex flex-1 flex-col space-y-4">
          <h2 className="font-creteRound text-3xl">Asqarbek Olimov</h2>
          <p className="line-clamp-2 text-muted-foreground">
            I&apos;m Asqarbek, currently a frontend developer. I have more than
            1 year of experience working with the ReactJS library, and I
            specialize in developing web and mobile applications using ReactJS.
          </p>
          <Link
            href={`/projects`}
            className="flex items-center gap-2 underline transition-colors hover:text-blue-500"
          >
            <span>See all projects by this author</span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
