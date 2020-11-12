---
title: Upload 上传
---

# 上传

<grid-test title="点击上传" description="">
  <upload-demo1></upload-demo1>
  <highlight-code slot="codeText" lang="vue">
    <y-uploader
      action="http://39.101.207.19:3001/upload"
      name="file"
      method="POST"
      accept="image/png"
      :parse-response="parseResponse"
      :file-list.sync="fileList"
      :multiple="false"
      @error="error = $event"
    >
      <y-button type="primary" class="btn">
        <y-icon name="upload" style="fill: #ffffff;"></y-icon>上传
      </y-button>
    </y-uploader>
  </highlight-code>
</grid-test>

<grid-test title="多文件上传" description="支持一次上传多个文件">
  <upload-demo2></upload-demo2>
  <highlight-code slot="codeText" lang="vue">
    <y-uploader
      action="http://39.101.207.19:3001/upload"
      name="file"
      method="POST"
      accept="image/png"
      :parse-response="parseResponse"
      :file-list.sync="fileList"
      :multiple="true"
      @error="error = $event"
    >
      <y-button type="primary" class="btn">
        <y-icon name="upload" style="fill: #ffffff;"></y-icon>上传
      </y-button>
    </y-uploader>
  </highlight-code>
</grid-test>

<style>
table th { width: 100px; text-align: left; background: #f7f7f7; } 
table th:nth-of-type(2){ width: 200px; }
table td { font-size: 14px; }
</style>

### Attributes

| 参数          | 说明               | 类型     | 可选值     | 默认值     |
| ------------- | ------------------ | -------- | ---------- | ---------- |
| accept        | 文件类型           | string   | —          | —          |
| fileList      | 上传文件列表       | array    | —          | —          |
| method        | 提交方式           | string   | post / put | post       |
| action        | 文件上传服务器地址 | string   | —          | —          |
| parseResponse | 解析响应回调       | function | —          | —          |
| sizeLimit     | 文件大小限制       | number   | —          | 1024\*1024 |
| multiple      | 是否多文件上传     | boolean  | —          | true       |
