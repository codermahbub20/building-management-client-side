/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        rancho: "'Rancho', cursive",
        lora: 'Lora', 
        sansBalsmiq:'Balsamiq Sans', 
      }
    },
  },
  plugins: [require("daisyui")],
}

