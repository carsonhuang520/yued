---
title: Grid 栅格
---

# 栅格

<grid-test title="基础布局" description="使用单一分栏创建基础的栅格布局">
  <grid-demo1></grid-demo1>
  <highlight-code slot="codeText" lang="vue">
    <y-row class="row">
      <y-col class="item" :span="24">col-24</y-col>
    </y-row>
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
      <y-col class="item" :span="4">col-4</y-col>
      <y-col class="item" :span="4">col-4</y-col>
      <y-col class="item" :span="4">col-4</y-col>
      <y-col class="item" :span="4">col-4</y-col>
      <y-col class="item" :span="4">col-4</y-col>
      <y-col class="item" :span="4">col-4</y-col>
    </y-row>
  </highlight-code>
</grid-test>

<grid-test title="分栏间隔" description="分栏之间存在间隔">
  <grid-demo2></grid-demo2>
  <highlight-code slot="codeText" lang="vue">
    <y-row class="row" :gutter="20">
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
    </y-row>
  </highlight-code>
</grid-test>

<grid-test title="分栏偏移" description="支持偏移指定的栏数">
  <grid-demo3></grid-demo3>
  <highlight-code slot="codeText" lang="vue">
    <y-row class="row" :gutter="20">
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6" :offset="6">col-6</y-col>
    </y-row>
    <y-row class="row" :gutter="20">
      <y-col class="item" :span="6" :offset="6">col-6</y-col>
      <y-col class="item" :span="6" :offset="6">col-6</y-col>
    </y-row>
    <y-row class="row" :gutter="20">
      <y-col class="item" :span="12" :offset="6">col-12</y-col>
    </y-row>
  </highlight-code>
</grid-test>

<grid-test title="混合布局" description="通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局">
  <grid-demo4></grid-demo4>
  <highlight-code slot="codeText" lang="vue">
    <y-row class="row" :gutter="20">
      <y-col class="item" :span="16">col-16</y-col>
      <y-col class="item" :span="8">col-8</y-col>
    </y-row>
    <y-row class="row" :gutter="20">
      <y-col class="item" :span="8">col-8</y-col>
      <y-col class="item" :span="8">col-8</y-col>
      <y-col class="item" :span="4">col-4</y-col>
      <y-col class="item" :span="4">col-4</y-col>
    </y-row>
    <y-row class="row" :gutter="20">
      <y-col class="item" :span="4">col-4</y-col>
      <y-col class="item" :span="16">col-16</y-col>
      <y-col class="item" :span="4">col-4</y-col>
    </y-row>
  </highlight-code>
</grid-test>

<grid-test title="对齐方式" description="通过 flex 布局来对分栏进行灵活的对齐">
  <grid-demo5></grid-demo5>
  <highlight-code slot="codeText" lang="vue">
    <y-row class="row">
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
    </y-row>
    <y-row class="row" align="center">
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
    </y-row>
    <y-row class="row" align="right">
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
      <y-col class="item" :span="6">col-6</y-col>
    </y-row>
    <y-row class="row" align="left">
      <y-col class="item" :order="3" :span="6">col-6-order-3</y-col>
      <y-col class="item" :order="1" :span="6">col-6-order-1</y-col>
      <y-col class="item" :order="2" :span="6">col-6-order-2</y-col>
    </y-row>
  </highlight-code>
</grid-test>

<grid-test title="响应式布局" description="参照了 Bootstrap 的响应式设计">
  <grid-demo6></grid-demo6>
  <highlight-code slot="codeText" lang="vue">
    <y-row class="row">
      <y-col class="item" :phone="{ span: 4 }" :pc="{ span: 6 }">col-6</y-col>
      <y-col class="item" :phone="{ span: 8 }" :pc="{ span: 6 }">col-6</y-col>
      <y-col class="item" :phone="{ span: 8 }" :pc="{ span: 6 }">col-6</y-col>
      <y-col class="item" :phone="{ span: 4 }" :pc="{ span: 6 }">col-6</y-col>
    </y-row>
  </highlight-code>
</grid-test>

### Row Attributes

| 参数   | 说明                      | 类型   | 可选值                | 默认值 |
| ------ | ------------------------- | ------ | --------------------- | ------ |
| gutter | 栅格间隔                  | number | —                     | 0      |
| align  | flex 布局下的水平排列方式 | string | left / center / right | left   |

### Col Attributes

| 参数   | 说明                                             | 类型   | 可选值                                                                                                                                                        | 默认值 |
| ------ | ------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| span   | 栅格占据的列数                                   | number | —                                                                                                                                                             | 24     |
| offset | 栅格左侧的间隔格数                               | number | —                                                                                                                                                             | 0      |
| order  | flex 布局下的 order 顺序&nbsp;&nbsp;&nbsp;&nbsp; | number | —&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | —      |
