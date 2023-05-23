import React, { useState } from "react";
import { motion } from "framer-motion";
import { useglobalHook } from "./Context";
import { Link } from "react-router-dom";

const Navbar = ({ setCursorHoverd }) => {
  const { open, isOpen } = useglobalHook();
  const handleClick = () => {
    {
      isOpen(!open);
    }
  };
  console.log(open);
  return (
    <div className="">
      <div className="right-20 top-9 absolute text-lg">
        <>
          <Link to="/">
            <div
              className="cursor-pointer"
              onClick={handleClick}
              onMouseEnter={() => setCursorHoverd(true)}
              onMouseLeave={() => setCursorHoverd(false)}
            >
              <div
                className={`w-[20px] h-[2px] transition-all duration-300 ease-in-out  bg-black rounded-sm ${
                  open ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              />
              <div
                className={`w-[20px] h-[2px] transition-all duration-300 ease-in-out my-0.5 bg-black rounded-sm ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`w-[20px] h-[2px] transition-all duration-1000 ease-in-out  bg-black rounded-sm ${
                  open ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              />
            </div>
          </Link>
        </>
      </div>

      <Link to="/Check">
        <div className="left-20 top-9 absolute text-2xl ">Poket.</div>
      </Link>
    </div>
  );
};

export default Navbar;
