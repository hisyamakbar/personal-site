/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "800px",
      // => @media (min-width: 800px) { ... }

      tablet: "801px",
      // => @media (min-width: 801px) { ... }

      desktop: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      fontSize: {
        "body-costum": [
          "0.9375rem",
          {
            lineHeight: "1.625rem",
            letterSpacing: "0.00938rem",
            fontWeight: "500",
          },
        ],
      },
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
