const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path');

let mode='development'

if(process.env.NODE_ENV && process.env.NODE_ENV.trim()=='production'){
    mode='production'
}

console.log(mode)
module.exports={
    mode:mode,
    entry:"./src/index.js",
    module:{
        rules:[
            {
                test:/\.(png|jpg|svg|gif)$/i,
                type:"asset",

            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', ["@babel/preset-react", {
                            runtime: 'automatic',
                        }]]
                    }
                }
            },
            {
                test:/\.s?css$/i,
                use:[ 
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:""
                        }
                    }, 
                    "css-loader", 
                    "sass-loader" ]
            },
        ]
    },

    resolve:{
        extensions:[".js", ".jsx"]
    },
    output: {
        assetModuleFilename: 'assets/[name].[hash].[ext]',
        filename:"[name].bundle.js",
        path:path.resolve(__dirname, "build")
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            minify:false
        }),
        new CleanWebpackPlugin()
    ],

    resolve:{
        extensions:[".js",".jsx"]
    },

    devtool:'source-map',
    devServer:{
        static:'./dist',
        hot:false
    }
}