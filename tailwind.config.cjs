/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'marine-blue': 'hsl(213, 96%, 18%)',
        'marine-blue-300': 'hsl(213, 96%, 25%)',
        'marine-blue-100': 'hsl(213, 70%,35%)',
        'purplish-blue': 'hsl(243, 100%, 62%)',
        'purplish-blue-300': 'hsl(243, 100%, 65%)',
        'pastel-blue': 'hsl(228, 100%, 84%)',
        'light-blue': 'hsl(206, 94%, 87%)',
        'strawberry-red': 'hsl(354, 84%, 57%)',
        'primary-gray': 'hsl(231, 11%, 63%)',
        'light-gray': 'hsl(229, 24%, 87%)',
        'mangolia-gray': ' hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        'app-white': 'hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        mobile: 'url("/src/assets/bg-sidebar-mobile.svg")',
        desktop: 'url("/src/assets/bg-sidebar-desktop.svg")',
      },
    },
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
    },
  },
  plugins: [],
};
