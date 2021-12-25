module.exports = {
  important: true,
  //Purging for Production is configured in PostCSS Config
  purge:{    
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    extend: {
      minHeight: {
        '93p': '93vh',
      },
      container: {
        center: true,
      },
      fontFamily: {
        'roboto': ['"Roboto"', 'cursive']
      }
    },
  },
  variants: {},
  plugins: [],
};
