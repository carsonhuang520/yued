<template>
  <div>
    <y-input v-model="value" disabled></y-input>
  </div>
</template>
<script>
import Input from '../../../../src/input'
export default {
  components: {
    'y-input': Input,
  },
  data() {
    return {
      value: '你好',
    }
  },
}
</script>
