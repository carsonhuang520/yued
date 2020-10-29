<template>
  <div class="y-slides">
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
    playAutomatically() {
      const names = this.$children.map((vm) => vm.name)
      let index = names.indexOf(this.getSelected())
      let newIndex = index - 1
      let run = () => {
        // if (index === names.length) {
        //   index = 0
        // }
        // console.log(index)
        if (newIndex === -1) {
          newIndex = names.length - 1
        }
        // this.$emit('update:selected', names[newIndex])
        this.select(newIndex)
        newIndex--
        // setTimeout(run, 3000) // setTimeout 模拟 setInterval
      }
      setTimeout(run, 3000)
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
  border: 1px solid black;
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
