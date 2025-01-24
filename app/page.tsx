import Button from "@/components/shared/button";
import Footer from "@/components/shared/footer";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <section className="mt-32 flex flex-1 flex-col items-center justify-center sm:mt-40">
      <div className="flex flex-col items-center px-5 pb-12 xl:px-10 xl:pb-32">
        <div className="relative flex w-full max-w-4xl flex-col items-center justify-center bg-grid-[#232627]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#141416] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <h1 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-center text-4xl font-bold tracking-wider text-transparent sm:text-7xl">
            Fontend & Mobile App Developer
          </h1>
          <p className="text-center text-base tracking-tight text-neutral-300 sm:text-xl xl:text-lg xl:tracking-normal">
            I&apos;m Askarbek, currently a React developer. I have more than 2
            year of experience working with the ReactJS library, and I
            specialize in developing web and mobile applications using React.
          </p>
        </div>

        <div className="mt-10 flex w-full flex-col justify-center gap-5 sm:flex-row">
          <Link href={"/contact"}>
            <Button ghost className="text-center">
              Let&apos;s work together
            </Button>
          </Link>
          <Link download={true} href="/resume.pdf">
            <Button className="text-center">Resume</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}
