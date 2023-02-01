/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        19: "4.75rem",
        64: "16rem",
      },
      maxWidth: ({ theme }) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [],
};
