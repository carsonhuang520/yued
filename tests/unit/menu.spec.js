import chai, { expect } from 'chai'
import Menu from '../../src/menu/menu'
import MenuItem from '../../src/menu/menu-item'
import SubMenu from '../../src/menu/sub-menu'
import sinon from 'sinon'
import Vue from 'vue'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
chai.use(sinonChai)

describe('Menu.vue', () => {
  it('存在', () => {
    expect(Menu).to.exist
  })
  xit('测试selected', (done) => {
    Vue.component('y-menu-item', MenuItem)
    Vue.component('y-sub-menu', SubMenu)
    const wrapper = mount(Menu, {
      propsData: {
        selected: ['home'],
      },
      slots: {
        default: `
        <y-menu-item name="home"
        >首页</y-menu-item
      >
      <y-sub-menu name="about">
        <template slot="title">关于</template>
        <y-menu-item name="culture">企业文化</y-menu-item>
        <y-menu-item name="developers">开发团队</y-menu-item>
        <y-sub-menu name="contacts">
          <template slot="title">联系方式</template>
          <y-menu-item name="wechat">微信</y-menu-item>
          <y-menu-item name="qq">QQ</y-menu-item>
          <y-sub-menu name="phone">
            <template slot="title">手机</template>
            <y-menu-item name="cy">中国移动</y-menu-item>
            <y-menu-item name="cd">中国电信</y-menu-item>
            <y-menu-item name="cl">中国联通</y-menu-item>
          </y-sub-menu>
        </y-sub-menu>
      </y-sub-menu>
      <y-menu-item name="hire">招聘</y-menu-item>`,
      },
    })
    setTimeout(() => {
      expect(wrapper.find('[data-name="home"]').exists()).to.be.true
      done()
    })
  })
  xit('测试 update:selected', (done) => {
    Vue.component('y-menu-item', MenuItem)
    Vue.component('y-sub-menu', SubMenu)
    const callback = sinon.fake()
    const wrapper = mount(Menu, {
      propsData: {
        selected: ['home'],
      },
      slots: {
        default: `
        <y-menu-item name="home"
        >首页</y-menu-item
      >
      <y-sub-menu name="about">
        <template slot="title">关于</template>
        <y-menu-item name="culture">企业文化</y-menu-item>
        <y-menu-item name="developers">开发团队</y-menu-item>
        <y-sub-menu name="contacts">
          <template slot="title">联系方式</template>
          <y-menu-item name="wechat">微信</y-menu-item>
          <y-menu-item name="qq">QQ</y-menu-item>
          <y-sub-menu name="phone">
            <template slot="title">手机</template>
            <y-menu-item name="cy">中国移动</y-menu-item>
            <y-menu-item name="cd">中国电信</y-menu-item>
            <y-menu-item name="cl">中国联通</y-menu-item>
          </y-sub-menu>
        </y-sub-menu>
      </y-sub-menu>
      <y-menu-item name="hire">招聘</y-menu-item>`,
      },
      listeners: {
        'update:selected': callback,
      },
    })
    setTimeout(() => {
      wrapper.find('[data-name="developers"]').trigger('click')
      setTimeout(() => {
        expect(callback).to.have.been.calledWith(['developers'])
        done()
      })
      // expect(wrapper.find('[data-name="home"]').exists()).to.be.true
    })
  })
})
