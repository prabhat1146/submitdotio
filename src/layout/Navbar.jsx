import React, { useEffect, useState } from "react";
import { useThemeContext } from "../context/ThemeContextProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useSidebarContext } from "../context/SideBarContextProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserAuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  const {setAction,isAuthenticated,logout}=useUserAuthContext();
  const { theme } = useThemeContext();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  const [scrolled, setScrolled] = useState(false);


  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 620 || location.pathname !== "/") {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleLogin = () => {
    setAction('login')
    navigate("/pages/user/user-type");
  };

  const handleLogout = () => {
    // Clear auth tokens, reset state
    logout();
    navigate("/pages/user/logout");
  };

  return (
    <nav
      data-theme={theme}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-900 shadow-md text-white" : "bg-transparent text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left side: logo + menu */}
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

          {/* Right side: nav links */}
          <div className="flex items-center space-x-6">
            <a href="/" className="hover:text-accent">
              Home
            </a>
            <a href="/about" className="hover:text-accent">
              About
            </a>
            <a href="/contact" className="hover:text-accent">
              Contact
            </a>

            {/* Auth buttons */}
            {!isAuthenticated ? (
              <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
