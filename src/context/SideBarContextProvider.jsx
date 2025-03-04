import React, { createContext, useContext, useState } from "react";
import { useSubmit } from "react-router-dom";

const SidebarContext = createContext();
const useSidebarContext = () => {
  return useContext(SidebarContext);
};

const SideBarContextProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <SidebarContext.Provider
        value={{ isSidebarOpen, setIsSidebarOpen }}
      >{children}</SidebarContext.Provider>
    </div>
  );
};

export { useSidebarContext };

export default SideBarContextProvider;
