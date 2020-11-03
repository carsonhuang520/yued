<template>
  <div id="app" style="padding: 100px;">
    <y-pagination
      :total-page="totalPage"
      :current-page="currentPage"
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
      totalPage: 20,
      currentPage: 3,
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
