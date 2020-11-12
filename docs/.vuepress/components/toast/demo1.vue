<template>
  <div>
    <y-button type="primary" @click="handleClick('top')">上方出现</y-button>
    <y-button type="primary" @click="handleClick('middle')">中间出现</y-button>
    <y-button type="primary" @click="handleClick('bottom')">下方出现</y-button>
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
