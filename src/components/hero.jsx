import React from "react";
import { coder } from "../assets";

function Hero() {
  return (
    <div className=" section flex md:justify-between justify-start gap-5 md:flex-row flex-col-reverse  items-center md:py-40 py-10 sm:px-36 px-10 text-white">
      <div className="left flex justify-start flex-col">
        <h1 className="text-5xl font-bold">
          Hi 👋, <br /> My Name is
        </h1>
        <h1 className="name text-5xl my-2 font-poppins font-bold">
          Asqarbek DEV
        </h1>
        <h2 className="text-5xl my-2 font-poppins font-bold">
          I build things for web
        </h2>
      </div>
      <div className="right">
        <div className="img">
          <img className="w-60" src={coder} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
