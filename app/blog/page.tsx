import Footer from "@/components/shared/footer";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <section className="mt-32 flex flex-1 flex-col items-center justify-center sm:mt-40">
      <div className="flex flex-col items-center px-5 pb-12 xl:px-10 xl:pb-32">
        <div className="relative flex w-full max-w-4xl flex-col items-center justify-center bg-grid-[#232627]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#141416] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <h1 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-center text-4xl font-bold tracking-wider text-transparent sm:text-7xl">
            My path, insight & lessons to share
          </h1>
          <p className="max-w-xl text-center text-base tracking-tight text-neutral-300 sm:text-xl xl:text-lg xl:tracking-normal">
            Documenting the nuggets of wisdom discovered on my journey, extended
            to enrich yours.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center border border-[#232627] px-5 py-10 sm:px-24">
        <Image
          src={"/empty.svg"}
          alt="empty"
          width={400}
          height={400}
          className="h-[200px] w-[250px]"
        />
        <div className="mb-2 font-inter text-4xl font-bold uppercase text-slate-600">
          No data
        </div>
        <p className="text-slate-200">
          Posts will be created within a few days!
        </p>
      </div>
      <Footer />
    </section>
  );
}

export default Page;
