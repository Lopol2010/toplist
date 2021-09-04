const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

const devMode = process.env.NODE_ENV !== "production"

module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        server: './src/server.ts',
        info: './src/views/style/info.sass',
        toplist: './src/views/style/toplist.sass'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".sass"],
    },
    externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()],
    // externals: { 
    //     'sqlite3':'commonjs sqlite3', 
    //     'koahub-handlebars':'commonjs koahub-handlebars', 
    //     'ect':'commonjs ect', 

    // },
    module: {
        rules: [
            { test: /\.css/, },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
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
            // {
            //     test: /\.(html|hbs)$/i,
            //     loader: "html-loader",
            // },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            // chunkFilename: "[id].css",
        }),
        // new CopyPlugin({
        //     patterns: [
        //         // { from: "src/views/style/*", to: "views/style/[name][ext]" },
        //         { from: "static/*", to: "static/" },
        //     ],
        // }),
    ],
};