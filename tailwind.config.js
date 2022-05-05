module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      fontFamily: {
        Lato: ["Lato"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
