import React from "react";

export default function HomePage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center">
      <div></div>
      <div className="relative flex w-full max-w-4xl items-center justify-center bg-grid-[#232627]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#141416] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h1 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-center text-4xl font-bold tracking-wider text-transparent sm:text-7xl">
          Fontend & Mobile App Developer
        </h1>
      </div>
    </section>
  );
}
