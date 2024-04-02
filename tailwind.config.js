/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
            'xs':'250px',
            'sm': '370px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl' : '1536px'},
       
   extend: {
     colors:{
       'main': 'rgb(0, 163, 154)',
     },
     fontFamily: {
      light:['Poppins-light', 'sans-serif'],
      normal:['Poppins-Regular', 'sans-serif'],
      medium:['Poppins-Medium', 'sans-serif'],
      semibold:['Poppins-SemiBold', 'sans-serif'],
      bold:['Poppins-Bold', 'sans-serif'],
      extrabold:['Poppins-Extrabold', 'sans-serif'],
     },
     backgroundImage: {
      // 'banner-bg1': "url('./assets/images/home/3sea1.jpg')",
    }
   },
  
 },
  plugins: [],
}