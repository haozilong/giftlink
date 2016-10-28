var webpack = require("webpack");
module.exports = {
    entry: {
        'introduction': './js/page/introduction.js',
        'test': './js/page/test.js'
    },
    output: {
        path: __dirname,
        filename: './dest/js/[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader', // 'babel-loader' is also a legal name to reference 
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.css$/,
            loader: 'style!css'//添加对样式表的处理
        }
        ]
    }

}