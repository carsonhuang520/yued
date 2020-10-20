<template>
  <div class="y-popover" @click.stop="handleClick">
    <div class="popover-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YuePopover',
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    handleClick() {
      this.visible = !this.visible
      if (this.visible === true) {
        this.$nextTick(() => {
          let handler = () => {
            this.visible = false
            document.removeEventListener('click', handler)
          }
          document.addEventListener('click', handler)
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.y-popover {
  display: inline-block;
  position: relative;
  .popover-wrapper {
    position: absolute;
    bottom: 100%;
    border: 1px solid red;
  }
}
</style>
