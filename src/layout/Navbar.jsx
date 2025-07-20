import React, { useEffect } from "react";
import { useState } from "react";
import { useThemeContext } from "../context/ThemeContextProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useSidebarContext } from "../context/SideBarContextProvider";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext();
  const {isSidebarOpen,setIsSidebarOpen}=useSidebarContext();

  const [scrolled, setScrolled] = useState(false);

  const location=useLocation();

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 620 || location.pathname!=='/') {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

  
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [location.pathname]);

  return (
    <nav data-theme={theme} className={`fixed w-full top-0 z-50 transition-all duration-300 text-blue-500 ${
    scrolled ? "bg-blue-900 shadow-md text-white" : "bg-transparent text-black"
  }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex flex-row items-center">
            <div className="mr-8">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md focus:outline-none"
              >
                {isSidebarOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
            <div>
              <a href="/" className="text-2xl font-bold">
                Submit.IO 
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="hover:text-accent">
              Home
            </a>
            <a href="/about" className="hover:text-accent">
              About
            </a>
            <a href="/contact" className="hover:text-accent">
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-background-primary transition"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
