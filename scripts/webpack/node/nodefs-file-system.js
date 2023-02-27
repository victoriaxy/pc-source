/**
 * 基于node.js的fs将打包文件写入指定的磁盘位置
 */

const webpack = require('webpack');
const fs = require('fs');
const compiler = webpack({
    entry: './src/index.js',
    output: {
        filename: 'nodefsfile.js'
    }
});

compiler.run((err, stats) => {
    console.log("Running -----", err, stats);
    fs.readFile('./dist/nodefsfile.js', (err, data) => {
        fs.writeFileSync('./dist/fstest.js', data);
    })
    compiler.close((closeErr) => {
        console.log("Running Ened-----", closeErr);
    })
})