<template>
  <div>
    <h4>示例1</h4>
    <y-button>默认按钮</y-button>
    <y-button icon="settings">默认按钮</y-button>
    <y-button :loading="true">默认按钮</y-button>
    <y-button disabled>默认按钮</y-button>
    <pre><code>{{ content }}</code></pre>
    <h4>示例2 支持 type 属性</h4>
    <y-button>Default</y-button>
    <y-button type="primary">Primary</y-button>
    <y-button type="info">Info</y-button>
    <y-button type="success">Success</y-button>
    <y-button type="warning">Warning</y-button>
    <y-button type="error">Error</y-button>
    <y-button type="dashed">Dashed</y-button>
    <y-button type="text">Text</y-button>
    <pre><code>{{ content2 }}</code></pre>
    <h4>示例3 支持 size 属性</h4>
    <y-button type="primary" size="small">Small</y-button>
    <y-button type="primary">Default</y-button>
    <y-button type="primary" size="large">Large</y-button>
    <pre><code>{{ content3 }}</code></pre>
  </div>
</template>
<script>
import Button from '../../../src/button'
export default {
  components: {
    'y-button': Button,
  },
  data() {
    return {
      content: `<y-button>默认按钮</y-button>
<y-button icon="settings">默认按钮</y-button>
<y-button :loading="true">默认按钮</y-button>
<y-button disabled>默认按钮</y-button>`,
      content2: `<y-button>Default</y-button>
<y-button type="primary">Primary</y-button>
<y-button type="info">Info</y-button>
<y-button type="success">Success</y-button>
<y-button type="warning">Warning</y-button>
<y-button type="error">Error</y-button>
<y-button type="dashed">Dashed</y-button>
<y-button type="text">Text</y-button>`,
      content3: `<y-button type="primary" size="small">Small</y-button>
<y-button type="primary">Default</y-button>
<y-button type="primary" size="large">Large</y-button>`,
    }
  },
}
</script>
