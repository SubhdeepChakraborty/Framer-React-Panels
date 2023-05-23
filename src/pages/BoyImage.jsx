import React from "react";
import { useState } from "react";
import { Backspace } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useMousePosition from "../hooks/UseMousePosition";
import { motion } from "framer-motion";
import { useglobalHook } from "./Context";

const BoyImage = () => {
  const { x, y } = useMousePosition();
  const { open, isOpen } = useglobalHook();
  const [cursorHoverd, setCursorHoverd] = useState(false);
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center text-5xl">
      <motion.div
        animate={{
          x: x,
          y: y,
          scale: cursorHoverd ? 1.2 : 1,
          opacity: cursorHoverd ? 0.8 : 0,
        }}
        transition={{
          ease: "linear",
          duration: 0.2,
        }}
        className="absolute -top-2 -left-3 w-[1.8rem] cursor-pointer h-[1.8rem] bg-[#e7dede] rounded-full pointer-events-none"
      />
      <Link to="/">
        <div
          className="left-20 top-9 absolute text-5xl font-[Merriweather]"
          onMouseEnter={() => setCursorHoverd(true)}
          onMouseLeave={() => setCursorHoverd(false)}
          onClick={isOpen(false)}
        >
          <Backspace />
        </div>
      </Link>
      <img src="/boy666.jpg" />
    </div>
  );
};

export default BoyImage;
