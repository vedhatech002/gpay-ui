/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#1f1f1f',
        'dark-primary-alt': '#202125',
        'dark-secondary': '#2d2e30',
        'dark-text-color': '#ffffffbd',
      },

    },
  },
  plugins: [],
}

