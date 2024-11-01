/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '70/30': '70% 29%',
        '20/60/20': '19% 60% 19%',
      }
    },
  },
  plugins: [],
}

