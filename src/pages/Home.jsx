import React from "react";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
import useMousePosition from "../hooks/UseMousePosition";
import { useState } from "react";

const Home = () => {
  const { x, y } = useMousePosition();
  const [cursorHoverd, setCursorHoverd] = useState(false);
  return (
    <>
      <AnimatePresence>
        <motion.div
          className=" h-[100vh] w-[100vw] flex items-center justify-center text-5xl relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
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
          <Navbar setCursorHoverd={setCursorHoverd} />
          Click on the Menu Button
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Home;
