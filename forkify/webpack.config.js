const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/js/index.js'],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // filename: 'js/[name].[chunkhash].bundle.js'
    filename: 'js/bundle.js'
  },
  // mode: 'development',
  devServer: {
    port: 3001,
    open: false, // avoid open default browser
    contentBase: './dist'
  },
  module: {
    rules: [
      { // Babel loader
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/src/index.html',
      inject: true
    })
  ]
};