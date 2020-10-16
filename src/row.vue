<template>
  <div class="y-row" :style="rowStyle">
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
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + 'px',
        marginRight: -this.gutter / 2 + 'px',
      }
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
}
</style>
