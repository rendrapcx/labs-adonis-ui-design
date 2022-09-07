/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{edge,html,js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      // screens: {
      //   'xs': '270px',
      //   'sm': '360px',
      //   'md': '480px',
      //   'lg': '720px',
      //   'xl': '1280px',
      //   // => @media (min-width: 1280px) { ... }
      //   '2xl': '1536px',
      // }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    aspectRatio: false,
  },
  variants: {
    scrollbar: ['rounded']
  }
}
