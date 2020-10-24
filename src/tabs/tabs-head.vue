<template>
  <div class="y-tabs-head" :class="classes">
    <slot></slot>
    <div v-show="type !== 'card'" class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'YueTabsHead',
  inject: ['eventBus'],
  data() {
    return {
      type: 'default',
      direction: 'horizontal',
    }
  },
  computed: {
    classes() {
      return {
        [`tabs-head-vertical`]: this.direction === 'vertical',
      }
    },
  },
  mounted() {},
  created() {
    this.eventBus.$on('type', (item) => {
      this.type = item
    })
    this.eventBus.$on('direction', (item) => {
      this.direction = item
    })
    this.eventBus.$on('update:selected', (name, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect()
      let { left: left2 } = vm.$parent.$el.getBoundingClientRect()
      let { top: top2 } = vm.$parent.$el.getBoundingClientRect()
      console.log(top, top2)
      if (this.direction === 'horizontal') {
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left - left2}px`
      } else {
        this.$refs.line.style.height = `${height}px`
        this.$refs.line.style.top = `${top - top2}px`
      }
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
    margin-top: 2px;
    position: absolute;
    bottom: -1px;
    border-bottom: 2px solid #2d8cf0;
    transition: all 350ms;
  }
  > .actions-wrapper {
    margin-left: auto; //让actions到最右边
  }
  &.tabs-head-vertical {
    // display: inline-flex;
    flex-direction: column;
    border-bottom: none;
    border-right: 1px solid #dddddd;
    flex-wrap: nowrap;
    height: 100%;
    > .line {
      margin-top: 0;
      position: absolute;
      right: -1px;
      border-right: 2px solid #2d8cf0;
      transition: all 350ms;
    }
  }
}
</style>
