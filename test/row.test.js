const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

// describe it 是来自于 mocha 的库
// 断言是来自 chai 库
describe('Row', () => {
  // BDD 行为驱动测试 mocha引入 describe 描述 Button 有哪些行为
  it('存在.', () => {
    expect(Row).to.exist
  })
  // 加 done 参数是为了执行异步代码，否则会认为所有代码都是同步的
  it('接收 gutter 属性', (done) => {
    Vue.component('y-row', Row)
    Vue.component('y-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <y-row gutter="20">
        <y-col span="12"></y-col>
        <y-col span="12"></y-col>
      </y-row>
    `
    const vm = new Vue({
      el: div,
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.y-row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const col0 = vm.$el.querySelectorAll('.y-col')[0]
      const col1 = vm.$el.querySelectorAll('.y-col')[1]
      expect(getComputedStyle(col0).paddingLeft).to.eq('10px')
      expect(getComputedStyle(col1).paddingRight).to.eq('10px')
      done()
      div.remove()
      vm.$destroy()
    }, 1000)
  })
  it('接收 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'center',
      },
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.eq('center')
    div.remove()
    vm.$destroy()
  })
})
