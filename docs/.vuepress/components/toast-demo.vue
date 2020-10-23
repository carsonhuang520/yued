<template>
  <div>
    <y-button @click="handleClick">上方出现</y-button>
    <pre><code>{{ content }}</code></pre>
    <y-button @click="handleClick1">中间出现</y-button>
    <pre><code>{{ content1 }}</code></pre>
    <y-button @click="handleClick2">下方出现</y-button>
    <pre><code>{{ content2 }}</code></pre>
    <y-button @click="handleClick3">支持HTML形式</y-button>
    <pre><code>{{ content3 }}</code></pre>
    <y-button @click="handleClick4">支持自动关闭</y-button>
    <pre><code>{{ content4 }}</code></pre>
    <y-button @click="handleClick5">设置自动关闭时长</y-button>
    <pre><code>{{ content5 }}</code></pre>
    <y-button @click="handleClick6">自定义关闭按钮</y-button>
    <pre><code>{{ content6 }}</code></pre>
  </div>
</template>
<script>
import Toast from '../../../src/toast'
import Button from '../../../src/button'
import Vue from 'vue'
import plugin from '../../../src/plugin'
Vue.use(plugin)
export default {
  components: {
    'y-toast': Toast,
    'y-button': Button,
  },
  data() {
    return {
      content: `this.$toast('你好啊! 我在从上方出现了!', {
  position: 'top',
  autoClose: false,
})`,
      content1: `this.$toast('你好啊! 我在从中间出现了!', {
  position: 'middle',
  autoClose: false,
})`,
      content2: `this.$toast('你好啊! 我在从下方出现了!', {
  position: 'bottom',
  autoClose: false,
})`,
      content3: `this.$toast('<strong>你好啊! 我是加粗字体!</strong>', {
  enableHtml: true,
  autoClose: false,
})`,
      content4: `this.$toast('<strong>你好啊!我会在 3s 后消失</strong>', {
  enableHtml: true,
  autoClose: true,
})`,
      content5: `this.$toast('<strong>你好啊!我会在 5s 后消失</strong>', {
  enableHtml: true,
  autoDelay: 5,
})`,
      content6: `this.$toast('<strong>你好啊!我会在 5s 后消失</strong>', {
  enableHtml: true,
  closeButton: {
    text: '点我关闭',
    callback: () => {
      alert('我又出现啦!')
    },
  },
})`,
    }
  },
  methods: {
    handleClick() {
      this.$toast('你好啊! 我在从上方出现了!', {
        position: 'top',
        autoClose: false,
      })
    },
    handleClick1() {
      this.$toast('你好啊! 我在从中间出现了!', {
        position: 'middle',
        autoClose: false,
      })
    },
    handleClick2() {
      this.$toast('你好啊! 我在从下方出现了!', {
        position: 'bottom',
        autoClose: false,
      })
    },
    handleClick3() {
      this.$toast('<strong>你好啊! 我是加粗字体!</strong>', {
        enableHtml: true,
        autoClose: false,
      })
    },
    handleClick4() {
      this.$toast('<strong>你好啊!我会在 3s 后消失</strong>', {
        enableHtml: true,
        autoClose: true,
      })
    },
    handleClick5() {
      this.$toast('<strong>你好啊!我会在 5s 后消失</strong>', {
        enableHtml: true,
        autoDelay: 5,
      })
    },
    handleClick6() {
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
