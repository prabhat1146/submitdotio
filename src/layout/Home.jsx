import React from "react";
import { useThemeContext } from "../context/ThemeContextProvider";

const Home = () => {
  const { theme } = useThemeContext();

  return (
    <div data-theme={theme} className="min-h-screen ">
      <div
        className={`max- mx-auto px-4 sm:px-6 lg:px-8 py-16 ${
          theme === "light" ? "bg-background text-primary" : "bg-background-primary text-primary"
        }`}
      >
        <h1
          className={`text-4xl font-bold text-center ${
            theme === "light" ? "text-accent" : "text-accent"
          }`}
        >
          Welcome to SubmitDotIO!
        </h1>
        <p
          className={`mt-4 text-lg text-center ${
            theme === "light" ? "text-secondary" : "text-secondary"
          }`}
        >
          Your one-stop solution for collecting and managing all your forms in one place. Simplify your
          form-filling experience today.
        </p>

        <div className="mt-8 text-center">
          <a
            href="/about"
            className={`bg-accent text-white py-3 px-6 rounded-md shadow-lg hover:bg-accent-dark transition ${
              theme === "dark" ? "hover:bg-accent-dark" : "hover:bg-accent-dark"
            }`}
          >
            Learn More
          </a>
        </div>
      </div>

      <div
        className={`mt-16 px-4 py-8 ${
          theme === "light" ? "bg-background-secondary" : "bg-background-primary"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className={`text-3xl font-semibold ${
              theme === "light" ? "text-primary" : "text-primary"
            }`}
          >
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            <div
              className={`p-6 rounded-lg shadow-lg ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              }`}
            >
              <h3
                className={`text-xl font-semibold ${
                  theme === "light" ? "text-primary" : "text-primary"
                }`}
              >
                Collect Forms Easily
              </h3>
              <p
                className={`mt-4 ${
                  theme === "light" ? "text-secondary" : "text-secondary"
                }`}
              >
                Collect and manage all your forms in one simple, easy-to-use platform.
              </p>
            </div>
            <div
              className={`p-6 rounded-lg shadow-lg ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              }`}
            >
              <h3
                className={`text-xl font-semibold ${
                  theme === "light" ? "text-primary" : "text-primary"
                }`}
              >
                Secure Data Storage
              </h3>
              <p
                className={`mt-4 ${
                  theme === "light" ? "text-secondary" : "text-secondary"
                }`}
              >
                Your data is securely stored and managed with state-of-the-art encryption.
              </p>
            </div>
            <div
              className={`p-6 rounded-lg shadow-lg ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              }`}
            >
              <h3
                className={`text-xl font-semibold ${
                  theme === "light" ? "text-primary" : "text-primary"
                }`}
              >
                Easy Access Anywhere
              </h3>
              <p
                className={`mt-4 ${
                  theme === "light" ? "text-secondary" : "text-secondary"
                }`}
              >
                Access your forms from any device, anytime, anywhere. It's that simple!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
