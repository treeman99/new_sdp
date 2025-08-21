/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // 사용자 정의 색상
        gatePurple: {
          11: '#515E94',
        },
        neutral: {
          '01': '#FFFFFF',
          '06': '#EDF2F4',
          '08': '#DADFE4',
        },
        red: {
          '06': '#F73529',
          '07': '#E82C1F',
        },
        custom: {
          pink: '#FF54EE',
          black: '#000000',
          darkText: '#F3F6F8',
        },
      },
      fontFamily: {
        logo: ['Inter', 'Arial', 'sans-serif'],
        'header-select': ['Inter', 'Arial', 'sans-serif'],
        'header-label': ['Inter', 'Noto Sans KR', 'sans-serif'],
      },
      fontSize: {
        logo: '1.1875rem', // 19px
        'header-select': '0.875rem', // 14px (HeaderLabel과 동일하게 변경)
        'header-label': '0.875rem', // 14px
      },
      lineHeight: {
        logo: '1.5rem', // 24px
        'header-select': '1.25rem', // 20px (HeaderLabel과 동일하게 변경)
        'header-label': '1.25rem', // 20px
      },
      letterSpacing: {
        logo: '0.05rem',
        'header-select': '0.05rem',
        'header-label': '0.05rem',
      },
      boxShadow: {
        'elevation-light-1':
          '0 0 2px 0 rgba(40, 48, 55, 0.12), 0 1px 2px 0 rgba(40, 48, 55, 0.12)',
      },
      width: {
        divider: '0.0625rem', // 1px
      },
      height: {
        divider: '0.625rem', // 10px
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
