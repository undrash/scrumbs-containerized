

const path = require( "path" );
const webpack   = require( "webpack" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const CopyWebpackPlugin = require( "copy-webpack-plugin" );


const titles = {
    index: "Home",
    subscribe: "Subscribe",
    terms: "Terms",
    downloads: "Downloads"
};



module.exports = {

    entry: {
        index: "./src/resources/js/index.js",
        subscribe: "./src/resources/js/subscribe.js"
    },

    mode: "development",

    output: {
        filename: "resources/js/[name].js",
        path: path.resolve( __dirname, "../nginx/scrumbs-website" )
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },

    plugins:
        Object.keys( titles ).map( function( id ) {

            return new HtmlWebpackPlugin({
                chunks: [ "common", id ],
                filename: id + ".html",
                template: "!!html-webpack-plugin/lib/loader.js!./src/" + id + ".html",
                inject: "body",
                title: titles[id],
                app_url: "/subscribe.html"
            });

        }).concat([

            new webpack.DefinePlugin({
                "SERVICE_URL": JSON.stringify( "http://192.168.99.100:4300/http" )
            })

        ]).concat([

            new CopyWebpackPlugin([{
                from: "src/resources",
                ignore: [ "*.js" ],
                to: "resources"
            }]),

            new CopyWebpackPlugin([{
                from: "src/favicon.ico",
                to: "./"
            }])

        ])

};