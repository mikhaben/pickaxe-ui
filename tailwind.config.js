/** @type {import('tailwindcss').Config} */
export default {
  // prefix: 'pix-',
  content: [
    "./src/components/**/*.{html,vue,js,ts,jsx,tsx}",
    "./demo/**/*.{html,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: [ 'PixelOperator', 'roboto', 'sans-serif' ],
        'pixel-sc': [ 'PixelOperatorSC', 'roboto', 'sans-serif' ],
      }
    },
  },
  plugins: [],
}

