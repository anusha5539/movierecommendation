/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0a0a0a',
        secondary:'#a855f7'
      },
      fontFamily:{
        heading:["'Noto Sans', sans-serif;"],
        subheading:["'Open Sans', sans-serif;"],
        paragraph:["'Roboto', sans-serif;"]
      }
    },
  },
  plugins: [],
}

