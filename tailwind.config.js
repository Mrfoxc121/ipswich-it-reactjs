const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */



module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cairo", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
