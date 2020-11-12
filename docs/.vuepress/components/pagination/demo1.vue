<template>
  <div>
    <y-pagination
      :total-page="totalPage"
      :current-page.sync="currentPage"
      :hide-on-single-page="false"
    ></y-pagination>
  </div>
</template>
<script>
import Pagination from '../../../../src/pagination'
export default {
  components: {
    'y-pagination': Pagination,
  },
  data() {
    return {
      totalPage: 100,
      currentPage: 1,
    }
  },
}
</script>
