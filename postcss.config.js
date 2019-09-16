const isProduction = process.env.NODE_ENV === 'production';
const purgeCss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    isProduction
      ? purgeCss({
          content: ['./src/*.html', './src/assets/css/*.css'],
        })
      : '',
  ],
};
