const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/blocks/logo/img'),
                    to: path.resolve(__dirname, './dist/assets/img')
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: './pages/ui-kit/index.pug'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    devServer: {
        port: 4200
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.pug$/,
                use: 'pug-loader?pretty=true'
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    }
}