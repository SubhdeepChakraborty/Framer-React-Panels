import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Panels from "./Panels";
import Navbar from "./Navbar";
import Home from "./Home";
import { useLocation } from "react-router-dom";
import useMousePosition from "../hooks/UseMousePosition";
import { Data } from "../data/Data";

// //TODO VARIANTS

const parentDiv = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
};

const titleSlideUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const lineAnimation = {
  initial: { width: 0 },
  animate: { width: "400px" },
};

const picAnimation = {
  initial: { width: 0 },
  animate: { width: "40px" },
};

const dotAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

//TODO TRANSITION
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const MenuItem = ({ open, isOpen }) => {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorHoverd, setCursorHoverd] = useState(false);
  const circleSize = 40; // Adjust the size of the circle as desired
  const handleTitleHover = (title) => {
    setHoveredTitle(title);
  };

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const { x, y } = useMousePosition();
  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {" "}
          <Panels />
          <motion.div
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible", transition: { delay: 1 } }}
            className="h-[100vh] w-[100vw] relative flex items-center justify-center text-5xl 
             overflow-hidden"
          >
            <Navbar setCursorHoverd={setCursorHoverd} />
            <motion.div
              animate={{
                x: x,
                y: y,
                scale: cursorHoverd ? 1.3 : 1,
                opacity: cursorHoverd ? 0.8 : 0,
              }}
              transition={{
                ease: "linear",
                duration: 0.2,
              }}
              className="absolute -top-2 -left-3 w-[1.8rem] cursor-pointer h-[1.8rem] bg-[#e7dede] rounded-full pointer-events-none"
            />
            <motion.div className="fixed">
              <div onMouseMove={handleMouseMove}>
                <motion.ul
                  variants={parentDiv}
                  initial="initial"
                  animate="animate"
                >
                  {Data.map((item, index) => (
                    <li className="mb-4" key={index}>
                      <div className="flex relative">
                        <div className="flex">
                          <motion.div
                            variants={titleSlideUp}
                            transition={transition}
                            key={item.id}
                            onMouseEnter={() => handleTitleHover(item.title)}
                            onMouseLeave={() => handleTitleHover(null)}
                            onHoverStart={() => setCursorHoverd(true)}
                            onHoverEnd={() => setCursorHoverd(false)}
                          >
                            <Link to={`/${item.id}`}>
                              <span className="title">{item.title}</span>
                            </Link>
                          </motion.div>
                          <motion.div
                            className="flex"
                            variants={lineAnimation}
                            transition={{ ...transition, duration: 1 }}
                          >
                            <motion.div
                              variants={dotAnimation}
                              className="w-1 h-1 bg-black rounded-full bottom-[2px] left-[10.2rem] absolute"
                            />
                            <div className="w-[400px] h-[2px] bg-slate-500 rounded-sm mb-[3px] mt-11 ml-2" />
                          </motion.div>
                          <motion.div
                            className="absolute right-44"
                            variants={picAnimation}
                            transition={{ ...transition, duration: 1 }}
                          >
                            <img
                              src={item.src}
                              className="w-[40px] h-[40px] object-cover"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </li>
                  ))}
                </motion.ul>
                {hoveredTitle && (
                  <motion.img
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.2,
                    }}
                    src={Data.find((item) => item.title === hoveredTitle).src}
                    alt={hoveredTitle}
                    style={{
                      position: "fixed",
                      left: cursorPosition.x + 20,
                      top: cursorPosition.y + 20,
                      transition: "transform 0.5s ease-out", // Smooth transition
                      transform: "translate(15%, 15%)", // Center image on cursor
                    }}
                    className="w-[100px] h-[100px] object-cover z-[10000]"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuItem;
