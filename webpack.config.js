const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production', 
  
  entry: {
    index: './src/index.ts',
    vendor: [
      '@material-ui/core/Button', 
      '@material-ui/core/IconButton', 
      '@material-ui/icons/KeyboardArrowLeft',
      'react',
      'prop-types'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'core'),
    libraryTarget: 'commonjs2'
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss']
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
        test: /\.tsx?$/, 
        exclude: /node_modules/, 
        loader: 'ts-loader'
      },
      { 
        test: /\.(css|scss)$/, 
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['core'])
  ],
}
