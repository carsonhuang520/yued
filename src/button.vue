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
$button-height: 32px;
$font-size: 14px;
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
}
</style>
