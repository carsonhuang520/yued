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
    <!-- <component :is="dynamicComponent">Default</component>
    <component :is="dynamicComponent" type="primary">Primary</component>
    <component :is="dynamicComponent" type="info">Info</component>
    <component :is="dynamicComponent" type="success">Success</component>
    <component :is="dynamicComponent" type="warning">Warning</component>
    <component :is="dynamicComponent" type="error">Error</component>
    <component :is="dynamicComponent" type="dashed">Dashed</component>
    <component :is="dynamicComponent" type="text">Text</component> -->
  </div>
</template>
<script>
// import Button from '../../../../src/button/button'
export default {
  name: 'button-demo1',
  components: {
    // 'y-button': Button,
  },
  data() {
    return {
      dynamicComponent: null,
    }
  },
  mounted() {
    import('../../../../src/button/button').then((module) => {
      this.dynamicComponent = module.default
      // console.log(module)
    })
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
