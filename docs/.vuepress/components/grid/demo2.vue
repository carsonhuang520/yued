<template>
  <div class="demo-button">
    <y-row class="row" :gutter="20">
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
    </y-row>
  </div>
</template>
<script>
import Row from '../../../../src/grid/row'
import Col from '../../../../src/grid/col'
export default {
  name: 'grid-demo1',
  components: {
    'y-row': Row,
    'y-col': Col,
  },
}
</script>
<style lang="scss" scoped>
.demo-button {
  width: 100%;
  text-align: center;
  div {
    margin: 10px 0;
  }
}
.row {
  margin-bottom: 10px;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4cb7ed;
  /* border: 1px solid red; */
  color: #ffffff;
  height: 40px;
  box-sizing: border-box;
  background-clip: content-box;
}
.row > :nth-child(2n) {
  background: #19a3e8;
  background-clip: content-box;
}
</style>
