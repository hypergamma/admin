var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, ''),
  entry: {
    //cancel: './Cancel/Cancel',
    //Return: './Return/Return',
    template: './client/template/template'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query:
        {
          presets:['es2015','react']
        }
      }
    ]
  },
  resolve: {
    // Allow require('./blah') to require blah.jsx
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    // 압축하는 겁니다.
    // new webpack.optimize.UglifyJsPlugin({minimize: true}),
    // new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'})
  ]
};
