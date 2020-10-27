// const expect = chai.expect
// import Vue from 'vue'
// import Toast from '../src/toast'

// Vue.config.productionTip = false
// Vue.config.devtools = false

// // describe it 是来自于 mocha 的库
// // 断言是来自 chai 库
// describe('Toast', () => {
//   // BDD 行为驱动测试 mocha引入 describe 描述 Input 有哪些行为
//   it('存在.', () => {
//     expect(Toast).to.be.ok
//   })

//   describe('props', function() {
//     it('测试 autoClose 属性', (done) => {
//       // this.timeout(15000) // 可以设置超时时间，默认是 2000 ms
//       const div = document.createElement('div')
//       document.body.appendChild(div)
//       const Constructor = Vue.extend(Toast)
//       const vm = new Constructor({
//         propsData: {
//           autoClose: true,
//           autoCloseDelay: 1,
//         },
//       }).$mount(div)
//       setTimeout(() => {
//         expect(document.body.contains(vm.$el)).to.eq(false)
//         done()
//       }, 1500)
//     })

//     it('接受 closeButton', () => {
//       const callback = sinon.fake()
//       const Constructor = Vue.extend(Toast)
//       const vm = new Constructor({
//         propsData: {
//           closeButton: {
//             text: '关闭',
//             callback,
//           },
//         },
//       }).$mount()
//       const span = vm.$el.querySelector('.close')
//       expect(span.textContent.trim()).to.eq('关闭')
//       span.click()
//       expect(callback).to.have.been.called
//     })

//     it('接受 enableHtml', () => {
//       const Constructor = Vue.extend(Toast)
//       const vm = new Constructor({
//         propsData: {
//           enableHtml: true,
//         },
//       })
//       vm.$slots.default = ['<strong id="test">hello</strong>']
//       vm.$mount()
//       expect(vm.$el.querySelector('#test')).to.exist
//     })

//     it('接受 position', () => {
//       const Constructor = Vue.extend(Toast)
//       const vm = new Constructor({
//         propsData: {
//           position: 'bottom',
//         },
//       }).$mount()
//       expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
//     })
//   })
// })
