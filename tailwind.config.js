const withMT = require("@material-tailwind/react/utils/withMT");


/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  darkMode: ['class'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#FFFFFF',
        'primary-200': '#C7C7C7',
        'primary-300': '#697280',
        'primary-400': '#4DD4F4',
        'primary-450': '#4FD1F5',
        'primary-500': '#56B0F6',
        'primary-550': '#6D55FC',
        'primary-600': '#7339FD',
        'primary-700': '#976BFE',
        'primary-750': '#CAB0FF',
        'primary-800': '#0E1525', 
        'primary-900': '#0B101C',
        'primary-1000': '#121214',
      }
    },
  },
  plugins: [],
});
