<template>
  <div class="demo-button">
    <y-button loading>Loading</y-button>
  </div>
</template>
<script>
import Button from '../../../../src/button/button'
export default {
  name: 'button-demo4',
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
