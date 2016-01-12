// webpack.config.js
var webpack = require('webpack');

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var definePlugin = new webpack.DefinePlugin({
  __DEV_iOS__: JSON.stringify(JSON.parse(process.env.BUILD_DEV_IOS || 'true')),
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PROD__: JSON.stringify(JSON.parse(process.env.BUILD_PROD || 'false'))
});

module.exports = {
  entry: [
	'./src/index.js'
  ],
  output: {
  	path: './public/js/',
    filename: 'index.js'       
  },
  plugins: [
  	definePlugin
  ],
  module: {
    loaders: [
      { test: /.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets:['react', 'es2015'] } }
    ]
  }
};