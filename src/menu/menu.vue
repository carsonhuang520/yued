<template>
  <div class="y-menu" :class="{ vertical }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YueMenu',
  components: {},
  provide() {
    return {
      root: this,
      vertical: this.vertical,
      trigger: this.trigger
    }
  },
  data() {
    return {
      items: [],
      namePath: [],
    }
  },
  props: {
    selected: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    trigger: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // items() {
    //   return this.$children.filter((vm) => vm.$options.name === 'YueMenuItem')
    // },
  },
  watch: {},
  methods: {
    addItem(vm) {
      this.items.push(vm)
    },
    updateChildren() {
      this.items.forEach((vm) => {
        if (this.selected.indexOf(vm.name) >= 0) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      })
    },
    listenToChildren() {
      this.items.forEach((vm) => {
        vm.$on('add:selected', (name) => {
          if (this.multiple) {
            if (this.selected.indexOf(name) < 0) {
              let copy = JSON.parse(JSON.stringify(this.selected))
              copy.push(name)
              this.$emit('update:selected', copy)
            }
          } else {
            this.$emit('update:selected', [name])
          }
        })
      })
    },
  },
  created() {},
  mounted() {
    this.updateChildren()
    this.listenToChildren()
  },
  updated() {
    this.updateChildren()
  },
}
</script>
<style lang="scss" scoped>
.y-menu {
  display: flex;
  border-bottom: 1px solid #dcdee2;
  cursor: pointer;
  user-select: none;
  &.vertical {
    flex-direction: column;
    border: 1px solid #dcdee2;
  }
}
</style>
