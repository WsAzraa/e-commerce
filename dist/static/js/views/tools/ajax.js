webpackJsonp([7],{113:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(1),r=a(80),s=a.n(r);new i.default({render:function(e){return e(s.a)}}).$mount("#app")},126:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(5);t.default={name:"form-preview",props:["headerLabel","headerValue","bodyItems","footerButtons","name"],methods:{onButtonClick:function(e,t){e&&e(this.name),t&&a.i(i.a)(t,this.$router)}}}},142:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),r=a(4),s=a.n(r),n=a(269),o=a.n(n);t.default={components:{HbHead:s.a,FormPreview:o.a},data:function(){return{ajaxResult:{}}},mounted:function(){this.ajax()},methods:{ajax:function(){var e=this;this.$vux.loading.show({text:"Loading"}),i.a.M.ajax({url:"api/Getdata/vue2_multipage_getajax_demo",success:function(t){e.ajaxResult=t,setTimeout(function(){e.$vux.loading.hide()},1e3)}})}}}},197:function(e,t){},215:function(e,t){},242:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vux-form-preview weui-form-preview"},[a("div",{staticClass:"weui-form-preview__hd"},[a("label",{staticClass:"weui-form-preview__label",domProps:{innerHTML:e._s(e.headerLabel)}}),e._v(" "),a("em",{staticClass:"weui-form-preview__value",domProps:{innerHTML:e._s(e.headerValue)}})]),e._v(" "),a("div",{staticClass:"weui-form-preview__bd"},e._l(e.bodyItems,function(t){return a("div",{staticClass:"weui-form-preview__item"},[a("label",{staticClass:"weui-form-preview__label"},[e._v(e._s(t.label))]),e._v(" "),a("span",{staticClass:"weui-form-preview__value"},[e._v(e._s(t.value))])])})),e._v(" "),a("div",{staticClass:"weui-form-preview__ft"},e._l(e.footerButtons,function(t){return a("a",{staticClass:"weui-form-preview__btn",class:{"weui-form-preview__btn_default":"default"===t.style,"weui-form-preview__btn_primary":"primary"===t.style},attrs:{href:"javascript:"},on:{click:function(a){e.onButtonClick(t.onButtonClick,t.link)}}},[e._v(e._s(t.text))])}))])},staticRenderFns:[]}},260:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mainWarp"},[a("hb-head",{attrs:{headfont:"图片"}}),e._v(" "),e._m(0),e._v(" "),e.ajaxResult.status?a("div",{staticClass:"martop10"},[a("form-preview",{attrs:{"header-label":"付款金额","header-value":"¥2400.00","body-items":e.ajaxResult.goodslist}})],1):e._e()],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bgfff martop10 pad10 font14 color666"},[a("p",[e._v("\n    \t\t这里展示了使用axios获取数据，axios已封装，方便快捷使用，封装参数与jq ajax基本一致，减少学习成本。\n    \t")])])}]}},269:function(e,t,a){a(197);var i=a(0)(a(126),a(242),null,null);e.exports=i.exports},80:function(e,t,a){a(215);var i=a(0)(a(142),a(260),null,null);e.exports=i.exports}},[113]);