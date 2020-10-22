<template>
  <div>
    <y-button>默认按钮</y-button>
    <y-button icon="settings">默认按钮</y-button>
    <y-button :loading="true">默认按钮</y-button>
    <y-button disabled>默认按钮</y-button>

    <pre><code>{{ content }}</code></pre>
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
      content: ` <y-button>默认按钮</y-button>
     <y-button icon="settings">默认按钮</y-button>
     <y-button :loading="true">默认按钮</y-button>
     <y-button disabled>默认按钮</y-button>`
        .replace(/\t+| +/g, '')
        .trim(),
    }
  },
}
</script>
