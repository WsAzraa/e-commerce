<template>
    <div id="app">
        <div class="vux-header headfix">
            <h1 class="vux-header-title"><img src="../../../assets/image/logo.png"></h1>
        </div>

        <section class="contents">
            <div class="tops">
                <p>By place your order,you agree to Amazon.com's
                    <a>privacy notice</a>and
                    <a>conditions of use</a>
                </p>

            </div>
            <div class="btn-in-cny ship-to">
                <a href="">
                    PLACE YOUR ORDER IN CNY
                </a>
                <div class="border-lines"></div>
            </div>

            <div class="div-3">
                <p>blade,why pay for shipping?Save $6.07 with FREE Two-Day Shipping on this order</p>
                <p>Click here to save $6.07 and get FREE Two-Day Shipping with a free Trial of Amazon Prime</p>
            </div>
            <div class="div-4">
                <mt-cell class="cells" title="Amazon Currency Converter is Enabled" to="https://www.baidu.com" is-link></mt-cell>
            </div>

            <h3>Order Summary</h3>
            <div class="order-div">
                <ul class="order">
                    <li>
                        <p>
                            Shopping to:
                            <span>Blade Fang,975 Corporate Way,Fremont,CA239482 skjdf skdjfg sdkljfg</span>
                        </p>

                        <p class="sss">Estimated delivery:
                            <span>Aug.24,2017</span>
                        </p>
                        <div class="border-lines"></div>
                    </li>
                    <li class="order-money">
                        <p>Items:
                            <span>CNY 55.89</span>
                        </p>
                        <p>Shopping & handling:
                            <span>CNY 42.46</span>
                        </p>
                        <p>Total before tax:
                            <span>CNY 98.35</span>
                        </p>
                        <p>Estimated tax to be collected:
                            <span>CNY 8.39</span>
                        </p>
                        <p>Order total:
                            <span>CNY 8.39</span>
                        </p>
                    </li>
                    <li>
                        <div>
                            <div class="se-pay-cur" v-on:click="show1=!show1">
                                <div>Selected payment currency
                                    <span class="icon-chevron-up" :class="{ 'icon-chevron-down':!show1}"></span>
                                </div>

                            </div>
                            <transition name="fade">
                                <div class="chance-pay" v-if="show1">
                                    <p>
                                        <label class="mint-radiolist-label">
                                            <span class="mint-radio is-right"><input v-model="address" name="address" type="radio" class="mint-radio-input" value="CNY">

                                                <span class="mint-radio-core"></span>
                                                <span>CNY</span>
                                            </span>
                                        </label>
                                    </p>

                                    <p>
                                        <label class=" mint-radiolist-label">
                                            <span class="mint-radio is-right"><input v-model="address" name="address" type="radio" class="mint-radio-input" value="USD">

                                                <span class="mint-radio-core"></span>
                                                <span>USD</span>
                                            </span>
                                        </label>
                                    </p>

                                </div>
                            </transition>

                        </div>
                    </li>
                    <li>
                        <div>
                            <div class="se-pay-cur" v-on:click="show2=!show2">
                                <div>Selected payment currency
                                    <span class="icon-chevron-up" :class="{ 'icon-chevron-down':!show2}"></span>
                                </div>

                            </div>
                            <transition name="fade">
                                <div class="chance-pay-2" v-if="show2">
                                    <p>1 USD = 6.994897647 CNY</p>
                                    <span>(includes all Amazon fees and changes)</span>

                                </div>
                            </transition>

                        </div>
                    </li>
                </ul>

            </div>

            <h3>Shipping address</h3>
            <div class="order-div-2 weekend-delivery">
                <a>
                    <div>
                        <p>Blade Fang</p>
                        <p>975 Corporate Way,Fremont,CA239482 United States？</p>
                    </div>
                    <div>
                        <span class="icon-chevron-right"></span>
                    </div>
                </a>
            </div>

            <h3>Payment information</h3>
            <div class="order-div-2 weekend-delivery">

                <a>
                    <div>
                        <p>Payment method</p>
                        <p>visa ending in 6819</p>
                    </div>
                    <div>
                        <span class="icon-chevron-right"></span>
                    </div>
                </a>
                <a class="a-top a-2 ">
                    <div>
                        <p>Billing address</p>
                        <p>Blade Fang</p>
                        <p>975 Corporate Way,Fremont,CA239482 United States</p>
                    </div>
                    <div>
                        <span class="icon-chevron-right"></span>
                    </div>
                </a>
                <a class="a-2" style="top:-6px;">
                    <div>
                        <p>Get a $50 Amazon.com Gift Card upon approval</p>
                        <p>for the Amazon Rewards Visa Card</p>
                    </div>
                    <div>
                        <span class="icon-chevron-right"></span>
                    </div>
                </a>
                <div class="card-div2">
                    <p>Gift Card & Promotional Codes</p>
                    <div class="car-code">
                        <a>
                            <input style="padding-left:10px;" type="text" placeholder="Enter Code">
                        </a>
                        <a>APPLY</a>
                    </div>
                </div>

            </div>

              <div class="div-4">
                <mt-cell class="cells" title="Standard Shippings" to="https://www.baidu.com" is-link></mt-cell>
                <div class="div-4-1">
                    <p>Estimated delivery:</p>
                    <p>Aug.24,2017</p>
                </div>
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
            show1: true,
            show2: true,
            show3: true,
            address: 'CNY',//选中的地址
            addressData: [
                {
                    id: 1,
                    name: 'Blade Fang',
                    item1: '975 corporate Way',
                    country: 'United States',
                    phone: '18641031580',
                    order: '1',//radio value
                    defaultCheck: true
                },
                {
                    id: 2,
                    name: 'Blade Fang',
                    item1: '975 corporate Way',
                    country: 'United States',
                    phone: '18641031580',
                    order: '2',//radio value
                    defaultCheck: false
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
    margin-top: 10px;
    padding: 0 10px;
    box-sizing: border-box;
    padding-bottom: 40px;
}

.contents .tops a {
    color: #3084CF;
}

.order-div {
    margin-top: 10px;
    margin-bottom: 20px;
    border: .09rem solid #DDDDDD;
    background: #fff;
    border-bottom: none;
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

.div-3 {
    text-align: center;
    margin-top: 20px;
}

.div-3 p {
    /* height: 40px; */
    background: #008577;
    color: #fff;
    padding: 10px 20px;

    font-size: 12px;
    font-weight: 600;
}

.div-3 p:last-child {
    background: #A90067;
}

.btn-in-cny a {
    margin-bottom: 25px;
}

.div-4 {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0.09rem solid #ddd;
    border-top: none;
    border-bottom: none;
}

.div-4 .cells .mint-cell-text {
    font-size: 12px;
    font-weight: 600;
}

.order-div .order li {
    padding: 10px;
    font-size: 12px;
    border-bottom: 0.09rem solid #ddd;
}

.order-div .order li:first-child p:first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}


.order-div .order li:first-child p:firsst-child span {
    font-weight: 600;
}

.order-div .order li:first-child p.sss span {
    color: #2D932D;
    font-weight: 600;
}

.order-money p span {
    float: right;
    font-weight: 600;
}

.order-money p:last-child {
    color: #333;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 0;
}

.order-money p:last-child span {
    color: #B12704;
}

.se-pay-cur>div {
    font-weight: 600;
    font-size: 14px;
    padding-right: 5px;
}

.se-pay-cur>div span {
    float: right;
    color: #c8c8cd;
    font-size: 16px;
}

.chance-pay p {
    padding-top: 20px;
    height: 40px;
    /* background:red; */
}

.chance-pay p label {
    float: left;
}

.chance-pay-2 p {
    font-weight: 600;
    padding-top: 15px;
}

.order-div-2 {
    margin-top: 10px;
    margin-bottom: 20px;
    border: 0.09rem solid #dedede;
    padding-bottom: 0;
}


.weekend-delivery a {
    display: inline-block;
    background: #fff;
    padding: 10px 20px;
    position: relative;
    width: 100%;
    margin: 0;
    /* border: 0.09rem solid #ddd; */
}

.weekend-delivery a div {
    margin: 0;
    padding: 0;
}

.weekend-delivery a div:first-child {
    float: left;
}

.weekend-delivery a div:first-child p {
    font-weight: 600;
}

.weekend-delivery a div:first-child p:last-child {
    font-size: 12px;
}

.weekend-delivery a div:last-child {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 1px;
}

.weekend-delivery a div:last-child span {
    display: inline-block;
    font-size: 18px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    color: #c8c8cd;
}

.a-top {
    top: -3px;
}

.a-2>div>p:not(:first-child) {
    /* color: red; */
    font-weight: 500 !important;
}

.card-div2 {
    margin-top: -9px;

    background: #fff;
    padding: 10px 20px;
}

.card-div2 {
    font-weight: 600;
}

.car-code {
    padding: 5px 0;
    padding-right: 10px;
}

.car-code a:first-child {
    border: .09rem solid #DDDDDD;
    width: 60%;
    display: inline-block;
    padding: 0;
    /* float: left; */
}

.car-code a:last-child {
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
.div-4-1{
    background:#fff;padding:10px;
    border: .09rem solid #DDDDDD;
    border-left: none;
    border-right: none;
}
.div-4-1 p{
    font-weight: 600;color:#C45510; 
}

</style>
