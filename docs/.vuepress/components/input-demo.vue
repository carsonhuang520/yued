<template>
  <div>
    <h4>示例1 传入 value 值</h4>
    <y-input value="hello world"></y-input>
    <pre><code>{{ content1 }}</code></pre>
    <h4>示例2 disabled</h4>
    <y-input value="hello world" disabled></y-input>
    <pre><code>{{ content2 }}</code></pre>
    <h4>示例3 readonly</h4>
    <y-input value="hello world" readonly></y-input>
    <pre><code>{{ content3 }}</code></pre>
    <h4>示例4 支持错误信息提示</h4>
    <y-input value="hello world" error="输入格式不对"></y-input>
    <pre><code>{{ content4 }}</code></pre>
    <h4>示例5 支持 placeholder</h4>
    <y-input value="" placeholder="enter something"></y-input>
    <pre><code>{{ content5 }}</code></pre>
    <h4>示例6 支持 icon</h4>
    <y-input value="" icon="settings" placeholder="enter something"></y-input>
    <pre><code>{{ content6 }}</code></pre>
  </div>
</template>
<script>
import Input from '../../../src/input'
export default {
  components: {
    'y-input': Input,
  },
  data() {
    return {
      content1: `<y-input value="hello world"></y-input>`,
      content2: `<y-input value="hello world" disabled></y-input>`,
      content3: `<y-input value="hello world" readonly></y-input>`,
      content4: `<y-input value="hello world" error="输入格式不对"></y-input>`,
      content5: `<y-input value="" placeholder="enter something"></y-input>`,
      content6: `<y-input value="" icon="settings" placeholder="enter something"></y-input>`,
    }
  },
}
</script>
