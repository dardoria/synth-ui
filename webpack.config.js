var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    vkeys: "./src/synths/vkeys"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "synth_ui.[name].js",
    library: ["synth_ui", "[name]"],
    libraryTarget: "var"
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: path.join(__dirname, 'node_modules/paper/dist/paper-full.js'), to: 'paper.js'}
    ])
  ],
  externals: {
    'paper': 'paper'
  },
  resolve: {
    alias: {
      'paper': 'paper/dist/paper-full.js'
    }
  },
  module: {
    loaders: [
      { test: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
      }
    ]
  }
};
