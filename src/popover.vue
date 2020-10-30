<template>
  <div class="y-popover" ref="popover">
    <div
      ref="popoverWrapper"
      class="popover-wrapper"
      :class="{ [`position-${position}`]: true }"
      v-if="visible"
    >
      <y-icon v-if="confirm" name="settings"></y-icon>
      <slot name="content"></slot>
      <div v-if="confirm" style="margin-top: 10px; float: right;">
        <y-button size="small" type="text" @click="close">取消</y-button>
        <y-button size="small" type="primary" @click="close">确定</y-button>
      </div>
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
import Icon from './icon'
import Button from './button'
export default {
  name: 'YuePopover',
  components: {
    'y-button': Button,
    'y-icon': Icon,
  },
  props: {
    confirm: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      },
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      },
    },
  },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.handleClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.onShow)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  beforeDestroy() {
    if (this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.handleClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this.onShow)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
    }
  },
  computed: {
    openEvent() {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseenter'
      }
    },
    closeEvent() {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseleave'
      }
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
      let positions = {
        top: {
          top: top + window.pageYOffset,
          left: left + window.pageXOffset,
        },
        bottom: {
          top: top + height + window.pageYOffset,
          left: left + window.pageXOffset,
        },
        left: {
          top: top + (height - height2) / 2 + window.pageYOffset,
          left: left + window.pageXOffset,
        },
        right: {
          top: top + (height - height2) / 2 + window.pageYOffset,
          left: left + width + window.pageXOffset,
        },
      }
      popoverWrapper.style.left = positions[this.position].left + 'px'
      popoverWrapper.style.top = positions[this.position].top + 'px'
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
