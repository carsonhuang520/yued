<template>
  <div>
    <h4>示例11：紧凑型</h4>
    <y-table
      :columns="columns"
      :data-source="dataSource"
      :selected-items.sync="selectedItems"
      compact
      border
      numberVisible
    >
    </y-table>
    <y-button
      v-if="!contentVisible"
      style="margin-top: 10px;"
      type="primary"
      @click="contentVisible = true"
      >查看代码</y-button
    >
    <y-button
      v-else
      style="margin-top: 10px;"
      type="primary"
      @click="contentVisible = false"
      >隐藏代码</y-button
    >
    <pre v-if="contentVisible"><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Button from '../../../../src/button'
import Table from '../../../../src/table/table'
export default {
  components: {
    'y-button': Button,
    'y-table': Table,
  },
  data() {
    return {
      selectedItems: [],
      columns: [
        // { type: 'selection' },
        { text: '姓名', key: 'name', width: 100 },
        { text: '分数', key: 'score', width: 100 },
        {
          text: '学校',
          key: 'company',
        },
      ],
      columns2: [
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
      contentVisible: false,
      content: `<y-table
  :columns="columns"
  :data-source="dataSource"
  :selected-items.sync="selectedItems"
  compact
  border
  numberVisible
>
</y-table>`,
    }
  },
  methods: {
    changeOrderBy() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
  },
}
</script>
