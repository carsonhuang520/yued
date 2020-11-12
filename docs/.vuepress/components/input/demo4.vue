<template>
  <div>
    <y-input value="hello world" error="输入格式不对"></y-input>
  </div>
</template>
<script>
import Input from '../../../../src/input'
export default {
  components: {
    'y-input': Input,
  },
  data() {
    return {}
  },
}
</script>
