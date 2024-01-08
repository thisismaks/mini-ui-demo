const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProd = process.env.NODE_ENV === 'production';


const globalCssFileNames: string[] = [];

module.exports = {
  context: process.cwd(),
  entry: {
    main: path.resolve(process.cwd(), 'src/index.tsx'),
  },
  resolve: {
    modules: [path.resolve(process.cwd(), 'src')],
    extensions: ['.ts', '.tsx', '.js', '.jsx', ".css", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProd ? '[hash:base64:5]' : '[folder]__[local]--[hash:base64:5]',
                auto: (resourcePath: string) => {
                  const isGlobalCssPath = globalCssFileNames.some(globalCssFileName => (
                     resourcePath.includes(globalCssFileName)
                  ))
                  return !isGlobalCssPath
                },
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash:5][ext][query]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
        generator: {
          //If emitting file, the file path is
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
        generator: {
          filename: 'svg/[hash:5][ext][query]',
        },
      },
    ],
  },
};
