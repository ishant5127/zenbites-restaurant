/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sawarabi': ['Sawarabi Mincho', 'serif'],
        'noto': ['Noto Sans JP', 'sans-serif'],
      },
      colors: {
        sakura: {
          DEFAULT: '#E9A6A6',
          50: '#FBF7F7',
          100: '#F6EEEE',
          200: '#F0D4D4',
          300: '#E9A6A6',
          400: '#E18F8F',
          500: '#DA7878',
          600: '#D36161',
          700: '#CC4A4A',
          800: '#C53333',
          900: '#BE1C1C',
        },
        'zen-green': {
          DEFAULT: '#6B8E23',
          50: '#F5F8EC',
          100: '#EBF1D8',
          200: '#D7E3B1',
          300: '#C3D58A',
          400: '#AFC763',
          500: '#9BB93C',
          600: '#87A135',
          700: '#6B8E23',
          800: '#4F6A1A',
          900: '#334511',
        },
        'rice-paper': '#FAF3E0',
        'wood-brown': '#8B5E3C',
        'ink-black': '#1C1C1C',
      },
      boxShadow: {
        'zen': '0 4px 20px rgba(107, 142, 35, 0.15)',
        'sakura': '0 4px 20px rgba(233, 166, 166, 0.15)',
        'zen-lg': '0 10px 40px rgba(107, 142, 35, 0.2)',
        'sakura-lg': '0 10px 40px rgba(233, 166, 166, 0.2)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      dropShadow: {
        'zen': '0 4px 8px rgba(107, 142, 35, 0.25)',
        'sakura': '0 4px 8px rgba(233, 166, 166, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'rice-paper': "url('/textures/rice-paper.jpg')",
        'bamboo': "url('/textures/bamboo.jpg')",
        'zen-hero': "url('/images/zen-hero-bg.jpg')",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(233, 166, 166, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(233, 166, 166, 0.8), 0 0 30px rgba(233, 166, 166, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}