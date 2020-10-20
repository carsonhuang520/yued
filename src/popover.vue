<template>
  <div class="y-popover" @click.stop="handleClick">
    <div
      ref="popoverWrapper"
      class="popover-wrapper"
      v-if="visible"
      @click.stop
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="trigger-wrapper">
      <slot></slot>
    </span>
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
          document.body.appendChild(this.$refs.popoverWrapper)
          let {
            width,
            height,
            top,
            left,
          } = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.popoverWrapper.style.left = left + 'px'
          this.$refs.popoverWrapper.style.top = top + 'px'
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
}
.popover-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>
