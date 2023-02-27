/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xss': '320px',
      // => @media (min-width: 375px) { ... }
      'xs': '375px',
      // => @media (min-width: 375px) { ... }
        'xxs': '425px',
      // => @media (min-width: 375px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    ontFamily: {
      'sans': ['Montserrat", sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['cookie', 'cursive'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
     
    
    },
  },
  plugins: [],
}
