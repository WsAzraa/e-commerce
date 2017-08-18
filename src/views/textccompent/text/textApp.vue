<template>
 <!-- <div></div> -->
 <slide-bar></slide-bar>
</template>

<script>

import Lib from 'assets/js/Lib';
// import 'mint-ui/lib/style.css'//最嗨的是他这个直接引入的是一个css文件

import Vue from 'vue';
import SlideBar from 'components/SlideBar';
// import HbHead from 'components/HbHead';
// import MintUI from 'mint-ui';

// Vue.use(MintUI);

export default {
  data() {
    return {
     

    };
  },

  components: {
 SlideBar
  },
 
  //已成功挂载，相当ready()
  mounted: function () {
    var _this = this;
    this.$nextTick(function () {


    })
  },
  //相关操作事件
  methods: {
    


  }
}
</script>

<style>






</style>