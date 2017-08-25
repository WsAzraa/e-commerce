<template>
  <div id="app">
    <div class="vux-header headfix">
      <h1 class="vux-header-title"><img src="../../../assets/image/logo.png"></h1>
    </div>
    <section class="contents">
      <h2>Select a shipping address</h2>
      <div class="address-div">
        <ul class="address">
          <li v-for="(item,index) in addressData">
            <ul class="address-msg">
              <li>
                <span>{{item.name}}</span>
                <div class="address-label">
                  <label class=" mint-radiolist-label">
                    <span class="mint-radio is-right"><input @change="check(item)" v-model="address" name="address" type="radio" class="mint-radio-input" :value="item.order">
                      <span class="mint-radio-core"></span>
                    </span>
                  </label>
                </div>

              </li>
              <li>
                {{item.item1}}
              </li>
              <li>
                {{item.country}}
              </li>
              <li>
                Phone:{{item.phone}}
              </li>
              <li class="default-hide ship-to" :class="{notdefault: item.defaultCheck}">
                <a href="">
                  DELIVER TO THIS ADDRESS
                </a>
              </li>
              <li class="default-hide edit-delete" :class="{notdefault: item.defaultCheck}">
                <a >EDIT</a>
                <a @click="delAddress(item)">DELETE</a>
              </li>
            </ul>
            <div class="border-lines"></div>
          </li>
        </ul>

        <mt-cell title="Add a New Address" to="https://www.baidu.com" is-link class="bdt"></mt-cell>
         <mt-cell title="Ship to an Amazon Pickup location" to="https://www.baidu.com" is-link class="bdt bdb"></mt-cell>

      </div>

    </section>
    <foot></foot>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';
import Foot from 'components/Footer.vue';


import 'mint-ui/lib/style.css' //最嗨的是他这个直接引入的是一个css文件

import Vue from 'vue';

import MintUI from 'mint-ui';
Vue.use(MintUI);
export default {

  components: {
      Foot
  },
  data() {
    return {
      show: true,
      address: '123',//选中的地址
      addressData:[
        {
          id:1,
          name:'Blade Fang',
          item1:'975 corporate Way',
          country:'United States',
          phone:'18641031580',
          order:'1',//radio value
          defaultCheck:true
        },
        {
          id:2,
          name:'Blade Fang',
          item1:'975 corporate Way',
          country:'United States',
          phone:'18641031580',
          order:'2',//radio value
          defaultCheck:false
        },
      ],
      orders: [
        {
          label: 'United States',
          
        },
      ]
    }
  },

  methods: {
    check: function(item) {
      console.log(item.order);
      this.addressData.forEach(function(ele) {
        ele.defaultCheck = false;
      }, this);
      item.defaultCheck = true;
    },
      delAddress:function(item){
      MintUI.MessageBox.confirm('确定删除该地址?').then(action => {
        	var indexs = this.addressData.indexOf(item);
          this.addressData.splice(indexs,1);
    });
    },
  }
}
</script>

<style>
body {
  background: #F3F3F3 !important;
}

input {
  width: 100%;
  border: none;
  outline: none;
  padding-left: 10px;
  height: 40px;
}

.vux-header {
  position: relative;
  /* padding: 3px 0; */
  box-sizing: border-box;
  background-color: #35495e;
}

.vux-header .vux-header-title,
.vux-header h1 {
  margin: 0 88px;
  line-height: 40px;
  text-align: center;
  height: 40px;
  font-size: 18px;
  font-weight: 400;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
}

.vux-header .vux-header-title>img {
  width: 142px;
  height: 100%;
}

section.contents {
  margin-top: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  padding-bottom: 40px;
}

.address-div {
  margin-top: 20px;
  border: .09rem solid #DDDDDD;
  background: #fff;
  border-bottom: none;
}

.address .address-msg {
  padding: 10px;
}
.address li:last-child div.border-lines{
  display:none;
}
.address-label {
  float: right;
}

.address-msg li {
  font-size: 14px;
  font-weight: 600;
}
.default-hide{
  display: none;
}
li.notdefault{
  display:block;
}

.ship-to {
  margin-top: 15px;
}

.ship-to a {
  display: inline-block;
  width: 100%;
  background: #F5CF68;
  padding: 12px 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
}

.border-lines {
  height: 1px;
  background: #DDDDDD;
  /* margin-top: 20px; */
  /* margin-bottom: 100px; */
}

.edit-delete {
  padding-top: 20px;
  padding-bottom: 5px;
}

.edit-delete a {
  background: #EFF0F3;
  display: inline-block;
  padding: 10px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  width: 48.4%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
}

.edit-delete a:last-child {
  float: right;
}
.mint-cell-text{
  font-weight: 700;
  font-size: 14px;
}
.bdt{
  border-top: 1px solid #ddd;
}
.bdb{
  border-bottom: 1px solid #ddd;
}
</style>
