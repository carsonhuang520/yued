<template>
  <div class="y-table-wrapper">
    <table class="y-table" :class="{ border, compact, stripe }">
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              ref="allChecked"
              @change="onChangeAllItems"
              :checked="areSelectedAll"
            />
          </th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.key">
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in dataSource" :key="row.id">
          <td>
            <input
              type="checkbox"
              name=""
              id=""
              :checked="
                selectedItems.filter((item) => item.id === row.id).length > 0
              "
              @change="onChangeItem(row, index, $event)"
            />
            <!-- 不能通过selectedItems.indexOf(item)>0来判断，因为selectedItems是深拷贝后的，与dataSource是不同的对象 -->
          </td>
          <td v-if="numberVisible">{{ index + 1 }}</td>
          <template v-for="(column, index) in columns">
            <td :key="index">{{ row[column.key] }}</td>
          </template>
        </tr>
      </tbody>
    </table>
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
    compact: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
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
  methods: {
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
        // copy.splice(copy.indexOf(item), 1)
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
        fill: red;
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
    svg {
      width: 50px;
      height: 50px;
      animation: spin 2s linear infinite;
      fill: #797878;
    }
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
