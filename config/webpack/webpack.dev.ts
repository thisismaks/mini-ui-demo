const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.ts');

const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(process.cwd(), './demo'),
    filename: '[name].bundle.[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules']
  },
  entry: {
    main: path.resolve(process.cwd(), 'src/index.tsx'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'mini-ui-demo',
      template: path.resolve(process.cwd(), './src/template.html'),
      filename: 'index.html',
    }),
    new ESLintPlugin(),
    new webpack.WatchIgnorePlugin({paths: [/scss\.d\.ts$/, /(test|snap)\.(ts|tsx)$/]}),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}', // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
      },
    }),
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 9090,
    contentBase: './demo',
    clientLogLevel: 'silent',
    historyApiFallback: true,
  },
});
