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
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: !devMode,
        // assetModuleFilename: 'css/[name].css'
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
                    // "extract-loader",
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
                    // "css-loader",
                    // { loader: 'css-loader', options: { importLoaders: 1 } },
                    // "resolve-url-loader",
                    "sass-loader",
                ],
                type: "asset/resource",
                generator: {
                    filename: "css/[name].[contenthash:5].css",
                }
            },
            {
                test: /\.(ejs)/,
                use: [
                    {
                        loader: "compile-ejs-loader",
                        options: {
                        }
                    },
                ],
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
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
    ],
};