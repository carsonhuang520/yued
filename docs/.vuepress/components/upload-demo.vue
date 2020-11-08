<template>
  <div>
    <h4>示例</h4>
    <y-uploader
      action="http://39.101.207.19:3001/upload"
      name="file"
      method="POST"
      accept="image/png"
      :parse-response="parseResponse"
      :file-list.sync="fileList"
      @error="error = $event"
    >
      <y-button type="primary" class="btn">
        <y-icon name="upload" style="fill: #ffffff;"></y-icon>上传
      </y-button>
    </y-uploader>
    <y-button
      v-if="!contentVisible"
      style="margin-top: 10px;"
      type="primary"
      @click="contentVisible = true"
      >查看代码</y-button
    >
    <y-button
      v-else
      style="margin-top: 10px;"
      type="primary"
      @click="contentVisible = false"
      >隐藏代码</y-button
    >
    <pre v-if="contentVisible"><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Icon from '../../../src/icon'
import Button from '../../../src/button'
import Uploader from '../../../src/uploader'
export default {
  components: {
    'y-icon': Icon,
    'y-uploader': Uploader,
    'y-button': Button,
  },
  data() {
    return {
      fileList: [],
      contentVisible: false,
      content: `<y-uploader
  action="http://39.101.207.19:3001/upload"
  name="file"
  method="POST"
  accept="image/png"
  :parse-response="parseResponse"
  :file-list.sync="fileList"
  @error="error = $event"
>
  <y-button type="primary" class="btn">
    <y-icon name="upload" style="fill: #ffffff;"></y-icon>上传
  </y-button>
</y-uploader>`,
    }
  },
  methods: {
    parseResponse(response) {
      let obj = JSON.parse(response)
      let url = `http://39.101.207.19:3001/preview/${obj.id}`
      return url
    },
  },
}
</script>
<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
}
</style>
