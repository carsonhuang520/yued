<template>
  <div class="y-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="temp" style="width: 0;height: 0;overflow:hidden;"></div>
    <!-- <img :src="url" /> -->
    <ol>
      <li v-for="file in fileList" :key="file.name">
        <span v-if="file.status === 'uploading'">加载中</span>
        <img :src="file.url" width="100" height="100" />{{ file.name }}
        <y-button @click="onRemoveFile(file)">X</y-button>
        <span>{{ file.status }}</span>
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
    beforeUploadFile(file, newName) {
      let { size, type } = file
      this.$emit('update:fileList', [
        ...this.fileList,
        { name: newName, type, size, status: 'uploading' },
      ])
    },
    uploadFile(file) {
      let { name, size, type } = file
      let newName = this.generateName(name)
      this.beforeUploadFile(file, newName)
      let formData = new FormData()
      formData.append(this.name, file)
      this.ajax(
        formData,
        (response) => {
          let url = this.parseResponse(response)
          this.url = url
          this.afterUploadFile(newName, url)
        },
        () => {
          this.uploadError(newName)
        }
      )
    },
    afterUploadFile(newName, url) {
      let tempFile = this.fileList.filter((item) => item.name === newName)[0]
      let index = this.fileList.indexOf(tempFile)
      let copy = JSON.parse(JSON.stringify(tempFile))
      copy.url = url
      copy.status = 'success'
      let fileListCopy = [...this.fileList]
      fileListCopy.splice(index, 1, copy)
      this.$emit('update:fileList', fileListCopy)
    },
    uploadError(newName) {
      let tempFile = this.fileList.filter((item) => item.name === newName)[0]
      let index = this.fileList.indexOf(tempFile)
      let copy = JSON.parse(JSON.stringify(tempFile))
      copy.status = 'fail'
      let fileListCopy = [...this.fileList]
      fileListCopy.splice(index, 1, copy)
      this.$emit('update:fileList', fileListCopy)
    },
    generateName(name) {
      while (this.fileList.filter((item) => item.name === name).length > 0) {
        let dotIndex = name.lastIndexOf('.')
        let nameWithoutExtension = name.substring(0, dotIndex)
        let extension = name.substring(dotIndex)
        name = nameWithoutExtension + '(1)' + extension
      }
      return name
    },
    ajax(formData, success, fail) {
      let xhr = new XMLHttpRequest()
      xhr.open(this.method, this.action)
      xhr.onload = () => {
        success(xhr.response)
        // fail()
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
