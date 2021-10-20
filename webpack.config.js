const path = require('path');
const pkg = require('./package.json');

const libraryName = pkg.name;

module.exports = {
  entry: './src/index.js',
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'react-router-dom': 'commonjs react-router-dom',
  },
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(js|jsx)?$/,
        use: 'babel-loader',
      },
      {
        loader: 'url-loader',
        options: {
          limit: Infinity,
        },
        test: /\.(woff2?|jpe?g|png|gif|ico)$/,
      },
    ],
  },
  output: {
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, './lib'),
    publicPath: '/dist/',
  },
};
