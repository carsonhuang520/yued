<template>
  <div class="y-sticky-wrapper" ref="sticky" :style="{ height }">
    <div class="y-sticky" :class="classes" :style="{ left, width }">
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
    }
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
    let { top } = this.top()
    window.addEventListener('scroll', () => {
      if (window.scrollY > top) {
        let { height, left, width } = this.$refs.sticky.getBoundingClientRect()
        // this.$refs.sticky.style.height = `${height}px`
        this.height = height + 'px'
        this.width = width + 'px'
        this.left = left + 'px'
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    })
  },
  methods: {
    top() {
      let { top } = this.$refs.sticky.getBoundingClientRect()
      return { top: top + window.scrollY }
    },
    // height() {
    //   let { height } = this.$refs.sticky.getBoundingClientRect()
    //   return { height }
    // },
  },
}
</script>
<style lang="scss" scoped>
.y-sticky {
  border: 1px solid red;
  &.sticky {
    position: fixed;
    top: 0;
  }
}
</style>
