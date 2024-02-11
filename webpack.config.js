/* eslint-disable */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
             },
            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader, // Extract css to separate file
                  'css-loader', // translates CSS into CommonJS
                  'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
                  'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
            },

            {
                test: /\.(eot|ttf|woff|woff2)$/,
                generator: {
                    filename: './fonts/[name][ext]'
                }
                /*use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                  },
                ]*/
            },
        
            {
                test: /\.(svg|png|jpg|jpeg|webp)$/,
                generator: {
                    filename: './static/[name][ext]',
                },
                /*use: [
                  {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'static/'
                    }
                  },
                ]*/
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'CPS',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false,
            }
        }),

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/img',
                    to: 'img',
                },
            ],
        })
    ],
}