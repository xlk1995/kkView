<template>

  <button class="kk-button" :class="{[`k-${position}`]: true}" @click="$emit('click')">
    <kk-icon :type="type" class="icon" v-if="!loading"></kk-icon>
    <kk-icon type="loading" class="k-loading icon" v-if="loading"></kk-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>

export default {
  props: {
    loading:{
      type: Boolean,
      default: false
    },
    type: {

    },
    position: {
      type: String,
      default: 'left',
      validator: (val) => {
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
  .k-loading{
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
  >.icon{
    order: 1;margin-right: 0.5em;
  }
  >.content{
    order: 2;
  }
  &.k-right{
    >.icon{
      order: 2;
      margin-right: 0;
      margin-left: 0.5em;
    }
    >.content{
      order: 1;
    }
  }
  

}
</style>
