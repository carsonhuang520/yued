<template>
  <div>
    <y-row class="row">
      <y-col class="item" :span="12">col-12</y-col>
      <y-col class="item" :span="12">col-12</y-col>
    </y-row>
    <y-row class="row">
      <y-col class="item" :span="8">col-8</y-col>
      <y-col class="item" :span="8">col-8</y-col>
      <y-col class="item" :span="8">col-8</y-col>
    </y-row>
    <y-row class="row">
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
    </y-row>
    <y-row class="row">
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :offset="6" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
    </y-row>
    <y-row class="row" :gutter="20">
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
    </y-row>

    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Row from '../../../src/row'
import Col from '../../../src/col'
export default {
  components: {
    'y-row': Row,
    'y-col': Col,
  },
  data() {
    return {
      content: `<y-row>
  <y-col :span="12">col-12</y-col>
  <y-col :span="12">col-12</y-col>
</y-row>
<y-row>
  <y-col :span="8">col-8</y-col>
  <y-col :span="8">col-8</y-col>
  <y-col :span="8">col-8</y-col>
</y-row>
<y-row>
  <y-col :span="6">col-6</y-col>
  <y-col :span="6">col-6</y-col>
  <y-col :span="6">col-6</y-col>
  <y-col :span="6">col-6</y-col>
</y-row>
<y-row>
  <y-col :span="6">col-6</y-col>
  <y-col :offset="6" :span="6">col-6</y-col>
  <y-col :span="6">col-6</y-col>
</y-row>
<y-row :gutter="20">
  <y-col :span="6">col-6</y-col>
  <y-col :span="6">col-6</y-col>
  <y-col :span="6">col-6</y-col>
  <y-col :span="6">col-6</y-col>
</y-row>`,
    }
  },
}
</script>
<style>
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
