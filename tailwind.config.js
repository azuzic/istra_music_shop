module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      "16px": "16px",
      "18px": "18px",
      "20px": "20px",
      "22px": "22px",
      "24px": "24px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
