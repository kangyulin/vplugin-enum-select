!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("enum-select",[],n):"object"==typeof exports?exports["enum-select"]=n():e["enum-select"]=n()}("undefined"!=typeof self?self:this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/dist/",n(n.s=1)}([function(e,n,t){"use strict";var r=t(4);n.a={name:"enum-select",props:{enum:String,form:Object,name:String,placeholder:String},data:function(){return{enums:[]}},mounted:function(){this.service=new r.a,this.getData()},methods:{getData:function(){this.enums=this.service.Get(this.convert(this.enum||this.name))},convert:function(e){var n="";return e.split("_").forEach(function(e){n+=e.toLowerCase().replace(/( |^)[a-z]/g,function(e){return e.toUpperCase()})}),n}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(2);r.a.install=function(e){return e.component(r.a.name,r.a)},n.default=r.a},function(e,n,t){"use strict";var r=t(0),o=t(5),u=t(3),i=u(r.a,o.a,!1,null,null,null);n.a=i.exports},function(e,n){e.exports=function(e,n,t,r,o,u){var i,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,s=e.default);var c="function"==typeof s?s.options:s;n&&(c.render=n.render,c.staticRenderFns=n.staticRenderFns,c._compiled=!0),t&&(c.functional=!0),o&&(c._scopeId=o);var l;if(u?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},c._ssrRegister=l):r&&(l=r),l){var f=c.functional,p=f?c.render:c.beforeCreate;f?(c._injectStyles=l,c.render=function(e,n){return l.call(n),p(e,n)}):c.beforeCreate=p?[].concat(p,l):[l]}return{esModule:i,exports:s,options:c}}},function(e,n,t){"use strict";function r(){}n.a=r,r.prototype.Set=function(e){if(!Array.isArray(e))return console.error("枚举输入参数必须是数组"),!1;if(0==e.length)return console.error("枚举输入参数不能为空"),!1;window.__vplugin_enums||(window.__vplugin_enums={});for(var n in window.__vplugin_enums)return console.error("枚举数据已存在,不允许重复赋值"),!1;return e.forEach(function(e){window.__vplugin_enums[e.belong_enum]||(window.__vplugin_enums[e.belong_enum]=[]),window.__vplugin_enums[e.belong_enum].push(e)}),!0},r.prototype.Get=function(e){return e?window.__vplugin_enums[e]||[]:[]},r.prototype.Gets=function(e){if(!e)return window.__vplugin_enums;var n=[];return e.split(",").forEach(function(e){n.push(window.__vplugin_enums[e])}),n},r.prototype.GetTitle=function(e,n){var t=this.Get(e),r=n;return t.forEach(function(e){if(e.value==n)return void(r=e.description)}),r}},function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-select",{attrs:{name:e.name,placeholder:e.placeholder,filterable:"",size:"small"},model:{value:e.form[e.name],callback:function(n){e.$set(e.form,e.name,n)},expression:"form[name]"}},e._l(e.enums,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))},o=[],u={render:r,staticRenderFns:o};n.a=u}])});
//# sourceMappingURL=enum-select.js.map