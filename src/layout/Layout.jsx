import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContextProvider";

const Layout = () => {
  const { theme } = useThemeContext();
  return (
    <div data-theme={theme} className="min-h-screen bg-background">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
