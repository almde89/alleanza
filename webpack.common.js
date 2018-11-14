const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  entry: {
    css: './css/sb-admin.css',
    styles: './styles/main.scss',
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
          loader: 'babel-loader'
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
      , {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
};