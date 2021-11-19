module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      primary: "#d2367a",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
