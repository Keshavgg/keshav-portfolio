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
        background: '#07080B',
        'background-secondary': '#101218',
        'surface-elevated': '#151821',
        'surface-card': '#11141C',
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        'border-highlight': 'rgba(255, 255, 255, 0.16)',
        'text-primary': '#F5F5F7',
        'text-secondary': '#9298A6',
        'text-muted': '#62687A',
        accent: {
          blue: '#3B82F6',
          cyan: '#06B6D4',
          violet: '#8B5CF6',
          emerald: '#10B981',
          amber: '#F59E0B',
          glow: '#60A5FA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
      }
    },
  },
  plugins: [],
};
