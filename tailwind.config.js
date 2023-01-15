/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // ###### Font-Weight ######
    // bold=title, mid=subtitle, light=notes-minorinfo

    // ####### Font-Size ########

    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"]
      // serif: ["Merriweather", "serif"],
      // logo: ["Indie Flower", "cursive"],
      
    },
    darkMode: false, // or 'media' or 'class'
    extend: {
      colors: {
        primary: "#FFB400",
        secondary: "#F9CE51",
        dark: "#333333",
        light: "#FBFBFB",
        // gray: "#998C8C",

      },
    },
  },
  plugins: [],
};
