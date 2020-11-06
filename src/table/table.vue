<template>
  <div ref="wrapper" class="y-table-wrapper">
    <div
      :style="{ height: height + 'px', overflow: 'auto' }"
      ref="tableWrapper"
    >
      <table ref="table" class="y-table" :class="{ border, compact, stripe }">
        <thead>
          <tr>
            <th
              v-if="expandKey"
              :style="{ width: '50px' }"
              class="y-table-center"
            ></th>
            <th
              v-if="isChecked"
              :style="{ width: '50px' }"
              class="y-table-center"
            >
              <input
                type="checkbox"
                ref="allChecked"
                @change="onChangeAllItems"
                :checked="areSelectedAll"
              />
            </th>
            <th :style="{ width: '50px' }" v-if="numberVisible">#</th>
            <th
              v-for="column in computedColumns"
              :key="column.key"
              :style="{ width: column.width + 'px' }"
            >
              <div class="y-table-header">
                {{ column.text }}
                <span
                  v-if="column.key in orderBy"
                  class="y-table-sorter"
                  @click="changeOrderBy(column.key)"
                >
                  <y-icon
                    name="asc"
                    :class="{ active: orderBy[column.key] === 'asc' }"
                  ></y-icon>
                  <y-icon
                    name="desc"
                    :class="{ active: orderBy[column.key] === 'desc' }"
                  ></y-icon>
                </span>
              </div>
            </th>
            <th v-if="$scopedSlots.default" ref="actionHeader">操作</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(row, index) in dataSource">
            <tr :key="row.id">
              <td
                v-if="expandKey"
                :style="{ width: '50px' }"
                class="y-table-center"
              >
                <span
                  class="y-table-expandWrapper"
                  @click="expandItem(row.id)"
                  :class="{ opened: inExpandItems(row.id) }"
                >
                  <y-icon class="y-table-expandIcon" name="right"></y-icon>
                </span>
              </td>
              <td
                v-if="isChecked"
                :style="{ width: '50px' }"
                class="y-table-center"
              >
                <input
                  type="checkbox"
                  name=""
                  id=""
                  :checked="
                    selectedItems.filter((item) => item.id === row.id).length >
                      0
                  "
                  @change="onChangeItem(row, index, $event)"
                />
                <!-- 不能通过selectedItems.indexOf(item)>0来判断，因为selectedItems是深拷贝后的，与dataSource是不同的对象 -->
              </td>
              <td :style="{ width: '50px' }" v-if="numberVisible">
                {{ index + 1 }}
              </td>
              <template v-for="(column, index) in computedColumns">
                <td :key="index" :style="{ width: column.width + 'px' }">
                  {{ row[column.key] }}
                </td>
              </template>
              <td v-if="$scopedSlots.default">
                <div ref="actions" style="display: inline-block;">
                  <slot :item="row"> </slot>
                </div>
              </td>
            </tr>
            <tr v-if="inExpandItems(row.id)" :key="`${row.id}-expand`">
              <td :style="{ width: '50px' }" style="border-right: none;"></td>
              <td
                :style="{ width: '50px' }"
                style="border-left: none;border-right: none;"
              ></td>
              <td :colspan="columns.length + 2" style="border-left: none;">
                {{ row[expandKey] }}
                测试
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div v-if="loading" class="y-table-loading">
      <y-icon name="loading"></y-icon>
    </div>
  </div>
</template>
<script>
import Icon from '../icon'
export default {
  name: 'YueTable',
  components: {
    'y-icon': Icon,
  },
  props: {
    expandKey: {
      type: String,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
    },
    stripe: {
      type: Boolean,
      default: true,
    },
    orderBy: {
      type: Object,
      default: () => {},
    },
    selectedItems: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      required: true,
    },
    dataSource: {
      type: Array,
      required: true,
    },
    numberVisible: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      expandIds: [],
      opened: false,
    }
  },
  computed: {
    areSelectedAll() {
      const a = this.dataSource.map((item) => item.id).sort()
      const b = this.selectedItems.map((item) => item.id).sort()
      if (a.length !== b.length) {
        return false
      }
      let equal = true
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          equal = false
          break
        }
      }
      return equal
    },
    computedColumns() {
      let result = []
      this.columns.forEach((item) => {
        if (!item.type) {
          result.push(item)
        }
      })
      return result
    },
    isChecked() {
      let flag = false
      this.columns.forEach((item) => {
        console.log(item)
        if (item.type && item.type === 'selection') {
          flag = true
          return
        }
      })
      return flag
    },
  },
  watch: {
    selectedItems() {
      if (this.selectedItems.length === this.dataSource.length) {
        this.$refs.allChecked.indeterminate = false
      } else if (this.selectedItems.length === 0) {
        this.$refs.allChecked.indeterminate = false
      } else {
        this.$refs.allChecked.indeterminate = true
      }
    },
  },
  mounted() {
    let table2 = this.$refs.table.cloneNode(false)
    this.table2 = table2
    table2.classList.add('y-table-copy')
    let thead = this.$refs.table.children[0]
    let { height } = thead.getBoundingClientRect()
    this.$refs.tableWrapper.style.marginTop = height + 'px'
    this.$refs.tableWrapper.style.height = this.height - height + 'px'
    table2.appendChild(thead)
    this.$refs.wrapper.appendChild(table2)
    if (this.$scopedSlots.default) {
      let div = this.$refs.actions[0]
      const { width } = div.getBoundingClientRect()
      let parent = div.parentNode
      let styles = getComputedStyle(parent)
      let paddingLeft = styles.getPropertyValue('padding-left')
      let paddingRight = styles.getPropertyValue('padding-right')
      let borderLeft = styles.getPropertyValue('border-left-width')
      let borderRight = styles.getPropertyValue('border-right-width')
      let width2 =
        width +
        parseInt(paddingLeft) +
        parseInt(paddingRight) +
        parseInt(borderLeft) +
        parseInt(borderRight)
      this.$refs.actionHeader.style.width = width2 + 'px'
      this.$refs.actions.map((item) => {
        item.parentNode.style.width = width2 + 'px'
      })
      console.log(paddingLeft)
    }
  },
  beforeDestroy() {
    this.table2.remove()
  },
  methods: {
    inExpandItems(id) {
      return this.expandIds.indexOf(id) >= 0
    },
    expandItem(id) {
      this.opened = !this.opened
      if (this.inExpandItems(id)) {
        this.expandIds.splice(this.expandIds.indexOf(id), 1)
      } else {
        this.expandIds.push(id)
      }
    },
    changeOrderBy(key) {
      let temp = JSON.parse(JSON.stringify(this.orderBy))
      let oldValue = this.orderBy[key]
      if (oldValue === 'asc') {
        temp[key] = 'desc'
      } else if (oldValue === 'desc') {
        temp[key] = false
      } else {
        temp[key] = 'asc'
      }
      this.$emit('update:orderBy', temp)
    },
    onChangeItem(item, index, e) {
      let copy = JSON.parse(JSON.stringify(this.selectedItems))
      let checked = e.target.checked
      if (checked) {
        copy.push(item)
      } else {
        copy = copy.filter((i) => i.id !== item.id)
      }
      this.$emit('update:selectedItems', copy)
    },
    onChangeAllItems(e) {
      let checked = e.target.checked
      this.$emit('update:selectedItems', checked ? this.dataSource : [])
    },
  },
}
</script>
<style lang="scss" scoped>
.y-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid #e1e1e1;
  &.border {
    border: 1px solid #e1e1e1;
    td,
    th {
      border: 1px solid #e1e1e1;
    }
  }
  &.compact {
    td,
    th {
      padding: 4px;
    }
  }
  td,
  th {
    border-bottom: 1px solid #e1e1e1;
    padding: 8px;
    text-align: left;
  }
  tbody {
    > tr {
      &:hover {
        background: #f5f7fa;
      }
    }
  }
  &.stripe {
    tbody {
      > tr {
        &:nth-child(odd) {
          background: white;
        }
        &:nth-child(even) {
          background: #fafafa;
        }
        &:hover {
          background: #f5f7fa;
        }
      }
    }
  }
  &-header {
    display: flex;
    align-items: center;
  }
  &-sorter {
    display: inline-flex;
    flex-direction: column;
    margin: 0 4px;
    cursor: pointer;
    svg {
      width: 12px;
      height: 12px;
      fill: #e1e1e1;
      &.active {
        // fill: red;
        fill: #2d8cf0;
      }
      &:first-child {
        position: relative;
        bottom: -3px;
      }
      &:nth-child(2) {
        position: relative;
        top: -2px;
      }
    }
  }
  &-wrapper {
    position: relative;
    overflow: auto;
  }
  &-loading {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba($color: #dddddd, $alpha: 0.8);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    svg {
      width: 50px;
      height: 50px;
      animation: spin 2s linear infinite;
      fill: #797878;
    }
  }
  &-copy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #ffffff;
  }
  &-expandIcon {
    width: 14px;
    height: 14px;
  }
  &-expandWrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    transition: transform 250ms;
    transform: rotate(0deg);
    cursor: pointer;
    &.opened {
      transform: rotate(90deg);
    }
  }
  & &-center {
    //前面加&表示再加一级y-table，可以提升优先级
    text-align: center;
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
