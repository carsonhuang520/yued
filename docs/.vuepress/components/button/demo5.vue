<template>
  <div class="demo-button">
    <y-button-group>
      <y-button icon="left">prev</y-button>
      <y-button icon="right" icon-position="right">next</y-button>
    </y-button-group>
    <y-button-group>
      <y-button type="dashed" icon="left">prev</y-button>
      <y-button type="dashed" icon="left">prev</y-button>
      <y-button type="dashed" icon="right" icon-position="right">next</y-button>
    </y-button-group>
  </div>
</template>
<script>
import Button from '../../../../src/button/button'
import ButtonGroup from '../../../../src/button/button-group'
export default {
  name: 'button-demo5',
  components: {
    'y-button': Button,
    'y-button-group': ButtonGroup,
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
