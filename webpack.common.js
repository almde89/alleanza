const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  entry: {
    main: './main.js'
  },
  output: {
    filename: '[name].js?[hash]',
    path: path.resolve(__dirname, './public/dist')
  }
  , plugins: [new webpack.SourceMapDevToolPlugin()
    , new CleanWebpackPlugin(['./public/dist'])
    , new HtmlWebpackPlugin({
        title: 'Output Management'
        , template: './index.html'
      })
  ]
  ,module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
            plugins: ['babel-plugin-transform-runtime']
          }
        }
      }
      ,{
        test: /\.ejs$/,
        exclude: /node_modules/,
        use: {
          loader: 'ejs-loader',
          options: {
            bundle: path.resolve(__dirname, './public/dist/[name].js')
          }
        }
      }
      ,{
        test:/\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
      ,{
        test:/\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader', {loader: 'css-loader', options: { importLoaders: 1 }}
          , {loader: 'postcss-loader', options: {
          plugins: function () {
            precss,
            autoprefixer
          }
        }}
        , {loader: 'sass-loader'}]
      }
      , { test: /\.woff(2*)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" }
      , { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};