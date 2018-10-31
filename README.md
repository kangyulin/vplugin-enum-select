# 枚举下拉框插件

## 安装插件
``` bash
npm i enum-select
```

代码示例
``` vue
<template>
  <div id="app">
    <enum-select :form="form" name="order_status" placeholder="订单状态"></enum-select>
    <span>{{form.order_status}}</span>
  </div>
</template>

<script>
import {EnumService} from './plugin/service'
import EnumSelect from './plugin/enum-select'
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
  components:{
    EnumSelect
  },
  created(){
    //将枚举数据保存对象中
    var service = new EnumService()
    service.Set(this.enumList)
  }

}
</script>
```