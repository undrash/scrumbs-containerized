

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');






module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../nginx/scrumbs-website')
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/resources',
            to: 'resources'
        }]),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Scrumbs',
            app_url: "http://192.168.99.100:4200"
        })
    ]
};