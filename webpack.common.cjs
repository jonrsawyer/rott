const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name].bundle.js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].bundle.css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules']
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        // TODO This needs to changed to something reasonable. What does Crank.js support?
                                        targets: {
                                            chrome: "80"
                                        }
                                    }
                                ],
                                "crank"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // Changing the template recompiles but does not trigger reload. Reload the browser manually.
        // Known issue: https://github.com/jantimon/html-webpack-plugin/issues/100
        new HtmlWebpackPlugin({
            template: 'template.html',
            scriptLoading: 'defer',
            inject: 'body'
        })
    ]
};
