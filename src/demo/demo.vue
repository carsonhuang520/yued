<template>
  <div id="app" style="margin-top: 100px;">
    <div style="margin: 20px;">
      <y-table
        :columns="columns"
        :data-source="dataSource"
        border
        :selected-items.sync="selectedItems"
        :order-by.sync="orderBy"
        :loading="loading"
        :height="400"
        @update:orderBy="changeOrderBy"
        expand-key="description"
      >
        <template slot-scope="row">
          <y-button style="margin-right: 5px" @click="edit(row.item)"
            >编辑</y-button
          >
          <y-button @click="view(row.item)">查看</y-button>
        </template>
      </y-table>
    </div>
  </div>
</template>

<script>
import Button from '../button'
import Table from '../table/table'
import Pagination from '../pagination'
export default {
  name: 'TestDemo',
  components: {
    'y-button': Button,
    'y-table': Table,
    'y-pagination': Pagination,
  },
  data() {
    return {
      totalPage: 100,
      currentPage: 1,
      selectedItems: [],
      columns: [
        // { type: 'selection' },
        { text: '姓名', key: 'name', width: 100 },
        { text: '分数', key: 'score' },
      ],
      orderBy: {
        score: 'desc',
      },
      loading: false,
      dataSource: [
        { id: 1, name: '小张', score: 100, description: 'xxxx xxxx' },
        { id: 2, name: '小红', score: 99, description: 'xxxx xxxx' },
        { id: 3, name: '小李', score: 100 },
        { id: 4, name: '小陈', score: 99 },
        { id: 5, name: '小黄', score: 100 },
        { id: 6, name: '小张', score: 100 },
      ],
    }
  },
  computed: {},
  watch: {},
  methods: {
    // onChangeItem(obj) {
    //   let { selected, item, index } = obj
    //   if (selected) {
    //     this.selected.push(item)
    //   } else {
    //     let index = this.selected.indexOf(item)
    //     this.selected.splice(index, 1)
    //   }
    // },
    edit(item) {
      alert(`编辑${item.id}`)
    },
    view(item) {
      alert(`查看${item.id}`)
    },
    changeOrderBy() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped></style>
