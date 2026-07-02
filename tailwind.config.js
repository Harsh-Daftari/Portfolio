/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#000000',
        panel: '#0A0A0A',
        line: 'rgba(255,255,255,0.08)',
        emerald: {
          DEFAULT: '#00C896',
          dim: '#009C77',
          glow: 'rgba(0,200,150,0.35)',
        },
        champagne: {
          DEFAULT: '#C8A96B',
          dim: '#A78B54',
          glow: 'rgba(200,169,107,0.35)',
        },
        bone: '#EDEBE6',
        ash: '#8C8C8C',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
        'emerald-glow': '0 0 40px rgba(0,200,150,0.25)',
        'champagne-glow': '0 0 40px rgba(200,169,107,0.25)',
      },
      letterSpacing: {
        widest2: '0.35em',
      },
    },
  },
  plugins: [],
}
