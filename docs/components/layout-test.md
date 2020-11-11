---
title: Layout 布局
---

# 布局

<grid-test title="常见页面布局" description="典型的页面布局">
  <layout-demo1></layout-demo1>
  <highlight-code slot="codeText" lang="vue">
    <y-layout class="layout">
      <y-header class="item header">Header</y-header>
      <y-content class="item content">Content</y-content>
      <y-footer class="item footer">Footer</y-footer>
    </y-layout>

    <y-layout class="layout">
      <y-header class="item header">Header</y-header>
      <y-layout>
        <y-sider class="item sider" width="100px">Sider</y-sider>
        <y-content class="item content">Content</y-content>
      </y-layout>
      <y-footer class="item footer">Footer</y-footer>
    </y-layout>

    <y-layout class="layout">
      <y-sider class="item sider" width="100px">Sider</y-sider>
      <y-layout>
        <y-header class="item header">Header</y-header>
        <y-content class="item content">Content</y-content>
        <y-footer class="item footer">Footer</y-footer>
      </y-layout>
    </y-layout>

    <y-layout class="layout">
      <y-header class="item header">Header</y-header>
      <y-layout>
        <y-content class="item content">Content</y-content>
        <y-sider class="item sider" width="100px">Sider</y-sider>
      </y-layout>
      <y-footer class="item footer">Footer</y-footer>
    </y-layout>

  </highlight-code>
</grid-test>
<style>
table th { width: 100px;text-align:left } 
table th:nth-of-type(4){width:200px}
</style>
### Header Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | —      | 60px   |

### Sider Attributes

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | —      | 300px  |

### Footer Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | —      | 60px   |
