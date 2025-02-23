/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: "var(--primary-text)",
        secondary: "var(--secondary-text)",
        accent: "var(--accent-text)",
        background: "var(--bg-color)",
        "background-primary": "var(--bg-color-primary)",
        "background-secondry": "var(--bg-color-secondry)",
      },
    },
  },

  plugins: [],
};
