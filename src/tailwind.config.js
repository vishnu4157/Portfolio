const tailwindTheme = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        darkBlue: '#0756B4',
        mediumBlue: '#0756b480',
        lightBlue: '#EAF0F7',
      },
      fontFamily: {
        inter: ['inter', 'sans-serif'],
        montserrat: ['montserrat', 'Montserrat'],
      },
    },
  },
};

module.exports = tailwindTheme;
