<template>
  <div class="k-button-group">
    <slot></slot>
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
    for (let node of this.$el.children){
      let name = node.nodeName.toLowerCase()
      if (name !== 'button'){
        console.warn(`button-group组件需要里面的元素都为button，而你使用了 ${name} `)
      }
      
    }
    
  },
  methods: {

  }
};
</script>

<style scoped lang='scss'>
.k-button-group{
  display: inline-flex;
  vertical-align: middle;
  >.kk-button{
    border-radius: 0;
    margin-left: -1px;
    &:first-child{
      border-top-left-radius: var(--button-border-radius);
      border-bottom-left-radius: var(--button-border-radius);
    }
    &:last-child{
      border-top-right-radius: var(--button-border-radius);
      border-bottom-right-radius: var(--button-border-radius);
      
    }
    &:hover{
      z-index: 1;
    }
  }
  
}
</style>
