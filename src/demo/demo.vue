<template>
  <div id="app" style="padding: 100px;">
    <!-- {{ selectedItems }} -->
    <div style="margin: 20px;">
      <y-table
        :columns="columns"
        :data-source="dataSource"
        border
        :selected-items.sync="selectedItems"
        :order-by.sync="orderBy"
        :loading="loading"
        :height="400"
        expand-key="description"
        @update:orderBy="changeOrderBy"
      ></y-table>
    </div>
    <!-- <div style="margin: 20px;">
      <y-table
        :columns="columns"
        :data-source="dataSource"
        border
        compact
        :stripe="false"
      ></y-table>
    </div> -->
    <!-- <div>
      <y-pagination
        :total-page="totalPage"
        :current-page.sync="currentPage"
        :hide-on-single-page="false"
      ></y-pagination>
    </div> -->
  </div>
</template>

<script>
import Table from '../table/table'
import Pagination from '../pagination'
export default {
  name: 'TestDemo',
  components: {
    'y-table': Table,
    'y-pagination': Pagination,
  },
  data() {
    return {
      totalPage: 100,
      currentPage: 1,
      selectedItems: [],
      columns: [
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
        { id: 7, name: '小红', score: 99 },
        { id: 8, name: '小李', score: 100 },
        { id: 9, name: '小陈', score: 99 },
        { id: 10, name: '小黄', score: 100 },
        { id: 11, name: '小张', score: 100 },
        { id: 12, name: '小红', score: 99 },
        { id: 13, name: '小李', score: 100 },
        { id: 14, name: '小陈', score: 99 },
        { id: 15, name: '小黄', score: 100 },
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
    changeOrderBy() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
