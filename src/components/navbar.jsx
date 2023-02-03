import React from "react";
import { github, linkedin, Logo, twitter } from "../assets";

function Navbar() {
  return (
    <header>
      <div className="container md:flex  hidden justify-between  items-center m-auto py-10 text-secondary">
        <img src={Logo} alt="" />
        <ul className=" navbar flex gap-8 items-center">
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
