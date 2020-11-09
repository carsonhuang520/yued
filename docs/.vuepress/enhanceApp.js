/**
 * 扩展 VuePress 应用
 */
import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
// import '../.vuepress/public/css/index.css'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(VueHighlightJS)
}
