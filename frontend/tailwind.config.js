/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('images/knit.jfif')",
      }),
      fontFamily: {
        della: ['"Della Respira"'],
        open: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
