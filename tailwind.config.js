/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Forest Green Palette
        forest: {
          50: '#F0F4F1',
          100: '#DCE8D9',
          200: '#B9D1B3',
          300: '#8FB783',
          400: '#6B9B5C',
          500: '#4D7C3E',
          600: '#3A632F',
          700: '#2D4D26',
          800: '#214D3B',  // Primary forest green
          900: '#17392C',  // Deep green
          950: '#0D241A',
        },
        cream: {
          50: '#FDFDFB',
          100: '#F7F5EF',  // Warm cream background
          200: '#EFECE1',
          300: '#E0DCC7',
          400: '#CEC6A3',
          500: '#BBAE7D',
        },
        sage: {
          50: '#F5F8F4',
          100: '#E7EEE6',  // Soft sage
          200: '#CFDDCA',
          300: '#A8C5A2',
          400: '#7FA574',
          500: '#5D8750',
        },
        accent: {
          50: '#FDF8F0',
          100: '#F9EFDA',
          200: '#F0DAB5',
          300: '#E5BF85',
          400: '#D6A85C',  // Restrained warm accent
          500: '#C4923E',
          600: '#A67832',
          700: '#855E2A',
          800: '#6B4A24',
          900: '#563D20',
        },
        dark: {
          50: '#F0F2F0',
          100: '#DCE0DC',
          200: '#B9C1B8',
          300: '#8F9B8D',
          400: '#69736B',  // Secondary text
          500: '#4D564F',
          600: '#3A423C',
          700: '#2E332D',
          800: '#26342C',  // Dark text
          900: '#1A221D',
        },
        border: {
          light: '#E5E5DC',  // Borders
          DEFAULT: '#D5D5C9',
        },
      },
      fontFamily: {
        heading: ['Lora', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.25' }],
        'heading-xl': ['2rem', { lineHeight: '1.3' }],
        'heading-lg': ['1.75rem', { lineHeight: '1.35' }],
        'heading-md': ['1.5rem', { lineHeight: '1.4' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.65' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section-lg': '7rem',   // 112px
        'section-md': '5.5rem', // 88px
        'section-sm': '4.5rem', // 72px
        'section-xs': '3.5rem', // 56px
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '22px',
        'btn': '10px',
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(33, 77, 59, 0.08), 0 4px 16px -4px rgba(33, 77, 59, 0.06)',
        'card': '0 4px 20px -4px rgba(33, 77, 59, 0.1), 0 8px 32px -8px rgba(33, 77, 59, 0.08)',
        'card-hover': '0 12px 40px -8px rgba(33, 77, 59, 0.15), 0 4px 16px -4px rgba(33, 77, 59, 0.1)',
        'nav': '0 4px 24px -4px rgba(33, 77, 59, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}