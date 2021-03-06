import '@/common'
import Vue from 'vue'
import App from './app.vue' // 根组件
import router from './router' // router实例

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
