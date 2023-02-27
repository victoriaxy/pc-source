/**
 * 对webpack的Node接口的打包方式的测试
 */
const webpack = require('webpack');

// 第三种方式：webpack参数中无回调函数时返回compiler实例
const compiler = webpack({
    entry: './src/index.js',
    output: {
      filename: 'bundle2.js'
    },
    devServer: {
        open: true,
        host: "localhost",
      },
});
  
// 一旦 webpack 检测到文件变更，就会重新执行编译
// 等价于 webpack --watch
// 与 webpack.config.js中的watchOption中的配置一致
const watching = compiler.watch(
    {
      // 更新延时
      aggregateTimeout: 100,
      // 轮询监听时间
      poll: undefined,
    },
    (err, stats) => {
      // err 编译过程中的报错
      // stats 代码编译过程中的有用信息,包括：错误和警告、计时信息、module和chunk信息等
      // 这里打印 watch/build 结果...
      console.log("Watching-----", err , stats);

    }
);

// 不允许在监听器关闭或者失效前 再次监听或执行
watching.close((closeErr) => {
    console.log('Watching Ended.');
});