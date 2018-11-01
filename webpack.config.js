const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production', 
  
  entry: {
    index: './src/index.js',
    vendor: [
      '@material-ui/core/Button', 
      '@material-ui/core/Dialog', 
      '@material-ui/icons/FirstPage',
      'react',
      'prop-types'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015', "stage-0"]
        } 
      },
      { 
        test: /\.css$/, 
        use: ['style-loader','css-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['lib']),
    // new SyntaxDynamicImportPlugin()
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
