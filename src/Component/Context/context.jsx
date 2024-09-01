import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [section, setSection] = useState("about");

  return (
    <AppContext.Provider value={{ section, setSection }}>
      {children}
    </AppContext.Provider>
  );
};
