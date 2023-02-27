### 🚀脚手架

---

一、项目描述

该项目使用webpack的Node接口完成打包发布，基于该项目可实现模板创建、文件拷贝等等长用功能。

Planning：完成一个基于monorepos + webpack + vue 的微服务框架搭建脚手架。![1677140308194](image/README/1677140308194.png)

二、项目目录：

* component     模板组件
* template         子项目模板读取
* webpack          webpack相关打包公共配置处理函数
* component.js      模板组件构建脚手架
* template.js         子项目构建脚手架，支持vue、webpack、vite、react等不同框架
* run.js             对webpack的Node接口run的打包文件。
* watch.js        对webpack的Node接口watch的打包文件。
* memfs-file-system.js   基于memfs将打包文件读到内存
* nodefs-file-system.js   基于node.js的fs文件系统将打包文件重写到指定文件
