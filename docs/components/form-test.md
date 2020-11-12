---
title: Form 表单
---

# 表单

<grid-test title="基础用法" description="">
  <form-demo1></form-demo1>
  <highlight-code slot="codeText" lang="vue">
    <form class="form" @submit.prevent="onSubmit">
      <h1>登录</h1>
      <form-row label="邮箱" :error="errors.email">
        <y-input type="text" v-model="user.email"></y-input>
      </form-row>
      <form-row label="密码" :error="errors.password">
        <y-input type="password" v-model="user.password"></y-input>
      </form-row>
      <div>
        <y-button class="ok" type="submit">提交</y-button>
      </div>
    </form>
    <script>
      export default {
        data() {
          return {
            user: {
              email: '',
              password: '',
            },
            rules: [
              { key: 'email', pattern: 'email', required: true },
              { key: 'password', minLength: 6, required: true },
            ],
          }
        },
        methods: {
          onSubmit() {
            this.validate(this.user)
          },
        },
      }
    </script>
  </highlight-code>
</grid-test>
