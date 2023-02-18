import React from "react";
import { motion } from "framer-motion";
import { techStack, tools } from "../constants/data";

function Technology() {
  return (
    <motion.div
      className="md:px-36 px-6  mt-16 text-secondary"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
    >
      <section>
        <h1 className=" md:text-5xl text-3xl mb-7 font-bold text-white">
          Tech Stack
        </h1>
        <p className="font-poppins text-base lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        {techStack.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.type} title={item.type} />
          </div>
        ))}
      </section>
      <section>
        <h1 className=" md:text-5xl text-3xl mt-6 mb-7 font-bold text-white">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 mb-10">
        {tools.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.type} title={item.type} />
          </div>
        ))}
      </section>
    </motion.div>
  );
}

export default Technology;
