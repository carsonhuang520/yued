<template>
  <div class="wrapper">
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
  </div>
</template>
<script>
import Table from '../../../../src/table/table'
import Button from '../../../../src/button'
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
<style lang="scss">
.wrapper {
  width: 100%;
  table {
    display: table;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  tr,
  th,
  td {
    border: none;
  }
}
</style>
