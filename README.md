# vue-scaffold-mpa


- [x] 重新调整了项目的目录组织结构
- [x] 抽出env等环境变量配置到专门的env.config下
    - [x] 端口号修改支持
- [x] app.config配置项抽取
- [x] vue.config优化
    - [x] 合并了BUILD_INFO的一些日志信息
    - [x] 抽取本地开发环境的代理表

## TODO
- [x] server目录下与taro项目的结合
- [x] 从vue-scaffold-mobile工程中迁移有用的模块
- [ ] 丰富脚手架示例及文档
- [x] 支持单页面应用使用vue-router和简单的数据中转
- [x] 支持开发环境下针对单页面应用的路由在history模式下，可以rewrite（需要配置app.config中的ROUTE_MAP进行配置）
- [ ] 生产构建时，支持依赖的第三方包独立提取为种个模块
- [x] 改进vendor中的各类第三方有用组件的引用方式(已改进vant和loader)
- [x] 改进http模块
- [ ] 接入mock server服务

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
