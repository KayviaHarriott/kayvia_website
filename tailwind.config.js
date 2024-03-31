/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // 'inter': ['Inter', 'sans-serif'],
      'press-start': ['Press Start 2P', 'sans-serif'],
      'kr': ['IBM Plex Sans KR', 'sans-serif'],
    },
    fontSize: {
      base: '12px'
    },
    extend: {
    },
  },
  plugins: [],
}

