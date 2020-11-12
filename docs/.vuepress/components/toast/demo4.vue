<template>
  <div>
    <y-button type="primary" @click="handleClick">支持自动关闭</y-button>
    <y-button type="primary" @click="handleClick2">设置自动关闭时长</y-button>
  </div>
</template>
<script>
import Button from '../../../../src/button/button'
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
