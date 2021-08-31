module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      samuel: {
        50: '#dffdfa',
        100: '#bcf1ec',
        200: '#97e5dc',
        300: '#70d9ca',
        400: '#4aceb6',
        500: '#31b598',
        600: '#228d7d',
        700: '#14645f',
        800: '#033c3d',
        900: '#001717',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
