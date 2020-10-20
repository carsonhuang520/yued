<template>
  <div class="y-popover" @click.stop="handleClick" ref="popover">
    <div ref="popoverWrapper" class="popover-wrapper" v-if="visible">
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
    positionContent() {
      document.body.appendChild(this.$refs.popoverWrapper)
      let {
        width,
        height,
        top,
        left,
      } = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.popoverWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.popoverWrapper.style.top = top + window.screenY + 'px'
    },
    eventHandler(e) {
      if (
        this.$refs.popover &&
        this.$refs.popover !== e.target &&
        !this.$refs.popover.contains(e.target)
      ) {
        this.visible = false
      }
    },
    onShow() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.eventHandler)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.eventHandler)
    },
    handleClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.onShow()
        }
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
