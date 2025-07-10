/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 30s linear infinite",
      },
      fontFamily: {
        kaisei_Decol: ['"Kaisei Decol"', "serif"],
      },
    },
  },
  plugins: [],
};
