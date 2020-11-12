<template>
  <div id="app" style="padding: 100px;">
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
          <y-button class="ok" type="submit">提交</y-button>
        </div>
      </form>
    </div>
    <!-- <y-cascader
      :source.sync="source"
      popover-height="200px"
      :selected.sync="selected"
      :load-data="loadData"
    ></y-cascader> -->
    <!-- <div>{{ source }}</div> -->
  </div>
</template>
<script>
import Cascader from './cascader/cascader'
import db from './db'
import FormRow from './form-row'
import Button from './button/button'
import Input from './input'
import formMixn from './form-mixin'
function ajax2(parentId = 0, success, fail) {
  let id = setTimeout(() => {
    let result = db.filter((item) => item.parent_id === parentId)
    success(result)
  }, 3000)
  return id
}

function ajax(parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id === parentId)
      // 判断是否是叶子结点
      result.forEach((node) => {
        if (db.filter((item) => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        } else {
          node.isLeaf = true
        }
      })
      success(result)
    }, 200)
  })
}
export default {
  name: 'demo',
  components: {
    'y-cascader': Cascader,
    'y-button': Button,
    'y-input': Input,
    FormRow,
  },
  mixins: [formMixn],
  data() {
    return {
      selected: [],
      source: [],
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
  created() {
    ajax(0).then((result) => {
      this.source = result
    })
  },
  methods: {
    onSubmit() {
      this.validate(this.user)
      console.log(this.errors)
    },
    handleUpdateSelected() {
      ajax(this.selected[0].id).then((result) => {
        let lastLevelSelected = this.source.filter(
          (item) => item.id === this.selected[0].id
        )[0]
        this.$set(lastLevelSelected, 'children', result)
        console.log(lastLevelSelected)
      })
    },
    loadData(item, callback) {
      const id = item.id
      ajax(id).then((result) => {
        callback(result)
      })
    },
  },
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eeeeee;
  --border-radius: 4px;
  --color: #333333;
  --border-color: #999999;
  --border-color-hover: #666666;
}

body {
  font-size: var(--font-size);
  background: #888;
}
.form {
  background: white;
  padding: 24px;
  border-radius: 8px;
  margin-top: 36px;
  min-height: 60vh;
  &-wrapper {
    display: flex;
    justify-content: center;
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
