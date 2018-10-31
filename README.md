# 枚举下拉框插件

### 安装插件
``` bash
npm i enum-select
```

### 依赖
基于element-ui进行的二次封装,所以外部需要在main.js中引入element-ui
``` vue
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
```

### 代码示例-main.js
``` vue
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import EnumSelect from 'enum-select'

Vue.use(Element)
Vue.use(EnumSelect)
```

### 代码示例-app.vue
``` vue
<template>
  <div id="app">
    <div id="app">
    <enum-select :form="form" name="order_status" placeholder="订单状态"></enum-select>
    <span>{{form.order_status}}</span>
  </div>
  </div>
</template>

<script>
import {EnumService} from '../node_modules/enum-select/src/plugin/service'
export default {
  name: 'App',
  data(){
    return {
      form: {
        order_status:"",
      },
      enumList: [
        {
          "belong_enum":"OrderStatus",
          "label":"订单成功",
          "sort_id":"0",
          "value":"0"
        },
        {
          "belong_enum":"OrderStatus",
          "label":"等待支付",
          "sort_id":"1",
          "value":"10"
        },
        {
          "belong_enum":"OrderStatus",
          "label":"正在发货",
          "sort_id":"2",
          "value":"20"
        },
        {
          "belong_enum":"OrderStatus",
          "label":"正在退款",
          "sort_id":"3",
          "value":"30"
        },
        {
          "belong_enum":"OrderStatus",
          "label":"订单失败",
          "sort_id":"4",
          "value":"90"
        }
      ],
    }
  },
  created(){
    //将枚举数据保存对象中
    var service = new EnumService()
    service.Set(this.enumList)
  }

}
</script>
```

### EnumService
```
EnumService提供了枚举数据保存获取等方法,在页面加载第一次时将枚举数据存入即可.
内部所有子页面可直接使用enum-select,无需每个子页面单独获取枚举数据
```