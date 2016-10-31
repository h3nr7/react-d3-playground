const Webpack             = require('webpack')
const path                = require('path')
const nodeModulesPath     = path.resolve(__dirname, 'node_modules')

module.exports = {
  resolve: {
    modulesDirectories: [
      'node_modules'
    ],
    root: [
      path.resolve(__dirname, 'client', 'common')
    ],
    extensions: ['', '.js', '.scss']
  },
  entry: [
    path.resolve(__dirname, 'client', 'app.js'),
    path.resolve(__dirname, 'client', 'style', 'main.scss'),
    'webpack/hot/dev-server',
    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:3000'
  ],
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "build/bundle.js"
  },
  module: {
    preloader: [
      {
        test: /\.js$/, // include .js files
        exclude: [nodeModulesPath],
        loader: "jshint-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: process.env.NODE_ENV === 'local' ?  'babel-loader!react-hot' : 'babel-loader',
        exclude: [nodeModulesPath, __dirname+'/client/**/__test__'],
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'client')]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ]
}
