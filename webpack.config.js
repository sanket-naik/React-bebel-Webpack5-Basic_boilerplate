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
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    },
    devtool:'source-map',
    devServer:{
        static:'./dist',
    }
}