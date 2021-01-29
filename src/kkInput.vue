<template>
  <div class="wrapper" :class="{error}">
    <input :type="type" :value="value" :disabled="disabled" :readonly="readonly" @input="$emit('input',$event.target.value)" @change="$emit('change',$event.target.value)" @focus="$emit('focus',$event.target.value)" @blur="$emit('blur',$event.target.value)">
    <template v-if="error">
      <kk-icon type="error" class="iconError"></kk-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import kkIcon from './icon'
export default {
  components: {
    kkIcon
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {},
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
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
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  input {
    height: 32px;
    width: 128px;
    font-size: inherit;
    padding-left: 8px;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &:active {
      box-shadow: inset 10 10px 30px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
    > .iconError {
      fill: $red;
    }
    > .errorMessage {
      color: $red;
    }
  }
}
</style>
