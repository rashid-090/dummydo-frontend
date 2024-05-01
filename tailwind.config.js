/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
            'xs':'250px',
            'sm': '376px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl' : '1536px'},
       
   extend: {
     colors:{
       'main': 'rgb(0, 2, 166)',
       'bgshade':'#f5f8fa'
     },
     fontFamily: {
      gilmerlight:['good_times', 'sans-serif'],
      futuracondensed:['Futura_condensed', 'sans-serif'],
     },
     backgroundImage: {
      'form-bg': "url('./assets/images/cnfm.webp')",
    }
   },
  
 },
  plugins: [],
}