import React from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContextProvider";

const Error = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        theme === "light" ? "bg-background text-primary" : "bg-background-primary text-primary"
      }`}
    >
      <h1
        className={`text-6xl font-bold ${
          theme === "light" ? "text-accent" : "text-accent"
        } mb-4`}
      >
        Oops!
      </h1>
      <p
        className={`text-xl mb-4 ${
          theme === "light" ? "text-secondary" : "text-secondary"
        }`}
      >
        Something went wrong. The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className={`bg-accent text-white py-2 px-6 rounded-md shadow-lg hover:bg-accent-dark transition ${
          theme === "light" ? "hover:bg-accent-dark" : "hover:bg-accent-dark"
        }`}
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Error;
