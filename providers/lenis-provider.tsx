"use client";
import ReactLenis from "lenis/react";
import { ReactNode } from "react";

const LenisScrollProvider = ({ children }: { children: ReactNode }) => {
  const lenisOptions = {
    lerp: 0.1, // Controls how smooth the scrolling is
    duration: 1.5, // Slows down or speeds up the scrolling
    smoothTouch: false, // Disable smooth scroll on touch devices
    smooth: true, // Smooth scroll for desktop (obviously)
  };
  return (
    <ReactLenis root options={lenisOptions}>
      <div>{children}</div>
    </ReactLenis>
  );
};

export default LenisScrollProvider;
