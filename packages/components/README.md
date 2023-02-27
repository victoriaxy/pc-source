#### 公共组件库

packages.json文件属性说明

```
{
  "name": "@xy/components",  // 模块名
  "version": "1.0.0",    // 版本
  "description": "",   // 模块描述
  "main": "index.js",   // 模块入口
  "scripts": {     // 模块执行脚本定义
    "build": "webpack --mode=production --node-env=production --json > result.json --progress --profile",
    "build:dev": "webpack --mode=development",
    "build:prod": "webpack --mode=production --node-env=production",
    "watch": "webpack --watch",
    "serve": "webpack serve"
  },
  "keywords": [],   
  "author": "",   // 模块创建作者
  "license": "ISC",  // 
  "dependencies": {},  // 开发环境依赖
  "devDependencies": {},  // 生产环境依赖
  // 一般用在插件开发中，可以该依赖中声明的包是否在主系统中下载。
  // 若主系统中已经在dependencies或devDependencies显示声明核心依赖的包，则该声明的包就不会在主系统中下载；
  // 反之，就会下载，并提升到node_modules根目录,达到扁平化处理。
  "peerDependencies": {}, 

}

```
