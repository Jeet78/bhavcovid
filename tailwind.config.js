module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Fira sans", "sans-serif"],
      serif: ["Fira sans", "serif"],
      display: ["Fira sans"],
      body: ["Fira sans"],
    },
    extend: {},
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
