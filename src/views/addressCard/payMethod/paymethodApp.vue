<template>
  <div id="app">
    <div class="vux-header headfix">
      <h1 class="vux-header-title"><img src="../../../assets/image/logo.png"></h1>
    </div>
    <section class="contents">
      <h2>Select a payment method</h2>
      <div class="ship-to">
        <a href="">
          CONTRUNE
        </a>
      </div>
      <div class="card-div">
        <ul class="card">
          <li v-for="(item,index) in cardData">
            <ul class="card-msg">
              <li>
                <span>{{item.cardtype}} {{item.cardnum}}</span>
                <div class="card-label">
                  <label class=" mint-radiolist-label">
                    <span class="mint-radio is-right"><input @change="check(item)" v-model="card" name="address" type="radio" class="mint-radio-input" :value="item.order">
                      <span class="mint-radio-core"></span>
                    </span>
                  </label>
                </div>

              </li>
              <li>
                {{item.name}}
              </li>
              <li>
                Express{{item.time}}
              </li>

            </ul>
            <div class="border-lines"></div>
          </li>
        </ul>

        <div>
          <mt-cell class="aaa" title="Get a $50 Amazon.com Gift Card upon approval" label="for the Amazon Rewards Visa Card" to="https://www.baidu.com" is-link></mt-cell>
        </div>
        <div>
          <mt-cell id="bbb" class="cell-noborder" title="Add a new payment method" to="https://www.baidu.com" is-link></mt-cell>
        </div>

      </div>
      <div class="card-div2">
        <p>Gift Card & Promotional Codes</p>
        <div class="car-code">
          <a>
            <input style="padding-left:10px;" type="text" placeholder="Enter Code">
          </a>
          <a>APPLY</a>
        </div>
      </div>
       <div class="ship-to">
        <a href="">
          CONTRUNE
        </a>
      </div>
    </section>
    <div class="border-lines"></div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import 'mint-ui/lib/style.css' //最嗨的是他这个直接引入的是一个css文件

import Vue from 'vue';

import MintUI from 'mint-ui';
Vue.use(MintUI);
export default {

  components: {

  },
  data() {
    return {
      show: true,
      card: '123',//选中的地址
      cardData: [
        {
          id: 1,
          cardtype: 'Visa',
          cardnum: '****6189',
          name: 'Blade Fang',
          order: '1',//radio value
          time: '03/2020',//卡到期时间

        },
      ],
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
    delAddress: function(item) {
      MintUI.MessageBox.confirm('确定删除该地址?').then(action => {
        var indexs = this.addressData.indexOf(item);
        this.addressData.splice(indexs, 1);
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
  padding-bottom: 20px;
}

.card-div {
  margin-top: 10px;
  border: .09rem solid #DDDDDD;
  background: #fff;
}

.card-div2 {
  margin-top: 10px;
  border: .09rem solid #DDDDDD;
  background: #fff;
  padding: 10px;
}
.car-code{
  padding: 5px 0;
  padding-right: 10px;
}
.car-code a:first-child{
   border: .09rem solid #DDDDDD;
   width: 60%;
   display: inline-block;
   /* float: left; */
}
.car-code a:last-child{
  float: right;
  display: inline-block;
  width: 35%;
  background: #EFF0F3;
  padding: 12px 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
}

.card .card-msg {
  padding: 10px;
}

.card li:last-child div.border-lines {
  display: none;
}

.card-label {
  float: right;
}

.card-msg li {
  font-size: 14px;
  font-weight: 600;
}

.mint-cell .mint-cell-text {
  font-weight: 600;
  font-size: 14px;
}

.aaa .mint-cell-text {
  font-size: 12px;
  font-weight: 600;
}

.mint-cell:last-child {
  background-image: none !important;
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
</style>
