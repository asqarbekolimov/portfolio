import React, { useState } from "react";
import { Link } from "react-router-dom";
import { github, linkedin, Logo, menuBurger, twitter, xIcon } from "../assets";

function Navbar() {
  const [toggle, setToggle] = useState(true);

  const menuHandler = () => {
    setToggle(!toggle);
  };

  return (
    <header className="py-8 md:px-36 px-6">
      <div className=" flex justify-between items-center m-auto text-secondary">
        <Link to={"/"}>
          <h1 className="logo">D€V</h1>
        </Link>
        <ul
          className={` navbar active  md:flex hidden flex-row  gap-8 items-center `}
        >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/technology"}>Tech Stack</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
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
        <div className="menuBurger absolute right-8">
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
        } lg:hidden flex pr-12 absolute top-0 bottom-0 left-0  w-60`}
      >
        <ul
          className={` py-10 px-10 navbarActive  md:flex  flex-col  gap-10 items-center text-secondary`}
        >
          <li>
            <Link onClick={() => menuHandler()} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => menuHandler()} to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => menuHandler()} to={"/technology"}>
              Tech Stack
            </Link>
          </li>
          <li>
            <Link onClick={() => menuHandler()} to={"/projects"}>
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={() => menuHandler()} to={"/contact"}>
              Contact
            </Link>
          </li>
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
export default Navbar;
