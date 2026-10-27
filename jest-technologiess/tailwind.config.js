/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F4EE',
        sand: '#EDE7DB',
        rule: '#D8D0C0',
        ink: '#1F1D1A',
        soft: '#5B574F',
        forest: '#1F4D3A',
        deep: '#16382A',
        clay: '#B0502D',
      },
      fontFamily: {
        sans: ['"Public Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
