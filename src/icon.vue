<template>
  <svg class="i-font" v-if="type">
    <use :xlink:href="`#i-${type}`">
    </use>
  </svg>
</template>

<script>
export default {
  props: ['type'],
  data () {
    return {

    };
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
};
</script>

<style scoped lang='scss'>
.i-font {
  height: 1em;
  width: 1em;
}
</style>
