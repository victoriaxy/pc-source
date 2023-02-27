// 手动实现基于webpack-dev-server启动项目
// 执行命令： node server.js
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const compiler = webpack({
    entry: './src/index.js',
    output: {
        filename: './dist/server.js'
    },
    // devServer: {
    //     contentBase: './'
    // }
});

const server = new WebpackDevServer({open: true}, compiler);

// 1、启动项目
// const runServer = async () => {
//     console.log("Starting server............");
//     await server.start();
// }

// runServer();

// 2、停止服务器
// const stopServer = async () => {
//     console.log('Stopping server...');
//     await server.stop();
// };

// 3、启动服务器并用回调函数处理一些操作
server.startCallback(() => {
    console.log('Successfully started server on http://localhost:8080');
});

// 4、停止服务回调函数停止服务器
const stopServer = () => {
    server.stopCallback(() => {
        console.log("StopCallBack Server Stoped!")
    }) 
}  

// 5、异步返回内部的IPV4、IPV6地址
const getIp = async() => {
    const v4 = await WebpackDevServer.internalIP('v4');
    const v6 = await WebpackDevServer.internalIP('v6');
    console.log(" v4===== ", v4);
    console.log(" v6===== ", v6);
}
getIp();

// 5、同步返回内部IPv4/IPv6地址
const getSyncIp = async() => {
    const v4 = WebpackDevServer.internalIPSync('v4');
    const v6 = WebpackDevServer.internalIPSync('v6')
    console.log("sync v4===== ", v4);
    console.log("sync v6===== ", v6);
}
getSyncIp();

setTimeout(() => {
    stopServer();
}, 5000);
