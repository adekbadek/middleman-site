var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    main: './source/javascripts/main.es6',
  },
  output: {
    path: path.join(__dirname, '/.tmp/dist'),
    filename: '[name].js' // Template based on keys in entry above
  },
  module: {
    rules: [
      {
        test: /\.es6$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, '/source/javascripts'),
      "node_modules"
    ],
    // you can now require('file') instead of require('file.js')
    extensions: ['.js', '.json', '.es6']
  },
  plugins: [
    new ProgressBarPlugin({width: 200, clear: false}),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
}
