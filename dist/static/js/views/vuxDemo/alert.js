webpackJsonp([2],{108:function(t,e,n){n(266);var l=n(0)(n(185),n(319),null,null);t.exports=l.exports},149:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n(1),i=n(108),s=n.n(i);new l.default({render:function(t){return t(s.a)}}).$mount("#app")},165:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n(42),i=n.n(l);e.default={name:"x-switch",components:{InlineDesc:i.a},computed:{labelStyle:function(){var t=/<\/?[^>]*>/.test(this.title),e=Math.min(t?5:this.title.length+1,14)+"em";return{display:"block",width:this.$parent.labelWidth||e,textAlign:this.$parent.labelAlign}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign}}},methods:{onClick:function(){this.$emit("on-click",!this.currentValue,this.currentValue)}},props:{title:{type:String,required:!0},disabled:Boolean,value:{type:Boolean,default:!1},inlineDesc:[String,Boolean,Number],preventDefault:Boolean},data:function(){return{currentValue:this.value}},watch:{currentValue:function(t){this.$emit("input",t),this.$emit("on-change",t)},value:function(t){this.currentValue=t}}}},185:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=(n(2),n(88)),i=n.n(l),s=n(34),a=n.n(s),r=n(335),o=n.n(r),u=n(41),c=n.n(u),d=n(4),v=n.n(d);e.default={components:{Alert:i.a,Group:a.a,XSwitch:o.a,Cell:c.a,HbHead:v.a},data:function(){return{show:!1,show1:!1,show2:!1}},methods:{onHide:function(){console.log("on hide")},onShow:function(){console.log("on show")},showPlugin:function(){this.$vux.alert.show({title:"VUX is Cool",content:"哈哈哈",onShow:function(){console.log("Plugin: I'm showing")},onHide:function(){console.log("Plugin: I'm hiding now")}})},showPluginAuto:function(){var t=this;this.showPlugin(),setTimeout(function(){t.$vux.alert.hide()},3e3)}}}},19:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"group",props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number]}}},246:function(t,e){},266:function(t,e){},27:function(t,e){},297:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-switch weui-cell weui-cell_switch"},[n("div",{staticClass:"weui-cell__bd"},[n("label",{staticClass:"weui-label",class:t.labelClass,style:t.labelStyle,domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t.inlineDesc?n("inline-desc",[t._v(t._s(t.inlineDesc))]):t._e()],1),t._v(" "),n("div",{staticClass:"weui-cell__ft"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-switch",attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.currentValue)?t._i(t.currentValue,null)>-1:t.currentValue},on:{__c:function(e){var n=t.currentValue,l=e.target,i=!!l.checked;if(Array.isArray(n)){var s=t._i(n,null);l.checked?s<0&&(t.currentValue=n.concat(null)):s>-1&&(t.currentValue=n.slice(0,s).concat(n.slice(s+1)))}else t.currentValue=i}}}),t._v(" "),t.preventDefault?n("div",{staticClass:"vux-x-switch-overlay",on:{click:t.onClick}}):t._e()])])},staticRenderFns:[]}},319:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainWarp"},[n("hb-head",{attrs:{headfont:"alert弹窗"}}),t._v(" "),n("group",{attrs:{title:"prop:content"}},[n("x-switch",{attrs:{title:"显示"},model:{value:t.show2,callback:function(e){t.show2=e},expression:"show2"}})],1),t._v(" "),n("div",[n("alert",{attrs:{title:"温馨提示",content:"这里是内容了"},model:{value:t.show2,callback:function(e){t.show2=e},expression:"show2"}})],1),t._v(" "),n("group",{attrs:{title:"插件"}},[n("cell",{attrs:{title:"显示","is-link":""},nativeOn:{click:function(e){t.showPlugin(e)}}}),t._v(" "),n("cell",{attrs:{title:"3S后关闭","is-link":""},nativeOn:{click:function(e){t.showPluginAuto(e)}}})],1)],1)},staticRenderFns:[]}},32:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("div",{staticClass:"weui-cells__title",style:{color:t.titleColor},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),n("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:{marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter}},[t._t("after-title"),t._v(" "),t._t("default")],2)],2)},staticRenderFns:[]}},335:function(t,e,n){n(246);var l=n(0)(n(165),n(297),null,null);t.exports=l.exports},34:function(t,e,n){n(27);var l=n(0)(n(19),n(32),null,null);t.exports=l.exports},41:function(t,e,n){n(62);var l=n(0)(n(45),n(65),null,null);t.exports=l.exports},42:function(t,e,n){n(63);var l=n(0)(n(46),n(67),null,null);t.exports=l.exports},45:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n(42),i=n.n(l),s=n(8),a=n(48);e.default={name:"cell",components:{InlineDesc:i.a},props:n.i(a.a)(),beforeMount:function(){this.hasTitleSlot=!!this.$slots.title},computed:{valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},methods:{getLabelStyles:function(){return{width:this.$parent.labelWidth||this.$parent.$parent.labelWidth,textAlign:this.$parent.labelAlign||this.$parent.$parent.labelAlign,marginRight:this.$parent.labelMarginRight||this.$parent.$parent.labelMarginRight}},onClick:function(){!this.disabled&&n.i(s.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!1}}}},46:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"inline-desc"}},48:function(t,e,n){"use strict";e.a=function(){return{title:[String,Number],value:[String,Number,Array],isLink:Boolean,isLoading:Boolean,inlineDesc:[String,Number],primary:{type:String,default:"title"},link:[String,Object],valueAlign:[String,Boolean,Number],borderIntent:{type:Boolean,default:!0},disabled:Boolean,arrowDirection:String}}},62:function(t,e){},63:function(t,e){},65:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},on:{click:t.onClick}},[n("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),n("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[n("p",[t.title||t.hasTitleSlot?n("label",{staticClass:"vux-label",class:t.labelClass,style:t.getLabelStyles()},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),n("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),n("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?n("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]}},67:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},staticRenderFns:[]}}},[149]);