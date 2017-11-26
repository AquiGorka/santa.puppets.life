// webpack.config.js
var webpack = require('webpack');

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PROD__: JSON.stringify(JSON.parse(process.env.BUILD_PROD || 'false')),
  GOOGLE_APIKEY: JSON.stringify(process.env.GOOGLE_APIKEY),
  KURT_URL: JSON.stringify(process.env.KURT_URL)
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
      { test: /.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets:['react', 'es2015'] } },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  node: {
    fs: 'empty',
    net: "empty",
    tls: "empty"
  }
};
