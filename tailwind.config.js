/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    // ###### Font-Weight ######
    // bold=title, mid=subtitle, light=notes-minorinfo

    // ####### Font-Size ########

    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      // serif: ["Merriweather", "serif"],
      // logo: ["Indie Flower", "cursive"],
      // primary: 'Orbitron, sans-serif',
      // secondary: 'Inter, sans-serif',
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
      dropShadow: {
        primary: "0 20px 40px rgba(238, 77, 71, 0.1)",
        secondary: "0px 30px 40px rgba(244, 125, 103, 0.2)",
        tertiary: "0 20px 40px rgba(32, 56, 100, 0.3);",
      },
      backgroundImage: {
        hero: "url('/images/hero/scene.svg')",
        faq: "url('/images/faq/bg.svg')",
        footer: "url('/images/footer/bg.svg')",
      },
    },
  },
  plugins: [],
};
