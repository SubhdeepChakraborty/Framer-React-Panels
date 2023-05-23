import React from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BoyImage from "./pages/BoyImage";
import BoywithHeadphone from "./pages/BoywithHeadphone";
import FireDragon from "./pages/FireDragon";
import MenuItem from "./pages/MenuItem";
import { AnimatePresence } from "framer-motion";
import { useglobalHook } from "./pages/Context";

const AnimatedRoutes = () => {
  const { open, isOpen } = useglobalHook();
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={open ? <MenuItem open={open} isOpen={isOpen} /> : <Home />}
        />
        <Route path="/2" element={<BoyImage />} />
        <Route path="/3" element={<BoywithHeadphone />} />
        <Route path="/1" element={<FireDragon />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
