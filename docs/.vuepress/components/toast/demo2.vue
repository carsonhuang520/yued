<template>
  <div>
    <y-button type="primary" @click="handleClick">支持HTML形式</y-button>
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
