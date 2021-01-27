import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import chai from 'chai'
import spies from 'chai-spies';
chai.use(spies);

var expect = chai.expect

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

// 测试props
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      type: 'left'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')  
  expect(href).to.eq('#i-left')
  vm.$el.remove()
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  let vm = new Constructor({
    propsData:{
      type: 'left',
      loading: true
    }
  })
  vm.$mount(div)
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  let div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  let vm = new Constructor({
    propsData:{
      type: 'setting',
      position: 'left'
    },
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.equal('1')
  vm.$el.remove()
  vm.$destroy()
}

{
  let div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  let vm = new Constructor({
    propsData:{
      type: 'setting'
    }
  })
  vm.$mount(div)
  let spy = chai.spy(function(){})
  vm.$on('click',spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
  
}