<template>
  <el-select v-model="form[name]" :name="name" :placeholder="placeholder" filterable size="small" >
    <el-option v-for="item in enums" :label="item.label" :key="item.value" :value="item.value">
    </el-option>
  </el-select>
</template>

<script>

import {EnumService} from './service'

export default {
    name: "enum-select",
    props:{
        //指定枚举,不传默认使用name
        enum: String,
        //因值需要双向绑定传递的原因,需要将控件外部form传入
        form: Object,
        //控件name,需在form表单中唯一
        name: String,
        //占位提示文字
        placeholder: String,
    },
    data(){
        return {
            enums: []
        }
    },
    mounted() {
        this.service = new EnumService();
        this.getData();
    },
    methods: {
        getData: function(){
            this.enums = this.service.Get(this.convert(this.enum || this.name));
        },
        convert: function(field){
            var name = ""
            var str = field.split("_")
            str.forEach(item => {
                name += item.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
            })
            return name
        }
    }
}
</script>