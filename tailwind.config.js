/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      
        "colors":{
          "To":{
            400:"#fef9b0",
            },
            "From":{
            400:"#fefffc"
            },
            reed:{
              400:"#ec3336"
            }
          },

      aspectRatio: {
        '4/3': '4 / 3',
      }
    },

    letterSpacing: {
      tightest: '-.100em',
      tighter: '-.100em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },

    

  },
  plugins: [],
}

