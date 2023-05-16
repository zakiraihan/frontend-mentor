/** @type {import('tailwindcss').Config} */
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
        }
      },
      boxShadow: {
        'blue': '30px 30px 60px -40px hsla(234, 85%, 45%, 0.4)',
        'custom-black': '0 5px 20px 0px rgba(0, 0, 0, 0.2)'
      },
      fontFamily: {
        'hanken-grotesk': ['\'Hanken Grotesk\'', 'sans-serif'],
        'epilogue': ['\'Epilogue\'', 'sans-serif']
      }
    },
  },
  plugins: [],
}
