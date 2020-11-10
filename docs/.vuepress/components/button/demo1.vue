<template>
  <div class="demo-button">
    <y-button>Default</y-button>
    <y-button type="primary">Primary</y-button>
    <y-button type="info">Info</y-button>
    <y-button type="success">Success</y-button>
    <y-button type="warning">Warning</y-button>
    <y-button type="error">Error</y-button>
    <y-button type="dashed">Dashed</y-button>
    <y-button type="text">Text</y-button>
  </div>
</template>
<script>
import Button from '../../../../src/button'
export default {
  name: 'button-demo1',
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
