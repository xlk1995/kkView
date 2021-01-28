# kkView
## 介绍
一个基于Vue的UI框架。

## 开始使用
  1. 添加css样式 使用本框架前，你需要添加在css中开始 border-box
  
  ```
  *,*::before,*::after{box-sizing: border-box;}
  ```
  IE8以上支持该样式。

  你还需要设置默认颜色等变量
  
  ```
   --button-height: 32px;
    --font-size: 14px;
    --color: #333333;
    --button-bg: #ffffff;
    --button-border-radius: 4px;
    --button-border-color: #999999;
    --button-active-bg: #eeeeee;
    --button-hover-color: red;
  ```
  IE15以上支持

  2. 安装kkView

  ```
  npm i kkview-test-2 -S
  ```

  3. 引入kkView

  ```
    import {Button} from 'kkview-test-2'
    import '../node_modules/kkview-test-2/dist/index.css'
    export default {
      name: 'App',
      components: {
        HelloWorld,
        'g-button': Button
      }
    }
  ```
## 文档

## 提问
## 变更记录
## 联系方式

## 贡献代码