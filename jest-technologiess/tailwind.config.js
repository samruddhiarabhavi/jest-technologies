/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070707',
        coal: '#0c0c0c',
        panel: '#101010',
        card: '#151515',
        line: 'rgba(255,255,255,0.08)',
        bone: '#ECEBE6',
        mute: '#8A8A85',
        mint: '#5CFFB1',
        sky: '#7AA9FF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
