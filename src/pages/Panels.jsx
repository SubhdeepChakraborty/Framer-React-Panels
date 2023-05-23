import React from "react";
import { motion } from "framer-motion";

const Panels = () => {
  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        transition={{ ease: "easeInOut", duration: 2, times: [0, 0.5, 1] }}
        className="h-[100vh] w-[50vw] absolute z-10 left-0 bg-black"
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        transition={{ ease: "easeInOut", duration: 2, times: [0, 0.5, 1] }}
        className="h-[100vh] w-[50vw] absolute z-10 right-0 bg-black"
      />
    </>
  );
};

export default Panels;
