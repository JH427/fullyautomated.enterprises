/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#FFFFFF',
          surface: '#F8FAFC',
          'text-primary': '#0F172A',
          'text-secondary': '#475569',
          border: '#E2E8F0',
        },
        dark: {
          bg: '#0B0F14',
          surface: '#111827',
          'text-primary': '#E5E7EB',
          'text-secondary': '#94A3B8',
          border: '#1F2937',
        },
        accent: {
          blue: '#2563EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
