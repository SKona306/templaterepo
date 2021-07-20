const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: '', //fuill in entry point
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
    devServer: {
      contentBase: './dist'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: '', //fill in title
        template: '', //fill in where you want it to end up
        inject: 'body'
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader"
        }
      ]
    }
  };