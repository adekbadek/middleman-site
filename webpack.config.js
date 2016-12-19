var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var webpack = require('webpack')

module.exports = {
  entry: {
    main: './source/javascripts/main.es6',
  },
  output: {
    path: __dirname + '/.tmp/dist',
    filename: '[name].js' // Template based on keys in entry above
  },
  resolve: {
    root: __dirname + '/source/javascripts'
  },
  module: {
    loaders: [
      {
        test: /\.es6$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.es6']
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
