<template>
  <div>
    <!-- <x-header class="headfix">{{headfont}}</x-header> -->
    <div class="">组我擦件
      <p>{{slide}}</p>
      <button @click="changepopsslide">emit</button>
    </div>
    <mt-popup v-model="ssbar" position="left" class="">
      <div class="slide_user">
        <div class="portrait">
          <!-- <img src="../../../assets/image/userimg.png"> -->
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

  </div>
</template>

<script>

import Lib from 'assets/js/Lib';
import Vue from 'vue';
import MintUI from 'mint-ui';


import 'mint-ui/lib/style.css'//最嗨的是他这个直接引入的是一个css文件

// import { XHeader } from 'vux'
Vue.use(MintUI);
export default {
  props: ["slide", "spopslide"],
  data() {
    return {
      ssbar: this.spopslide
    }
  },
  components: {
    // XHeader
    // MintUI
  },
  watch: {
    spopslide(val) {
      this.ssbar = val;//②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
    },
    ssbar(val) {
      //xxcanghai 小小沧海 博客园
      this.$emit('change-pop')
      // this.$emit("on-result-change",val);//③组件内对myResult变更后向外部发送事件通知
    }
  },
  methods: {
    changepopsslide() {
      this.ssbar = !this.ssbar;
    }

  }
}
</script>

<style lang="less">
.headfix {
  position: fixed!important;
  z-index: 77;
  width: 100%;
  left: 0;
  top: 0;
}

.headMargin {
  clear: both;
  height: 50px;
}
</style>
