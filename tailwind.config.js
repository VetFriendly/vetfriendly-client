/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'vet-blue': {
          DEFAULT: '#3D3DC4',
          600: '#1F1FC4',
          700: '#11119E',
        }
      }
    },
  },
  plugins: [],
}
