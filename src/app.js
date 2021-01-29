import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import kkInput from './kkInput'
import chai from 'chai'
import spies from 'chai-spies';
chai.use(spies);

var expect = chai.expect

Vue.component('kk-button', Button)
Vue.component('kk-icon', Icon)
Vue.component('kk-button-group', ButtonGroup)
Vue.component('kk-input', kkInput)
new Vue({
  el: '#app',
  data:{
    loading1: false,
    loading2: false,
    loading3: false,
    loading4: false,
    msg: ''
  }
})

