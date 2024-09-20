/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // These colors are extracted from the screenshot
        primary: "#0B5071", // Dark Blue (Header)
        secondary: "#F9B327", // Orange (Highlight)
        lightGray: "#F7F7F7", // Light Gray (Background)
        darkGray: "#707070", // Dark Gray (Text)
        footerBg: "#E0E0E0", // Light Gray Footer background
      },
      fontFamily: {
        sans: ['"Cairo"', "sans-serif"], // Arabic-friendly font
      },
    },
  },
  plugins: [],
};
