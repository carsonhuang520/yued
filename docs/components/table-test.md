---
title: Table 表格
---

# 表格

<grid-test title="基础表格" description="基础的表格展示用法">
  <table-demo1></table-demo1>
  <highlight-code slot="codeText" lang="vue">
    <y-table
      :columns="columns"
      :data-source="dataSource"
      :selected-items.sync="selectedItems"
    >
    </y-table>
    <script>
      export default {
        components: {
          'y-table': Table,
        },
        data() {
          return {
            selectedItems: [],
            columns: [
              { text: '姓名', key: 'name', width: 100 },
              { text: '分数', key: 'score', width: 100 },
              {
                text: '学校',
                key: 'company',
              },
            ],
            dataSource: [
              {
                id: 1,
                name: '小张',
                company: '浙江工业大学',
                score: 100,
                description: 'xxxx xxxx',
              },
              {
                id: 2,
                name: '小红',
                company: '浙江工业大学',
                score: 99,
                description: 'xxxx xxxx',
              },
              { id: 3, name: '小李', company: '浙江工业大学', score: 100 },
              { id: 4, name: '小陈', company: '浙江工业大学', score: 99 },
              { id: 5, name: '小黄', company: '浙江工业大学', score: 100 },
              { id: 6, name: '小张', company: '浙江工业大学', score: 100 },
            ],
          }
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="带斑马纹表格" description="使用带斑马纹的表格，可以更容易区分出不同行的数据">
  <table-demo2></table-demo2>
  <highlight-code slot="codeText" lang="vue">
    <y-table
      :columns="columns"
      :data-source="dataSource"
      :selected-items.sync="selectedItems"
      stripe
    >
    </y-table>
    <script>
      export default {
        components: {
          'y-table': Table,
        },
        data() {
          return {
            selectedItems: [],
            columns: [
              { text: '姓名', key: 'name', width: 100 },
              { text: '分数', key: 'score', width: 100 },
              {
                text: '学校',
                key: 'company',
              },
            ],
            dataSource: [
              {
                id: 1,
                name: '小张',
                company: '浙江工业大学',
                score: 100,
                description: 'xxxx xxxx',
              },
              {
                id: 2,
                name: '小红',
                company: '浙江工业大学',
                score: 99,
                description: 'xxxx xxxx',
              },
              { id: 3, name: '小李', company: '浙江工业大学', score: 100 },
              { id: 4, name: '小陈', company: '浙江工业大学', score: 99 },
              { id: 5, name: '小黄', company: '浙江工业大学', score: 100 },
              { id: 6, name: '小张', company: '浙江工业大学', score: 100 },
            ],
          }
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="带边框表格" description="">
  <table-demo3></table-demo3>
  <highlight-code slot="codeText" lang="vue">
    <y-table
      :columns="columns"
      :data-source="dataSource"
      :selected-items.sync="selectedItems"
      stripe
      border
    >
    </y-table>
    <script>
      export default {
        components: {
          'y-table': Table,
        },
        data() {
          return {
            selectedItems: [],
            columns: [
              { text: '姓名', key: 'name', width: 100 },
              { text: '分数', key: 'score', width: 100 },
              {
                text: '学校',
                key: 'company',
              },
            ],
            dataSource: [
              {
                id: 1,
                name: '小张',
                company: '浙江工业大学',
                score: 100,
                description: 'xxxx xxxx',
              },
              {
                id: 2,
                name: '小红',
                company: '浙江工业大学',
                score: 99,
                description: 'xxxx xxxx',
              },
              { id: 3, name: '小李', company: '浙江工业大学', score: 100 },
              { id: 4, name: '小陈', company: '浙江工业大学', score: 99 },
              { id: 5, name: '小黄', company: '浙江工业大学', score: 100 },
              { id: 6, name: '小张', company: '浙江工业大学', score: 100 },
            ],
          }
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="可选择" description="选择多行数据时使用 checkbox">
  <table-demo4></table-demo4>
  <highlight-code slot="codeText" lang="vue">
    <y-table
      :columns="columns"
      :data-source="dataSource"
      :selected-items.sync="selectedItems"
      stripe
      border
    >
    </y-table>
    <script>
      export default {
        components: {
          'y-table': Table,
        },
        data() {
          return {
            selectedItems: [],
            columns: [
              { type: 'selection' },
              { text: '姓名', key: 'name', width: 100 },
              { text: '分数', key: 'score', width: 100 },
              {
                text: '学校',
                key: 'company',
              },
            ],
            dataSource: [
              {
                id: 1,
                name: '小张',
                company: '浙江工业大学',
                score: 100,
                description: 'xxxx xxxx',
              },
              {
                id: 2,
                name: '小红',
                company: '浙江工业大学',
                score: 99,
                description: 'xxxx xxxx',
              },
              { id: 3, name: '小李', company: '浙江工业大学', score: 100 },
              { id: 4, name: '小陈', company: '浙江工业大学', score: 99 },
              { id: 5, name: '小黄', company: '浙江工业大学', score: 100 },
              { id: 6, name: '小张', company: '浙江工业大学', score: 100 },
            ],
          }
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="排序" description="对表格进行排序，可快速查找或对比数据">
  <table-demo5></table-demo5>
  <highlight-code slot="codeText" lang="vue">
    <y-table
      :columns="columns"
      :data-source="dataSource"
      :selected-items.sync="selectedItems"
      stripe
      border
      :order-by.sync="orderBy"
      @update:orderBy="changeOrderBy"
    >
    </y-table>
    <script>
      export default {
        components: {
          'y-table': Table,
        },
        data() {
          return {
            selectedItems: [],
            columns: [
              { type: 'selection' },
              { text: '姓名', key: 'name', width: 100 },
              { text: '分数', key: 'score', width: 100 },
              {
                text: '学校',
                key: 'company',
              },
            ],
            orderBy: {
              score: 'desc',
            },
            dataSource: [
              {
                id: 1,
                name: '小张',
                company: '浙江工业大学',
                score: 100,
                description: 'xxxx xxxx',
              },
              {
                id: 2,
                name: '小红',
                company: '浙江工业大学',
                score: 99,
                description: 'xxxx xxxx',
              },
              { id: 3, name: '小李', company: '浙江工业大学', score: 100 },
              { id: 4, name: '小陈', company: '浙江工业大学', score: 99 },
              { id: 5, name: '小黄', company: '浙江工业大学', score: 100 },
              { id: 6, name: '小张', company: '浙江工业大学', score: 100 },
            ],
          }
        },
        methods: {
          changeOrderBy(temp) {
            if (temp.score === 'desc') {
              this.dataSource.sort((a, b) => b.score - a.score)
            } else {
              this.dataSource.sort((a, b) => a.score - b.score)
            }
          },
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="加载中" description="">
  <table-demo6></table-demo6>
  <highlight-code slot="codeText" lang="vue">
    <y-table
      :columns="columns"
      :data-source="dataSource"
      :selected-items.sync="selectedItems"
      stripe
      border
      :loading="loading"
    >
    </y-table>
    <y-button style="margin-top: 10px;" @click="clickLoading" type="primary"
      >点击加载</y-button
    >
    <script>
      export default {
        components: {
          'y-table': Table,
          'y-button': Button,
        },
        data() {
          return {
            selectedItems: [],
            columns: [
              { type: 'selection' },
              { text: '姓名', key: 'name', width: 100 },
              { text: '分数', key: 'score', width: 100 },
              {
                text: '学校',
                key: 'company',
              },
            ],
            loading: false,
            dataSource: [
              {
                id: 1,
                name: '小张',
                company: '浙江工业大学',
                score: 100,
                description: 'xxxx xxxx',
              },
              {
                id: 2,
                name: '小红',
                company: '浙江工业大学',
                score: 99,
                description: 'xxxx xxxx',
              },
              { id: 3, name: '小李', company: '浙江工业大学', score: 100 },
              { id: 4, name: '小陈', company: '浙江工业大学', score: 99 },
              { id: 5, name: '小黄', company: '浙江工业大学', score: 100 },
              { id: 6, name: '小张', company: '浙江工业大学', score: 100 },
            ],
          }
        },
        methods: {
          clickLoading() {
            this.loading = true
            setTimeout(() => {
              this.loading = false
            }, 3000)
          },
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="可展开" description="当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能">
  <table-demo7></table-demo7>
  <highlight-code slot="codeText" lang="vue">
    <y-table
      :columns="columns"
      :data-source="dataSource"
      :selected-items.sync="selectedItems"
      stripe
      border
      expand-key="description"
    >
    </y-table>
    <script>
      export default {
        components: {
          'y-table': Table,
        },
        data() {
          return {
            selectedItems: [],
            columns: [
              { text: '姓名', key: 'name', width: 100 },
              { text: '分数', key: 'score', width: 100 },
              {
                text: '学校',
                key: 'company',
              },
            ],
            loading: false,
            dataSource: [
              {
                id: 1,
                name: '小张',
                company: '浙江工业大学',
                score: 100,
                description: 'xxxx xxxx',
              },
              {
                id: 2,
                name: '小红',
                company: '浙江工业大学',
                score: 99,
                description: 'xxxx xxxx',
              },
              { id: 3, name: '小李', company: '浙江工业大学', score: 100 },
              { id: 4, name: '小陈', company: '浙江工业大学', score: 99 },
              { id: 5, name: '小黄', company: '浙江工业大学', score: 100 },
              { id: 6, name: '小张', company: '浙江工业大学', score: 100 },
            ],
          }
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="显示序号列" description="">
  <table-demo8></table-demo8>
  <highlight-code slot="codeText" lang="vue">
    <y-table
      :columns="columns"
      :data-source="dataSource"
      :selected-items.sync="selectedItems"
      stripe
      border
      numberVisible
    >
    </y-table>
    <script>
      export default {
        components: {
          'y-table': Table,
        },
        data() {
          return {
            selectedItems: [],
            columns: [
              { text: '姓名', key: 'name', width: 100 },
              { text: '分数', key: 'score', width: 100 },
              {
                text: '学校',
                key: 'company',
              },
            ],
            loading: false,
            dataSource: [
              {
                id: 1,
                name: '小张',
                company: '浙江工业大学',
                score: 100,
                description: 'xxxx xxxx',
              },
              {
                id: 2,
                name: '小红',
                company: '浙江工业大学',
                score: 99,
                description: 'xxxx xxxx',
              },
              { id: 3, name: '小李', company: '浙江工业大学', score: 100 },
              { id: 4, name: '小陈', company: '浙江工业大学', score: 99 },
              { id: 5, name: '小黄', company: '浙江工业大学', score: 100 },
              { id: 6, name: '小张', company: '浙江工业大学', score: 100 },
            ],
          }
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="自定义列" description="自定义列的显示内容，可组合其他组件使用">
  <table-demo9></table-demo9>
  <highlight-code slot="codeText" lang="vue">
    <y-table
      :columns="columns"
      :data-source="dataSource"
      :selected-items.sync="selectedItems"
      stripe
      border
      numberVisible
    >
      <template slot-scope="row">
        <y-button style="margin-right: 5px">编辑</y-button>
        <y-button>查看</y-button>
      </template>
    </y-table>
    <script>
      export default {
        components: {
          'y-table': Table,
          'y-button': Button,
        },
        data() {
          return {
            selectedItems: [],
            columns: [
              { text: '姓名', key: 'name', width: 100 },
              { text: '分数', key: 'score', width: 100 },
              {
                text: '学校',
                key: 'company',
              },
            ],
            loading: false,
            dataSource: [
              {
                id: 1,
                name: '小张',
                company: '浙江工业大学',
                score: 100,
                description: 'xxxx xxxx',
              },
              {
                id: 2,
                name: '小红',
                company: '浙江工业大学',
                score: 99,
                description: 'xxxx xxxx',
              },
              { id: 3, name: '小李', company: '浙江工业大学', score: 100 },
              { id: 4, name: '小陈', company: '浙江工业大学', score: 99 },
              { id: 5, name: '小黄', company: '浙江工业大学', score: 100 },
              { id: 6, name: '小张', company: '浙江工业大学', score: 100 },
            ],
          }
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="固定表头" description="纵向内容过多时，可选择固定表头">
  <table-demo10></table-demo10>
  <highlight-code slot="codeText" lang="vue">
    <y-table
      :columns="columns"
      :data-source="dataSource"
      :selected-items.sync="selectedItems"
      stripe
      :height="400"
      numberVisible
    >
      <template slot-scope="row">
        <y-button style="margin-right: 5px">编辑</y-button>
        <y-button>查看</y-button>
      </template>
    </y-table>
    <script>
      export default {
        components: {
          'y-table': Table,
          'y-button': Button,
        },
        data() {
          return {
            selectedItems: [],
            columns: [
              { text: '姓名', key: 'name', width: 100 },
              { text: '分数', key: 'score', width: 100 },
              {
                text: '学校',
                key: 'company',
              },
            ],
            loading: false,
            dataSource: [
              {
                id: 1,
                name: '小张',
                company: '浙江工业大学',
                score: 100,
                description: 'xxxx xxxx',
              },
              {
                id: 2,
                name: '小红',
                company: '浙江工业大学',
                score: 99,
                description: 'xxxx xxxx',
              },
              { id: 3, name: '小李', company: '浙江工业大学', score: 100 },
              { id: 4, name: '小陈', company: '浙江工业大学', score: 99 },
              { id: 5, name: '小黄', company: '浙江工业大学', score: 100 },
              { id: 6, name: '小张', company: '浙江工业大学', score: 100 },
              { id: 7, name: '小李', company: '浙江工业大学', score: 100 },
              { id: 8, name: '小陈', company: '浙江工业大学', score: 99 },
              { id: 9, name: '小黄', company: '浙江工业大学', score: 100 },
              { id: 10, name: '小张', company: '浙江工业大学', score: 100 },
              { id: 11, name: '小李', company: '浙江工业大学', score: 100 },
              { id: 12, name: '小陈', company: '浙江工业大学', score: 99 },
              { id: 13, name: '小黄', company: '浙江工业大学', score: 100 },
              { id: 14, name: '小张', company: '浙江工业大学', score: 100 },
            ],
          }
        },
      }
    </script>
  </highlight-code>
</grid-test>

<grid-test title="紧凑型" description="">
  <table-demo11></table-demo11>
  <highlight-code slot="codeText" lang="vue">
    <y-table
      :columns="columns"
      :data-source="dataSource"
      :selected-items.sync="selectedItems"
      stripe
      border
      compact
    >
    </y-table>
    <script>
      export default {
        components: {
          'y-table': Table,
        },
        data() {
          return {
            selectedItems: [],
            columns: [
              { text: '姓名', key: 'name', width: 100 },
              { text: '分数', key: 'score', width: 100 },
              {
                text: '学校',
                key: 'company',
              },
            ],
            loading: false,
            dataSource: [
              {
                id: 1,
                name: '小张',
                company: '浙江工业大学',
                score: 100,
                description: 'xxxx xxxx',
              },
              {
                id: 2,
                name: '小红',
                company: '浙江工业大学',
                score: 99,
                description: 'xxxx xxxx',
              },
              { id: 3, name: '小李', company: '浙江工业大学', score: 100 },
              { id: 4, name: '小陈', company: '浙江工业大学', score: 99 },
              { id: 5, name: '小黄', company: '浙江工业大学', score: 100 },
              { id: 6, name: '小张', company: '浙江工业大学', score: 100 },
            ],
          }
        },
      }
    </script>
  </highlight-code>
</grid-test>

<style scoped>
table th { width: 100px; text-align: left; background: #f7f7f7; } 
table th:nth-of-type(2){ width: 200px; }
table td { font-size: 14px; }
</style>

### Attributes

| 参数          | 说明             | 类型    | 可选值 | 默认值 |
| ------------- | ---------------- | ------- | ------ | ------ |
| border        | 是否带有边框     | boolean | —      | false  |
| stripe        | 是否为斑马纹表格 | boolean | —      | false  |
| compact       | 是否为紧凑型     | boolean | —      | false  |
| numberVisible | 是否显示序号列   | boolean | —      | false  |
| dataSource    | 表格数据         | array   | —      | —      |
| columns       | 表头             | array   | —      | —      |
| expandKey     | 展开行显示属性   | string  | —      | —      |
| loading       | 是否加载中       | boolean | —      | false  |
| height        | 表格高度         | number  | —      | -      |
| orderBy       | 排序方式         | object  | —      | —      |

::: tip
多选需要在 columns 中添加`{ type: 'selection' }`
:::
