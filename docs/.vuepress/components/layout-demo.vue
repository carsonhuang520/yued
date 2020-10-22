<template>
  <div>
    <h4>示例1</h4>
    <y-layout class="layout">
      <y-header class="item header">Header</y-header>
      <y-content class="item content">Content</y-content>
      <y-footer class="item footer">Footer</y-footer>
    </y-layout>
    <pre><code>{{ content1 }}</code></pre>
    <h4>示例2</h4>
    <y-layout class="layout">
      <y-header class="item header">Header</y-header>
      <y-layout>
        <y-sider class="item sider">Sider</y-sider>
        <y-content class="item content">Content</y-content>
      </y-layout>
      <y-footer class="item footer">Footer</y-footer>
    </y-layout>
    <pre><code>{{ content2 }}</code></pre>
    <h4>示例3</h4>
    <y-layout class="layout">
      <y-sider class="item sider">Sider</y-sider>
      <y-layout>
        <y-header class="item header">Header</y-header>
        <y-content class="item content">Content</y-content>
        <y-footer class="item footer">Footer</y-footer>
      </y-layout>
    </y-layout>
    <pre><code>{{ content3 }}</code></pre>
    <h4>示例4</h4>
    <y-layout class="layout">
      <y-header class="item header">Header</y-header>
      <y-layout>
        <y-content class="item content">Content</y-content>
        <y-sider class="item sider">Sider</y-sider>
      </y-layout>
      <y-footer class="item footer">Footer</y-footer>
    </y-layout>
    <pre><code>{{ content4 }}</code></pre>
  </div>
</template>
<script>
import Layout from '../../../src/layout/layout'
import Header from '../../../src/layout/header'
import Content from '../../../src/layout/content'
import Sider from '../../../src/layout/sider'
import Footer from '../../../src/layout/footer'
export default {
  components: {
    'y-layout': Layout,
    'y-header': Header,
    'y-content': Content,
    'y-sider': Sider,
    'y-footer': Footer,
  },
  data() {
    return {
      content1: `<y-layout>
  <y-header>Header</y-header>
  <y-content>Content</y-content>
  <y-footer>Footer</y-footer>
</y-layout>`,
      content2: `<y-layout>
  <y-header>Header</y-header>
  <y-layout>
    <y-sider>Sider</y-sider>
    <y-content>Content</y-content>
  </y-layout>
  <y-footer>Footer</y-footer>
</y-layout>`,
      content3: `<y-layout>
  <y-sider>Sider</y-sider>
  <y-layout>
    <y-header>Header</y-header>
    <y-content>Content</y-content>
    <y-footer>Footer</y-footer>
  </y-layout>
</y-layout>`,
      content4: `<y-layout>
  <y-header>Header</y-header>
  <y-layout>
    <y-content>Content</y-content>
    <y-sider>Sider</y-sider>
  </y-layout>
  <y-footer>Footer</y-footer>
</y-layout>`,
    }
  },
}
</script>
<style lang="scss" scoped>
.layout {
  height: 300px;
  color: #ffffff;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  height: 60px;
  background: #7cbce9;
}
.sider {
  width: 20%;
  background: #3a9fe8;
}
.content {
  background: #0f8de9;
}
.footer {
  height: 60px;
  background: #7cbce9;
}
</style>
