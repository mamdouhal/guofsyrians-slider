/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#214937',    // main dark green
          accent: '#dcb557',  // gold
          light: '#efe8d7',   // beige
          black: '#1f1f1f',   // deep black
        }
      }
    },
  },
  plugins: [],
}
