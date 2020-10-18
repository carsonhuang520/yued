<template>
  <div class="wrapper" :class="toastClass">
    <div class="y-toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClick">{{
        closeButton.text
      }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'YueToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 3,
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      },
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: '关闭',
          callback: undefined,
        }
      },
    },
  },
  computed: {
    toastClass() {
      return { [`position-${this.position}`]: true }
    },
  },
  mounted() {
    this.execAutoClose()
    this.getStyles()
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    getStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`
      })
    },
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    onClick() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    },
  },
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$height: 40px;
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .y-toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down 1s ease;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .y-toast {
      animation: fade-in 1s ease;
    }
  }
  &.position-bottom {
    bottom: 0;
    .y-toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up 1s ease;
    }
  }
}
.y-toast {
  font-size: $font-size;
  min-height: 40px;
  line-height: 1.8;
  color: #ffffff;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  .message {
    padding: 8px 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
}
</style>
