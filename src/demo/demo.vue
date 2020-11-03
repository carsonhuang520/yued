<template>
  <div id="app" style="padding: 100px;">
    <y-pagination
      :total-page="totalPage"
      :current-page.sync="currentPage"
      :hide-on-single-page="false"
    ></y-pagination>
  </div>
</template>

<script>
import Pagination from '../pagination'
export default {
  name: 'TestDemo',
  components: {
    'y-pagination': Pagination,
  },
  data() {
    return {
      totalPage: 100,
      currentPage: 1,
    }
  },
  computed: {},
  watch: {},
  methods: {},
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
