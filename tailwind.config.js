/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screen: {
        media878: "878px",
        media712: "712px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        noto: ["Noto Color Emoji", "sans-serif"],
      },
    },
  },
  plugins: [],
};
