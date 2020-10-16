<template>
  <div
    class="y-row"
    :style="{ marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YueRow',
  props: {
    gutter: {
      type: [Number, String],
    },
  },
  mounted() {
    // 获取子元素
    this.$children.forEach((item) => {
      item.gutter = this.gutter
    })
  },
}
</script>
<style lang="scss" scoped>
.y-row {
  display: flex;
  // margin: 0 -10px;
}
</style>
