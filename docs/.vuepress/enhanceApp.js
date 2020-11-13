/**
 * 扩展 VuePress 应用
 */
import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
// import { YButton } from 'yued-test'
// import '../.vuepress/public/css/index.css'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options,
  router,
  siteData,
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(VueHighlightJS)

  Vue.mixin({
    mounted() {
      import('yued-test').then((m) => {
        // console.log(m)
        Vue.component('y-button', m.YButton)
        console.log(new Vue())
        // Vue.use(m.default)
      })
    },
  })
}
