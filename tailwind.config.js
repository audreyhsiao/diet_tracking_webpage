module.exports = {
  content: ["index.html"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    height: {
      144: '144px',
      256: '256px',
     },

     backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#faedc6',
      'beige':'#fff7dd',
      'green1':'rgba(160,209,150)',
      'green2':'#3e817e',
      'orange':'#fabb51',
      
     })
   },
  variants: {
    extend: {},
  },
  plugins: [],
}
