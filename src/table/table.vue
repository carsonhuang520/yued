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
              :checked="selectedItems.length === dataSource.length"
            />
          </th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.key">{{ column.text }}</th>
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
  </div>
</template>
<script>
export default {
  name: 'YueTable',
  props: {
    compact: {
      type: Boolean,
      default: false,
    },
    stripe: {
      type: Boolean,
      default: true,
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
}
</style>
