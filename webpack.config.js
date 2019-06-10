const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'production',
  // performance: {
  //   hints:'error'
  // },
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
            presets: [
              ['@babel/preset-env', {
                // useBuiltIns: 'entry',
                modules: false,
              }]
            ],
            plugins: [
              // "@babel/plugin-proposal-object-rest-spread",
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'image-source-loader'
      },
    ]
  },
  optimization: {
    // concatenateModules: false,
    // providedExports: true,
    // usedExports: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor_app',
          chunks: 'all',
          minChunks: 1,
        }
      }
    },
    minimizer: [
      // new UglifyJsPlugin({
      //   test: /\.js(\?.*)?$/i,
      //   uglifyOptions: {
      //     compress: {
      //       drop_console: true,
      //       dead_code: true,
      //       pure_getters: true,
      //     }
      //   }
      // }),
      new TerserPlugin({
        // test: /\.js(\?.*)?$/i,
        terserOptions: {
          warnings: 'verbose',
          // warnings: true,
          compress: {
            dead_code: true,
            // module: true,
            // side_effects: true,
            unused: true,
            global_defs: {
              'isDev': true,
            }
            // warnings: true,
          }
        }
      })
    ],
  },
  // stats: {
  //   maxModules: Infinity,
  //   optimizationBailout: true,
  //   moduleTrace: true,
  //   providedExports: true,
  // },
  stats: 'verbose',
  plugins: [
    // new WebpackDeepScopeAnalysisPlugin(),
    new BundleAnalyzerPlugin({
      // logLevel: 'warn',
      generateStatsFile: true,
      statsFilename: 'main.json',
      defaultSizes: 'parsed',
    }),
    new HtmlWebpackPlugin({

    }),
  ],
}