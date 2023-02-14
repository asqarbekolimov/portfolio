import React from "react";
import { NotFoundImg } from "../assets";

function notFound() {
  return (
    <div className="container m-auto flex items-center justify-center">
      <img width={"100%"} src={NotFoundImg} alt="" />
    </div>
  );
}

export default notFound;
