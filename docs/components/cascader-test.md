---
title: Cascader 级联选择器
---

# 级联选择器

<grid-test title="基础用法" description="点击触发子菜单">
  <cascader-demo1></cascader-demo1>
  <highlight-code slot="codeText" lang="vue">
    <y-cascader
      class="cascader"
      :source.sync="source"
      popover-height="200px"
      :selected.sync="selected"
      :load-data="loadData"
    ></y-cascader>
    <script>
      function ajax(parentId = 0) {
        return new Promise((success, fail) => {
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
        })
      }
      export default {
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
          loadData(item, callback) {
            const id = item.id
            ajax(id).then((result) => {
              callback(result)
            })
          },
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="动态加载" description="当选中某一级时，动态加载该级下的选项">
  <cascader-demo2></cascader-demo2>
  <highlight-code slot="codeText" lang="vue">
    <y-cascader
      class="cascader"
      :source.sync="source"
      popover-height="200px"
      :selected.sync="selected"
      :load-data="loadData"
    ></y-cascader>
    <script>
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
          loadData(item, callback) {
            const id = item.id
            ajax(id).then((result) => {
              callback(result)
            })
          },
        },
      }
    </script>
  </highlight-code>
</grid-test>

<style>
table th { width: 100px; text-align: left; background: #f7f7f7; } 
table th:nth-of-type(2){ width: 200px; }
table td { font-size: 14px; }
</style>

### Attributes

| 参数          | 说明         | 类型     | 可选值 | 默认值 |
| ------------- | ------------ | -------- | ------ | ------ |
| source        | 源数据       | array    | —      | —      |
| popoverHeight | 下拉框高度   | string   | —      | —      |
| selected      | 选中项       | array    | —      | —      |
| loadData      | 加载数据回调 | function | —      | —      |
