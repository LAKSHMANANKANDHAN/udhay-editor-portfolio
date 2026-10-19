/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: {
          DEFAULT: '#111111',
          card: '#0f0f15',
          elevated: '#171720',
          border: 'rgba(255, 21, 60, 0.15)',
        },
        neon: {
          red: '#FF153C',
          crimson: '#8B0015',
          glow: '#ff2d52',
        },
        silver: {
          light: '#F5F5F5',
          muted: '#A1A1AA',
          dark: '#52525B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        tech: ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'neon-sm': '0 0 10px rgba(255, 21, 60, 0.35)',
        'neon-md': '0 0 25px rgba(255, 21, 60, 0.5)',
        'neon-lg': '0 0 50px rgba(255, 21, 60, 0.65)',
        'neon-inner': 'inset 0 0 15px rgba(255, 21, 60, 0.25)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'web-shimmer': 'webShimmer 4s linear infinite',
        'radar-sweep': 'radarSweep 4s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 12px rgba(255, 21, 60, 0.4))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 28px rgba(255, 21, 60, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        webShimmer: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
