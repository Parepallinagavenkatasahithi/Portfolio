/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FCFBF9',
          100: '#FAF8F5', // Primary background
          200: '#F4EFEA', // Subtle card / section contrast
          300: '#ECE5DC', // Borders & dividers
          400: '#DDD4C7',
          500: '#C7BBAA',
        },
        ink: {
          900: '#111111', // Primary heading & text
          800: '#1C1C1E',
          700: '#2D2D30',
          600: '#4A4A4F', // Body secondary text
          500: '#6D6D75', // Muted / caption text
          400: '#94949E',
        },
        earth: {
          50: '#F3F7F4',
          100: '#E4EDE7', // Accent badge soft bg
          200: '#C7DAD0',
          300: '#8FB49F',
          400: '#4E8668',
          500: '#2D4A3E', // Subtle earthy green accent
          600: '#243C32', // Darker earthy green for hover
          700: '#1B2E26',
          800: '#13211B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.18em',
      },
    },
  },
  plugins: [],
}
