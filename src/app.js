import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout/layout'
import Header from './layout/header'
import Content from './layout/content'
import Sider from './layout/sider'
import Footer from './layout/footer'
import plugin from './plugin'
import Tabs from './tabs/tabs'
import TabsHead from './tabs/tabs-head'
import TabsBody from './tabs/tabs-body'
import TabsItem from './tabs/tabs-item'
import TabsPane from './tabs/tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapseItem'
import Cascader from './cascader'

Vue.component('y-button', Button)
Vue.component('y-icon', Icon)
Vue.component('y-button-group', ButtonGroup)
Vue.component('y-input', Input)
Vue.component('y-row', Row)
Vue.component('y-col', Col)
Vue.component('y-layout', Layout)
Vue.component('y-header', Header)
Vue.component('y-content', Content)
Vue.component('y-sider', Sider)
Vue.component('y-footer', Footer)
Vue.use(plugin)
Vue.component('y-tabs', Tabs)
Vue.component('y-tabs-head', TabsHead)
Vue.component('y-tabs-body', TabsBody)
Vue.component('y-tabs-item', TabsItem)
Vue.component('y-tabs-pane', TabsPane)
Vue.component('y-popover', Popover)
Vue.component('y-collapse', Collapse)
Vue.component('y-collapse-item', CollapseItem)
Vue.component('y-cascader', Cascader)

new Vue({
  el: '#app',
  data: {
    selectedTab: ['2'],
    selected: 'film',
    source: [
      {
        name: '浙江',
        children: [
          {
            name: '杭州',
            children: [
              {
                name: '上城区',
              },
              {
                name: '西湖区',
              },
            ],
          },
          {
            name: '嘉兴',
            children: [
              {
                name: '南湖区',
              },
              {
                name: '秀洲区',
              },
            ],
          },
        ],
      },
      {
        name: '江苏',
        children: [
          {
            name: '南京',
            children: [
              {
                name: '上城',
              },
              {
                name: '西湖',
              },
            ],
          },
          {
            name: '苏州',
            children: [
              {
                name: '南湖',
              },
              {
                name: '秀洲',
              },
            ],
          },
        ],
      },
    ],
  },
  mounted() {},
  created() {},
  methods: {},
})
