<template>

  <button class="kk-button">
    <svg class="i-font" :class="{[`k-${position}`]: true, ['k-loadding']: type === 'loading'}" v-if="type">
      <use :xlink:href="`#i-${type}`">
      </use>
    </svg>
    <div :class="{[`k-${position==='left' ? 'right': 'left'}`]: true}">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    type: {

    },
    position: {
      type: String,
      default: 'left',
      validator: (val) => {
        console.log(val);
        return val === 'left' || val === 'right'

      }
    }
  },
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
@keyframes spin {
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
  

}
.kk-button {
  height: var(--button-height);
  padding: 0 1em;
  font-size: var(--font-size);
  color: var(--color);
  background: var(--button-bg);
  border-radius: var(--button-border-radius);
  border: 1px solid var(--button-border-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  .k-left {
    order: 1;
    margin-right: 0.4em;
  }
  .k-right {
    order: 2;
  }
  .k-loadding{
    animation: spin 1s linear infinite;
  }
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
