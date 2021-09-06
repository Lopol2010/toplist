const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

const devMode = process.env.NODE_ENV !== "production"

module.exports = {
    mode: 'development',
    // mode: 'production',
    target: 'node',

    entry: {
        server: './src/server.ts',
        // info: './src/views/style/info.sass',
        // toplist: './src/views/style/toplist.sass',
        // 'info.hbs': './src/views/info.hbs'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'css/[name].css'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".sass"],
    },
    externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()],
    module: {
        rules: [
            // { test: /\.css/, type: "asset/resource"},
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // {
                    //     loader: "file-loader",
                    //     options: {
                    //         name: '[name].[contenthash].css',
                    //         // outputPath: 'css'
                    //         publicPath: 'css'
                    //     }
                    // },
                    "extract-loader",
                    // "style-loader",
                    // {
                    //     loader: "file-loader",
                    //     options: {
                    //         name: "css/[name].css"
                    //     }
                    // },
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     // options: { emit: false }
                    // },
                    "css-loader",
                    // "resolve-url-loader",
                    "sass-loader",
                ],
                type: "asset/resource"
            },
            {
                test: /\.(hbs)/,
                use: [
                    // "ref-loader"
                    "handlebars-loader",
                    "extract-loader",
                    "html-loader",
                ],
                // type: "asset/resource"
            },
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: "css/[name].css",
        //     // filename: c => { console.log(c); return "[id].css" }
        //     // chunkFilename: "[id].css",
        // }),
        // new CopyPlugin({
        //     patterns: [
        //         { from: "src/views/**/*.hbs", to: "views/[name][ext]" },
        //         { from: "views/**/*.ect", to: "../dist/[path][name][ext]", context: "src/" },
        //         // { from: "static/*", to: "static/" },
        //     ],
        // }),
    ],
};