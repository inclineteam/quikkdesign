/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spline: ["Spline Sans Mono", "monospace"],
      },
      colors: {
        main: "#16171D",
        "editor-parent": "#292C37",
        "editor-content": "#373A48",
        "subtle-bg": "#1C1E26",
        "menu-bg": "#2A2D39",
      },
    },
  },
  plugins: [],
};
