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
        'foggy-night': '#0a1626',
        'foggy-night-deep': '#050d18',
        'foggy-amber': '#fb923c',
        'foggy-amber-deep': '#9a3412',
        'foggy-amber-bg': '#1a0e08',
        'foggy-green-deep': '#022c22',
        'foggy-green-glow': '#10b981',
        'foggy-line': '#1e293b',
        'foggy-text-on-dark': '#cbd5e1',
        'foggy-text-muted-dark': '#64748b',
      },
      fontFamily: {
        display: ['Inter Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
