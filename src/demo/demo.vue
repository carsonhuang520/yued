<template>
  <div id="app" style="margin-top: 100px;">
    <div style="margin: 20px;">
      {{ error }}
      <y-uploader
        action="http://127.0.0.1:3000/upload"
        name="file"
        method="POST"
        accept="image/png"
        :parse-response="parseResponse"
        :file-list.sync="fileList"
        :size-limit="1024 * 1024"
        @error="error = $event"
      >
        <y-button type="primary">
          <y-icon name="upload" style="fill: #ffffff;"></y-icon>上传
        </y-button>
        <div slot="tips">
          只能上传300KB以内的 png、jpeg 文件
        </div>
      </y-uploader>
    </div>
  </div>
</template>

<script>
import Uploader from '../uploader'
import Button from '../button'
import Icon from '../icon'
export default {
  name: 'TestDemo',
  components: {
    'y-icon': Icon,
    'y-uploader': Uploader,
    'y-button': Button,
  },
  data() {
    return {
      fileList: [],
      error: '',
    }
  },
  computed: {},
  watch: {},
  methods: {
    parseResponse(response) {
      let obj = JSON.parse(response)
      let url = `http://127.0.0.1:3000/preview/${obj.id}`
      return url
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped></style>
