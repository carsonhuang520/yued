<template>
  <div style="border: 1px solid black; width: 100px;">
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落8</p>
    <p>段落9</p>
    <p>段落10</p>
    <p>段落11</p>
    <p>段落12</p>
    <p>段落13</p>
    <p>段落14</p>
    <p>段落15</p>
    <p>段落16</p>
    <p>段落17</p>
    <p>段落18</p>
    <p>段落19</p>
    <p>段落20</p>
    <y-sticky :distance="100">
      <div>固定在距离顶部 100px 的位置</div>
    </y-sticky>
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落8</p>
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落8</p>
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落8</p>
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落8</p>
  </div>
</template>
<script>
import Sticky from '../../../../src/sticky'
export default {
  name: 'TestDemo',
  components: {
    'y-sticky': Sticky,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped></style>
