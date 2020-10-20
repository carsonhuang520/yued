<template>
  <div class="y-tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'YueTabsHead',
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (name, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  },
}
</script>
<style lang="scss" scoped>
$tab-height: 40px;
.y-tabs-head {
  display: flex;
  justify-content: flex-start;
  height: $tab-height;
  border-bottom: 1px solid #dddddd;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid blue;
    transition: all 350ms;
  }
  > .actions-wrapper {
    margin-left: auto; //让actions到最右边
  }
}
</style>
