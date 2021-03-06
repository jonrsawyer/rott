const merge = require('webpack-merge');
const common = require('./webpack.common.cjs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
});
