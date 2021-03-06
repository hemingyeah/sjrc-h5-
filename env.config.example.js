// 这是一个示例配置文件，请各开发者复制为env.config.js，配置自已的本地开发环境
// 该文件请不要随意变动，若有变动，请告知所有开发者

module.exports = {
  // 本地开发时，指需要构建的页面，路径索引从src开始，默认main.js为主入口
  // 构建到生产环境时，为全量构建
  ROUTES: '*', // 也可以只指定自已需要调试的页面['DEMO_MPA','DEMO_SPA'],
  // 本地开发服务端口号
  PORT: 8080,
  // 在开发环境中模拟NGINX时的代理配置
  PROXY: {
    // 默认情况下所有后端接口都会通过/api/这个路径做转发
    '/api/': '/api/',
  },
  // 开发环境
  DEV: {
    // 构建的目标环境
    SERVER_ENV: 'development',
    // 后端服务环境地址
    API_HOST: 'http://192.168.4.164',
    // cdn资源服务地址
    CDN_HOST: 'https://panshi-ceshi.meipingmi.com.cn/', // 兼容老的一些上传的图片地址，统一加了/后缀
  },
  // 测试环境
  TEST: {
    SERVER_ENV: 'test',
    API_HOST: 'https://psqywxtest.meipingmi.com.cn',
    CDN_HOST: 'https://panshi-ceshi.meipingmi.com.cn/', // 兼容老的一些上传的图片地址，统一加了/后缀
  },
  // 预发环境
  RELEASE: {
    SERVER_ENV: 'release',
    API_HOST: 'https://saas-pre-app.91yunebao.com',
    CDN_HOST: 'https://panshi-on.meipingmi.com.cn/', // 兼容老的一些上传的图片地址，统一加了/后缀
  },
  // 正式环境配置
  PROD: {
    SERVER_ENV: 'production',
    API_HOST: 'https://saas-prod-app.91yunebao.com',
    CDN_HOST: 'https://panshi-on.meipingmi.com.cn/', // 兼容老的一些上传的图片地址，统一加了/后缀
  },
}
