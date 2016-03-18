
module.exports = {
  cache: true,
  entry: './app/Application.js',
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /app/,
        loader: 'babel-loader',
        query: {modules: 'common'}
      },
      /*{
        test: /\.less$/,
        loader: 'style!css!less'
      },*/
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};