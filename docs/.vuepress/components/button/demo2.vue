<template>
  <div class="demo-button">
    <y-button disabled>Default</y-button>
    <y-button type="primary" disabled>Primary</y-button>
    <y-button type="info" disabled>Info</y-button>
    <y-button type="success" disabled>Success</y-button>
    <y-button type="warning" disabled>Warning</y-button>
    <y-button type="error" disabled>Error</y-button>
    <y-button type="dashed" disabled>Dashed</y-button>
    <y-button type="text" disabled>Text</y-button>
  </div>
</template>
<script>
import Button from '../../../../src/button'
export default {
  name: 'button-demo2',
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
