/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ['Roboto Mono', 'sans-serif'],
        rem: ['REM', 'monospace'],
        kanit: ['Kanit', 'sans-serif'],
        preahvihear: ['Preahvihear', 'sans-serif'],
        bebasNeue: ['Bebas Neue', 'sans-serif'],
        chakraPetch: ['Chakra Petch', 'sans-serif'],
        ibmPlexMono: ['IBM Plex Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

module.exports = config
