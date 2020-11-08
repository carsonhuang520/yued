<template>
  <div class="y-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="temp" style="width: 0;height: 0;overflow:hidden;"></div>
    <!-- <img :src="url" /> -->
    <ol>
      <li v-for="file in fileList" :key="file.name">
        <img :src="file.url" width="100" height="100" />{{ file.name }}
        <y-button @click="onRemoveFile(file)">X</y-button>
      </li>
    </ol>
  </div>
</template>
<script>
import Button from './button'
export default {
  name: 'YueUploader',
  components: {
    'y-button': Button,
  },
  props: {
    method: {
      type: String,
      default: 'POST',
    },
    action: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    parseResponse: {
      type: Function,
      required: true,
    },
    fileList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      url: 'about:blank',
    }
  },
  methods: {
    onClickUpload() {
      let input = this.createInput()
      input.addEventListener('change', () => {
        let file = input.files[0]
        this.uploadFile(file)
        input.remove()
      })
      input.click()
    },
    onRemoveFile(file) {
      let res = window.confirm('你确定要删除吗?')
      if (res) {
        let copy = [...this.fileList]
        let index = copy.indexOf(file)
        copy.splice(index, 1)
        this.$emit('update:fileList', copy)
      }
    },
    uploadFile(file) {
      let formData = new FormData()
      formData.append(this.name, file)
      let { name, size, type } = file
      this.ajax(formData, (response) => {
        let url = this.parseResponse(response)
        this.url = url
        while (this.fileList.filter((item) => item.name === name).length > 0) {
          let dotIndex = name.lastIndexOf('.')
          let nameWithoutExtension = name.substring(0, dotIndex)
          let extension = name.substring(dotIndex)
          name = nameWithoutExtension + '(1)' + extension
        }
        this.$emit('update:fileList', [
          ...this.fileList,
          { name, type, size, url },
        ])
      })
    },
    ajax(formData, success) {
      let xhr = new XMLHttpRequest()
      xhr.open(this.method, this.action)
      xhr.onload = () => {
        success(xhr.response)
      }
      xhr.send(formData)
    },
    createInput() {
      let input = document.createElement('input')
      input.type = 'file'
      this.$refs.temp.appendChild(input)
      return input
    },
  },
}
</script>
<style lang="scss" scoped>
.y-uploader {
  > ol {
    list-style: none;
  }
}
</style>
