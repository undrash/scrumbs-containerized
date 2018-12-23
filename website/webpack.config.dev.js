

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

    mode: "development",

    output: {
        filename: "resources/js/[name].js",
        path: path.resolve( __dirname, "../nginx/scrumbs-website" )
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
                "SERVICE_URL": JSON.stringify( "http://192.168.99.100:4000" )
            })

        ]).concat([

            new CopyWebpackPlugin([{
                from: "src/resources",
                ignore: [ "*.js" ],
                to: "resources"
            }])

        ])

};