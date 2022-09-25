/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          0: "#FAF7FD",
          25: "#EADFF6",
          50: "#DBCCEE",
          75: "#C4AAE2",
          100: "#A680D4",
          200: "#8855C6",
          300: "#6B2BB7",
          400: "#4D00A9",
          500: "#40008D",
          600: "#330071",
          700: "#270055",
          800: "#1A0038",
          900: "#0F0022",
        },
        neutral: {
          0: "#FAFAFA",
          25: "#EBEBEB",
          50: "#DBDBDB",
          75: "#C4C4C4",
          100: "#A6A6A6",
          200: "#888888",
          300: "#6B6B6B",
          400: "#4D4D4D",
          500: "#404040",
          600: "#333333",
          700: "#272727",
          800: "#1A1A1A",
          900: "#0F0F0F",
        },
        // neutral: {
        //   50: "#",
        //   100: "#",
        //   200: "#",
        //   300: "#",
        //   400: "#",
        //   500: "#",
        //   600: "#",
        //   700: "#",
        //   800: "#",
        //   900: "#",
        //   1000: "#",
        //   1100: "#",
        //   1200: "#",
        // },
      },
    },
  },
  plugins: [],
};
