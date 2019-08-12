const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve:{
    alias:{
      '@res': path.resolve(__dirname,'./src/res/'),
    }
  },  
  module:{
    rules:[
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            envName: 'production',
            presets: [
              ['@babel/preset-env', {
                modules: false,
              }]
            ],
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'image-source-loader'
      },
      {
        test: /\.css$/,
        use: [{ loader: 'css-loader' }],
        // sideEffects: false,
      },
      // {
      //   include: [
      //     path.resolve(__dirname,'node_modules', 'rax-text'),
      //   ],
      //   sideEffects: false
      // }
    ]
  },
  mode: 'production',
  // mode: 'development',
  optimization: {
    providedExports: true,
    usedExports: true,
    sideEffects: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          warnings: 'verbose',
          compress: {
            global_defs: {
              'isDev': true,
            }
          }
        }
      })
    ],
  },
  stats: 'verbose',
  plugins: [
    // new BundleAnalyzerPlugin({
    //   generateStatsFile: true,
    //   statsFilename: 'main.json',
    //   defaultSizes: 'parsed',
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        'EXAMPLE': process.env.EXAMPLE,
      }
    }),
    new HtmlWebpackPlugin(),
  ],
}