<template>
  <div class="y-tabs" :class="{ [`tabs-vertical`]: direction === 'vertical' }">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'YueTabs',
  props: {
    selected: {
      type: String,
      default: '',
      required: true,
    },
    type: {
      type: String,
      default: 'default',
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  mounted() {
    this.eventBus.$emit('direction', this.direction)
    this.eventBus.$emit('type', this.type)
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'YueTabsHead') {
        vm.$children.forEach((item) => {
          if (
            (item.$options.name = 'YueTabsItem' && item.name === this.selected)
          ) {
            this.eventBus.$emit('update:selected', this.selected, item)
          }
        })
      }
    })
  },
}
</script>
<style lang="scss" scoped>
.y-tabs {
  box-sizing: content-box;
  &.tabs-vertical {
    display: flex;
    flex-wrap: nowrap;
  }
}
</style>
