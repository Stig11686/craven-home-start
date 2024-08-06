/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./site/**/*.{html,js,njk}"],
  theme: {
    extend: {
      colors: {
        'donate-pink': '#db0a5b',
        'get-help-yellow': '#ffa300',
        'homestart-purple': '#500778',
        'homestart-orange': '#e35206'

      }
    },
  },
  plugins: [],
}

