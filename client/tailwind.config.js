/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          400: '#ffa726',
          500: '#ff6b35',
          600: '#ff8c42',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'aurora': 'aurora 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 107, 53, 0.4)',
        'glow-lg': '0 0 30px rgba(255, 107, 53, 0.4), 0 0 60px rgba(255, 107, 53, 0.2)',
      },
    },
  },
  plugins: [],
}