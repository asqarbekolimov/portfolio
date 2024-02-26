import React from "react";
import AboutPageComponents from "../_components/about/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About how I got into programming.",
};

function Page() {
  return <AboutPageComponents />;
}

export default Page;
