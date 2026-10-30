/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F4EE', // page background (light, warm)
        ink: '#14213D', // text / dark UI accents
        accent: { DEFAULT: '#FF5A1F', soft: '#FFE3D6' }, // the one strong accent
        mist: '#E9EEF8',
        line: '#D9D6CB',
        mute: '#56627A',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
