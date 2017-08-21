<template>
  <div id="app">
    <mt-header fixed title="123" class=" ms-rc-shadow" style="background:#fff;">
      <a slot="left">
        <span class="icon-three-bars three-bar" v-on:click="changeSli"></span>
      </a>
      <a slot="left">
      </a>
      <mt-button slot="right">
        <label class="icon-label">
          <span @click="carSearch=!carSearch" class="icon-search icon-bayax-home"></span>
        </label>
      </mt-button>
    </mt-header>
    <!-- 侧边栏 -->
    <slide-bar :spopslide="popslide" @change-pop="changePop"></slide-bar>
    <!-- 搜索 -->
    <mt-popup v-model="carSearch" position="bottom" :modal="false">
      <!-- 搜索头部 -->
      <div id="search-bar" class="mint-searchbar  ms-rc-shadow">
        <span @click="carSearch=!carSearch" class="icon-arrow-left2 mint-searchbar-cancel bayax-mint-cancel"></span>
        <div class="mint-searchbar-inner">
          <input type="text" placeholder="搜索" class="mint-searchbar-core">
        </div>

      </div>
      <!-- 搜索内容 -->
      <div class="mint-search-list">
        123123123
      </div>
    </mt-popup>

    <!-- 购物车-无数据 -->
    <section :class="{isCarEmpty: isEmpty}">
      <div class="ms-ept-page" style="top: 56px; display: block;">
        <a class="ms-ept-icon ic-md ic-shoppingcart-md icon-cart" style="font-size:80px;"></a>
        <p class="ms-ept-info">
          There currently are no items in your shopping cart. If you already have an account, please sign in to view your cart items
        </p>
        <a href="../homepage/index.html" class="ms-ept-button">
          start shopping
        </a>
      </div>
    </section>
    <!-- 购物车-有数据 -->
    <section :class="{isCarEmpty: !isEmpty}">
      <div class="car-noempty-page" style="top: 55px; display: block;">
        <a class="mint-cell">
          <div class="mint-cell-wrapper">
            <div class="my-order-ship mint-cell-title">
              <span>Ship my order(s) to </span>
              <span v-text="country" @click="carOrders=!carOrders" class="blue-color"></span>
            </div>
          </div>
        </a>
        <div>
          <a class="mint-cell">
            <div class="mint-cell-wrapper">
              <div class="cart-total mint-cell-title">
                <span>Cart subtotal<span>(2 items)</span>: </span>
                
                <span class="totals">{{totals}}</span>

              </div>
            </div>
            <div class="my-order-check">
              <span>Add $17.02 of eligible items to your order to qualify for FREE Shipping.</span>
              <span class="blue-color">See details</span>
            </div>
            <div class="settle_accounts">PROCEED TO CHECKOUT</div>
          </a>

        </div>

        <!-- 全部商品 -->
        <div class="all-product">
          <a class="mint-cell">
            123123
           
          </a>
        </div>

      </div>
    </section>
    <!-- car-order -->
    <mt-popup v-model="carOrders" position="bottom" :modal="false">
      <!-- order头部 -->
      <div id="order-bar" class="mint-searchbar  ms-rc-shadow">
        <span @click="carOrders=!carOrders" class="icon-arrow-left2 mint-searchbar-cancel bayax-mint-cancel"></span>
        <span>Country</span>

      </div>
      <!-- order内容 -->
      <div class="mint-search-list" style="top: -8px;">
        <mt-radio align="right" class="page-part" v-model="country" :options="orders" />

      </div>
    </mt-popup>

  </div>
</template>

<script>

import Lib from 'assets/js/Lib';
import 'mint-ui/lib/style.css'

import Vue from 'vue';

import MintUI from 'mint-ui';
import SlideBar from 'components/SlideBar.vue'
Vue.use(MintUI);

export default {
  data() {
    return {
      popslide: false,
      carSearch: false,
      isEmpty: true,    //购物车是否为空
      country: '123',
      carOrder: 'United States',
      carOrders: false,   //orders
      totals: '0',//选中商品总价
    };
  },
  created() {
    this.orders = [
      {
        label: 'United States',
        value: 'United States'
      },
      {
        label: 'Brazil',
        value: 'Brazil'
      },
      {
        label: 'Australia',
        value: 'Australia'
      },
      {
        label: 'United Kingdoms',
        value: 'United Kingdoms'
      },
      {
        label: 'Spain',
        value: 'Spain'
      },
      {
        label: 'France',
        value: 'France'
      },
      {
        label: 'Canada',
        value: 'Canada'
      },
      {
        label: 'Poland',
        value: 'Poland'
      },
      {
        label: 'Turkey',
        value: 'Turkey'
      },
      {
        label: 'Sweden',
        value: 'Sweden'
      },
      {
        label: 'Israel',
        value: 'Israel'
      },
      {
        label: 'Italy',
        value: 'Italy'
      },
      {
        label: 'New Zealand',
        value: 'New Zealand'
      },

    ]
  },
  components: {
    SlideBar
  },
  computed: {

  },
  //已成功挂载，相当ready()
  mounted: function () {
    var _this = this;
    this.$nextTick(function () {
      // this.loadForYouData();

    })
  },
  //相关操作事件
  methods: {
    // 打开 侧边栏
    changeSli: function () {
      this.popslide = !this.popslide;
    },
    // 监听 组件内关闭侧边栏
    changePop: function (msg) {
      if (!msg) {
        this.popslide = !this.popslide;
      }
    }
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


* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box
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

.a-logo {
  width: 142px;
  height: 56px;
  display: inline-block;
  margin-left: 20px;
}









/* 搜索 */

.mint-popup-bottom {
  height: 100%;
  width: 101%;
}

#search-bar {
  background: #fff;
}

#search-bar .bayax-mint-cancel {
  color: #000;
  width: 20px;
  margin-left: 0;
  text-decoration: none;
}




/* 购物车 */

.isCarEmpty {
  display: none;
}




/* 空 */

.ms-ept-page {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background-color: #F8F8F8;
  padding: 0 12%;
  text-align: center;
}

.ms-ept-icon {
  text-align: center;
  margin-top: 40px;
  color: #EBEBEC;
  font-size: 91px;
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
  -moz-osx-font-smoothing: grayscale;
}

.ms-ept-info {
  margin-top: 16px;
  font-size: 14px;
  color: #3A3E4A;
  line-height: 20px;
  text-align: left;
}

.ms-ept-button {
  display: block;
  font-size: 14px;
  color: #FFFFFF;
  text-transform: uppercase;
  background-color: #F44336;
  height: 36px;
  line-height: 36px;
  margin-top: 16px;
  border-radius: 2px;
  box-shadow: 0 2px 2px #cccccc;
  padding: 0 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
}






/* 购物车非空 */

.car-noempty-page {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background-color: #FFF;
}

.my-order-ship {
  font-size: 15px;
}

.blue-color {
  color: rgb(57, 145, 227);
}

#order-bar {
  background: #fff;
  padding: 13px 10px;
}

#order-bar .bayax-mint-cancel {
  color: #000;
  width: 20px;
  margin-left: 0;
  text-decoration: none;
}

.cart-total span {
  font-size: 18px;
  font-weight: 500;
}

.cart-total span.totals {
  color: rgb(177, 40, 5);
}

.my-order-check {
  text-align: left;
  width: 80%;
  margin: auto;
}

.settle_accounts {
    margin:auto;
    width: 88%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    background-color: #F5CF68;
    box-shadow: 0px 2px 1px #888888;
    margin-top: 5%;
    margin-bottom: 5%;
}

.all-product{
  margin: auto;
  padding: 0 10px;
  /* margin-top: -1px; */
}



</style>