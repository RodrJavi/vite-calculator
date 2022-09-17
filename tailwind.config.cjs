/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "376px",
      // => @media (min-width: 576px) { ... }
    },

    extend: {
      colors: {
        cyan: "hsl(172 67% 45%)",
        dcyan: "hsl(183, 100%, 15%)",
        dgcyan: "hsl(186, 14%, 43%)",
        gcyan: "hsl(184, 14%, 56%)",
        lgcyan: "hsl(185, 41%, 84%)",
        vlgcyan: "hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
