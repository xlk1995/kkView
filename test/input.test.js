const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/kkInput'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('input', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })
  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('验证type', () => {
      vm = new Constructor({
        propsData: {
          type: 'password'
        }
      })
      vm.$mount()
      let inputElement = vm.$el.querySelector('input')
      let type = inputElement.getAttribute('type')
      expect(type).to.be.equal('password')
    })
    it('验证value', () => {
      vm = new Constructor({
        propsData: {
          value: '你好'
        }
      })
      vm.$mount()
      let inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.be.equal('你好')
    })
    it('验证disable', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      })
      vm.$mount()
      let inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).is.to.be.equal(true)
    })
    it('验证readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      })
      vm.$mount()
      let inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).is.to.be.equal(true)
    })
    it('验证error', () => {
      vm = new Constructor({
        propsData: {
          error: "我错了"
        }
      })
      vm.$mount()
      let useElement = vm.$el.querySelector('use')
      let href = useElement.getAttribute('xlink:href')
      expect(href).to.be.eq('#i-error')
      let errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.be.eq('我错了')
    })
  })
  describe('event', () => {
    let Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        let event = new Event(eventName)
        Object.defineProperty(
          event, 'target', {
            value: {
              value: 'hi'
            },
            enumerable: true
          }
        )
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')
      })

    })
  })
})