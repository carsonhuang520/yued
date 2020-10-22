<template>
  <div>

  </div>
</template>
<script>
import Toast from '../../../src/toast'
import Vue from 'vue'
import plugin from '../../../src/plugin'
Vue.use(plugin)
export default {
  components: {
    'y-toast': Toast
  },
  mounted() {
    this.handleClick()
  },
  methods: {
    handleClick() {
      this.$toast('你好啊',{
        position:'middle'
      })
      // console.log()
    }
  }
}
</script>