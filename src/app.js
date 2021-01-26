import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('kk-button', Button)
Vue.component('kk-icon', Icon)
Vue.component('kk-button-group', ButtonGroup)
new Vue({
  el: '#app',
  data:{
    loading1: false,
    loading2: false,
    loading3: false,
    loading4: false,
    
  }
})