/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Montserrat", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary': '#BF7A80',
        'secondary': '#E3D0CA',
        'golden': '#A6855D',
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.052rem',
      '7xl': '5.052rem',
      '8xl': '6.052rem',
      '9xl': '7.052rem',
    },
    fontFamily: {
      'title': ['Boogaloo'],
      'body': ['Arial'],
      'elegant': ['Great Vibes']
    },
  },
  plugins: [],
}
