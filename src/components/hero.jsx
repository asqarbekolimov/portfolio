import React from "react";
import { coder } from "../assets";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      className=" section flex md:justify-between justify-start gap-5 md:flex-row flex-col-reverse  items-center md:py-40 py-8 sm:px-28 px-8 text-white"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
    >
      <div className="left flex justify-start flex-col">
        <motion.h1
          className="text-5xl font-bold"
          animate={{ x: 1 }}
          initial={{ x: -100 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Hi 👋, <br /> My Name is
        </motion.h1>
        <motion.h1
          className="name text-5xl my-2 font-poppins font-bold"
          animate={{ x: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          initial={{ x: -200 }}
        >
          Asqarbek DEV
        </motion.h1>
        <motion.h2
          className="text-3xl md:text-5xl my-2 font-poppins font-bold "
          animate={{ x: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          initial={{ x: -300 }}
        >
          I develop <span className="name">Web</span> sites <br />{" "}
          <span className="name">Web</span> applications
        </motion.h2>
      </div>
      <motion.div
        className="right"
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="img"
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          initial={{ x: -100 }}
        >
          <img className="w-60" src={coder} alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
