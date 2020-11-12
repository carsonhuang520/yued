<template>
  <div class="y-sticky-wrapper" ref="sticky" :style="{ height }">
    <div class="y-sticky" :class="classes" :style="{ left, width, top }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'YueSticky',
  data() {
    return {
      isSticky: false,
      height: undefined,
      width: undefined,
      left: undefined,
      top: undefined,
      timerId: null,
    }
  },
  props: {
    distance: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    classes() {
      return {
        sticky: this.isSticky,
      }
    },
  },
  created() {},
  mounted() {
    this.windowScrollHandler = this._windowScrollHandler.bind(this)
    window.addEventListener('scroll', this.windowScrollHandler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.windowScrollHandler)
  },
  methods: {
    getTop() {
      let { top } = this.$refs.sticky.getBoundingClientRect()
      return { top: top + window.scrollY }
    },
    _windowScrollHandler() {
      let x = () => {
        let { top } = this.getTop()
        console.log(window.scrollY, top - this.distance)
        if (window.scrollY > top - this.distance) {
          let {
            height,
            left,
            width,
          } = this.$refs.sticky.getBoundingClientRect()
          this.height = height + 'px'
          this.width = width + 'px'
          this.left = left + 'px'
          this.top = this.distance + 'px'
          this.isSticky = true
        } else {
          this.height = undefined
          this.width = undefined
          this.left = undefined
          this.top = undefined
          this.isSticky = false
        }
      }
      // if (this.timerId) {
      //   window.clearTimeout(this.timerId)
      // }
      // this.timerId = setTimeout(x, 1000)
      x()
    },
  },
}
</script>
<style lang="scss" scoped>
.y-sticky {
  background: #ffffff;
  border: 1px solid red;
  &.sticky {
    position: fixed;
  }
}
</style>
