<template>
  <div id="app">
  
    <mt-header fixed title="123"  style="background:#fff;    border-bottom: 1px solid #EBEBEC;">
      <a style="top: -15px; position: relative;" slot="left">
        <span class="icon-three-bars three-bar" v-on:click="popslide = !popslide"></span>
      </a>
        <a class="a-logo"  slot="left">
        <img src="../../../assets/image/logo.png">
      </a> 
      <!-- <mt-button>关闭</mt-button>
      <mt-button>关闭</mt-button>
      <mt-button>关闭</mt-button> -->
      <mt-button slot="right">
        <label class="icon-label">
          <span class="icon-search icon-bayax-home"></span>
        </label>
      </mt-button>
      <mt-button slot="right">
        <label class="icon-label">
          <span class="icon-cart icon-bayax-home"></span>
        </label>
      </mt-button>
    </mt-header>
    <!--logo  -->
     <!-- <img class="logo" src="../../../assets/image/logo.png"> -->

    <mt-popup v-model="popslide" position="left" class="">
      <div class="slide_user">
        <div class="portrait">
          <img src="../../../assets/image/userimg.png">
        </div>
        <div class="drawer-unlogin">
          <a href="login.html" class="drawer-signin" style="color:#eee">Sign IN</a>
          <a class="drawer-join">Join Free</a>
        </div>
      </div>
      <ul class="am-list am-list-border">
        <li>
          <a href="index.html">
            <i class="icon-home"></i>
            Home
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon-file" style="color:#000"></i>
            My Orders
          </a>
        </li>
        <li>
          <a href="shoppingcart.html">
            <i class="icon-cart"></i>
            Cart
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon-heart"></i>
            Wish List
          </a>
        </li>
      </ul>
  
    </mt-popup>
  
    <!-- 轮播图 -->
    <section class="slides-bayax">
      <mt-swipe :auto="4000" class="swipe">
        <mt-swipe-item v-for="(item,index) in slides">
          <a href="../product/product.html">
            <img v-bind:src="item.url">
          </a>
  
        </mt-swipe-item>
      </mt-swipe>
    </section>
  
    <!--第三部分  -->
    <section class="third">
      <div class="ms-rc-category ms-rc-shadow" data-spm="home-category">
        <ul class="util-clearfix">
  
          <li class="ms-rc-ripple ms-rc-custom">
            <a href="../product/product.html" pjax="">
              <div class="pic">
  
                <img src="//ae01.alicdn.com/kf/HTB18RmXPXXXXXcBXFXX760XFXXXu.png" alt="category image">
              </div>
              <div class="title">Apparel &amp; Accessories</div>
            </a>
          </li>
  
          <li class="ms-rc-ripple ms-rc-custom">
            <a href="../product/product.html" pjax="">
              <div class="pic">
  
                <img src="//ae01.alicdn.com/kf/HTB1Pi5iPXXXXXbdXpXX760XFXXXL.png" alt="category image">
              </div>
              <div class="title">Jewelry</div>
            </a>
          </li>
  
          <li class="ms-rc-ripple ms-rc-custom">
            <a href="../product/product.html" pjax="">
              <div class="pic">
                <img src="//ae01.alicdn.com/kf/HTB10ryjPXXXXXbYXpXX760XFXXXc.png" alt="category image">
              </div>
              <div class="title">Electronics</div>
            </a>
          </li>
  
          <li class="ms-rc-ripple ms-rc-custom">
            <a href="../product/product.html" pjax="">
              <div class="pic">
  
                <i class="icon-list-unordered third-more"></i>
  
              </div>
              <div class="title">All Categories</div>
            </a>
          </li>
  
        </ul>
      </div>
    </section>
  
    <section>
      <div class="ms-rc-active" data-role="ws-floor" data-spm="home-floor">
        <div class="ms-lego-home-deals" data-scrolltrigger="0">
          <div class="ms-lego-radius util-clearfix">
            <div class="ms-lego-container ms-rc-ripple ms-rc-custom home-deals-title" style="padding: 8px;">
              <a href="../product/product.html" class="util-clearfix">
                <div class="title">
                  <span>Flash Deals</span>
  
                  <span id="time-j6hgavbv" class="fadeIn">
                    <span data-role="hour">01</span>
                    :
                    <span data-role="minute">14</span>
                    :
                    <span data-role="second">21</span>
                  </span>
  
                </div>
                <span class="home-deals-more">MORE</span>
              </a>
            </div>
            <div class="col-12 ms-lego-radius ms-lego-shadow">
              <div class="row home-deals-picture">
                <div class="col-6 home-deals-one ms-rc-ripple ms-rc-custom">
                  <a href="../product/product.html">
                    <div class="ms-lego-picture-100-auto">
                      <img data-src="https://ae01.alicdn.com/kf/HTB1BCQMOXXXXXcpXpXXq6xXFXXXi.jpg_350x350.jpg_.webp" src="https://ae01.alicdn.com/kf/HTB1BCQMOXXXXXcpXpXXq6xXFXXXi.jpg_350x350.jpg_.webp" alt="deals">
                    </div>
                    <div class="ms-lego-container" style="padding: 0 8px 16px 8px;">
                      <div class="coupon">Get a US $3.00 coupon</div>
                      <div class="home-deals-left">
                        USD 10.35
                        <span>USD 16.43</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-6 home-deals-picture-right">
  
                  <a href="../product/product.html" class="ms-rc-ripple ms-rc-custom">
                    <div class="util-clearfix">
                      <div class="item-left">
                        <div class="ms-lego-picture-100-auto">
                          <img data-src="https://ae01.alicdn.com/kf/HTB1XH39SXXXXXXoXVXXq6xXFXXXJ.jpg_350x350.jpg_.webp" src="https://ae01.alicdn.com/kf/HTB1XH39SXXXXXXoXVXXq6xXFXXXJ.jpg_350x350.jpg_.webp" alt="deals">
                        </div>
                      </div>
                      <div class="item-right">
                        <div>
                          <div class="ms-lego-min-price">USD 4.98</div>
                          <div class="ms-lego-price">USD 4.98</div>
                        </div>
                      </div>
                    </div>
                  </a>
  
                  <a href="../product/product.html" class="ms-rc-ripple ms-rc-custom">
                    <div class="util-clearfix">
                      <div class="item-left">
                        <div class="ms-lego-picture-100-auto">
                          <img data-src="https://ae01.alicdn.com/kf/HTB1xKykSFXXXXaEXXXXq6xXFXXXT.jpg_350x350.jpg_.webp" src="https://ae01.alicdn.com/kf/HTB1xKykSFXXXXaEXXXXq6xXFXXXT.jpg_350x350.jpg_.webp" alt="deals">
                        </div>
                      </div>
                      <div class="item-right">
                        <div>
                          <div class="ms-lego-min-price">USD 14.87</div>
                          <div class="ms-lego-price">USD 33.8</div>
                        </div>
                      </div>
                    </div>
                  </a>
  
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
  
    </section>
  
    <section>
      <div class="ms-rc-qp" id="quality-picks"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <div class="title">JUST FOR YOU</div>
        <div class="util-clearfix">
          <div class="column">
            <div v-for="item in foryoudatacolume1" class="item ms-rc-ripple ms-rc-shadow" style="opacity: 1; transform: translateY(0px);">
              <a href="../product/product.html">
                <div class="pic fadeIn">
                  <img :src="item.image350Path" style="visibility: visible;">
                </div>
                <div class="price">US $ {{item.lowerPrice}}</div>
              </a>
            </div>
          </div>
          <div class="column">
            <div v-for="item in foryoudatacolume2" class="item ms-rc-ripple ms-rc-shadow" style="opacity: 1; transform: translateY(0px);">
              <a href="../product/product.html">
                <div class="pic fadeIn">
                  <img :src="item.image350Path" style="visibility: visible;">
                </div>
                <div class="price">US $ {{item.lowerPrice}}</div>
              </a>
            </div>
  
          </div>
        </div>
         <div v-show='loading' class="md-loading" data-scrolltrigger="2">
          <div class="preloader-wrapper small active" style="font-size: 0;">
            <div class="spinner-layer spinner-red-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div>
              <div class="gap-patch">
                <div class="circle"></div>
              </div>
              <div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
  
    </section>
  

 
 
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';
import 'mint-ui/lib/style.css'//最嗨的是他这个直接引入的是一个css文件

import Vue from 'vue';

import MintUI from 'mint-ui';

Vue.use(MintUI);

export default {
  data() {
    return {
      loading : false,
      popslide: false,
      // 轮播图
      slides: [
        { url: 'http://ae01.alicdn.com/kf/HTB1Z6tVSVXXXXc2XpXXq6xXFXXXG.jpg_.webp"' },
        { url: 'http://ae01.alicdn.com/kf/HTB1oSRsSVXXXXaAXFXXq6xXFXXX9.jpg_.webp' },
        { url: 'http://ae01.alicdn.com/kf/HTB1xDt9SVXXXXaxXFXXq6xXFXXXN.jpg_.webp' },
        { url: 'http://ae01.alicdn.com/kf/HTB1SZF0SVXXXXavXVXXq6xXFXXX1.jpg_.webp' },
      ],
      // JUST FOR YOU
      foryoudatacolume: [
        {       
          "image350Path": "https://ae01.alicdn.com/kf/HTB1qcNWOXXXXXXbaFXXq6xXFXXXB.jpg_350x350.jpg",        
          "lowerPrice": "10.44",       
        }, {        
          "image350Path": "https://ae01.alicdn.com/kf/HTB1VkIGSFXXXXXqXFXXq6xXFXXX1.jpg_350x350.jpg",        
          "lowerPrice": "106.3",      
        }, {       
          "image350Path": "https://ae01.alicdn.com/kf/HTB1lXrGLFXXXXblXFXXq6xXFXXXn.jpg_350x350.jpg",
          "lowerPrice": "8.0",
         
        }, {
          "image350Path": "https://ae01.alicdn.com/kf/HTB16ZVJJXXXXXanXpXXq6xXFXXXI.jpg_350x350.jpg",        
          "lowerPrice": "13.99", 
        }, {
          "image350Path": "https://ae01.alicdn.com/kf/HTB11v8iSXXXXXXIXXXXq6xXFXXXC.jpg_350x350.jpg",       
          "lowerPrice": "25.87",     
        }, {
          "image350Path": "https://ae01.alicdn.com/kf/HTB17AUWOFXXXXXSaXXXq6xXFXXX4.jpg_350x350.jpg",
          "lowerPrice": "21.99",
        }
      ],
      foryoudatacolume1:[],
      foryoudatacolume2:[],

    };
  },

  components: {
  },
  computed: {
  // foryoudatacolume1: function () {
  //   var lengths = this.foryoudatacolume.length;
  //   var a = lengths%2 === 0 ? true:false;
  //   if(a){
  //     return  this.foryoudatacolume.slice(0, lengths/2)
  //   }else{
  //      return  this.foryoudatacolume.slice(0,  Math.ceil(lengths/2));
  //   }
  // },
  //  foryoudatacolume2: function () {
  //    var lengths = this.foryoudatacolume.length;
  //    var a = lengths%2 === 0 ? true:false;
  //   if(a){
  //     return  this.foryoudatacolume.slice(lengths/2)
  //   }else{
  //      return  this.foryoudatacolume.slice(Math.ceil(lengths/2));
  //   }
  // }
  },
  //已成功挂载，相当ready()
  mounted: function () {
    var _this = this;
    this.$nextTick(function () {
       this.loadForYouData();

    })
  },
  //相关操作事件
  methods: {
    loadForYouData: function () {
      var lengths = this.foryoudatacolume.length;
      var a = lengths % 2 === 0 ? true : false;
      if (a) {
        this.foryoudatacolume1 =  this.foryoudatacolume.slice(0, lengths / 2);
        this.foryoudatacolume2 =  this.foryoudatacolume.slice(lengths/2)
      } else {
         this.foryoudatacolume1 =  this.foryoudatacolume.slice(0,  Math.ceil(lengths/2));
         this.foryoudatacolume2 =  this.foryoudatacolume.slice(Math.ceil(lengths/2));
      }
    },

    loadMore: function () {
      this.loading = true;
      var _this = this;
      // MintUI.Indicator.open('加载中...');
      for(var i = 0;i<3;i++){
        this.foryoudatacolume1.push({
            "image350Path": "https://ae01.alicdn.com/kf/HTB1qcNWOXXXXXXbaFXXq6xXFXXXB.jpg_350x350.jpg",        
          "lowerPrice": "10.44",  
        })

         this.foryoudatacolume2.push({
            "image350Path": "https://ae01.alicdn.com/kf/HTB1lXrGLFXXXXblXFXXq6xXFXXXn.jpg_350x350.jpg",
          "lowerPrice": "8.0",
         })
      }
       setTimeout(function(){
         _this.loading = false;
       },2000)
    },



  }
}
</script>

<style>
.icon-three-bars,
.icon-bayax-home {
  font-size: 20px;
  color: #000;
}


body {
  background-color: #EBEBEC !important;
}

.ms-rc-shadow {
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
}









/*头部*/

.three-bar {
  font-size: 20px;
  margin-left: 10px;
}

#app .mint-header {
  background-color: transparent;
  height: 56px;
}

.icon-label {
  min-width: 40px;
  display: inline-block;
}
.a-logo{
      width: 142px;
    height: 56px;
    display: inline-block;
    margin-left: 20px;
}
.a-logo img{
   width: 142px;
  height: 56px;
}

.logo{
      position: fixed;
    width: 142px;
    height: 56px;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;

}







/*侧边栏*/

.mint-popup-left {
  width: 85%;
  height: 102%;
}

#app .v-modal {
  opacity: 0.15;
}

.slide_user {
  box-sizing: border-box;
  height: 148px;
  background-color: #e62e02;
  overflow: hidden;
  background-image: url(../../../assets/image/slidebg.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.portrait {
  padding: 16px;
  width: 96px;
  height: 96px;
  border-radius: 50%;
}

.portrait img {
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.drawer-unlogin {
  padding: 15px 16px 16px;
  box-sizing: border-box;
  width: 100%;
  white-space: nowrap;
  font-size: 15px;
  line-height: 1.2;
  color: #fff;
}

.drawer-signin {
  padding: 0 6px 0 0;
  border-right: solid 1px #fff;
  display: inline-block;
  color: #fff;
  font-size: 15px;
  line-height: 1.2;
}

.drawer-join {
  padding-left: 2px;
  display: inline-block;
  color: #fff;
  font-size: 15px;
  line-height: 1.2;
}








/*菜单 */

.am-list {
  margin-bottom: 1.6rem;
}

.am-list-border>li>a {
  padding: 1.3rem;
  padding-left: 1rem;
  color: #000;
  display: block;
  box-sizing: border-box;
}

.am-list-border>li>a i {
  font-size: 20px;
  margin-right: 20px;
}

.am-list-border>li>a i:before {
  vertical-align: -15%;
}







/*轮播图*/

.slides-bayax {
  margin-top: 56px;
  height: 8rem;
  min-height: 3.4375rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
  /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); */
  position: relative;
}

.slides-bayax img {
  height: 100%;
  width: 100%;
}

.slides-bayax .mint-swipe-indicators {
  bottom: 5px;
}

.slides-bayax .mint-swipe-indicator {
  opacity: 1;
  background-color: #eee;
}

.slides-bayax .mint-swipe-indicator.is-active {
  background-color: red;
}









/*第三部分  */

.third {
  margin-top: 10px;
}

.ms-rc-shadow {
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
}

.third-more {
  font-size: 35px;
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box
}



img {
  max-width: 100%
}





/* .clearfix:after,
.clearfix:before,
.layout-fixed:after,
.layout-fixed:before,
.layout-fluid:after,
.layout-fluid:before,
.row:after,
.row:before,
.util-clearfix:after,
.util-clearfix:before {
  content: " ";
  display: table
}

.clearfix:after,
.layout-fixed:after,
.layout-fluid:after,
.row:after,
.util-clearfix:after {
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0
}

.ms-rc-category {
  margin: 0 8px 8px 8px;
  background: #fff
}

.ms-rc-category a {
  display: block
}

.ms-rc-category ul {
  padding: 4px
}

.ms-rc-category li {
  box-sizing: border-box;
  padding: 4px;
  width: 25%;
  display: block;
  float: left;
  overflow: hidden
}

.ms-rc-category .pic {
  width: 5.111rem;
  height: 5.111rem;
  margin: 0 auto
}

.ms-rc-category li:last-child .pic {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.ms-rc-category li:last-child .pic .ic-category-md {
  font-size: 1rem
}

.ms-rc-category .title {
  font-size: 10px;
  height: 24px;
  line-height: 12px;
  color: #51575C;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden
} */

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%
}

body {
  margin: 0
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block
}

audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline
}

audio:not([controls]) {
  display: none;
  height: 0
}

[hidden],
template {
  display: none
}

a {
  background-color: transparent
}

a:active,
a:hover {
  outline: 0
}

abbr[title] {
  border-bottom: 1px dotted
}

b,
strong {
  font-weight: 700
}

dfn {
  font-style: italic
}

h1 {
  font-size: 2em;
  margin: .67em 0
}

mark {
  background: #ff0;
  color: #000
}

small {
  font-size: 80%
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline
}

sup {
  top: -.5em
}

sub {
  bottom: -.25em
}

img {
  border: 0
}

svg:not(:root) {
  overflow: hidden
}

figure {
  margin: 1em 40px
}

hr {
  box-sizing: content-box;
  height: 0
}

pre {
  overflow: auto
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0
}

button {
  overflow: visible
}

button,
select {
  text-transform: none
}

button,
html input[type=button],
input[type=reset],
input[type=submit] {
  -webkit-appearance: button;
  cursor: pointer
}

button[disabled],
html input[disabled] {
  cursor: default
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0
}

input {
  line-height: normal
}

input[type=checkbox],
input[type=radio] {
  box-sizing: border-box;
  padding: 0
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  height: auto
}

input[type=search] {
  -webkit-appearance: textfield;
  box-sizing: content-box
}

input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration {
  -webkit-appearance: none
}

fieldset {
  border: none;
  margin: 0;
  padding: 0
}

legend {
  border: 0;
  padding: 0
}

textarea {
  overflow: auto
}

optgroup {
  font-weight: 700
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

td,
th {
  padding: 0
}

html {
  background-color: #EBEBEC
}

body {
  font-size: 12px;
  color: #3A3E4A;
  font-family: Roboto, Open Sans, Helvetica, Arial;
  line-height: 1.3;
  background-color: #EBEBEC
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box
}

a,
abbr,
acronym,
address,
article,
aside,
blockquote,
body,
caption,
code,
dd,
del,
dfn,
dialog,
div,
dl,
dt,
em,
figure,
firldset,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
iframe,
img,
label,
legend,
li,
nav,
object,
ol,
p,
pre,
q,
section,
span,
table,
tbody,
td,
tfoot,
th,
thead,
tr,
ul {
  margin: 0;
  padding: 0
}

ol,
ul {
  list-style: none
}

a {
  -webkit-touch-callout: none;
  text-decoration: none;
  color: #3A3E4A
}

img {
  max-width: 100%
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px #fff inset!important
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #B0B2B7
}

[ai-controller],
[ai-important] {
  display: none
}

[v-cloak] {
  display: none
}

@font-face {
  font-family: icmd;
  src: url(/aefe-mobile-global/static/assets/iconfontmd.6eb7d08b.ttf) format('truetype')
}

.ic-md {
  position: relative;
  display: inline-block;
  font-family: icmd!important;
  font-size: 16px;
  line-height: 1;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: .2px;
  -moz-osx-font-smoothing: grayscale
}

.ic-attribute-md:before {
  content: "\E600"
}

.ic-backarrow-md:before {
  content: "\E601"
}

.ic-cancel-md:before {
  content: "\E602"
}

.ic-close-md:before {
  content: "\E603"
}

.ic-coupon-md:before {
  content: "\E604"
}

.ic-download-md:before {
  content: "\E605"
}

.ic-drawer-md:before {
  content: "\E606"
}

.ic-filter-md:before {
  content: "\E607"
}

.ic-helpcenter-md:before {
  content: "\E608"
}

.ic-home-md:before {
  content: "\E609"
}

.ic-insert-md:before {
  content: "\E60A"
}

.ic-order-md:before {
  content: "\E60B"
}

.ic-questionnaire-md:before {
  content: "\E60C"
}

.ic-search-md:before {
  content: "\E60D"
}

.ic-shoppingcart-md:before {
  content: "\E60E"
}

.ic-star-md:before {
  content: "\E60F"
}

.ic-time-md:before {
  content: "\E610"
}

.ic-translation-md:before {
  content: "\E611"
}

.ic-viewgallery-md:before {
  content: "\E612"
}

.ic-viewgrid-md:before {
  content: "\E613"
}

.ic-wishlist-md:before {
  content: "\E614"
}

.ic-signout-md:before {
  content: "\E615"
}

.ic-arrowdown-md:before {
  content: "\E616"
}

.ic-arrowright-md:before {
  content: "\E617"
}

.ic-category-md:before {
  content: "\E619"
}

.ic-apponly-md:before {
  content: "\E618"
}

.ic-image-md:before {
  content: "\E61A"
}

.ic-addtohomescreen-md:before {
  content: "\E61B"
}

.ic-add-md:before {
  content: "\E61C"
}

.ic-arrowup-md:before {
  content: "\E61D"
}

.ic-remove-md:before {
  content: "\E61E"
}

.ic-appendfeedback-md:before {
  content: "\E61F"
}

.ic-delete-md:before {
  content: "\E621"
}

.ic-morevert-md:before {
  content: "\E620"
}

.ic-followupfeedback-md:before {
  content: "\E61F"
}

.ic-reduce-md:before {
  content: "\E622"
}

.ic-error-md:before {
  content: "\E623"
}

.ic-chevronleft-md:before {
  content: "\E624"
}

.ic-chevronright-md:before {
  content: "\E625"
}

.ic-translate-md:before {
  content: "\E626"
}

.ic-message-md:before {
  content: "\E627"
}

.ic-store-md:before {
  content: "\E628"
}

.ic-storecategory-md:before {
  content: "\E629"
}

.ic-following-md:before {
  content: "\E62A"
}

.ic-follow-md:before {
  content: "\E62B"
}

.ic-404-md:before {
  content: "\E62C"
}

.ic-building-md:before {
  content: "\E62D"
}

.ic-feedback-md:before {
  content: "\E62F"
}

.ic-pc-site-md:before {
  content: "\E630"
}

.ic-unhappy-md:before {
  content: "\E631"
}

.ic-happy-md:before {
  content: "\E632"
}

.ic-network-md:before {
  content: "\E633"
}

.ic-snapshot-md:before {
  content: "\E62E"
}

.ic-mobile-view-md:before {
  content: "\E635"
}

.ic-pc-view-md:before {
  content: "\E634"
}

.ic-more-md:before {
  content: "\E63F"
}

.ic-despatched-md:before {
  content: "\E63E"
}

.ic-take-off-md:before {
  content: "\E63D"
}

.ic-landing-md:before {
  content: "\E63C"
}

.ic-delivered-md:before {
  content: "\E63B"
}

.ic-seller-discount-md:before {
  content: "\E63A"
}

.ic-bonus-coupon-sign-md:before {
  content: "\E639"
}

.ic-bonus-coupon-md:before {
  content: "\E638"
}

.ic-about-md:before {
  content: "\E637"
}

.ic-seller-coupon-md:before {
  content: "\E636"
}

.ic-path-md:before {
  content: "\E640"
}

.ic-share-md:before {
  content: "\E6C0"
}

.ic-comment-md:before {
  content: "\E6C2"
}

.ic-zan-md:before {
  content: "\E6C3"
}

.ic-camera-md:before {
  content: "\E6C4"
}

hr {
  border: 0 #ccc solid;
  border-top-width: 1px
}

h1 {
  font-size: 2.5em
}

h2 {
  font-size: 2.25em
}

h3 {
  font-size: 2em
}

h4 {
  font-size: 1.5em
}

h5 {
  font-size: 1.25em
}

h6 {
  font-size: 1em
}

.bold {
  font-weight: 600
}

.uppercase {
  text-transform: uppercase
}

.color {
  color: #3A3E4A
}

.box-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .24)
}

.border-top {
  border-top: 1px solid #EBEBEC
}

.border-bottom {
  border-bottom: 1px solid #EBEBEC
}

div[class^=ms-lego-] a {
  display: block
}

.ms-lego-radius {
  border-radius: 2px
}

.ms-lego-shadow {
  box-shadow: 0 2px 2px rgba(0, 0, 0, .24)
}

.ms-lego-hidden {
  display: none!important
}

.ms-lego-border-top {
  border-top: 1px solid #ebebec
}

.ms-lego-border-bottom {
  border-bottom: 1px solid #ebebec
}

.ms-rc-ripple {
  position: relative;
  overflow: hidden;
  cursor: pointer
}

.ms-rc-ripple .ripple {
  position: absolute!important;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, .4);
  -webkit-transform: scale(0);
  transform: scale(0);
  opacity: 1;
  z-index: 1000
}

.ms-rc-custom .ripple {
  background: #d3d3d3
}

.ms-rc-ripple .ripple-effect {
  -webkit-animation: ripple-drop .4s linear;
  animation: ripple-drop .4s linear
}

@-webkit-keyframes ripple-drop {
  100% {
    -webkit-transform: scale(2);
    transform: scale(2);
    opacity: 0
  }
}

@keyframes ripple-drop {
  100% {
    -webkit-transform: scale(2);
    transform: scale(2);
    opacity: 0
  }
}

.ms-lego-white-ripple {
  position: absolute;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, .4);
  -webkit-transform: scale(0);
  transform: scale(0);
  opacity: 1;
  z-index: 1000
}

.ms-lego-black-ripple {
  position: absolute;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(0, 0, 0, .4);
  -webkit-transform: scale(0);
  transform: scale(0);
  opacity: 1;
  z-index: 1000
}

.ms-lego-effect {
  -webkit-animation: ripple-drop .4s linear;
  animation: ripple-drop .4s linear
}

.offline-notice-bar {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  display: none;
  background-color: rgba(238, 238, 238, .95);
  text-align: center;
  font-size: 14px;
  line-height: 36px
}

body[offline=true] .offline-notice-bar {
  display: block
}

.hide-for-s-e-o {
  display: none
}

.clearfix,
.layout-fixed,
.layout-fluid,
.row,
.util-clearfix {
  zoom: 1
}

.clearfix:after,
.clearfix:before,
.layout-fixed:after,
.layout-fixed:before,
.layout-fluid:after,
.layout-fluid:before,
.row:after,
.row:before,
.util-clearfix:after,
.util-clearfix:before {
  content: " ";
  display: table
}

.clearfix:after,
.layout-fixed:after,
.layout-fluid:after,
.row:after,
.util-clearfix:after {
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0
}

.layout-fixed {
  margin-right: auto;
  margin-left: auto;
  padding-left: 0;
  padding-right: 0
}

@media (min-width:768px) {
  .layout-fixed {
    width: 720px
  }
}

@media (min-width:992px) {
  .layout-fixed {
    width: 940px
  }
}

@media (min-width:1200px) {
  .layout-fixed {
    width: 1140px
  }
}

.layout-fluid {
  margin-right: auto;
  margin-left: auto;
  padding-left: 0;
  padding-right: 0
}

.row {
  position: relative;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  height: auto;
  display: block
}

.row-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap
}

.row-flex:after,
.row-flex:before {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex
}

.row-flex-start {
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start
}

.row-flex-center {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center
}

.row-flex-end {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end
}

.row-flex-space-between {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between
}

.row-flex-space-around {
  -webkit-justify-content: space-around;
  justify-content: space-around
}

.row-flex-top {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start
}

.row-flex-middle {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center
}

.row-flex-bottom {
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end
}

.col {
  position: relative;
  display: block;
  float: left;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto
}

.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9 {
  position: relative;
  display: block;
  float: left;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  padding-left: 0;
  padding-right: 0
}

.col-12 {
  width: 100%
}

.col-push-12 {
  left: 100%
}

.col-pull-12 {
  right: 100%
}

.col-offset-12 {
  margin-left: 100%
}

.col-order-12 {
  -webkit-box-ordinal-group: 13;
  -webkit-order: 12;
  order: 12
}

.col-11 {
  width: 91.66666667%
}

.col-push-11 {
  left: 91.66666667%
}

.col-pull-11 {
  right: 91.66666667%
}

.col-offset-11 {
  margin-left: 91.66666667%
}

.col-order-11 {
  -webkit-box-ordinal-group: 12;
  -webkit-order: 11;
  order: 11
}

.col-10 {
  width: 83.33333333%
}

.col-push-10 {
  left: 83.33333333%
}

.col-pull-10 {
  right: 83.33333333%
}

.col-offset-10 {
  margin-left: 83.33333333%
}

.col-order-10 {
  -webkit-box-ordinal-group: 11;
  -webkit-order: 10;
  order: 10
}

.col-9 {
  width: 75%
}

.col-push-9 {
  left: 75%
}

.col-pull-9 {
  right: 75%
}

.col-offset-9 {
  margin-left: 75%
}

.col-order-9 {
  -webkit-box-ordinal-group: 10;
  -webkit-order: 9;
  order: 9
}

.col-8 {
  width: 66.66666667%
}

.col-push-8 {
  left: 66.66666667%
}

.col-pull-8 {
  right: 66.66666667%
}

.col-offset-8 {
  margin-left: 66.66666667%
}

.col-order-8 {
  -webkit-box-ordinal-group: 9;
  -webkit-order: 8;
  order: 8
}

.col-7 {
  width: 58.33333333%
}

.col-push-7 {
  left: 58.33333333%
}

.col-pull-7 {
  right: 58.33333333%
}

.col-offset-7 {
  margin-left: 58.33333333%
}

.col-order-7 {
  -webkit-box-ordinal-group: 8;
  -webkit-order: 7;
  order: 7
}

.col-6 {
  width: 50%
}

.col-push-6 {
  left: 50%
}

.col-pull-6 {
  right: 50%
}

.col-offset-6 {
  margin-left: 50%
}

.col-order-6 {
  -webkit-box-ordinal-group: 7;
  -webkit-order: 6;
  order: 6
}

.col-5 {
  width: 41.66666667%
}

.col-push-5 {
  left: 41.66666667%
}

.col-pull-5 {
  right: 41.66666667%
}

.col-offset-5 {
  margin-left: 41.66666667%
}

.col-order-5 {
  -webkit-box-ordinal-group: 6;
  -webkit-order: 5;
  order: 5
}

.col-4 {
  width: 33.33333333%
}

.col-push-4 {
  left: 33.33333333%
}

.col-pull-4 {
  right: 33.33333333%
}

.col-offset-4 {
  margin-left: 33.33333333%
}

.col-order-4 {
  -webkit-box-ordinal-group: 5;
  -webkit-order: 4;
  order: 4
}

.col-3 {
  width: 25%
}

.col-push-3 {
  left: 25%
}

.col-pull-3 {
  right: 25%
}

.col-offset-3 {
  margin-left: 25%
}

.col-order-3 {
  -webkit-box-ordinal-group: 4;
  -webkit-order: 3;
  order: 3
}

.col-2 {
  width: 16.66666667%
}

.col-push-2 {
  left: 16.66666667%
}

.col-pull-2 {
  right: 16.66666667%
}

.col-offset-2 {
  margin-left: 16.66666667%
}

.col-order-2 {
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  order: 2
}

.col-1 {
  width: 8.33333333%
}

.col-push-1 {
  left: 8.33333333%
}

.col-pull-1 {
  right: 8.33333333%
}

.col-offset-1 {
  margin-left: 8.33333333%
}

.col-order-1 {
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  order: 1
}

.col-push-0 {
  left: auto
}

.col-pull-0 {
  right: auto
}

.fade-enter-active,
.fade-leave-active {
  -webkit-transition: opacity .3s;
  transition: opacity .3s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}

.fadeIn {
  -webkit-animation: fadeIn 300ms both;
  animation: fadeIn 300ms both
}

.fadeOut {
  -webkit-animation: fadeOut 300ms both;
  animation: fadeOut 300ms both
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
}

.ms-star {
  display: inline-block;
  position: relative;
  font-family: icmd;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-stroke-width: .2px
}

.ms-star .ms-star-bottom {
  display: inline-block
}

.ms-star .ms-star-bottom::before {
  display: inline-block;
  color: #e8e8e8;
  content: "\e60f\e60f\e60f\e60f\e60f"
}

.ms-star .ms-star-top {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  width: 0;
  overflow: hidden
}

.ms-star .ms-star-top::before {
  color: #ff6501;
  display: inline-block;
  content: "\e60f\e60f\e60f\e60f\e60f";
  overflow: hidden
}

.ms-downloadbar-wrap {
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #EBEBEC;
  margin-bottom: 56px
}

.ms-downloadbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50
}

.ms-downloadbar {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 53px;
  padding: 8px 16px;
  border-bottom: 1px solid #EBEBEC;
  background-color: #fff;
  z-index: 1
}

.ms-downloadbar:after {
  display: block;
  content: ' ';
  height: 0;
  clear: both
}

.ms-downloadbar .downloadbar-rate-wrap {
  float: left;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex
}

.ms-downloadbar .downloadbar-rate-wrap .downloadbar-logo {
  width: 36px;
  height: 36px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABU1BMVEUAAADnLwT/mQDmLwT/mQDnLwX/mQDmLwXnLwX/mQDqMgf/nAD/mgD/mgDmLgT/mQD////xXwLyloGzIQDmMQf++vnoQxznNg7+9/X87en3wrbqVTP3v7L2uqvoPhfmLwX50cjznIjveV7uclbsZ0jpRyHnMwj+/Pv99fP98u/7493739f5zsP1q5r74dr63NT3vK71saH0qJbzn4zwgGfsYkLrWjjqUjDjLAP62dD2tqfymYTykXvtbVDsXz/qTivpSibcKwO5IgD86eX4yb71r57xjHXucFPnOhK+IwD97+z75d/3wLP2tKT0o5DwhWvvfGHtakzrXTzrRQPYKgL0bAHEJQH7iQD85uH4xbrxinLTKALy2NP61cziraHdnI7CTDK8Ox66NRi2KQroOQPyYgLvVQLLJgH9kgD66eX32NHuzsftyMDqwrrksabYjX3SfGlrEmjzAAAADnRSTlMA+vr19d/fnGxsJCScnXYjhKMAAAOASURBVFjD1MzhCYAgGATQQ0QI7TtaooVEXKDC/SfIpA28P74BHrqYguM0F1LEsHmK+G18FOpj9BTyETulEgKlAhylHCi2SFjLfUy7S/3D9pjI076wXiZzVYLZhDJRTKogm1TGaVInTGzJ8KWUbloSiKI4jH+Dw0NXUzMqUxvdKEkvE5Q1M5HNRIQwDJSipQvpve+/imkn6dwzz/Iuftw/HC/xw5FYG4V+4mlAz6QtbN7CpMUKMDRTZzwzXrbnmvk7E+MrQPMCfBvL6Nj8AM/GtYN+Ck5MnA16ZqoFkznw6buWyf4XMEsUk92wAuNYLHkf4ISu6g7foFUQWwG8Kg/7EGjYvCqwpQQHQM8GbgBHSrBUhsC2uQtsKkHZBh6yvTqwJ1pwCFRKWV6hA+yrQbkGalngDXC2qwdPAC7We/0i0BA9KPdA63Sd14yAR8kDlrpAUJWVXXaAu51coFxFQLkuK2q0l76vBOW4CND794/bmgM4A8kLSr8C0D5fOp+Dp+jvdSj5QWn+tlsnPYoCYRiA6Rij8fCFVKBYBURwQVCQxQhuSbtlXMeT3Un//78xlNHJdCb0QTmYTr8JBXV5Ukuor4Y0CS8fMVyi6NUWTdKd3lf1uD6Z3QW1bLvLXztNb313GZ1W6f8iDh6qy1H/9V9NWISPF/oocbUz23zVXH+iPsXN4Qd8VnCaE6iMcNqOT1jT1RrJ5EFwSaO0rSJj42N67rru+EGw1z+rBIQQGFqCT2HU6/vykDSu/WwwEhjLuICicQVXQwU4LQDJZn/tG6Dtuw6DhKY9hUmX7Z1g2eZFJRN0fEDxBezUGdpJEgSwe1NjEXAb4ejDA4t9V2q9cOZsuGGg1lcmP+OWsyyQaw/A5Nc3cOt5C1KvtLMCiQgAJo0tHxj+t2magjF3wwYoPBpkT1lnt9stf7iCtzU80ksA1yefrZO1AkyzJEfs91oHiGLBkrLAeYwQ8j4+g1hYtGcgawAgsWtrDCAYf0fQSht1F2eAs9aabF1buq1hygeM7UBtyMlsHOqbBAh4FIKwv2jMg+m+M7ANSfMzwDoCknd9pINzUkWS/XjXANXRZZQM7QBgEZHL1FvHM2Eid+UBHOxOn7vjX5ZH8EW+JYiVZzsPf8BvBb7k671QxXzBIlXKFyxRlUKeXqFCUeU8wTKVplzIbXypR1IpFV9y2N9iqZJifwDAzK4IjTZJUgAAAABJRU5ErkJggg==);
  background-position: center center;
  background-size: 100% auto;
  background-repeat: no-repeat
}

.cool .ms-downloadbar .downloadbar-rate-wrap .downloadbar-logo {
  background-image: url(//ae01.alicdn.com/kf/HTB1L7bZPVXXXXauapXX760XFXXXK.png)
}

.ms-downloadbar .downloadbar-rate-wrap .rate-container {
  margin-left: 8px
}

.ms-downloadbar .downloadbar-rate-wrap .rate-container .downloadbar-title {
  font-size: 14px;
  line-height: 16px;
  color: #000
}

.ms-downloadbar .downloadbar-rate-wrap .rate-container .downloadbar-rate {
  height: 10px;
  padding-top: 4px
}

.ms-downloadbar .download-btn {
  float: right;
  display: inline-block;
  margin-top: 3px;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
  border-radius: 3px;
  color: #fff;
  background-color: #E62E04;
  text-align: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .24);
  text-transform: uppercase
}

.ms-downloadbar .ms-star .ms-star-top {
  display: none
}

.ms-star .ms-star-top::before {
  color: #f44336
}

[data-platform=ios] .ms-star .ms-star-top.ios {
  display: inline-block
}

[data-platform=android] .ms-star .ms-star-top.android {
  display: inline-block
}

.ms-header[ai-controller] {
  display: block
}

.ms-header {
  height: 56px
}

.ms-header.fixed.w-download .header-main {
  position: fixed;
  margin-top: 0
}

.ms-header.mini .title {
  width: 32%
}

.ms-header.mini .header-main .minidrawer {
  margin-right: 8px;
  padding: 8px
}

.ms-header.mini .header-main .minidrawer .ic-md {
  display: block;
  line-height: 40px
}

.ms-header.w-download {
  height: 109px
}

.ms-header.w-download .header-main {
  position: absolute;
  margin-top: 53px
}

.ms-header .header-main {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 56px;
  font-size: 18px;
  line-height: 56px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .24)
}

.ms-header .header-main .back .ic-md,
.ms-header .header-main .cart .ic-md,
.ms-header .header-main .drawer .ic-md,
.ms-header .header-main .ic-wp .ic-md,
.ms-header .header-main .minidrawer .ic-md,
.ms-header .header-main .search .ic-md {
  font-size: 24px
}

.ms-header .header-main .addhome,
.ms-header .header-main .cart,
.ms-header .header-main .search {
  box-sizing: border-box;
  height: 56px;
  padding: 8px;
  margin-right: 8px;
  line-height: 40px
}

.ms-header .header-main .addhome .ic-md,
.ms-header .header-main .cart .ic-md,
.ms-header .header-main .search .ic-md {
  line-height: 40px
}

.ms-header .header-main .back,
.ms-header .header-main .drawer {
  box-sizing: border-box;
  display: block;
  height: 56px;
  position: absolute;
  left: 0;
  top: 0;
  padding-left: 16px;
  padding-right: 16px
}

.ms-header .header-main .back .ic-md,
.ms-header .header-main .drawer .ic-md {
  line-height: 56px
}

.ms-header .header-main .back.tip::after,
.ms-header .header-main .drawer.tip::after {
  content: " ";
  display: block;
  width: 8px;
  height: 8px;
  background-color: #e62e04;
  position: absolute;
  top: 16px;
  right: 16px;
  border-radius: 8px
}

.ms-header .header-main .search {
  display: inline-block
}

.ms-header .header-main .search .ic-md {
  display: block
}

.ms-header .header-main .addhome {
  display: none;
  opacity: 0
}

.ms-header .header-main .addhome.show {
  opacity: 1;
  display: block
}

.ms-header .header-main .cart {
  position: relative;
  box-sizing: border-box;
  display: inline-block
}

.ms-header .header-main .cart span {
  box-sizing: border-box;
  display: none;
  background-color: #e62e04;
  height: 14px;
  min-width: 14px;
  padding: 0 2px;
  border-radius: 14px;
  color: #fff;
  text-align: center;
  font-size: 10px;
  line-height: 14px;
  position: absolute;
  top: 10px;
  right: 3px
}

.ms-header .header-main .logo {
  position: absolute;
  left: 72px;
  top: 16px
}

.ms-header .header-main .logo>img {
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 99px;
  height: 24px
}

.ms-header .header-main h1 {
  display: inline-block;
  width: 44%;
  margin-left: 72px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 18px;
  overflow: hidden
}

.ms-header .title {
  display: inline-block;
  width: 44%;
  margin-left: 72px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 600;
  overflow: hidden
}

.ms-header .title.hide {
  display: none
}

.ms-header .position-right {
  position: absolute;
  right: 0;
  top: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex
}

.ms-header .block {
  display: block!important
}

.ms-header .inline-block {
  display: inline-block!important
}

.ms-header .for-outer {
  box-sizing: border-box;
  display: none;
  height: 56px;
  width: 100%;
  padding: 16px;
  background-color: #f8f8f8
}

.ms-header .for-outer img {
  display: none;
  width: 99px;
  height: 24px;
  margin-left: auto;
  margin-right: auto
}

.ms-detail-head {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  box-shadow: none
}

.ms-detail-head .header-main {
  position: absolute
}

.ms-wish-list-head,
.ms-wish-list-head .header-main {
  box-shadow: none
}

.ms-detail-head .header-main {
  color: #fff;
  background: -webkit-linear-gradient(top, rgba(58, 62, 74, .21), rgba(58, 62, 74, 0));
  box-shadow: inherit
}

.ms-downloadbar-wrap+.ms-detail-head {
  top: 53px
}

.ms-detail-head .header-main .ic-wp .ic-md {
  color: #fff
}

@media all and (display-mode:standalone) {
  .ms-header .addhome {
    display: none
  }
  .ms-header.w-download {
    height: 56px
  }
  .ms-header.w-download .header-main {
    position: fixed;
    margin-top: 0
  }
  .ms-downloadbar-wrap {
    display: none
  }
  .ms-downloadbar-wrap+.ms-detail-head {
    top: 0
  }
  .ms-header .header-main .addhome {
    display: none
  }
}

:fullscreen .ms-header .addhome {
  display: none
}

:fullscreen .ms-header.w-download {
  height: 56px
}

:fullscreen .ms-header.w-download .header-main {
  position: fixed;
  margin-top: 0
}

:fullscreen .ms-downloadbar-wrap {
  display: none
}

:fullscreen .ms-downloadbar-wrap+.ms-detail-head {
  top: 0
}

:fullscreen .ms-header .header-main .addhome {
  display: none
}

.ms_topbanner_image_url img {
  width: 100%;
  height: auto;
  max-height: 54px
}

.ms_topbanner_image_url {
  display: block
}

.ms_topbanner_image {
  z-index: 1;
  width: 100%
}

.mini-dropdown {
  position: absolute;
  right: 8px;
  top: 8px;
  box-sizing: border-box;
  background-color: #FBFBFB;
  display: none;
  -webkit-transform: scale3d(0, 0, 0);
  transform: scale3d(0, 0, 0);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .24)
}

.mini-dropdown.show+.transparent-mask {
  display: block
}

.mini-dropdown.show {
  z-index: 12;
  display: block;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  -webkit-transition: -webkit-transform .25s;
  transition: -webkit-transform .25s;
  transition: transform .25s;
  transition: transform .25s, -webkit-transform .25s
}

.mini-d-list {
  padding-top: 8px;
  padding-bottom: 8px
}

.mini-d-list li {
  box-sizing: border-box;
  min-width: 112px;
  max-width: 280px;
  height: 48px;
  font-size: 14px;
  line-height: 48px
}

.mini-d-list li a {
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  color: #3A3E4A
}

.transparent-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 11;
  background-color: transparent;
  display: none
}

.install-guide-wp {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
  background-image: url(//ae01.alicdn.com/kf/HTB1qxg6JFXXXXadXXXX760XFXXXt.png);
  background-position: top left;
  background-repeat: no-repeat;
  background-size: 100%;
  opacity: 0
}

.install-guide-wp.visible {
  opacity: 1
}

.install-guide-wp .ig-container {
  padding-left: 60px;
  padding-right: 60px
}

.install-guide-wp .ig-title {
  display: block;
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 12px
}

.install-guide-wp .ig-desc {
  display: block;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 16px
}

.install-guide-wp .ig-desc .mc-id::before {
  font-size: 14px;
  line-height: 20px
}

.install-guide-wp .ig-btn {
  background-color: #E62E04;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .4);
  border-radius: 2px;
  color: #FFF;
  border-style: none;
  text-transform: uppercase;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 14px;
  line-height: 36px;
  float: right
}

.install-guide-wp .ig-gif {
  display: block;
  width: 100%;
  height: auto;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto
}

.install-guide-wp .arrow-wp {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 27px;
  height: 30px;
  border-bottom-right-radius: 100%;
  border-right: 1px dashed #3A3E4A
}

.install-guide-wp .arrow-wp .arrow {
  position: absolute;
  top: -3px;
  right: -3px;
  width: 0;
  height: 0;
  border-color: transparent transparent #3A3E4A transparent;
  border-style: solid;
  border-width: 4px 3px
}

.preloader-wrapper {
  display: inline-block;
  position: relative;
  width: 48px;
  height: 48px
}

.preloader-wrapper.small {
  width: 36px;
  height: 36px
}

.preloader-wrapper.big {
  width: 64px;
  height: 64px
}

.preloader-wrapper.active {
  -webkit-animation: container-rotate 1568ms linear infinite;
  animation: container-rotate 1568ms linear infinite
}

@-webkit-keyframes container-rotate {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}

@keyframes container-rotate {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}

.spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-color: #26a69a
}

.spinner-blue,
.spinner-blue-only {
  border-color: #4285f4
}

.spinner-red,
.spinner-red-only {
  border-color: #F44336
}

.spinner-yellow,
.spinner-yellow-only {
  border-color: #f4b400
}

.spinner-green,
.spinner-green-only {
  border-color: #0f9d58
}

.active .spinner-layer.spinner-blue {
  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
  animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both
}

.active .spinner-layer.spinner-red {
  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
  animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both
}

.active .spinner-layer.spinner-yellow {
  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
  animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both
}

.active .spinner-layer.spinner-green {
  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
  animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both
}

.active .spinner-layer,
.active .spinner-layer.spinner-blue-only,
.active .spinner-layer.spinner-green-only,
.active .spinner-layer.spinner-red-only,
.active .spinner-layer.spinner-yellow-only {
  opacity: 1;
  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;
  animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both
}

@-webkit-keyframes fill-unfill-rotate {
  12.5% {
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg)
  }
  25% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg)
  }
  37.5% {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg)
  }
  50% {
    -webkit-transform: rotate(540deg);
    transform: rotate(540deg)
  }
  62.5% {
    -webkit-transform: rotate(675deg);
    transform: rotate(675deg)
  }
  75% {
    -webkit-transform: rotate(810deg);
    transform: rotate(810deg)
  }
  87.5% {
    -webkit-transform: rotate(945deg);
    transform: rotate(945deg)
  }
  to {
    -webkit-transform: rotate(1080deg);
    transform: rotate(1080deg)
  }
}

@keyframes fill-unfill-rotate {
  12.5% {
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg)
  }
  25% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg)
  }
  37.5% {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg)
  }
  50% {
    -webkit-transform: rotate(540deg);
    transform: rotate(540deg)
  }
  62.5% {
    -webkit-transform: rotate(675deg);
    transform: rotate(675deg)
  }
  75% {
    -webkit-transform: rotate(810deg);
    transform: rotate(810deg)
  }
  87.5% {
    -webkit-transform: rotate(945deg);
    transform: rotate(945deg)
  }
  to {
    -webkit-transform: rotate(1080deg);
    transform: rotate(1080deg)
  }
}

@-webkit-keyframes blue-fade-in-out {
  from {
    opacity: 1
  }
  25% {
    opacity: 1
  }
  26% {
    opacity: 0
  }
  89% {
    opacity: 0
  }
  90% {
    opacity: 1
  }
  100% {
    opacity: 1
  }
}

@keyframes blue-fade-in-out {
  from {
    opacity: 1
  }
  25% {
    opacity: 1
  }
  26% {
    opacity: 0
  }
  89% {
    opacity: 0
  }
  90% {
    opacity: 1
  }
  100% {
    opacity: 1
  }
}

@-webkit-keyframes red-fade-in-out {
  from {
    opacity: 0
  }
  15% {
    opacity: 0
  }
  25% {
    opacity: 1
  }
  50% {
    opacity: 1
  }
  51% {
    opacity: 0
  }
}

@keyframes red-fade-in-out {
  from {
    opacity: 0
  }
  15% {
    opacity: 0
  }
  25% {
    opacity: 1
  }
  50% {
    opacity: 1
  }
  51% {
    opacity: 0
  }
}

@-webkit-keyframes yellow-fade-in-out {
  from {
    opacity: 0
  }
  40% {
    opacity: 0
  }
  50% {
    opacity: 1
  }
  75% {
    opacity: 1
  }
  76% {
    opacity: 0
  }
}

@keyframes yellow-fade-in-out {
  from {
    opacity: 0
  }
  40% {
    opacity: 0
  }
  50% {
    opacity: 1
  }
  75% {
    opacity: 1
  }
  76% {
    opacity: 0
  }
}

@-webkit-keyframes green-fade-in-out {
  from {
    opacity: 0
  }
  65% {
    opacity: 0
  }
  75% {
    opacity: 1
  }
  90% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
}

@keyframes green-fade-in-out {
  from {
    opacity: 0
  }
  65% {
    opacity: 0
  }
  75% {
    opacity: 1
  }
  90% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
}

.gap-patch {
  position: absolute;
  top: 0;
  left: 45%;
  width: 10%;
  height: 100%;
  overflow: hidden;
  border-color: inherit
}

.gap-patch .circle {
  width: 1000%;
  left: -450%
}

.circle-clipper {
  display: inline-block;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-color: inherit
}

.circle-clipper .circle {
  width: 200%;
  height: 100%;
  border-width: 5px;
  border-style: solid;
  border-color: inherit;
  border-bottom-color: transparent!important;
  border-radius: 50%;
  -webkit-animation: none;
  animation: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0
}

.circle-clipper.left .circle {
  left: 0;
  border-right-color: transparent!important;
  -webkit-transform: rotate(129deg);
  transform: rotate(129deg)
}

.circle-clipper.right .circle {
  left: -100%;
  border-left-color: transparent!important;
  -webkit-transform: rotate(-129deg);
  transform: rotate(-129deg)
}

.active .circle-clipper.left .circle {
  -webkit-animation: left-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both;
  animation: left-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both
}

.active .circle-clipper.right .circle {
  -webkit-animation: right-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both;
  animation: right-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both
}

@-webkit-keyframes left-spin {
  from {
    -webkit-transform: rotate(130deg);
    transform: rotate(130deg)
  }
  50% {
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg)
  }
  to {
    -webkit-transform: rotate(130deg);
    transform: rotate(130deg)
  }
}

@keyframes left-spin {
  from {
    -webkit-transform: rotate(130deg);
    transform: rotate(130deg)
  }
  50% {
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg)
  }
  to {
    -webkit-transform: rotate(130deg);
    transform: rotate(130deg)
  }
}

@-webkit-keyframes right-spin {
  from {
    -webkit-transform: rotate(-130deg);
    transform: rotate(-130deg)
  }
  50% {
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg)
  }
  to {
    -webkit-transform: rotate(-130deg);
    transform: rotate(-130deg)
  }
}

@keyframes right-spin {
  from {
    -webkit-transform: rotate(-130deg);
    transform: rotate(-130deg)
  }
  50% {
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg)
  }
  to {
    -webkit-transform: rotate(-130deg);
    transform: rotate(-130deg)
  }
}

.ms-rc-hide {
  display: none
}

.key-visual {
  display: block;
  margin: 0 auto;
  margin-bottom: 8px;
  width: 100%;
  min-height: 3.4375rem;
  overflow: hidden;
  position: relative;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
  background: url(//ae01.alicdn.com/kf/HTB1ngdlRVXXXXc.XXXX760XFXXXM.png) center no-repeat #F7F7F9;
  background-size: contain
}

.key-visual .loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.625rem;
  line-height: 4.625rem
}

.kv-container {
  overflow: hidden
}

.kv-container .kv-item {
  overflow: hidden;
  text-align: center;
  float: left;
  position: relative
}

.kv-container .kv-item a {
  display: block
}

.kv-tab {
  height: 16px;
  text-align: center;
  line-height: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 0;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0)
}

.kv-container .kv-item img {
  width: 100%
}

.kv-tab a {
  background-color: #fff;
  border-radius: 6px;
  display: inline-block;
  height: 0;
  width: 6px;
  overflow: hidden;
  padding: 6px 0 0 0;
  margin: 0 2px;
  opacity: .8
}

.kv-tab a.current {
  background-color: #e62e04;
  opacity: 1
}

.ms-rc-category {
  margin: 0 8px 8px 8px;
  background: #fff
}

.ms-rc-category a {
  display: block
}

.ms-rc-category ul {
  padding: 4px
}

.ms-rc-category li {
  box-sizing: border-box;
  padding: 4px;
  width: 25%;
  display: block;
  float: left;
  overflow: hidden
}

.ms-rc-category .pic {
  width: 2.111rem;
  height: 2.111rem;
  margin: 0 auto
}

.ms-rc-category li:last-child .pic {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.ms-rc-category li:last-child .pic .ic-category-md {
  font-size: 1rem
}

.ms-rc-category .title {
  font-size: 10px;
  height: 24px;
  line-height: 12px;
  color: #51575C;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden
}

.ms-rc-buyer,
.ms-rc-download {
  margin: 0 4px 8px 4px;
  background: #fff
}

.ms-floor {
  opacity: 0
}

.ms-rc-active {
  padding: 0 4px;
  min-height: 6.72rem
}

.flashdeals li {
  width: 50%;
  float: left;
  padding-right: 4px;
  padding-left: 4px;
  padding-bottom: 8px
}

.flashdeals li a {
  display: block
}

.ms-rc-active .flash-deals,
.ms-rc-active .super-deals {
  background: #fff;
  overflow: hidden;
  padding: 8px
}

.ms-rc-active .title {
  margin: 4px 0 8px 0;
  font-size: 16px;
  height: 20px;
  overflow: hidden;
  color: #3A3E4A;
  text-align: center
}

.ms-rc-active .time {
  height: 25px;
  line-height: 25px;
  border-radius: 50px;
  margin-bottom: 12px;
  background: #F44336;
  text-align: center;
  font-size: 14px;
  color: #FFF
}

.ms-rc-active .pic {
  min-height: 5.375rem;
  overflow: hidden
}

.ms-rc-active .pic img {
  display: block;
  width: 100%;
  height: 100%
}

.ms-rc-active .super-deals .time {
  background: #FF7300
}

.flash-deals .countdown,
.super-deals .countdown {
  opacity: 0
}

.ms-rc-download .pic {
  min-height: 194px
}

.ms-rc-download .pic img {
  display: block;
  width: 100%;
  height: auto
}

.ms-rc-download .pic a {
  display: block
}

.ms-rc-download .link {
  position: relative
}

.ms-rc-download .link .left {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 3.944rem;
  height: 1rem
}

.ms-rc-download .link .left .aem-logo {
  width: 1rem;
  height: 1rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABU1BMVEUAAADnLwT/mQDmLwT/mQDnLwX/mQDmLwXnLwX/mQDqMgf/nAD/mgD/mgDmLgT/mQD////xXwLyloGzIQDmMQf++vnoQxznNg7+9/X87en3wrbqVTP3v7L2uqvoPhfmLwX50cjznIjveV7uclbsZ0jpRyHnMwj+/Pv99fP98u/7493739f5zsP1q5r74dr63NT3vK71saH0qJbzn4zwgGfsYkLrWjjqUjDjLAP62dD2tqfymYTykXvtbVDsXz/qTivpSibcKwO5IgD86eX4yb71r57xjHXucFPnOhK+IwD97+z75d/3wLP2tKT0o5DwhWvvfGHtakzrXTzrRQPYKgL0bAHEJQH7iQD85uH4xbrxinLTKALy2NP61cziraHdnI7CTDK8Ox66NRi2KQroOQPyYgLvVQLLJgH9kgD66eX32NHuzsftyMDqwrrksabYjX3SfGlrEmjzAAAADnRSTlMA+vr19d/fnGxsJCScnXYjhKMAAAOASURBVFjD1MzhCYAgGATQQ0QI7TtaooVEXKDC/SfIpA28P74BHrqYguM0F1LEsHmK+G18FOpj9BTyETulEgKlAhylHCi2SFjLfUy7S/3D9pjI076wXiZzVYLZhDJRTKogm1TGaVInTGzJ8KWUbloSiKI4jH+Dw0NXUzMqUxvdKEkvE5Q1M5HNRIQwDJSipQvpve+/imkn6dwzz/Iuftw/HC/xw5FYG4V+4mlAz6QtbN7CpMUKMDRTZzwzXrbnmvk7E+MrQPMCfBvL6Nj8AM/GtYN+Ck5MnA16ZqoFkznw6buWyf4XMEsUk92wAuNYLHkf4ISu6g7foFUQWwG8Kg/7EGjYvCqwpQQHQM8GbgBHSrBUhsC2uQtsKkHZBh6yvTqwJ1pwCFRKWV6hA+yrQbkGalngDXC2qwdPAC7We/0i0BA9KPdA63Sd14yAR8kDlrpAUJWVXXaAu51coFxFQLkuK2q0l76vBOW4CND794/bmgM4A8kLSr8C0D5fOp+Dp+jvdSj5QWn+tlsnPYoCYRiA6Rij8fCFVKBYBURwQVCQxQhuSbtlXMeT3Un//78xlNHJdCb0QTmYTr8JBXV5Ukuor4Y0CS8fMVyi6NUWTdKd3lf1uD6Z3QW1bLvLXztNb313GZ1W6f8iDh6qy1H/9V9NWISPF/oocbUz23zVXH+iPsXN4Qd8VnCaE6iMcNqOT1jT1RrJ5EFwSaO0rSJj42N67rru+EGw1z+rBIQQGFqCT2HU6/vykDSu/WwwEhjLuICicQVXQwU4LQDJZn/tG6Dtuw6DhKY9hUmX7Z1g2eZFJRN0fEDxBezUGdpJEgSwe1NjEXAb4ejDA4t9V2q9cOZsuGGg1lcmP+OWsyyQaw/A5Nc3cOt5C1KvtLMCiQgAJo0tHxj+t2magjF3wwYoPBpkT1lnt9stf7iCtzU80ksA1yefrZO1AkyzJEfs91oHiGLBkrLAeYwQ8j4+g1hYtGcgawAgsWtrDCAYf0fQSht1F2eAs9aabF1buq1hygeM7UBtyMlsHOqbBAh4FIKwv2jMg+m+M7ANSfMzwDoCknd9pINzUkWS/XjXANXRZZQM7QBgEZHL1FvHM2Eid+UBHOxOn7vjX5ZH8EW+JYiVZzsPf8BvBb7k671QxXzBIlXKFyxRlUKeXqFCUeU8wTKVplzIbXypR1IpFV9y2N9iqZJifwDAzK4IjTZJUgAAAABJRU5ErkJggg==);
  background-position: center;
  background-size: cover;
  overflow: hidden;
  float: left;
  margin-right: 8px
}

.ms-rc-download .link .left .rate {
  float: left
}

.ms-rc-download .link .left .rate p {
  font-size: 16px;
  color: #000
}

.ms-rc-download .link .left .rate .ms-star {
  display: inline-block;
  position: relative;
  font-family: icmd;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-stroke-width: .2px
}

.ms-rc-download .link .left .rate .ms-star .ms-star-bottom {
  display: inline-block
}

.ms-rc-download .link .left .rate .ms-star .ms-star .ms-star-top {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  width: 0;
  overflow: hidden
}

.ms-rc-download .link .right {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 3.944rem;
  height: 1rem;
  line-height: 1rem;
  overflow: hidden;
  font-size: 14px;
  background: #E62E04;
  border-radius: 2px;
  text-align: center;
  padding: 0 16px
}

.ms-rc-download .link .right .ic-download-md {
  margin-left: 8px
}

.ms-rc-download .link .right a {
  display: block;
  color: #fff
}

.ms-rc-download .link {
  height: 2rem
}

.ms-rc-buyer {
  position: relative;
  overflow: hidden;
  padding-left: 20px;
  min-height: 130px
}

.ms-rc-buyer .bp-title {
  margin-top: 24px;
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  color: #3C78AB;
  overflow: hidden
}

.ms-rc-buyer .bp-title .bp-pic {
  display: block;
  float: left;
  width: 18px;
  height: 24px;
  margin-right: 12px;
  background: url(//ae01.alicdn.com/kf/HTB1Z0FjRVXXXXXCXXXX760XFXXXi.png) left center no-repeat;
  background-size: cover
}

.ms-rc-buyer p {
  font-size: 14px;
  max-height: 1.125rem;
  line-height: .5625rem;
  color: #898B92;
  margin-bottom: 8px;
  overflow: hidden
}

.ms-rc-buyer p.first {
  margin-top: 24px
}

.ms-rc-buyer .view-more {
  position: absolute;
  width: 2.972rem;
  height: 1rem;
  line-height: 1rem;
  right: 8px;
  bottom: 14px;
  text-align: center
}

.ms-rc-buyer .view-more a {
  color: #3F7BAB
}

.product-list {
  padding: 0 4px 4px 4px;
  margin-right: -4px
}

.product-list li {
  display: block;
  float: left;
  width: 33.3333%
}

.product-list .product {
  padding-bottom: 4px;
  margin-right: 4px
}

.ms-floors-picture-auto-with-width {
  position: relative;
  overflow: hidden
}

.ms-floors-picture-auto-with-width:before {
  content: "";
  display: block;
  padding-top: 100%
}

.ms-floors-picture-auto-with-width .img-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background: #fff;
  overflow: hidden
}

.ms-floors-picture-auto-with-width .img-wrapper img {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: initial;
  vertical-align: middle
}

.product-list .product-name {
  position: absolute;
  width: 100%;
  font-size: 16px;
  color: #3A3E4A;
  text-align: center;
  bottom: 0;
  padding: 5px 10px;
  background-color: #fff;
  opacity: .9;
  filter: alpha(opacity=90)
}

.product-list .product-name>div {
  height: 32px;
  line-height: 16px;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden
}

.ms-rc-qp {
  padding: 0 4px
}

.ms-rc-qp .title {
  margin-top: 24px;
  margin-bottom: 8px;
  text-align: center;
  font-size: 16px;
  height: 20px;
  line-height: 20px;
  color: #3A3E4A;
  overflow: hidden
}

.ms-rc-qp .column {
  box-sizing: border-box;
  display: block;
  float: left;
  width: 50%;
  padding: 4px;
  overflow: hidden
}

.ms-rc-qp .column>.item {
  position: relative;
  margin-bottom: 8px;
  opacity: 0
}

.ms-rc-qp .column>.item-first {
  opacity: 1
}

.ms-rc-qp .column>.item a {
  display: block
}

.ms-rc-qp .column>.item .pic {
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-width: 148px;
  min-height: 148px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.ms-rc-qp .column>.item .price {
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  color: #3E3E3E;
  background: #fff;
  text-align: center;
  overflow: hidden
}

.coupon-banner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 110px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  background-size: 100% 100%
}

.ms-floors-picture-banner {
  padding: 0 4px 8px 4px
}

.ms-rc-shadow {
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24)
}

.md-loading {
  text-align: center;
  height: 50px;
  overflow: hidden;
  margin: 24px 0
}

.ms-lego-home-deals {
  padding: 0 4px 8px 4px
}

.home-deals-title {
  border-bottom: 1px solid #F0F0F0;
  background: inherit
}

.home-deals-title .title {
  width: 80%;
  float: left;
  height: 28px;
  margin: 0;
  text-align: left;
  overflow: hidden
}

.home-deals-title .title>span {
  display: inline-block;
  float: left;
  font-size: 17px;
  color: #E81838;
  padding-top: 4px
}

.home-deals-title .title>span:first-child {
  display: inline-block;
  padding-top: 0;
  padding-right: 4px;
  float: left;
  font-size: 20px;
  color: #3F3F3F;
  height: 28px;
  line-height: 28px;
  margin: 0;
  text-align: left;
  overflow: hidden
}

.ms-lego-home-deals .home-deals-more {
  width: 20%;
  display: block;
  float: right;
  font-size: 14px;
  color: #E81838;
  height: 28px;
  line-height: 28px;
  text-transform: uppercase;
  text-align: right;
  overflow: hidden
}

.ms-lego-home-deals .col-12 {
  background: #fff
}

.home-deals-picture .col-6:last-child {
  border-left: 1px solid #F0F0F0
}

.home-deals-picture .col-6:first-child .ms-lego-container {
  border-top: 1px solid #fff;
  text-align: center
}

.ms-lego-home-deals .col-6 .coupon {
  height: 15px;
  font-size: 12px;
  color: #3F3F3F;
  overflow: hidden
}

.home-deals-picture .home-deals-picture-right a>div {
  height: 101px
}

.home-deals-picture .home-deals-picture-right a:first-child>div {
  border-bottom: 1px solid #F0F0F0
}

.home-deals-picture-right .item-left,
.home-deals-picture-right .item-right {
  float: left
}

.ms-lego-home-deals .home-deals-picture-right .item-left {
  width: 60px;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden
}

.ms-lego-home-deals .home-deals-left {
  color: #E81838;
  font-size: 14px;
  padding-top: 2px
}

.ms-lego-home-deals .home-deals-left>span {
  display: inline-block;
  margin-left: 4px;
  font-size: 12px;
  color: #868686;
  text-decoration: line-through
}

.ms-lego-home-deals .home-deals-picture-right .item-right {
  float: right;
  margin-left: -68px;
  padding-left: 76px;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden
}

.ms-lego-home-deals .home-deals-picture-right .item-right>div {
  width: 100%
}

.ms-lego-home-deals .home-deals-picture-right .item-right .ms-lego-min-price {
  font-size: 14px;
  color: #E81838
}

.ms-lego-home-deals .home-deals-picture-right .item-right .ms-lego-price {
  font-size: 12px;
  color: #868686;
  text-decoration: line-through
}

.ms-lego-home-deals .home-deals-one .ms-lego-picture-100-auto {
  width: 150px;
  height: 150px;
  background: #fff
}

.ms-lego-home-deals .ms-lego-picture-100-auto {
  padding: 8px;
  background: #fff
}

.ms-lego-home-deals .home-deals-picture-right .ms-lego-picture-100-auto {
  padding: 0
}

@media (max-width:320px) {
  .ms-lego-home-deals .home-deals-picture-right .item-right .ms-lego-min-price {
    font-size: 12px
  }
  .ms-lego-home-deals .home-deals-picture-right .item-right .ms-lego-price {
    font-size: 10px
  }
}

@media (min-width:375px) {
  .ms-lego-home-deals .home-deals-picture-right .item-left {
    width: 80px
  }
  .ms-lego-home-deals .home-deals-picture-right .item-right {
    margin-left: -88px;
    padding-left: 96px
  }
}

body>.ms-wrap {
  opacity: 0
}


.ms-rc-category .pic {
  width: 5.111rem;
  height: 5.111rem;
  margin: 0 auto
}
</style>