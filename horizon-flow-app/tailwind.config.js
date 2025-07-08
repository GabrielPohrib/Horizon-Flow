/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-horizon-blue': '#354F7C',
        'soft-coral': '#FF6B6B',
        'mist-gray': '#F5F7FA',
        'emerald-success': '#2ECC71',
        'golden-amber': '#F39C12',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Using Inter as primary sans-serif
        body: ['Open Sans', 'sans-serif'], // Using Open Sans as body/fallback
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
