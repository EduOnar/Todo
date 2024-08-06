
const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin   = require('css-minimizer-webpack-plugin');
const CopyPLugin           = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    output: {
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /style\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /style\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            /*{
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            }*/
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPLugin({
            patterns: [
                {from: 'src/assets', to: 'assets/'}
            ]
        })
    ]
}