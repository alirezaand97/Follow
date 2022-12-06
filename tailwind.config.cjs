/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#7e8299",
          100: "#f5f8fa",
          200: "#eff2f5",
          300: "#e4e6ef",
          400: "#b5b5c3",
          500: "#a1a5b7",
          600: "#7e8299",
          700: "#5e6278",
          800: "#3f4254",
          900: "#181c32",
          950: "#3f4254",
        },
        primary: {
          100: "#0095e8",
        },
        theme: {
          placeholder: "#a1a5b7",
        },
      },
      boxShadow: {
        xs: "0 0.1rem 0.75rem 0.25rem rgba(0,0,0,.05)",
        sm: "0 0.1rem 1rem 0.25rem rgba(0,0,0,.05)",
        md: "0 0.5rem 1.5rem 0.5rem rgba(0,0,0,.075)",
        lg: " 0 1rem 2rem 1rem rgba(0,0,0,.1)",
        header: "0px 10px 30px 0px rgba(82,63,105,.05)",
        card: "0px 10px 35px 0px rgba(56,71,109,.075)",
      },
      fontFamily: {
        yekan: "YekanBakh",
        yekanMedium: "YekanBakhMedium",
        yekanBold: "YekanBakhBold",
        yekanEn: "YekanBakhEn",
      },
      width: {
        sideBarWidth: "280px",
        sideBarCollapsedWidth: "80px",
      },
      margin: {
        sideBarWidth: "280px",
        sideBarCollapsedWidth: "80px",
      },
      height: {
        headerHeight: "70px",
      },
    },
  },
  plugins: [],
};
