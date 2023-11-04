/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  'node_modules/preline/dist/*.js',
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.no-scrollbar': {
          ' -ms-overflow-style': 'none',
          ' scrollbar-width': 'none',
        },
      })
    })
  ]
};
