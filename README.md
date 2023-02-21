基于pnpm + monorepos管理对源代码学习的个子项目

一、架构说明

    基于pnpm + monorepos + vite对各框架源码进行实践学习。

    pnpm：

    monorepos：

二、环境配置

1. node >= 16 (https://pnpm.io/zh/cli/env)
2. pnpm >= 7
3. 必须-Eslint插件，设置-->打开json设置-->setting.json中添加

   ```
   "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
   }
   ```
4. 必须-Volar插件
5. 必须-Tailwind CSS IntelliSense插件
6. 推荐: Git Graph/GitLens/Vue-devtools chrome扩展

三、目录说明

 -- apis              // axios及相关服务调用封装
 -- components        // 公用组件封装
 -- packages          // 子项目根目录
    -- my-snabbdom    // 对snabbdom虚拟dom库的虚拟节点、h函数、diff算法的学习，vue的diff就是基于此的优化
    -- my-js          // 对js基础的实践学习
    -- my-mdn         // 对mdn中的worker等的实践学习
    -- my-ts          // 对typescript的学习
    -- my-vue         // 对vue2/3源码对比学习实践，总结升级的改进；对VueUse，VueRouter，Vue-Cli等的源码实践
    -- my-es          // 对es6的知识点学习和实践

 四、项目涵盖内容

1. pnpm
   * 是什么？
   * 相比较npm/yarn，有什么优势，为什么有这些优势？解决了什么问题，怎么解决的？
   * 硬链接和软链接是什么？哪些属于硬链接？哪些属于软链接？
   * 硬链接是怎么连接的？
   * 软链接是怎么连接的？
2. monorepos
   * 是什么？如何理解发挥的功能？
   * 怎么实现代码管理的？
   * 子项目间如何互相调用？
   * 如何引入公共模块？
   * 原理？
3. vue
   * 虚拟节点
   * diff算法
   * 模板编译
   * vue2/3对比：逻辑组织、逻辑复用、性能
4. vueuse
   * hooks?
   * 自己实现怎么实现？
   * 常用的hooks有哪些，各是什么功能？
5. vuecli
6. vuerouter
   * 路由原理
7. es6
   * 基础
8. typescript
   * 基础
9. javascript
   * 基础
