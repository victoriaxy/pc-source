/**
 * 对webpack的Node接口的打包方式的测试
 */
const webpack = require('webpack');

// 第一种方式
// webpack({}, (err, stats) => {
//     if(err || stats?.hasErrors) {
//         console.log("Error ----- ", err, stats);
//     }
// })

// 第二种方式：webpack参数中无回调函数时返回compiler实例
const compiler = webpack({
    entry: './src/index.js',
    output: {
      filename: 'bundle1.js'
    },
    devServer: {
      open: true,
      host: "localhost",
    },
});
  
// 运行
compiler.run((err, stats) => {
    // err 编译过程中的报错
    // stats 代码编译过程中的有用信息,包括：错误和警告、计时信息、module和chunk信息等
    // stats?.hasErrors()
    // stats?.hasWarnings()
    // stats?.toJson()   以 JSON 对象形式返回编译信息 stats.toJson('minimal');
    // stats?.toString() 以格式化的字符串形式返回描述编译信息
    // console.log("Running-----", err, stats);
    // TO DO....
    compiler.close((closeErr) => {
      console.log("Running Ened-----", closeErr);
    });
})