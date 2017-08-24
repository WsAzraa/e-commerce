<template>
    <div id="app">
        <div class="vux-header headfix">
            <div class="vux-header-left">
                <a class="vux-header-back">
                    <span class="icon-arrow-left2"></span>
                    back
                </a>
            </div>
        </div>
        <section class="contents">
            <div>
                 <a class="mint-cell">
                <div class="mint-cell-wrapper">
                    <div class="mint-cell-title">
                        <span class="mint-cell-text">ADD A CREDIT OR DEBIT CARD</span>
                    </div>
                   
                </div>
            </a>
           
            </div>
           
        <div class="card-msg">
            <p>Enter your card information</p>
            <label class="mint-checklist-label">
                <span class="mint-checkbox"><input type="checkbox" class="mint-checkbox-input" value="">
                    <span class="mint-checkbox-core"></span>
                </span>
                <span class="mint-checkbox-label">Use name on account</span>
            </label>
            <div class="div-msg">
                <ul>
                    <li>
                        <input type="text" placeholder="Name on card">
                    </li>
                    <li>
                        <input type="text" placeholder="Card number">
                    </li>
                </ul>
            </div>
            <div class="card-time">
                <p>Expiration date</p>
                <div>
                    <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                     <select name="" id="">
                        <option value="1">2016</option>
                        <option value="2">2017</option>
                    </select>
                </div>
            </div>
          
            <div class="use-crad-across">
                <label class="mint-checklist-label">
                    <span class="mint-checkbox"><input type="checkbox" class="mint-checkbox-input" value="">
                        <span class="mint-checkbox-core"></span>
                    </span>
                    <span class="mint-checkbox-label">Use this card across all of Amazon <a>What's this</a></span>
                     
                </label>
            </div>
           
         
            <div class="ship-to">
                <a href="#">
                    ADD YOUR CARD
                </a>
            </div>

        </div>
        <div class="border-lines"></div>
        <foot></foot>
        </section>
        
    </div>
</template>

<script>

import Lib from 'assets/js/Lib';
import Foot from 'components/Footer.vue';



export default {

    components: {
            Foot
    },
    data() {
        return {
            show: true
        }
    },
    methods: {

    }
}
</script>

<style>
body {
    background: #F7F7F7 !important;
}
input{
  width: 100%;
    border: none;
    outline: none;
    padding-left: 10px;
    height: 40px;
}
*{
        box-sizing: border-box;
}
/* 头部 */

.vux-header {
    position: relative;
    padding: 3px 0;
    box-sizing: border-box;
    background-color: #35495e;
    height: 46px;
}

.vux-header .vux-header-title>span {
    display: inline-block;
}

.vux-header .vux-header-left {
    position: absolute;
    top: 14px;
    display: block;
    font-size: 14px;
    line-height: 21px;
    color: #ccc;
}

.vux-header .vux-header-left a {
    float: left;
    margin-right: 8px;
    color: #ccc;
}

.vux-header .vux-header-left a:active {
    opacity: 0.5;
}

.vux-header .vux-header-left .vux-header-back {
    padding-left: 16px;
}

section.contents {
    padding: 0 10px;
    box-sizing: border-box;
}








/* cell */
.mint-cell {
    background-color: #F3F3F3;
    box-sizing: border-box;
    color: #0069C2;
    font-weight: 600;
    min-height: 48px;
    display: block;
    overflow: hidden;
    position: relative;
    text-decoration: none;
}



.mint-cell:first-child .mint-cell-wrapper {
    background-origin: border-box;
}

.mint-cell:last-child {
    background-image: -webkit-linear-gradient(bottom, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom;
}

.mint-cell-wrapper {
    background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 120% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    background-origin: content-box;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 16px;
    line-height: 1;
    min-height: inherit;
    overflow: hidden;
    padding: 0 10px;
    padding-left: 0;
    width: 100%;
}

.card-msg > p{
    color: #333;
    font-weight: 600;
    padding: 10px 0;
}



/* check */
.mint-checklist-label {
    display: block;
    padding: 0 10px;
    padding-left:0; 
    padding-bottom: 20px;
}
.mint-checklist-title {
    color: #888;
    display: block;
    font-size: 12px;
    margin: 8px;
}

.mint-checkbox.is-right {
    float: right;
}
.mint-checkbox-label {
    vertical-align: middle;
    margin-left: 6px;
}
.mint-checkbox-input {
    display: none;
}
.mint-checkbox-input:checked + .mint-checkbox-core {
    background-color: #26a2ff;
    border-color: #26a2ff;
}
.mint-checkbox-input:checked + .mint-checkbox-core::after {
    border-color: #fff;
    -webkit-transform: rotate(45deg) scale(1);
            transform: rotate(45deg) scale(1);
}
.mint-checkbox-input[disabled] + .mint-checkbox-core {
    background-color: #d9d9d9;
    border-color: #ccc;
}
.mint-checkbox-core {
    display: inline-block;
    background-color: #fff;
    border-radius: 100%;
    border: 1px solid #ccc;
    position: relative;
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
.mint-checkbox-core::after {
    border: 2px solid transparent;
    border-left: 0;
    border-top: 0;
    content: " ";
    top: 3px;
    left: 6px;
    position: absolute;
    width: 4px;
    height: 8px;
    -webkit-transform: rotate(45deg) scale(0);
            transform: rotate(45deg) scale(0);
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    transition: transform .2s;
    transition: transform .2s, -webkit-transform .2s;
}

.div-msg {
  /* margin-top: 20px; */
  border: .09rem solid #949494;
}

.div-msg ul li {
  border-bottom: 0.09rem solid #949494;
}

.div-msg ul li:last-child {
  border: none;
}
.div-msg  input{
    padding-left: 10px;
}
/* 时间 */
.card-time{
    padding-top: 10px;
}
.card-time select{
    width: 49%;
    height: 40px;
    background-color: #eff0f3;
    padding-left:10px;
    border: none;
    outline: none;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
}
.card-time select:last-child{
    float:right;
}

.use-crad-across{
    padding-top: 20px;
}

.ship-to a{
  display: inline-block;
  width: 100%;
  background: #F5CF68;
  padding: 12px 10px;
  text-align: center;
  font-weight: 600;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
}
.border-lines{
  height: 1px;
  background: #dedede;
  margin-top: 10px;
  margin-bottom: 20px;
}

</style>