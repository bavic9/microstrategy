/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '979px',
      xl: '1440px'
    },

    extend: {
      fontFamily: {
        lato: "Lato",
        varela: 'Varela Round',
        prompt: "Prompt",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
}

