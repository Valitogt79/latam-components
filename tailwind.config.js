/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro, html, js, ts, jsx, tsx, md, mdx, svelte, vue}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#5eb9f0',
        'paragraph-color': '#360697',
        'heading-color': '#343f52',
        'skyblue': '#e5f4fd',
        'white': '#ffffff',
        'light-gray': '#f0f8fe',
        'gray': '#fefefe',
      },
    },
  },
  plugins: [],
};
