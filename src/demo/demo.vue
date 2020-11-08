<template>
  <div id="app" style="display: flex; justify-content: center;">
    <div style="border: 1px solid black; width: 100px;">
      <y-sticky>
        <div>sticky内容</div>
      </y-sticky>
      <p>段落1</p>
      <p>段落2</p>
      <p>段落3</p>
      <p>段落4</p>
      <p>段落5</p>
      <p>段落6</p>
      <p>段落7</p>
      <p>段落8</p>
      <p>段落1</p>
      <p>段落2</p>
      <p>段落3</p>
      <p>段落4</p>
      <p>段落5</p>
      <p>段落6</p>
      <p>段落7</p>
      <p>段落8</p>
    </div>
    <!-- <p>段落9</p> -->
    <!-- <div style="margin: 20px;">
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
    </div> -->
  </div>
</template>

<script>
import Uploader from '../uploader'
import Button from '../button'
import Icon from '../icon'
import Sticky from '../sticky'
export default {
  name: 'TestDemo',
  components: {
    'y-sticky': Sticky,
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
