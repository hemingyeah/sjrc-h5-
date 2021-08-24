import _isEmpty from 'lodash/isEmpty'
import _merge from 'lodash/merge'
import urlUtil from 'url'
import userAgent from '@/utils/user-agent'

window.appBridge = {}

// 调用app指定的API
/**
 *
 * @param resolve
 * @param reject
 * @param key
 * @param options
 * @param hasReceive true 互调有返回值  false 只调不监控
 */
function invokeAPP(resolve, reject, key, options, hasReceive) {
  if (APIBridge.isIOSApp()) {
    // 注册
    registeriOSAPI(key, resolve, reject)

    // 调用
    if (window.webkit.messageHandlers[key]) {
      window.webkit.messageHandlers[key].postMessage(options || {})
    } else {
      // 判断下是否为h5环境，调用对应的H5方法
      reject('[ios] invoke method faild: ' + key)
    }
  } else if (APIBridge.isAndroidApp()) {
    registeriOSAPI(key, resolve, reject)
    // android待接入
    if (window.androidJSBridge[key]) {
      // console.log('我们调android方法的key', key)
      if (hasReceive) {
        // console.log('想要')
        // console.log('window.androidJSBridge[key]', window.androidJSBridge[key])
        if (options) {
          window.androidJSBridge[key](JSON.stringify(options))
        } else {
          // console.log('执行前window.androidJSBridge[key]', window.androidJSBridge[key])
          window.androidJSBridge[key]()
          // console.log('执行完window.androidJSBridge[key]')
        }
      } else {
        // console.log('不想要')  // 1、setAccessType is not defined  2、unable to fetch source code  3、 missing ) after argument list  4、 cannot read property remove of undefined
        let result
        // console.log('android 不互调')
        if (options) {
          // console.log('android key:%s option:%o', key, options)
          let callback = window.androidJSBridge[key](JSON.stringify(options))
          // console.log('android key:%s option:%o callback:%o', key, options, callback)

          result = callback ? JSON.parse(callback) : { status: 'success' }
        } else {
          let callback = window.androidJSBridge[key]()
          result = callback ? JSON.parse(callback) : { status: 'success' }
        }
        // console.log('android result', result)

        // console.log('six')
        if (result.status === 'success') {
          // console.log('seven')
          resolve(result.result)
          // console.log('eight')
        } else if (result.status === 'fail') {
          // console.log('nine')
          reject(result.result)
          // console.log('ten')
        }
      }
    } else {
      // 判断下是否为h5环境，调用对应的H5方法
      reject('[android] invoke method faild: ' + key)
    }
  } else {
    // h5环境
    // 因为可能接入的组件库不一样，所以独立配置
    // h5实现的方法，必须是一个promise
    if (APIBridge.plugins.H5 && APIBridge.plugins.H5[key]) {
      APIBridge.plugins.H5[key](options).then(resolve).catch(reject)
    } else {
      resolve('h5 调用')
      // 判断下是否为h5环境，调用对应的H5方法
      // reject('[web] invoke method faild: ' + key)
    }
  }
}

// iOS端注册API，新增加方法时，主动注册
// 这里的key名命令规则已经app端协商一致，如有不同或者自定义，需要告知app端
// 默认组合方式为 receive + app端的调用名称大驼峰，如app端调用为getToken，被app端调用就是receiveGetToken
function registeriOSAPI(key, resolve, reject) {
  const webKey = webAPIKey(key)

  if (_isEmpty(window.appBridge[webKey])) window.appBridge[webKey] = {}

  window.appBridge[webKey].handler = function (res) {
    observerAPI(webKey, resolve, reject)
    dataHandler(webKey, res)
  }
}

// 拼接被app回调的方法名key前缀
function webAPIKey(key) {
  return 'receive' + key.replace(/^\S/, (s) => s.toUpperCase())
}

// 数据操作
function dataHandler(key, res) {
  const apiObj = window.appBridge[key]
  let parseRes
  if (typeof res === 'object') {
    parseRes = res
  } else {
    parseRes = JSON.parse(res)
  }

  // 先设置结果，再设置状态，如果result没有值，默认取status的结果
  apiObj.result = parseRes.result || parseRes.status
  apiObj.status = parseRes.status
}

// 对被app回调的api建立数据观查
function observerAPI(key, resolve, reject) {
  const apiObj = window.appBridge[key]

  Object.defineProperty(apiObj, 'status', {
    configurable: true,
    get() {
      return apiObj._status
    },
    set: function (status) {
      apiObj._status = status

      if (status === 'success') {
        // console.log(apiObj.result)
        resolve(apiObj.result)
      } else if (status === 'fail') {
        reject(apiObj.result)
      }
    },
  })
}

// 单独注册的API，直接提供给app进行调用
// 注册 键盘点击完成事件
window.appBridge['receiveTriggerHideKeyboardComplete'] = {}
window.appBridge['receiveGetStoresAndTime'] = {}

// 目前所有与app端的交互，都是同步执行的方式
export default class APIBridge {
  static plugins = {}

  // 插件模块注册
  // static use(pluginObj, options) {
  //   APIBridge.plugins[pluginObj.name] = pluginObj(options)
  // }

  // H5插件模块注册
  static useH5(pluginObj) {
    APIBridge.plugins['H5'] = pluginObj
  }

  // // 当前是否为app环境
  static isApp() {
    // ios端判断webkit属性是否存在
    return (!userAgent.is('wechat') && window.webkit && window.webkit.messageHandlers) || window.androidJSBridge
  }

  static isIOSApp() {
    return APIBridge.isApp() && (userAgent.is('ios') || userAgent.is('macOS'))
  }

  static isAndroidApp() {
    return userAgent.is('android')
  }

  // 获取用户信息
  static getUserInfo(options) {
    console.log('getUserInfo', options)
    return new Promise((resolve, reject) => {
      invokeAPP(resolve, reject, 'getUserInfo', options)
    })
  }

  // 显示轻提示
  static showToast(options) {
    const mergedOptions = _merge(
      {},
      {
        message: '', // 内容
        status: 2, // 是否显示图标，2=默认，1=成功图标，0=失败图标
        duration: 3000, // （app端有空实现），持续展示时间，单位毫秒
        mask: true, // （app端有空实现），是否显示遮罩，阻止穿透点击
      },
      options
    )

    return new Promise((resolve, reject) => {
      invokeAPP(resolve, reject, 'showToast', mergedOptions)
    })
  }

  // 显示模态框
  static showModal(options) {
    const mergedOptions = _merge(
      {},
      {
        title: '标题', // 必填
        // content: '', // 非必填，内容
        // confirmText: '我买了', // 确认按钮文案，默认为'确定'
        // cancelText: '我不要了', // 取消按钮文案，默认为'取消'
        showCancel: false, // 是否展示取消按钮，默认不展示
        mask: true, // （app端有空实现），是否显示遮罩，阻止穿透点击
      },
      options
    )

    return new Promise((resolve, reject) => {
      invokeAPP(resolve, reject, 'showModal', mergedOptions)
    })
  }

  // 显示加载框
  static showLoading(options) {
    // console.log('showLoading', options)
    const mergedOptions = _merge(
      {},
      {
        mask: true, // （有空实现），是否显示遮罩，阻止穿透点击
      },
      options
    )

    return new Promise((resolve, reject) => {
      invokeAPP(resolve, reject, 'showLoading', mergedOptions)
    })
  }

  // 隐藏加载框
  static hideLoading(options) {
    const mergedOptions = _merge(
      {},
      {
        mask: true, // （有空实现），是否显示遮罩，阻止穿透点击
      },
      options
    )

    return new Promise((resolve, reject) => {
      invokeAPP(resolve, reject, 'hideLoading', mergedOptions)
    })
  }

  // 显示省市区选择器
  static showRegionArea(options) {
    // @TODO 增加H5端的省市区组件支持
    return new Promise((resolve, reject) => {
      invokeAPP(resolve, reject, 'showRegionArea', options)
    })
  }

  // 获取token
  static getToken(options) {
    console.log('getToken', options)
    return new Promise((resolve, reject) => {
      invokeAPP(resolve, reject, 'getToken', options)
    })
  }

  // 获取系统信息
  static getSystemInfo(options) {
    console.log('getSystemInfo', options)
    return new Promise((resolve, reject) => {
      invokeAPP(resolve, reject, 'getSystemInfo', options)
    })
  }

  // 跳转页面
  // 保留页面历史，即可以返回上一历史，以后后续还会有一个redirectTo的方法，不可返回到上一个历史
  static navigateTo(options) {
    return new Promise((resolve, reject) => {
      invokeAPP(resolve, reject, 'navigateTo', options)
    })
  }

  // 返回
  static navigateBack(options) {
    const urlObj = urlUtil.parse(location.href, true)
    // console.log('urlObj', urlObj)

    return new Promise((resolve, reject) => {
      /*if (!urlObj.query.from) {
        reject('[app] invoke method faild: ', 'from query undefined')
        return
      }*/

      invokeAPP(resolve, reject, 'navigateBack', {
        name: urlObj.query.from,
        ...options,
      })
    })
  }
}
