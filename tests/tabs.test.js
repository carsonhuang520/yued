// const expect = chai.expect
// import Vue from 'vue'
// import Tabs from '../src/tabs/tabs'
// import TabsHead from '../src/tabs/tabs-head'
// import TabsBody from '../src/tabs/tabs-body'
// import TabsItem from '../src/tabs/tabs-item'
// import TabsPane from '../src/tabs/tabs-pane'

// Vue.config.productionTip = false
// Vue.config.devtools = false
// Vue.component('y-tabs', Tabs)
// Vue.component('y-tabs-head', TabsHead)
// Vue.component('y-tabs-body', TabsBody)
// Vue.component('y-tabs-item', TabsItem)
// Vue.component('y-tabs-pane', TabsPane)
// // describe it 是来自于 mocha 的库
// // 断言是来自 chai 库
// describe('Tabs', () => {
//   // BDD 行为驱动测试 mocha引入 describe 描述 Input 有哪些行为
//   it('存在.', () => {
//     expect(Tabs).to.exist
//   })
//   it('子组件只能是 tabs-head 和 tabs-body', (done) => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `
//     <y-tabs selected="women">
//         <y-tabs-head>
//           <y-tabs-item name="women">美女</y-tabs-item>
//           <y-tabs-item name="sports">体育</y-tabs-item>
//           <y-tabs-item name="game">游戏</y-tabs-item>
//         </y-tabs-head>
//         <y-tabs-body>
//           <y-tabs-pane name="women">美女相关内容</y-tabs-pane>
//           <y-tabs-pane name="sports">体育相关内容</y-tabs-pane>
//           <y-tabs-pane name="game">游戏相关内容</y-tabs-pane>
//         </y-tabs-body>
//       </y-tabs>
//     `
//     let vm = new Vue({
//       el: div,
//     })
//     vm.$nextTick(() => {
//       let x = vm.$el.querySelector('.y-tabs-item:nth-child(1)')
//       expect(x.classList.contains('active')).to.be.true
//       done()
//     })
//   })
// })
