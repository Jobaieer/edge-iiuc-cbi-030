/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
    theme: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        accent: '#e3342f',
        neutral: '#ffffff',
        base: '#000000',
      },
    },
  },
};
