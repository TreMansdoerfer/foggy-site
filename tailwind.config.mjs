/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'foggy-teal': '#14b8a6',
        'foggy-teal-dark': '#0d9488',
        'foggy-ink': '#0a1626',
        'foggy-ink-light': '#475569',
        'foggy-bg': '#f8fafc',
        'foggy-card': '#ffffff',
      },
      fontFamily: {
        display: ['Inter Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
