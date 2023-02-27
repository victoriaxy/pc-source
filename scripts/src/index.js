console.log("==================scripts脚手架模块的入口======================")

const test = () => {
    console.log("测试")
}

console.log("HMR====", module.hot);

module.exports = test;