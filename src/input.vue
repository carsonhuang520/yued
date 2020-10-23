<template>
  <div class="wrapper" :class="{ error }">
    <y-icon v-if="icon !== ''" :name="icon" :class="classes"></y-icon>
    <input
      :value="value"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :class="{ [`inline-icon-${iconPosition}`]: icon !== '' }"
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @input="$emit('input', $event.target.value)"
    />
    <template v-if="error">
      <y-icon name="settings" class="icon-error"></y-icon>
      <span class="message-error">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    iconPosition: {
      type: String,
      default: 'left',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  components: {
    'y-icon': Icon,
  },
  data() {
    return {}
  },
  computed: {
    classes() {
      return {
        [`icon-left`]: this.icon !== '' && this.iconPosition === 'left',
        [`icon-right`]: this.icon !== '' && this.iconPosition === 'right',
      }
    },
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999999;
$border-color-hover: #666666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  position: relative;
  vertical-align: top;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    font-size: inherit;
    padding: 0 8px;
    position: relative;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      color: #bbbbbb;
      border-color: #bbbbbb;
      cursor: not-allowed;
    }
    &.inline-icon-left {
      padding-left: 2em;
    }
    &.inline-icon-right {
      padding-right: 2em;
    }
  }
  .icon-left {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    z-index: 2;
  }
  .icon-right {
    position: absolute;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
    z-index: 2;
  }
  &.error {
    > input {
      border-color: $red;
    }
    .icon-error {
      fill: $red;
    }
    .message-error {
      color: $red;
    }
  }
}
</style>
