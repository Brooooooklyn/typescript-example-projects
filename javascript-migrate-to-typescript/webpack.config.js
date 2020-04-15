const { join } = require('path')
const { cpus } = require('os')
const Happypack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const threadPool = Happypack.ThreadPool({ size: cpus().length - 1 })

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: './index.tsx',

  mode: 'production',

  output: {
    filename: '[name].[hash].js'
  },

  context: join(__dirname, 'src'),

  resolve: {
    alias: {
      '~': join(__dirname, 'src'),
    },

    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?/,
        use: 'happypack/loader?id=ts',
        exclude: /node_modules/,
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'initial',
      minSize: 0,
      minChunks: 1,
      maxInitialRequests: Infinity,
      maxAsyncRequests: Infinity,
      cacheGroups: {
        react: {
          name: 'react',
          test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
          priority: 100
        },
        react: {
          name: 'polyfill',
          test: /[\\/]node_modules[\\/]core-js[\\/]/,
          priority: 100
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          priority: 90
        }
      }
    }
  },

  plugins: [
    new Happypack({
      id: 'ts',
      threadPool,
      loaders: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            happyPackMode: true,
            configFile: join(__dirname, 'tsconfig.json'),
            getCustomTransformers: join(__dirname, 'transformer.js'),
            experimentalWatchApi: true,
          },
        }
      ]
    }),

    new HtmlWebpackPlugin({
      template: join(__dirname, 'index.html'),
    }),
  ],
}
