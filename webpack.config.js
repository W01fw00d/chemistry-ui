var path = require('path');
const pkg = require('./package.json');

const libraryName = pkg.name;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'commonjs2',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.(woff2?|jpe?g|png|gif|ico)$/,
        loader: 'url-loader',
        options: {
          limit: Infinity,
        },
      },
    ],
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'react-router-dom': 'commonjs react-router-dom',
  },
};
