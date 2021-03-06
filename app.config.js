/*
 * 应用差别化配置，区别于.env中定义的各种环境相关的配置项
 */
const argv = require('yargs').argv

const ENV_CONFIG = require('./env.config')
const SERVER_ENV_CONFIG = ENV_CONFIG[argv.mode.toUpperCase()]

const PACKAGE_CONFIG = require('./package.json')

module.exports = {
  // 路由映射表（当其中有一些是单页应用时，还需要NGINX针对BASE路径作匹配，进行fallback的指定)
  // TIP1: 每次新增一个新的页面时，都需要在此处进行入口配置
  // TIP2: 如果增加的是个单页应用页面，记得通知运维需要做对应的nginx配置
  // key是每个入口页的标记，开发者可以pick所需要调试的标记，在env.config.js的ROUTES字段中进行配置，默认值为*，表示所有构建输出所有页面
  ROUTE_MAP: {
    // FAST_TICKET_ORDER: {
    //   ENTRY: './src/views/agreement/privacy/main.js',
    //   TITLE: '四季人才-demo', // 网页标题
    //   // BASE: 'demo-mpa', // 当启用了vue-router时，可以定义history模式下的base路径
    // },
    WEB: {
      ENTRY: './src/views/web/main.js',
      TITLE: '四季人才', // 网页标题
      BASE: 'web', // 当启用了vue-router时，可以定义history模式下的base路径
    },
    PRIVACY_AGREEMENT: {
      ENTRY: './src/views/agreement/privacy/main.js',
      TITLE: '四季人才-隐私政策', // 网页标题
    },
    USER_AGREEMENT: {
      ENTRY: './src/views/agreement/user/main.js',
      TITLE: '四季人才-用户协议', // 网页标题
    },
    RELEASE_AGREEMENT: {
      ENTRY: './src/views/agreement/release/main.js',
      TITLE: '四季人才-岗位发布规则', // 网页标题
    },
    BUSINESS_AGREEMENT: {
      ENTRY: './src/views/agreement/businessLicense/main.js',
      TITLE: '四季人才-营业执照', // 网页标题
    },
    TALENT_AGREEMENT: {
      ENTRY: './src/views/agreement/talentLicense/main.js',
      TITLE: '四季人才-人才服务许可证', // 网页标题
    },
    H5: {
      ENTRY: './src/views/agreement/h5/main.js',
      TITLE: '四季人才-h5', // 网页标题
    },
  },
  PROJECT_NAME: PACKAGE_CONFIG.name, // 项目名，可以用于区分不同的工程（适用于多工程同项目）
  LIST_PAGE_SIZE: 30, // 列表数据的通用分页数
  MODAL_DURATION: 2000, // toast，dialog等模态框的持续时间
  // 后端接口服务的配置参数
  API: {
    // 后端API服务约定的格式
    CODE_KEY: 'code', // 接口用来判断请求结果状态的 key
    DATA_KEY: 'data', // 接口用来判断请求结果数据的key
    MESSAGE_KEY: 'message', // 接口用来判断请求结果信息的key
    SUCCESS_CODE: '00000', // 接口请求成功的code码
    UNAUTH_CODE: ['50001', 'A0315', 'A0316', 'A0317', 'A0318'], // token失效时的错误code码
    TIMEOUT: 60000, // 接口默认超时时间为60秒
  },
  // 将构建结果中静态资源的上传阿里云
  ASSETS_OSS: {
    // 资源引用的host地址
    HOST:
      SERVER_ENV_CONFIG.SERVER_ENV === 'production'
        ? 'https://mpm-front.oss-cn-hangzhou.aliyuncs.com'
        : 'https://mpm-front-test.oss-cn-hangzhou.aliyuncs.com',
    BUCKET: SERVER_ENV_CONFIG.SERVER_ENV === 'production' ? 'mpm-front' : 'mpm-front-test',
    KEY_ID: 'LTAIa2dE04R5knjA',
    KEY_SECRET: 'SIod0RrxZBJF8oy8kEhzn15Tdxnwr7',
    REGION: 'oss-cn-hangzhou',
  },
  // 程序依赖的一些第三方模块是否启用
  LOADER: {
    ERUDA: {
      ENABLE: true,
    },
    SENTRY: {
      ENABLE: true,
      DEBUG: 0,
      DSN: '', // 服务地址
    },
  },
  // Mock服务的地址
  MOCK_SERVER: {
    HOST: '127.0.0.1',
    PORT: 19999,
    // MOCKS:'',        // 默认读取项目根目录下的/mock目录
  },
}
