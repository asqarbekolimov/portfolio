import React from "react";
import { github, linkedin, Logo, twitter } from "../assets";

function Navbar() {
  return (
    <header className="py-8 md:px-36 px-16">
      <div className=" flex justify-between  items-center m-auto text-secondary">
        <img src={Logo} alt="" />
        <ul className=" navbar md:flex  hidden gap-8 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Tech Stack</li>
          <li>Projects</li>
          <li>Contact</li>
          <div className=" flex gap-5 social-icon">
            <img src={github} alt="" />
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
