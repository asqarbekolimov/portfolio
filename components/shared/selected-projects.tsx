import { ArrowUpRight, Book } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

const SelectedProjects = () => {
  return (
    <div className="mt-12 grid gap-2 md:grid-cols-2">
      <Link className="group relative rounded-xl p-2" href={"/"}>
        <Card className="bg-background-card group gap-4 pb-1 shadow-md shadow-black/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="size-4" />
              Projects
            </CardTitle>
            <CardAction>
              <ArrowUpRight className="text-background size-4 transition-colors duration-200 group-hover:text-white" />
            </CardAction>
          </CardHeader>
          <CardContent className="relative p-2">
            <Image
              src={"/cover.webp"}
              alt="Project Cover"
              width={500}
              height={300}
              priority
              quality={100}
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-8 flex flex-col transition-[left] duration-300 ease-out group-hover:left-9">
              <h3 className="text-2xl font-semibold text-white">Links</h3>
              <p className="dark:text-muted-foreground mt-2 text-zinc-100">
                All my social media links in one place
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
      <Link className="group relative rounded-xl p-2" href={"/"}>
        <Card className="bg-background-card group gap-4 pb-1 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="size-4" />
              Projects
            </CardTitle>
            <CardAction>
              <ArrowUpRight className="text-background size-4 transition-colors duration-200 group-hover:text-white" />
            </CardAction>
          </CardHeader>
          <CardContent className="relative p-2">
            <Image
              src={"/cover.webp"}
              alt="Project Cover"
              width={500}
              height={300}
              priority
              quality={100}
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-8 flex flex-col transition-[left] duration-300 ease-out group-hover:left-9">
              <h3 className="text-2xl font-semibold text-white">Links</h3>
              <p className="dark:text-muted-foreground mt-2 text-zinc-100">
                All my social media links in one place
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>

      <div className="col-span-1 my-8 flex items-center justify-center md:col-span-2">
        <InteractiveHoverButton>See all projects</InteractiveHoverButton>
      </div>
    </div>
  );
};

export default SelectedProjects;
