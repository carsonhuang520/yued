---
title: Toast 全局提示
---

# 全局提示

<grid-test title="基础用法" description="基础的Toast">
  <toast-demo1></toast-demo1>
  <highlight-code slot="codeText" lang="vue">
    <y-button type="primary" @click="handleClick('top')">上方出现</y-button>
    <y-button type="primary" @click="handleClick('middle')">中间出现</y-button>
    <y-button type="primary" @click="handleClick('bottom')">下方出现</y-button>
    <script>
      import Button from '../../../../src/button'
      import Vue from 'vue'
      import plugin from '../../../../src/plugin'
      Vue.use(plugin)
      export default {
        components: {
          'y-button': Button,
        },
        methods: {
          handleClick(position) {
            this.$toast(
              `你好啊! 我在从${
                position === 'top' ? '上方' : position === 'middle' ? '中间' : '下方'
              }出现了!`,
              {
                position: position,
                autoClose: false,
              }
            )
          },
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="支持 HTML 形式显示" description="可以在弹出框中以 HTML 形式显示">
  <toast-demo2></toast-demo2>
  <highlight-code slot="codeText" lang="vue">
    <y-button type="primary" @click="handleClick">支持HTML形式</y-button>
    <script>
      import Button from '../../../../src/button'
      import Vue from 'vue'
      import plugin from '../../../../src/plugin'
      Vue.use(plugin)
      export default {
        components: {
          'y-button': Button,
        },
        methods: {
          handleClick() {
            this.$toast(
              '<strong style="color: red;">你好啊! 我是加粗红色字体!</strong>',
              {
                enableHtml: true,
                autoClose: false,
              }
            )
          },
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="自动关闭弹出框" description="可以自动关闭弹出框，也可以设置关闭延时">
  <toast-demo4></toast-demo4>
  <highlight-code slot="codeText" lang="vue">
    <y-button type="primary" @click="handleClick">支持自动关闭</y-button>
    <y-button type="primary" @click="handleClick2">设置自动关闭时长</y-button>
    <script>
      import Button from '../../../../src/button'
      import Vue from 'vue'
      import plugin from '../../../../src/plugin'
      Vue.use(plugin)
      export default {
        components: {
          'y-button': Button,
        },
        methods: {
          handleClick() {
            this.$toast('<strong>你好啊!我会在 3s 后消失</strong>', {
              enableHtml: true,
              autoClose: true,
            })
          },
          handleClick2() {
            this.$toast('<strong>你好啊!我会在 5s 后消失</strong>', {
              enableHtml: true,
              autoCloseDelay: 5,
            })
          },
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="自定义关闭" description="可以自定义关闭按钮和关闭操作">
  <toast-demo3></toast-demo3>
  <highlight-code slot="codeText" lang="vue">
    <y-button type="primary" @click="handleClick">自定义关闭按钮</y-button>
    <script>
      import Button from '../../../../src/button'
      import Vue from 'vue'
      import plugin from '../../../../src/plugin'
      Vue.use(plugin)
      export default {
        components: {
          'y-button': Button,
        },
        methods: {
          handleClick() {
            this.$toast('<strong>你好啊!我会在 5s 后消失</strong>', {
              enableHtml: true,
              closeButton: {
                text: '点我关闭',
                callback: () => {
                  alert('我又出现啦!')
                },
              },
            })
          },
        },
      }
    </script>
  </highlight-code>
</grid-test>

<style>
table th { width: 100px; text-align: left; background: #f7f7f7; } 
table th:nth-of-type(2){ width: 200px; }
table td { font-size: 14px; }
</style>

### Attributes

| 参数           | 说明               | 类型    | 可选值                | 默认值 |
| -------------- | ------------------ | ------- | --------------------- | ------ |
| position       | 提示框出现位置     | string  | top / bottom / middle | top    |
| autoCloseDelay | 自动关闭时间       | number  | —                     | 3      |
| autoClose      | 是否自动关闭       | boolean | —                     | true   |
| enableHtml     | 是否支持 HTML 形式 | boolean | —                     | false  |
| closeButton    | 自定义关闭按钮     | object  | —                     | —      |
