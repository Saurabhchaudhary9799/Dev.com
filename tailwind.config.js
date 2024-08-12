/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom-gray': '0 4px 10px rgba(128, 128, 128, 0.5)', // adjust the values as needed
      },
    },
  },
  plugins: [],
}

