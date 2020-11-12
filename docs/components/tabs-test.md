---
title: Tabs 标签页
---

# 标签页

<grid-test title="基础用法" description="基础的、简洁的标签页">
  <tabs-demo1></tabs-demo1>
  <highlight-code slot="codeText" lang="vue">
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
  </highlight-code>
</grid-test>

<grid-test title="选项卡样式" description="选项卡样式的标签页">
  <tabs-demo2></tabs-demo2>
  <highlight-code slot="codeText" lang="vue">
    <y-tabs :selected.sync="selected" type="card">
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
  </highlight-code>
</grid-test>

<grid-test title="禁用" description="可以禁用某个标签页">
  <tabs-demo3></tabs-demo3>
  <highlight-code slot="codeText" lang="vue">
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
  </highlight-code>
</grid-test>

<grid-test title="位置" description="可以设置标签的位置">
  <tabs-demo4></tabs-demo4>
  <highlight-code slot="codeText" lang="vue">
    <y-tabs :selected.sync="selected" direction="vertical">
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
  </highlight-code>
</grid-test>

<grid-test title="自定义图标" description="可以设置标签的图标">
  <tabs-demo5></tabs-demo5>
  <highlight-code slot="codeText" lang="vue">
    <y-tabs :selected.sync="selected">
      <y-tabs-head>
        <y-tabs-item name="women" icon="left">美女</y-tabs-item>
        <y-tabs-item name="man" icon="settings">帅哥</y-tabs-item>
        <y-tabs-item name="game" icon="right">游戏</y-tabs-item>
      </y-tabs-head>
      <y-tabs-body>
        <y-tabs-pane name="women">美女相关内容</y-tabs-pane>
        <y-tabs-pane name="man">帅哥相关内容</y-tabs-pane>
        <y-tabs-pane name="game">游戏相关内容</y-tabs-pane>
      </y-tabs-body>
    </y-tabs>
  </highlight-code>
</grid-test>

<style>
table th { width: 100px; text-align: left; background: #f7f7f7; } 
table th:nth-of-type(2){ width: 200px; }
table td { font-size: 14px; }
</style>

### Tabs Attributes

| 参数      | 说明              | 类型   | 可选值                | 默认值              |
| --------- | ----------------- | ------ | --------------------- | ------------------- |
| selected  | 选中选项卡的 name | string | —                     | 第一个选项卡的 name |
| type      | 风格类型          | string | default / card        | default             |
| direction | 选项卡所在位置    | string | horizontal / vertical | horizontal          |

### TabsItem Attributes

| 参数     | 说明                                                 | 类型    | 可选值 | 默认值 |
| -------- | ---------------------------------------------------- | ------- | ------ | ------ |
| disabled | 是否禁用                                             | boolean | —      | false  |
| icon     | 图标名称                                             | string  | —      | —      |
| name     | 与选项卡绑定值 selected 对应的标识符，表示选项卡别名 | string  | —      | —      |

### TabsPane Attributes

| 参数 | 说明                                                 | 类型   | 可选值 | 默认值 |
| ---- | ---------------------------------------------------- | ------ | ------ | ------ |
| name | 与选项卡绑定值 selected 对应的标识符，表示选项卡别名 | string | —      | —      |

::: tip
y-tabs-item 和 对应的 y-tabs-pane 的 name 要相同
:::
