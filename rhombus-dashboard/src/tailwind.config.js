/** @type {import('tailwindcss').Config} */

/*
 Colors: 
    Additional color/1-Additional - #FFB1B7
    Additional color/2-Additional - #F9837C
    Additional color/3-Additional - #F3CC5C
    Brand color/1-Primary         - #775DA6
    Brand color/1-Secondary       - #70B6C1
    Color sign/-Alert             - #F9837C
    Faded color/1-Primary         - #775DA6
*/

module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // for React + TS
    ],
    theme: {
      extend: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
            sans: ['Inter', 'sans-serif'], 
        },
        colors: {
          primary: '#775DA6', 
          secondary: '#70B6C1', 
          accent: '#FFB1B7',
          background: '#F9F9F9',
          alert: '#F9837C',
          fadedPrimary: '#775DA6',

        },
        borderRadius: {
          xl: '1rem',
          '2xl': '1.5rem',
        },
      },
    },
    plugins: [],
  }
  