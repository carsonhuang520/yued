<template>
  <div class="form-wrapper">
    <form class="form" @submit.prevent="onSubmit">
      <h1>登录</h1>
      <form-row label="邮箱" :error="errors.email">
        <y-input type="text" v-model="user.email"></y-input>
      </form-row>
      <form-row label="密码" :error="errors.password">
        <y-input type="password" v-model="user.password"></y-input>
      </form-row>
      <div>
        <y-button class="ok" @click="onSubmit">提交</y-button>
      </div>
    </form>
  </div>
</template>
<script>
import FormRow from '../../../../src/form-row'
import Button from '../../../../src/button/button'
import Input from '../../../../src/input'
import formMixn from '../../../../src/form-mixin'
export default {
  components: {
    'y-button': Button,
    'y-input': Input,
    FormRow,
  },
  mixins: [formMixn],
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      rules: [
        { key: 'email', pattern: 'email', required: true },
        { key: 'password', minLength: 6, maxLength: 10, required: true },
      ],
    }
  },
  methods: {
    onSubmit() {
      this.validate(this.user)
      console.log(this.errors)
    },
  },
}
</script>
<style lang="scss">
.form {
  background: white;
  border-radius: 8px;
  &-wrapper {
    display: flex;
    justify-content: center;
  }
  h1 {
    margin: 0;
  }
  .controls {
  }
  .ok {
    display: block;
    width: 100%;
    margin-top: 24px;
  }
}
</style>
