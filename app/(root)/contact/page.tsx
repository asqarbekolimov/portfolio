import React from "react";
import ContactPageComponent from "../_components/contact/contact";
import ContactForm from "../_components/contact/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
};

function Page() {
  return (
    <section className="m-auto w-full max-w-6xl py-32 md:mt-32">
      <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2">
        <ContactPageComponent />
        <ContactForm />
      </div>
    </section>
  );
}

export default Page;
