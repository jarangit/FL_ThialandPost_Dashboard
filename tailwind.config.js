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
      'pink': {
        DEFAULT: '#ffeaea',
        dark: '#',
      },
      'green': {
        DEFAULT: '#29BE5A',
        dark: '#',
      },
      'yellow': {
        DEFAULT: '#D9AB3F',
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
        supperLight: '#ededed',
        light: '#D6D6D6',
        DEFAULT: '#969595',
        dark: '#707070',
      },
      'green': {
        light: '#A3DFC9',
        DEFAULT: '#22952A',
      },
      'orange': {
        light: '#F8DFC1',
        DEFAULT: '#F7A848',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}