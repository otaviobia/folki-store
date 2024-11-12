/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'folki-purple': '#7500BC',
        'folki-dark-grey': '#121212',
        'folki-grey': '#232323',
      },
      typography: {
        DEFAULT: {
          css: {
            '*': {
              'color': 'white',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
