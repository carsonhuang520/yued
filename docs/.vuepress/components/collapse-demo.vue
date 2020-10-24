<template>
  <div>
    <h4>示例1 可展开多项</h4>
    <y-collapse :selected.sync="selected">
      <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
      <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
      <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
    </y-collapse>
    <pre><code>{{ content }}</code></pre>
    <h4>示例2 支持 accordion 属性</h4>
    <y-collapse :selected.sync="selected" accordion>
      <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
      <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
      <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
    </y-collapse>
    <pre><code>{{ contentAccordion }}</code></pre>
  </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapseItem'
export default {
  components: {
    'y-collapse': Collapse,
    'y-collapse-item': CollapseItem,
  },
  data() {
    return {
      selected: ['1'],
      content: `<y-collapse :selected.sync="selected">
  <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
  <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
  <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
</y-collapse>`,
      contentAccordion: `<y-collapse :selected.sync="selected" accordion>
  <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
  <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
  <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
</y-collapse>`,
    }
  },
}
</script>
