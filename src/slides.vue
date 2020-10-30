<template>
  <div
    class="y-slides"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div class="y-slides-window">
      <div class="y-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="y-slides-dots">
      <span @click="onClickPrev">&lt;</span>
      <span
        v-for="n in childrenLength"
        :key="n"
        :data-index="n - 1"
        :class="{ active: selectedIndex === n - 1 }"
        @click="onClickNumber(n - 1)"
        >{{ n }}</span
      >
      <span @click="onClickNext">&gt;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'YueSlides',
  props: {
    selected: {
      type: String,
      default: '',
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    autoPlayDelay: {
      type: Number,
      default: 3000,
    },
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected) || 0
    },
    names() {
      return this.$children.map((vm) => vm.name)
    },
  },
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined,
      startTouch: undefined,
      isClickArrow: false,
    }
  },
  mounted() {
    this.updateChildren()
    if (this.autoPlay) {
      this.playAutomatically()
    }
    this.childrenLength = this.$children.length
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    onClickPrev() {
      this.isClickArrow = true
      this.select(this.selectedIndex - 1)
    },
    onClickNext() {
      this.isClickArrow = true
      this.select(this.selectedIndex + 1)
    },
    onClickNumber(index) {
      this.isClickArrow = false
      this.select(index)
    },
    onTouchStart(e) {
      // console.log(e)
      this.pause()
      if (e.touches.length > 1) {
        return
      }
      this.startTouch = e.touches[0]
    },
    onTouchMove(e) {},
    onTouchEnd(e) {
      let endTouch = e.changedTouches[0]
      let { clientX: x1, clientY: y1 } = this.startTouch
      let { clientX: x2, clientY: y2 } = endTouch
      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
      let deltaY = Math.abs(y2 - y1)
      let deltaX = x2 - x1
      let rate = distance / deltaY
      if (rate > 2) {
        if (x2 > x1) {
          console.log('向右滑')
          this.select(this.selectedIndex - 1)
        } else {
          console.log('向左滑')
          this.select(this.selectedIndex + 1)
        }
      }
      this.$nextTick(() => {
        this.playAutomatically()
      })
    },
    onMouseEnter() {
      if (this.autoPlay) {
        this.pause()
      }
    },
    onMouseLeave() {
      if (this.autoPlay) {
        this.playAutomatically()
      }
    },
    pause() {
      window.clearTimeout(this.timerId)
      this.timerId = undefined
    },
    playAutomatically() {
      if (this.timerId) {
        return
      }
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        this.select(newIndex)
        this.timerId = setTimeout(run, this.autoPlayDelay) // setTimeout 模拟 setInterval
      }
      this.timerId = setTimeout(run, this.autoPlayDelay)
    },
    select(newIndex) {
      if (newIndex === -1) {
        newIndex = this.names.length - 1
      }
      if (newIndex === this.names.length) {
        newIndex = 0
      }
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[newIndex])
    },
    getSelected() {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren() {
      let selected = this.getSelected()
      this.$children.forEach((vm) => {
        const names = this.$children.map((vm) => vm.name)
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        if (this.timerId || this.isClickArrow) {
          if (
            this.lastSelectedIndex === this.$children.length - 1 &&
            this.selectedIndex === 0
          ) {
            reverse = false
          }
          if (
            this.lastSelectedIndex === 0 &&
            this.selectedIndex === this.$children.length - 1
          ) {
            reverse = true
          }
        }
        vm.reverse = reverse
        this.$nextTick(() => {
          vm.selected = selected
        })
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.y-slides {
  // display: inline-block;
  // border: 1px solid black;
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    // display: flex;
    position: relative;
  }
  &-dots {
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    > span {
      display: inline-flex;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      margin: 0 8px;
      background: #dddddd;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background: black;
        color: white;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>
