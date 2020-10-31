import chai, { expect } from 'chai'
import Slides from '@/slides.vue'
import SlidesItem from '@/slides-item.vue'
import sinon from 'sinon'
import Vue from 'vue'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
chai.use(sinonChai)

describe('Slides.vue', () => {
  it('存在', () => {
    expect(Slides).to.exist
  })
  it('接受SlidesItem', (done) => {
    Vue.component('y-slides-item', SlidesItem)
    const wrapper = mount(Slides, {
      slots: {
        default: `
        <y-slides-item name="1">
          <div class="box1">1</div>
        </y-slides-item>
        <y-slides-item name="2">
          <div class="box2">2</div>
        </y-slides-item>
        <y-slides-item name="3">
          <div class="box3">3</div>
        </y-slides-item>`,
      },
    })
    setTimeout(() => {
      // console.log(wrapper.html())
      expect(wrapper.find('.box1').exists()).to.be.true
      done()
    })
  })
  xit('测试selected', (done) => {
    Vue.component('y-slides-item', SlidesItem)
    const wrapper = mount(Slides, {
      propsData: {
        selected: '2',
      },
      slots: {
        default: `
        <y-slides-item name="1">
          <div class="box1">1</div>
        </y-slides-item>
        <y-slides-item name="2">
          <div class="box2">2</div>
        </y-slides-item>
        <y-slides-item name="3">
          <div class="box3">3</div>
        </y-slides-item>`,
      },
    })
    setTimeout(() => {
      // console.log(wrapper.html())
      expect(wrapper.find('.box2').exists()).to.be.true
      done()
    })
  })
  xit('点击dot切换', (done) => {
    Vue.component('y-slides-item', SlidesItem)
    const wrapper = mount(Slides, {
      propsData: {
        selected: '1',
      },
      slots: {
        default: `
        <y-slides-item name="1">
          <div class="box1">1</div>
        </y-slides-item>
        <y-slides-item name="2">
          <div class="box2">2</div>
        </y-slides-item>
        <y-slides-item name="3">
          <div class="box3">3</div>
        </y-slides-item>`,
      },
      listeners: {
        'update:selected': (x) => {
          expect(x).to.eq('2')
          done()
        },
      },
    })
    setTimeout(() => {
      // console.log(wrapper.html())
      wrapper.find('[data-index="1"]').trigger('click')
    })
  })
  xit('测试自动播放', (done) => {
    Vue.component('y-slides-item', SlidesItem)
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: true,
        autoPlayDelay: 50,
        selected: '1',
      },
      slots: {
        default: `
        <y-slides-item name="1">
          <div class="box1">1</div>
        </y-slides-item>
        <y-slides-item name="2">
          <div class="box2">2</div>
        </y-slides-item>
        <y-slides-item name="3">
          <div class="box3">3</div>
        </y-slides-item>`,
      },
      listeners: {
        'update:selected': callback,
      },
    })
    setTimeout(() => {
      // console.log(wrapper.html())
      expect(callback).to.have.been.called
      done()
    }, 50)
  })
})
