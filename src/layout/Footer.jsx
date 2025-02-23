import React from "react";
import { useThemeContext } from "../context/ThemeContextProvider";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // You can change icons as needed

const Footer = () => {
  const { theme } = useThemeContext();

  return (
    <footer
      className={`${
        theme === "light" ? "bg-background text-primary" : "bg-background-primary text-primary"
      } py-8 mt-8`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="text-center sm:text-left">
            <p
              className={`text-lg ${
                theme === "light" ? "text-secondary" : "text-secondary"
              }`}
            >
              &copy; 2025 SubmitDotIO. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6 justify-center">
            <a
              href="https://github.com"
              className={`hover:text-accent ${theme === "dark" ? "hover:text-accent-dark" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com"
              className={`hover:text-accent ${theme === "dark" ? "hover:text-accent-dark" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
