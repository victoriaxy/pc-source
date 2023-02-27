/**
 * 基于memfs将打包文件写入内存
 */

const webpack = require("webpack");
const { createFsFromVolume, Volume} = require('memfs');

// Volumn系统卷，createFsFromVolumn从系统卷创建输入输出流
const fs = createFsFromVolume(new Volume());

const compiler = webpack({
    entry: './src/index.js',
    output: {
        filename: 'memfsfile.js'
    }
});

compiler.outputFileSystem = fs;
compiler.run((err, stats) => {
    console.log("Running-----", err, stats);
    // TO DO....
    const content = fs.readFileSync('./dist/memfsfile.js');
    console.log("===",content)
    compiler.close((closeErr) => {
      console.log("Running Ened-----", closeErr);
    });
})