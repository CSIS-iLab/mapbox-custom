// webpack v4
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const webpack = require('webpack')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? '[name].js' : '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    open: true,
    watchContentBase: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      },
      {
        test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          discardDuplicates: { removeAll: true },
          discardComments: { removeAll: true }
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new CopyWebpackPlugin([
      {
        from: './src/img/logo.jpg',
        to: './img/logo.jpg',
        toType: 'file'
      },
      {
        from: './src/img/red.png',
        to: './img/red.png',
        toType: 'file'
      },
      {
        from: './src/img/orange.png',
        to: './img/orange.png',
        toType: 'file'
      },
      {
        from: './src/img/yellow.png',
        to: './img/yellow.png',
        toType: 'file'
      },
      {
        from: './src/img/green.png',
        to: './img/green.png',
        toType: 'file'
      },
      {
        from: './src/img/blue.png',
        to: './img/blue.png',
        toType: 'file'
      },
      {
        from: './src/img/highlight.png',
        to: './img/highlight.png',
        toType: 'file'
      }
    ]),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      configFile: './stylelint.config.js',
      files: './src/scss/*.scss',
      syntax: 'scss'
    })
  ]
}
