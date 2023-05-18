/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'rs': {
          'light-red': 'hsl(0, 100%, 67%)',
          'orange-yellow': 'hsl(39, 100%, 56%)',
          'green-teal': 'hsl(166, 100%, 37%)',
          'cobalt-blue': 'hsl(234, 85%, 45%)',
          'light-slate-blue': 'hsl(252, 100%, 67%)',
          'light-royal-blue': 'hsl(241, 81%, 54%)',
          'violet-blue': 'hsla(256, 72%, 46%, 1)',
          'persioan-blue': 'hsla(241, 72%, 46%, 0)',
          'pale-blue': 'hsl(221, 100%, 96%)',
          'light-lavender': 'hsl(241, 100%, 89%)',
          'dark-grey-blue': 'hsl(224, 30%, 27%)'
        },
        'isdn': {
          'almost-white': 'hsl(0, 0%, 98%)',
          'medium-gray': 'hsl(0, 0%, 41%)',
          'almost-black': 'hsl(0, 0%, 8%)'
        },
        'caci': {
          'text-50': 'hsl(276, 100%, 81%)', //sub-heading at the top of the app UI
          'text-100': 'hsl(276, 55%, 52%)', //chat on the left
          'text-150': 'hsl(271, 15%, 43%)', //chat on the right
          'text-200': 'hsl(206, 6%, 79%)', //placeholder text
          'text-250': 'hsl(271, 36%, 24%)', //main heading
          'text-300': 'hsl(270, 7%, 64%)', //paragraph
          'grad-100': 'hsl(293, 100%, 63%)',
          'grad-900': 'hsl(264, 100%, 61%)',
          'secondary-0': 'rgb(250,250,250)',
          'secondary-100': 'hsl(270, 20%, 96%)', //app bg
          'secondary-200': 'hsl(271, 36%, 24%)', //submit button bg
          'secondary-300': 'hsl(289, 100%, 72%)', //radio button outline
          'secondary-400': '#EDE5F4', //bg chat on the left 
        }
      },
      boxShadow: {
        'blue': '30px 30px 60px -40px hsla(234, 85%, 45%, 0.4)',
        'custom-black': '0 5px 20px 0px rgba(0, 0, 0, 0.2)'
      },
      fontFamily: {
        'hanken-grotesk': ['\'Hanken Grotesk\'', 'sans-serif'],
        'epilogue': ['\'Epilogue\'', 'sans-serif'],
        'rubik': ['\'Rubik\'', 'sans-serif'],
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      )
    })
  ],
}
