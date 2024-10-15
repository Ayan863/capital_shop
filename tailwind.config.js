/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'icons':'#74706B',
        'icon':'#EDEFF2',
        'red-sale': '#FF2020',
        'gray': '#171613',
        'lightGray': '#BBB9B5',
        'bej':'#CEBD9C',
        

      },
      fontFamily:{
        'clicker': ['"Clicker Script"', 'cursive'],
        'jost':['"Jost",sans-serif'],
      },
      transformOrigin:{
        'rotate':'100deg'
      }
    },
  },
  
  plugins: [],
}