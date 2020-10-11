<template>
  <svg class="y-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.y-icon {
  height: 1em;
  width: 1em;
}
</style>
