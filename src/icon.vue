<template>
  <svg class="y-icon" @click="$emit('click', $event)">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './font'
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang="scss">
.y-icon {
  height: 1em;
  width: 1em;
}
</style>
