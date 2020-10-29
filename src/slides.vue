<template>
  <div class="y-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="y-slides-window">
      <div class="y-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="y-slides-dots">
      <span
        v-for="n in childrenLength"
        :key="n"
        :class="{ active: selectedIndex === n - 1 }"
        @click="select(n - 1)"
        >{{ n }}</span
      >
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
    }
  },
  mounted() {
    this.updateChildren()
    this.playAutomatically()
    this.childrenLength = this.$children.length
    // this.lastSelectedIndex = this.selectedIndex
  },
  updated() {
    console.log(this.lastSelectedIndex)
    console.log(this.selectedIndex)
    this.updateChildren()
  },
  methods: {
    onMouseEnter() {
      this.pause()
    },
    onMouseLeave() {
      this.playAutomatically()
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
        // if (index === names.length) {
        //   index = 0
        // }
        // console.log(index)
        if (newIndex === -1) {
          newIndex = this.names.length - 1
        }
        if (newIndex === this.names.length) {
          newIndex = 0
        }
        // this.$emit('update:selected', names[newIndex])
        this.select(newIndex)
        // newIndex--
        this.timerId = setTimeout(run, 3000) // setTimeout 模拟 setInterval
      }
      this.timerId = setTimeout(run, 3000)
    },
    select(index) {
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[index])
    },
    getSelected() {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren() {
      let selected = this.getSelected()
      this.$children.forEach((vm) => {
        const names = this.$children.map((vm) => vm.name)
        vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
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
    > span {
      &.active {
        background: red;
      }
    }
  }
}
</style>
