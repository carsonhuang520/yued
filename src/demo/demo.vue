<template>
  <div id="app" style="margin-top: 100px;">
    <div style="margin: 20px;">
      {{ error }}
      <y-uploader
        action="http://127.0.0.1:3000/upload"
        name="file"
        method="POST"
        :parse-response="parseResponse"
        :file-list.sync="fileList"
        :size-limit="1024 * 1024"
        @error="error = $event"
        @add-file="addFile"
      >
        <y-button type="primary">上传</y-button>
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
export default {
  name: 'TestDemo',
  components: {
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
    addFile(file) {
      this.fileList.push(file)
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped></style>
