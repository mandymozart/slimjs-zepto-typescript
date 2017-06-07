const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")
const path = require("path");

module.exports = {
    entry: {
        'polyfills': './src/polyfills.js',
        'vendor': './src/vendor.ts',
        'cart': './src/cart.ts',
        'app': './src/app.ts',
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build")
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    // devtool: "inline-source-map",
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // https://www.npmjs.com/package/zepto-webpack
        new webpack.ProvidePlugin({
            $: 'zepto-webpack'
        })
    ]
};
