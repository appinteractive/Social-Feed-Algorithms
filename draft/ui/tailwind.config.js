const colors = {
  'primary-blue': '#0e2730'
};

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors
    }
  },
  variants: {
    padding: ['responsive', 'hover', 'focus'],
    width: ['responsive', 'hover', 'focus'],
    borderStyle: ['responsive', 'hover', 'focus']
  },
  plugins: []
};
