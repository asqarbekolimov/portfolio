import React, { useState } from "react";
import { github, linkedin, Logo, menuBurger, twitter, xIcon } from "../assets";

function Navbar() {
  const [toggle, setToggle] = useState(true);

  const menuHandler = () => {
    setToggle(!toggle);
  };
  console.log(toggle);

  return (
    <header className="py-8 md:px-36 px-6">
      <div className=" flex justify-between items-center m-auto text-secondary">
        <img src={Logo} alt="" />
        <ul
          className={` navbar active  md:flex hidden flex-row  gap-8 items-center `}
        >
          <li>Home</li>
          <li>About</li>
          <li>Tech Stack</li>
          <li>Projects</li>
          <li>Contact</li>
          <div className=" flex gap-5 social-icon">
            <a href="https://github.com/asqarbekolimov" target={"_blank"}>
              <img src={github} alt="githubLogo" />
            </a>
            <a
              href="https://uz.linkedin.com/in/asqarbekolimov"
              target={"_blank"}
            >
              <img src={linkedin} alt="LinkedinLogo" />
            </a>
            <a href="https://twitter.com/asqarbek_olimov" target={"_blank"}>
              <img src={twitter} alt="TwitterLogo" />
            </a>
          </div>
        </ul>
        <div className="menuBurger absolute right-12">
          <img
            className="w-9 md:hidden block cursor-pointer"
            onClick={() => menuHandler()}
            src={toggle ? menuBurger : xIcon}
            alt=""
          />
        </div>
      </div>
      <div
        className={`${
          toggle ? "hidden" : "flex"
        } lg:hidden flex p-12 absolute top-16 right-0 left-0  w-full`}
      >
        <ul
          className={` py-10 navbarActive  md:flex  flex-col  gap-10 items-center text-secondary`}
        >
          <li>Home</li>
          <li>About</li>
          <li>Tech Stack</li>
          <li>Projects</li>
          <li>Contact</li>
          <div className=" flex gap-5 social-icon">
            <a href="https://github.com/asqarbekolimov" target={"_blank"}>
              <img src={github} alt="githubLogo" />
            </a>
            <a
              href="https://uz.linkedin.com/in/asqarbekolimov"
              target={"_blank"}
            >
              <img src={linkedin} alt="LinkedinLogo" />
            </a>
            <a href="https://twitter.com/asqarbek_olimov" target={"_blank"}>
              <img src={twitter} alt="TwitterLogo" />
            </a>
          </div>
        </ul>
      </div>
    </header>
  );
}
// https://uz.linkedin.com/in/asqarbekolimov
export default Navbar;
