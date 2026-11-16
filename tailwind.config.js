/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ashmit: {
          bg: '#f7f7f7',
          text: '#101010',
          gray: '#767676',
          muted: '#9e9e9e',
          card: '#ffffff',
          border: '#e2e2e2',
          pill: '#ececec',
          darkBg: '#0e0f12',
          darkText: '#f5f5f7',
          darkCard: '#15171e',
          darkBorder: '#232630',
        },
        background: 'var(--bg-color)',
        'text-primary': 'var(--text-color)',
        'text-secondary': 'var(--text-gray-color)',
        'border-subtle': 'var(--border-color)',
      },
      fontFamily: {
        display: ['"Sofia Sans Condensed"', 'sans-serif'],
        mono: ['"Spline Sans Mono"', 'monospace'],
        sans: ['"Spline Sans Mono"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.06em',
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
