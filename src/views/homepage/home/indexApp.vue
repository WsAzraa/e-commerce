<template>
  <div id="app">
  
    <mt-header fixed style="background:#fff">
      <a slot="left">
        <span class="icon-three-bars" v-on:click="popslide = !popslide"></span>
      </a>
      <mt-button>关闭</mt-button>
      <mt-button>关闭</mt-button>
      <mt-button>关闭</mt-button>
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

    </mt-popup>
  
    <!-- <h1>mint-ui-example</h1> -->
    <!-- <button @click="aaa()">按钮</button> -->
    <!-- <mt-button @click.native="popupVisible3 = true" size="large">右侧弹出 popup</mt-button> -->
  
    <!-- <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <p v-show="loadings" class="page-infinite-loading">
      <mt-spinner type="fading-circle"></mt-spinner>
      加载中...
    </p>
    -->
    <!-- 轮播图 -->
    <!-- <section class="slides-bayax">
        <mt-swipe :auto="4000" class="swipe">
          <mt-swipe-item v-for="(item,index) in slides">
            <img v-bind:src="item.url">
          </mt-swipe-item>
        </mt-swipe>
      </section> -->
  
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
      popslide: false,
      slides: [],
    };
  },

  components: {
  },

  //已成功挂载，相当ready()
  mounted: function () {
    var _this = this;
    this.$nextTick(function () {
    })
  },
  //相关操作事件
  methods: {
    handleClose: function () {

    },
    onScroll: function () {
      var scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      var banners = document.getElementById('detail-btn-fixed');
      var obj = document.getElementById('detail-btn-fixed-bottom');
      if (scrolled > banners.offsetTop) {
        obj.style.display = 'block';
      } else {
        obj.style.display = 'none';
      }
    },


    aaa: function () {
      MintUI.Indicator.open('加载中...');
    },
    loadMore: function () {
      this.loading = true;
      this.loadings = true;
      // MintUI.Indicator.open('加载中...');
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
        this.loadings = false;
        // MintUI.Indicator.close();
      }, 2500);
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

#app .mint-header {
  background-color: transparent;
  height: 49px;
}

.icon-label {
  min-width: 36px;
  display: inline-block;
}


/*侧边栏*/

.mint-popup-left {
  width: 70%;
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

/*轮播图*/

.slides-bayax {
  margin-top: 40px;
  height: 375px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.slides-bayax img {
  height: 100%;
  width: 100%;
}

.slides-bayax .mint-swipe-indicators {
  left: 55px;
}

.slides-bayax .mint-swipe-indicator {
  opacity: 1;
  background-color: #eee;
}

.slides-bayax .mint-swipe-indicator.is-active {
  background-color: red;
}
</style>