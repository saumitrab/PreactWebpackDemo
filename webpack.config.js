path = require('path');

module.exports = {
  //input 
  entry: './src',

  //output
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  //transforms
  //sourcemaps
  devtool: 'source-map',

  //server
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true,
  },
}