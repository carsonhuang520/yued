<template>
  <div class="demo-button">
    <y-button>默认按钮</y-button>
    <y-button icon="settings">默认按钮</y-button>
    <y-button :loading="true">默认按钮</y-button>
    <y-button disabled>默认按钮</y-button>
  </div>
</template>
<script>
import Button from '../../../src/button'
export default {
  name: 'test-test1',
  components: {
    'y-button': Button,
  },
}
</script>
<style lang="scss" scoped>
.demo-button {
  width: 100%;
  text-align: center;
  div {
    margin: 10px 0;
  }
}
</style>
