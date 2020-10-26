<template>
  <div class="y-cascader" ref="cascader" v-click-outside="close">
    <!-- 点击 cascader 里面时 document 不管，点击外面让 document 关闭 popover -->
    <div class="trigger" @click="toggle">
      {{ result || '&nbsp;' }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <y-cascader-item
        :items="source"
        class="popover"
        :height="popoverHeight"
        :selected="selected"
        :load-data="loadData"
        :loading-item="loadingItem"
        @update:selected="onUpdateSelected"
      ></y-cascader-item>
    </div>
  </div>
</template>

<script>
import YCascaderItem from './cascader-item'
import ClickOutside from './click-outside'
export default {
  name: 'YueCascader',
  components: {
    YCascaderItem,
  },
  directives: {
    ClickOutside,
  },
  props: {
    source: {
      type: Array,
    },
    popoverHeight: {
      type: String,
    },
    selected: {
      type: Array,
      default: () => [],
    },
    loadData: {
      type: Function,
    },
  },
  data() {
    return {
      popoverVisible: false,
      loadingItem: {},
    }
  },
  computed: {
    result() {
      return this.selected.map((item) => item.name).join('/')
    },
  },
  watch: {},
  methods: {
    onClickDocument(e) {
      console.log('hhh')
      let { cascader } = this.$refs
      let { target } = e
      if (cascader === target || cascader.contains(target)) {
        return
      }
      this.close()
    },
    open() {
      this.popoverVisible = true
      // this.$nextTick(() => {
      //   document.addEventListener('click', this.onClickDocument)
      // })
    },
    close() {
      this.popoverVisible = false
      // document.removeEventListener('click', this.onClickDocument)
    },
    toggle() {
      if (this.popoverVisible) {
        this.close
      } else {
        this.open()
      }
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
      let lastItem = newSelected[newSelected.length - 1]
      let simplest = (children, id) => {
        return children.filter((item) => item.id === id)[0]
      }
      let complex = (children, id) => {
        let noChildren = []
        let hasChildren = []
        children.forEach((item) => {
          if (item.children) {
            hasChildren.push(item)
          } else {
            noChildren.push(item)
          }
        })
        let found = simplest(noChildren, id)
        if (found) {
          return found
        } else {
          found = simplest(hasChildren, id)
          if (found) {
            return found
          } else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id)
              if (found) {
                return found
              }
            }
            return undefined
          }
        }
      }
      let update = (result) => {
        this.loadingItem = {}
        let copy = JSON.parse(JSON.stringify(this.source))
        let toUpdate = complex(copy, lastItem.id)
        toUpdate.children = result
        // this.$set(toUpdate, 'children', result)
        this.$emit('update:source', copy)
      }
      if (!lastItem.isLeaf && this.loadData) {
        this.loadData(lastItem, update)
        this.loadingItem = lastItem
      }
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
.y-cascader {
  position: relative;
  display: inline-block;
  .trigger {
    display: flex;
    align-items: center;
    width: 200px;
    height: 32px;
    padding: 0 1em;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
    background: #ffffff;
    // border: 1px solid green;
    display: flex;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    // height: 200px;
  }
}
</style>
