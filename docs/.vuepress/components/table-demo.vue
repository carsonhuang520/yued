<template>
  <div>
    <Table1 />
    <Table2 />
    <Table3 />
    <Table4 />
    <Table5 />
    <Table6 />
    <Table7 />
    <Table8 />
    <Table9 />
    <Table10 />
    <Table11 />
  </div>
</template>
<script>
import Table1 from './table/table1'
import Table2 from './table/table2'
import Table3 from './table/table3'
import Table4 from './table/table4'
import Table5 from './table/table5'
import Table6 from './table/table6'
import Table7 from './table/table7'
import Table8 from './table/table8'
import Table9 from './table/table9'
import Table10 from './table/table10'
import Table11 from './table/table11'
export default {
  components: {
    Table1,
    Table2,
    Table3,
    Table4,
    Table5,
    Table6,
    Table7,
    Table8,
    Table9,
    Table10,
    Table11,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss">
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
</style>
