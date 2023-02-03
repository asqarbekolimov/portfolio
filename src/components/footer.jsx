import React from "react";

function Footer() {
  return (
    <div className="flex justify-center fixed bottom-0 left-0 right-0 bg-primary text-white">
      Developer by{" "}
      <a className="mx-1 link" href="https://github.com/asqarbekolimov">
        ASQARBEK{" "}
      </a>{" "}
      with <span className="name mx-1">Love </span> &
      <span className="name mx-1"> Coffee</span>
    </div>
  );
}

export default Footer;
