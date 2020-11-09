<template>
  <div class="y-row" :style="rowStyle" :class="rowClasses">
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
    align: {
      type: String,
      // default: 'left',
      validator(value) {
        return ['left', 'right', 'center'].includes(value)
      },
    },
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + 'px',
        marginRight: -this.gutter / 2 + 'px',
      }
    },
    rowClasses() {
      let { align } = this
      return [align && `align-${align}`]
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
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>
