<template>
  <div class="y-popover" @click.stop="handleClick" ref="popover">
    <div
      ref="popoverWrapper"
      class="popover-wrapper"
      :class="{ [`position-${position}`]: true }"
      v-if="visible"
    >
      <slot name="content"></slot>
    </div>
    <span
      ref="triggerWrapper"
      class="trigger-wrapper"
      style="display: inline-block;"
    >
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'YuePopover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      },
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    positionContent() {
      const { triggerWrapper, popoverWrapper } = this.$refs
      document.body.appendChild(popoverWrapper)
      let { width, height, top, left } = triggerWrapper.getBoundingClientRect()
      let { height: height2 } = popoverWrapper.getBoundingClientRect()
      if (this.position === 'top') {
        popoverWrapper.style.left = left + window.scrollX + 'px'
        popoverWrapper.style.top = top + window.screenY + 'px'
      } else if (this.position === 'bottom') {
        popoverWrapper.style.left = left + window.scrollX + 'px'
        popoverWrapper.style.top = top + height + window.screenY + 'px'
      } else if (this.position === 'left') {
        popoverWrapper.style.left = left + window.scrollX + 'px'
        popoverWrapper.style.top =
          top + (height - height2) / 2 + window.screenY + 'px'
      } else {
        popoverWrapper.style.left = left + width + window.scrollX + 'px'
        popoverWrapper.style.top =
          top + (height - height2) / 2 + window.screenY + 'px'
      }
    },
    eventHandler(e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {
        return
      }
      if (
        this.$refs.popoverWrapper &&
        (this.$refs.popoverWrapper === e.target ||
          this.$refs.popoverWrapper.contains(e.target))
      ) {
        return
      }
      this.close()
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
  border-radius: 4px;
  border: 1px solid #333;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));
  background: #ffffff;

  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: '';
    width: 0;
    height: 0;
    border: 10px solid transparent;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top-color: #333;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-bottom-color: #333;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-left-color: #333;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-right-color: #333;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>