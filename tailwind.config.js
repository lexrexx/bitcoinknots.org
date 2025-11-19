/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'Ariel', 'sans-serif'],
    },
    colors: {
      white: '#FFFFFF', // pure-white
      black: '#000000', // pure-black
      brand: '#FF5E2C', // tiger-flame (killer-orange)
      vanil: '#FFE5C4', // papaya-whip (off-white)
      onyx:  '#140F11', // onyx (off-black)
      // https://coolors.co/ff5e2c-140f11-000000-ffe5c4-ffffff
      // Before
      // brand: '#FC6435', // tiger-flame (killer-orange) *
      // vanil: '#FFEFD5', // papaya-whip (off-white) *
      // Other Tryouts
      // brand: '#FD7E14', // omg21
      // brand: '#F7931A', // carrot-orange
      // brand: '#f9613e', // tomato (main mockups)
      // brand: '#FF6220', // tiger-flame (killer-orange, lighter)
      // brand: '#FF5F25', // tiger-flame (killer-orange, nautral ***chosen)
      // brand: '#FF5C29', // tiger-flame (killer-orange, darker)
      // onyx:  '#0C090D', // onyx (off-black)
      // onyx:  '#0C090D', // onyx (off-black) *
      // onyx:  '#1A1620', // shhadow-grey (lighter-onyx)
      // vanil: '#FEF1EC', // seashell (colder)
      // vanil: '#FFF5E8', // old-lace (lighter vanil)
      // vanil: '#FFE9C6', // papaya-whip (off-white)
      // https://coolors.co/ff6220-ff5c29-140f11-140e0e-100d12-140f13-140e0e-120d0e
    },
    extend: {
      padding: {
        '1/2': '50%',
        'full': '100%',
      },
    },
  },
  plugins: [],
}
