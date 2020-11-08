<template>
  <div class="y-uploader">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <slot name="tips"></slot>
    <ol class="y-uploader-fileList">
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status === 'uploading'">
          <y-icon class="y-uploader-loading" name="loading"></y-icon>
        </template>
        <template v-else-if="file.type.indexOf('image') === 0">
          <img class="y-uploader-img" :src="file.url" width="32" height="32" />
        </template>
        <template v-else>
          <div class="y-uploader-defaultImg"></div>
        </template>
        <span class="y-uploader-name" :class="{ [file.status]: file.status }">{{
          file.name
        }}</span>
        <y-button class="y-uploader-remove" @click="onRemoveFile(file)"
          >X</y-button
        >
      </li>
    </ol>
    <div ref="temp" style="width: 0;height: 0;overflow:hidden;"></div>
  </div>
</template>
<script>
import Button from './button'
import Icon from './icon'
export default {
  name: 'YueUploader',
  components: {
    'y-button': Button,
    'y-icon': Icon,
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
        if (Math.random() > 0.5) {
          success(xhr.response)
        } else {
          fail()
        }
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
  &-fileList {
    list-style: none;
    > li {
      display: flex;
      align-items: center;
      margin: 8px 0;
      border: 1px solid #e1e1e1;
    }
  }
  &-img {
    margin-right: 8px;
  }
  &-defaultImg {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
  &-name {
    margin-right: auto;
    &.success {
      color: green;
    }
    &.fail {
      color: red;
    }
  }
  &-loading {
    margin-right: 8px;
    animation: spin 1s linear infinite;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
