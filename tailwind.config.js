/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark:{
            1: '#590696',
            2: '#F1EAFF',
            3: '#252A41',
            4: '#1E2757',
            5: '#161925',
        },
        blue:{
          1:'#00FFAB',
          2:'#0E78F9'
        },
        sky:{
          1:'#C9DDFF'
        },
        orange: {
          1: '#FF742E',
        },
        purple: {
          1: '#830EF9',
          2: "#5E1675"
        },
        yellow: {
          1: '#F9A90E',
        }, 
      },
        backgroundImage:{
        hero:"url('/images/bg.jpg')"
        },  
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],

}