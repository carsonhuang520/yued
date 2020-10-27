<template>
  <div>
    <h4>示例1</h4>
    <y-cascader
      class="cascader"
      :source.sync="source"
      popover-height="200px"
      :selected.sync="selected"
      :load-data="loadData"
    ></y-cascader>
  </div>
</template>
<script>
import Cascader from '../../../src/cascader'
import db from '../../../src/db'
function ajax(parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id === parentId)
      // 判断是否是叶子结点
      result.forEach((node) => {
        if (db.filter((item) => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        } else {
          node.isLeaf = true
        }
      })
      success(result)
    }, 200)
  })
}
export default {
  components: {
    'y-cascader': Cascader,
  },
  data() {
    return {
      selected: [],
      source: [],
    }
  },
  created() {
    ajax(0).then((result) => {
      this.source = result
    })
  },
  methods: {
    handleUpdateSelected() {
      ajax(this.selected[0].id).then((result) => {
        let lastLevelSelected = this.source.filter(
          (item) => item.id === this.selected[0].id
        )[0]
        this.$set(lastLevelSelected, 'children', result)
        console.log(lastLevelSelected)
      })
    },
    loadData(item, callback) {
      const id = item.id
      ajax(id).then((result) => {
        callback(result)
      })
    },
  },
}
</script>
<style lang="scss">
.left {
  box-sizing: border-box;
}
</style>
