<template>
  <button
    class="y-button"
    :class="classes"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <y-icon class="icon" v-if="icon && !loading" :name="icon"></y-icon>
    <y-icon class="loading icon" v-if="loading" name="loading"></y-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from './icon'
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['large', 'default', 'small'].indexOf(value) >= 0
      },
    },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return (
          [
            'dashed',
            'text',
            'primary',
            'default',
            'info',
            'error',
            'warning',
            'success',
          ].indexOf(value) >= 0
        )
      },
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
        [`icon-${this.iconPosition}`]: true,
        ['disabled']: this.disabled,
        [`y-button-${this.size}`]: true,
        [`y-button-${this.type}`]: true,
      }
    },
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>

<style lang="scss">
$button-height-large: 40px;
$button-height: 32px;
$button-height-small: 24px;
$font-size: 14px;
$button-primary-bg: #2d8cf0;
$button-info-bg: #2db7f5;
$button-success-bg: #19be6b;
$button-warning-bg: #ff9900;
$button-error-bg: #ed4014;
$button-bg: white;
$button-active-bg: #eeeeee;
$border-radius: 4px;
$color: #333333;
$border-color: #999999;
$border-color-hover: #666666;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.y-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  font: inherit;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }
  &.disabled {
    cursor: not-allowed;
    color: #b7b7b7;
    &:hover {
      border-color: $border-color;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
  &-large {
    height: $button-height-large;
  }
  &-small {
    height: $button-height-small;
  }
  &-primary,
  &-info,
  &-error,
  &-warning,
  &-success {
    border: none;
    color: #ffffff;
  }
  &-text {
    border: none;
    &:hover {
      color: #57a3f3;
    }
  }
  &-dashed {
    border-style: dashed;
    &:hover {
      color: #57a3f3;
    }
  }
  &-primary {
    background: $button-primary-bg;
    &:hover {
      background: #57a3f3;
    }
  }
  &-info {
    background: $button-info-bg;
    &:hover {
      background: #57c5f7;
    }
  }
  &-success {
    background: $button-success-bg;
    &:hover {
      background: #47cb89;
    }
  }
  &-warning {
    background: $button-warning-bg;
    &:hover {
      background: #ffad33;
    }
  }
  &-error {
    background: $button-error-bg;
    &:hover {
      background: #f16643;
    }
  }
}
</style>
