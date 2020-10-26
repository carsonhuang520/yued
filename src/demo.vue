<template>
  <div id="app" style="padding: 100px;">
    <!-- {{ selected }} -->
    <y-cascader
      :source.sync="source"
      popover-height="200px"
      :selected.sync="selected"
      :load-data="loadData"
    ></y-cascader>
  </div>
</template>
<script>
import Cascader from './cascader'
import db from './db'

function ajax2(parentId = 0, success, fail) {
  let id = setTimeout(() => {
    let result = db.filter((item) => item.parent_id === parentId)
    success(result)
  }, 3000)
  return id
}

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
  name: 'demo',
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eeeeee;
  --border-radius: 4px;
  --color: #333333;
  --border-color: #999999;
  --border-color-hover: #666666;
}

body {
  font-size: var(--font-size);
}
</style>
