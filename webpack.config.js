const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
// const { DefinePlugin } = require('webpack')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const Dotenv = require('dotenv-webpack')

const resolver = {
  Components: path.resolve(__dirname, 'src/Components'),
  Locales: path.resolve(__dirname, 'src/locales'),
  Router: path.resolve(__dirname, 'src/Router/index.jsx'),
  Screens: path.resolve(__dirname, 'src/Screens'),
  Styles: path.resolve(__dirname, 'src/Styles'),
  Ui: path.resolve(__dirname, 'src/Ui'),
  Utils: path.resolve(__dirname, 'src/Utils'),
  Helper: path.resolve(__dirname, 'src/Utils/Helper'),
  CustomHooks: path.resolve(__dirname, 'src/CustomHooks'),
  Assets: path.resolve(__dirname, 'src/Assets'),
}

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: ['url-loader', 'file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: resolver,
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3001,
  },
  plugins: [
    // new DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('development'),
    //   },
    // }),
    // new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: './index.html',
    }),
  ],
}
