<template>
  <div>
    <h4>示例1</h4>
    <y-tabs :selected.sync="selected">
      <y-tabs-head>
        <y-tabs-item name="women">美女</y-tabs-item>
        <y-tabs-item name="man">帅哥</y-tabs-item>
        <y-tabs-item name="game">游戏</y-tabs-item>
      </y-tabs-head>
      <y-tabs-body>
        <y-tabs-pane name="women">美女相关内容</y-tabs-pane>
        <y-tabs-pane name="man">帅哥相关内容</y-tabs-pane>
        <y-tabs-pane name="game">游戏相关内容</y-tabs-pane>
      </y-tabs-body>
    </y-tabs>
    <pre><code>{{ content1 }}</code></pre>
    <h4>示例2：支持disabled</h4>
    <y-tabs :selected.sync="selected">
      <y-tabs-head>
        <y-tabs-item name="women">美女</y-tabs-item>
        <y-tabs-item name="man" disabled>帅哥</y-tabs-item>
        <y-tabs-item name="game">游戏</y-tabs-item>
      </y-tabs-head>
      <y-tabs-body>
        <y-tabs-pane name="women">美女相关内容</y-tabs-pane>
        <y-tabs-pane name="man">帅哥相关内容</y-tabs-pane>
        <y-tabs-pane name="game">游戏相关内容</y-tabs-pane>
      </y-tabs-body>
    </y-tabs>
    <pre><code>{{ content2 }}</code></pre>
  </div>
</template>
<script>
import Tabs from '../../../src/tabs/tabs'
import TabsHead from '../../../src/tabs/tabs-head'
import TabsItem from '../../../src/tabs/tabs-item'
import TabsBody from '../../../src/tabs/tabs-body'
import TabsPane from '../../../src/tabs/tabs-pane'
export default {
  components: {
    'y-tabs': Tabs,
    'y-tabs-head': TabsHead,
    'y-tabs-item': TabsItem,
    'y-tabs-body': TabsBody,
    'y-tabs-pane': TabsPane,
  },
  data() {
    return {
      selected: 'women',
      content1: `<y-tabs :selected.sync="selected">
  <y-tabs-head>
    <y-tabs-item name="women">美女</y-tabs-item>
    <y-tabs-item name="man">帅哥</y-tabs-item>
    <y-tabs-item name="game">游戏</y-tabs-item>
  </y-tabs-head>
  <y-tabs-body>
    <y-tabs-pane name="women">美女相关内容</y-tabs-pane>
    <y-tabs-pane name="man">帅哥相关内容</y-tabs-pane>
    <y-tabs-pane name="game">游戏相关内容</y-tabs-pane>
  </y-tabs-body>
</y-tabs>`,
      content2: `<y-tabs :selected.sync="selected">
  <y-tabs-head>
    <y-tabs-item name="women">美女</y-tabs-item>
    <y-tabs-item name="man" disabled>帅哥</y-tabs-item>
    <y-tabs-item name="game">游戏</y-tabs-item>
  </y-tabs-head>
  <y-tabs-body>
    <y-tabs-pane name="women">美女相关内容</y-tabs-pane>
    <y-tabs-pane name="man">帅哥相关内容</y-tabs-pane>
    <y-tabs-pane name="game">游戏相关内容</y-tabs-pane>
  </y-tabs-body>
</y-tabs>`
    }
  },
}
</script>
