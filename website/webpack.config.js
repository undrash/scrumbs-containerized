

const path = require( "path" );
const webpack   = require( "webpack" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const CopyWebpackPlugin = require( "copy-webpack-plugin" );


const titles = {
    index: "Home",
    subscribe: "Subscribe"
};



module.exports = {

    entry: {
        index: "./src/resources/js/index.js",
        subscribe: "./src/resources/js/subscribe.js"
    },

    mode: "production",

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
                "SERVICE_URL": JSON.stringify( "https://subscribe.scrumbs.app/http" )
            })

        ]).concat([

            new CopyWebpackPlugin([{
                from: "src/resources",
                ignore: [ "*.js" ],
                to: "resources"
            }])

        ])

};