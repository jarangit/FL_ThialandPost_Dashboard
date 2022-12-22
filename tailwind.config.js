/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        // that is animation class
        animation: {
          fade: 'fadeIn 3s ease-in-out',
        },
    },
    colors: {
      'red': {
        light: '#F06852',
        DEFAULT: '#D30D2B',
        dark: '#',
      },
      'blue': {
        light: '#B9D2DD',
        DEFAULT: '#002369',
        dark: '#568EB5',
      },
      'white': {
        light: '#',
        DEFAULT: '#ffff',
        dark: '#',
      },
      'gray': {
        supperLight: '#F9FAFB',
        light: '#D6D6D6',
        DEFAULT: '#969595',
        dark: '#707070',
      },
    },
  },
  plugins: [],
}