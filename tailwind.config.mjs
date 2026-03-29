/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:   'var(--navy)',
        'book-blue':   'var(--blue)',
        sky:    'var(--sky)',
        indigo: 'var(--indigo)',
        slate:  'var(--slate)',
        'book-gray':   'var(--gray)',
        light:  'var(--light)',
        border: 'var(--border)',
        bg:     'var(--bg)',
        card:   'var(--card-bg)',
      },
      fontFamily: {
        sans:   ['"DM Sans"', 'sans-serif'],
        mono:   ['"Space Mono"', 'monospace'],
        serif:  ['"Instrument Serif"', 'serif'],
        // Body text for chapters — optimized for long-form reading
        body:   ['"Source Serif 4"', '"Georgia"', 'serif'],
      },
      fontSize: {
        // Fluid type scale
        'display-lg': ['clamp(42px, 7vw, 80px)', { lineHeight: '1.1' }],
        'display-md': ['clamp(32px, 5vw, 48px)', { lineHeight: '1.2' }],
        'display-sm': ['clamp(24px, 3vw, 36px)', { lineHeight: '1.3' }],
      },
      boxShadow: {
        'card-hover': '0 8px 32px var(--view-border)',
        'cta': '0 4px 24px rgba(30, 64, 175, 0.4)',
        'cta-hover': '0 8px 32px rgba(30, 64, 175, 0.5)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease both',
        'drift': 'drift 20s ease-in-out infinite alternate',
        'scroll-ticker': 'scroll 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%':   { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(-30px, 20px) rotate(2deg)' },
        },
        scroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
