
const path = require("path");

module.exports = {
    entry: "./src/EntryPoint",
    mode: "development",
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.html$/, use: "html-loader" },
            { test: /\.js$/, loader: "source-map-loader", enforce: "pre" },
            { test: /\.ts$/, loader: "ts-loader" },
            { test: /\.css$/, use: [ "style-loader", "css-loader" ] },
            { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
            { test: /\.(jpg|png|svg|gif)$/, use: { loader: "file-loader", options: { name: "[name].[ext]", outputPath: "img/", publicPath: "img/" } } },
            { test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/, use: { loader: "file-loader", options: { name: "[name].[ext]", outputPath: "fonts/", publicPath: "fonts/" } } },
            { include: path.resolve(__dirname, "node_modules/pixi.js"), loader: "transform-loader?brfs", enforce: "post" }
        ]
    },
    resolve: {
        extensions: [
            ".ts"
        ],
        alias: {
            "TweenLite": "node_modules/gsap/src/uncompressed/TweenLite"
        }
    },
    output: {
        filename: "output.js",
        path: path.resolve(__dirname, "../nginx/scrumbs-client")
    },
    externals: [
        { "pixi.js": "PIXI" },
        { "TweenL": "TweenLite" },
        { "jquery": "jQuery" }
    ]

};