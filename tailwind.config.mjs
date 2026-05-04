/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'foggy-night': '#0a1626',
        'foggy-night-deep': '#050d18',
        'foggy-teal': '#14b8a6',
        'foggy-teal-dark': '#0d9488',
        'foggy-amber': '#fb923c',
        'foggy-text': '#e2e8f0',
        'foggy-text-muted': '#94a3b8',
        'foggy-text-faint': '#64748b',
        'foggy-ink': '#0a1626',
      },
      fontFamily: {
        display: ['Inter Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
