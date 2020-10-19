<template>
  <div class="y-tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YueTabsPane',
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (name) => {
      console.log(name)
    })
  },
}
</script>
<style lang="scss" scoped>
.y-tabs-pane {
}
</style>
