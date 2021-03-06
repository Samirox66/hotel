const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/blocks/logo/img'),
          to: path.resolve(__dirname, './dist/assets/img'),
        },
        {
          from: path.resolve(__dirname, './src/blocks/contacts/img'),
          to: path.resolve(__dirname, './dist/assets/img'),
        },
        {
          from: path.resolve(__dirname, './README.md'),
          to: path.resolve(__dirname, './dist'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'landing.html',
      template: './pages/landing/landing.pug',
      favicon: './assets/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'header-footer.html',
      template: './pages/ui-kit/header-footer.pug',
      favicon: './assets/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'cards.html',
      template: './pages/ui-kit/cards.pug',
      favicon: './assets/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'form-elements.html',
      template: './pages/ui-kit/form-elements.pug',
      favicon: './assets/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'colors-and-type.html',
      template: './pages/ui-kit/colors-and-type.pug',
      favicon: './assets/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'search-room.html',
      template: './pages/search-room/search-room.pug',
      favicon: './assets/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'room-details.html',
      template: './pages/room-details/room-details.pug',
      favicon: './assets/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'registration.html',
      template: './pages/registration/registration.pug',
      favicon: './assets/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-in.html',
      template: './pages/sign-in/sign-in.pug',
      favicon: './assets/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './pages/main/main.pug',
      favicon: './assets/favicon.ico',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  devServer: {
    port: 4200,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/,
        use: 'pug-loader?pretty=true',
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.(svg|ttf|woff)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ],
  },
};
