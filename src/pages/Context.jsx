import { createContext, useContext, useState } from "react";
import React from "react";

export const AppContext = createContext();

export const AppproviderContext = ({ children }) => {
  const [open, isOpen] = useState(false);
  return (
    <AppContext.Provider value={{ open, isOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useglobalHook = () => {
  return useContext(AppContext);
};
