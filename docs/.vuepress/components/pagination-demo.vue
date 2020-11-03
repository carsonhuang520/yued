<template>
  <div>
    <h4>示例</h4>
    <y-pagination
      :total-page="totalPage"
      :current-page.sync="currentPage"
      :hide-on-single-page="false"
    ></y-pagination>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Pagination from '../../../src/pagination'
export default {
  components: {
    'y-pagination': Pagination,
  },
  data() {
    return {
      totalPage: 100,
      currentPage: 1,
      content: `<y-pagination
  :total-page="totalPage"
  :current-page.sync="currentPage"
  :hide-on-single-page="false"
></y-pagination>`,
    }
  },
}
</script>
