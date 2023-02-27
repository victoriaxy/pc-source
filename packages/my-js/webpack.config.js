// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './index.js',
    output: {
        publicPath: path.resolve(__dirname, 'dist'), // ../../dist/myjs
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
};

// 导出格式为函数时，可接受命令中的参数，但 不能在bundle 代码中使用这些内置环境变量
module.exports = (env, args) => {
    // console.log('===', env, args);
    // === { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true } {
    //   mode: 'development',
    //   env: { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true }
    // }
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
