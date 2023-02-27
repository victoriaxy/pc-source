const path = require("path");

module.exports = {
    // 脚本运行环境，开启环境提供预定义的全局变量
    // TO DO.... 研究各个环境的全局变量有哪些？
    "env": {
        'browser': true,  // 浏览器全局变量
        'worker': true,   // web worker 全局变量
        'commonjs': true, // CommonJS全局变量和CommonJS作用域(用于使用Browserify/WebPack的纯浏览器代码)
        'node': true,     // node.js全局变量和作用域
        'jest': true,     // jest全局变量
    },
    // 脚本执行期间可访问的附加全局变量
    "globals": {
        consola: true,
        __webpack_init_sharing__: true,
        __webpack_share_scopes__: true,
        APP_NAME: true,
        APP_RELEASE_VERSION: true
    },
    "extends": ["airbnb-base"],
    // 指定重写或禁用的规则
    "overrides": [],
    parser: '@babel/eslint-parser',  // 默认解析器是Espree，现指定为一个围绕Babel解析器的包装，使其与ESLint兼容。
    // 解析器指定
    "parserOptions": {
        "ecmaVersion": "latest", // 使用最新版本的ECMA解析器，解析ECMA语法让eslint识别
        "sourceType": "module", // 代码是ECMAScript模块，请设置为"script"(默认值)或"module"
        'requireConfigFile': false  //
    },
    // 哪些第三方插件定义了额外的规则、环境、配置等供ESLint使用
    "plugins": ["vue"], 
    // 代码 规则定义，启用了哪些规则，错误级别是什么
    "rules": {
        'comma-dangle': 'off', // 结尾使用额外的逗号
        'quote-props': 'off', // 只对非法标识符的属性使用引号
        'max-len': 'off', // 最大长度限制
        'linebreak-style': 'off', // 强制统一的换行符
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': 'off', // 可打印消息
        'no-param-reassign': 'off', // 关闭禁止参数不可修改
        'func-names': 'off', // 匿名方法
        'camelcase': 'off', // 可用使用下划线标识私有变量
        'prefer-object-spread': 'off', // 对象解构赋值
        'no-underscore-dangle': 'off', // 使用下划线
        'prefer-destructuring': 'off', // 使用解构
        'no-mixed-operators': 'off', // 混合使用运算符
        'import/extensions': 'off', // import文件扩展名
        'import/no-dynamic-require': 'off', // 动态require，node中可用
        'import/no-extraneous-dependencies': 'off',
        'indent': ['error', 4], // 缩进4
    },
    settings: {
        'import/resolver': {
            alias: [
                ['apis', path.resolve(__dirname, 'packages/apis')],
                ['modules', path.resolve(__dirname, 'packages/modules')],
                ['app', path.resolve(__dirname, 'packages/my-app')],
                ['myjs', path.resolve(__dirname, 'packages/my-js')],
                ['mdn', path.resolve(__dirname, 'packages/my-mdn')],
                ['mysnabbdom', path.resolve(__dirname, 'packages/my-snabbdom')],
                ['myvue', path.resolve(__dirname, 'packages/my-vue')],
                ['common-components', path.resolve(__dirname, 'packages/components')],
            ],
        },
    }
}
