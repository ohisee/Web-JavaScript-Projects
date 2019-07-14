const path = require('path');
const ExtractCssTextPlugIn = require('mini-css-extract-plugin');
const HtmlWebPackPlugIn = require('html-webpack-plugin');

const extractCssPlugIn = new ExtractCssTextPlugIn({
  filename: 'css/main.css'
});

module.exports = {
  entry: {
    main: ['./index.js']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },

  devServer: {
    port: 3001,
    open: false, // avoid open default browser
    contentBase: './dist'
  },

  // Generate source map
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          ExtractCssTextPlugIn.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true } 
          }, 
          {
            loader: "sass-loader",
            options: { sourceMap: true } 
          }
        ]
      }
    ]
  },

  plugins: [
    extractCssPlugIn,
    
    new HtmlWebPackPlugIn({
      template: './index.html',
      filename: 'index.html',
      inject: true
    }),
  ]

};
