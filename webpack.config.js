const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let mode='development'

if(process.env.NODE_ENV && process.env.NODE_ENV.trim()=='production'){
    mode='production'
}

console.log(mode)
module.exports={
    mode:mode,
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.s?css$/i,
                use:[ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]
            }
        ]
    },
    
    plugins:[
        new MiniCssExtractPlugin(),
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