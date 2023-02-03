import React from "react";
import { coder } from "../assets";

function Hero() {
  return (
    <div className="container mx-auto max-width section md:flex justify-between items-center md:py-40 py-36 text-white">
      <div className="left">
        <h1 className="text-4xl font-bold">
          Hi 👋, <br /> My name is
        </h1>
        <h1>Asqarbek DEV</h1>
        <h2>I build things for web</h2>
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
