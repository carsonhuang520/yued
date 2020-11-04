<template>
  <div id="app" style="padding: 100px;">
    {{ selectedItems }}
    <div style="margin: 20px;">
      <y-table
        :columns="columns"
        :data-source="dataSource"
        border
        :selected-items.sync="selectedItems"
      ></y-table>
    </div>
    <div style="margin: 20px;">
      <y-table
        :columns="columns"
        :data-source="dataSource"
        border
        compact
        :stripe="false"
      ></y-table>
    </div>
    <div>
      <y-pagination
        :total-page="totalPage"
        :current-page.sync="currentPage"
        :hide-on-single-page="false"
      ></y-pagination>
    </div>
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
        { text: '姓名', key: 'name' },
        { text: '分数', key: 'score' },
      ],
      dataSource: [
        { id: 1, name: '小张', score: 100 },
        { id: 2, name: '小红', score: 99 },
        { id: 3, name: '小张', score: 100 },
        { id: 4, name: '小红', score: 99 },
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
