<template>
  <div>
    <button class="kk-button">按钮</button>
  </div>
</template>

<script>
export default {
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
.kk-button {
  height: var(--button-height);
  padding: 0 1em;
  font-size: var(--font-size);
  color: var(--color);
  background: var(--button-bg);
  border-radius: var(--button-border-radius);
  border: 1px solid var(--button-border-color);
  &:hover {
    border-color: var(--button-hover-color);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>
