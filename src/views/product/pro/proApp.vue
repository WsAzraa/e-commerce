<template>
  <div id="app">
  
    <mt-header fixed>
      <a slot="left">
        <mt-button icon="back"></mt-button>
      </a>
      <mt-button>关闭</mt-button>
      <mt-button>关闭</mt-button>
      <mt-button>关闭</mt-button>
      <mt-button slot="right">
        <label class="icon-label">
          <span class="icon-search icon-bayax"></span>
        </label>
      </mt-button>
      <mt-button slot="right">
        <label class="icon-label">
          <span class="icon-cart icon-bayax"></span>
        </label>
      </mt-button>
      <mt-button slot="right">
        <label class="icon-label">
          <span class="icon-more_vert icon-bayax"></span>
        </label>
      </mt-button>
  
    </mt-header>
  
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
    <section class="slides-bayax">
      <mt-swipe :auto="4000" class="swipe">
        <mt-swipe-item v-for="(item,index) in slides">
          <img v-bind:src="item.url">
        </mt-swipe-item>
      </mt-swipe>
    </section>
    <section class="ms-add-session">
      <span class="ms-add ms-adds " v-bind:class="{'ms-adds-yes': isAdd}">
        <i class="icon-heart"></i>
      </span>
    </section>
  
    <section class="ms-rc-subject">
      <h1 class="ms-rc-detail-subject">
        Baseus 10000mAh USB Power Bank 15mm Ultra Slim Powerbank Portable External Battery Charger For iPhone Mobile Phone Poverbank
      </h1>
    </section>
  
    <section class="ms-detail-price">
      <div class="detail-price-container">
        <span class="price-span">US $4.90 - US $5.60</span>
      </div>
      <p class="detail-origin-price">
        <del>US $30.75</del>
      </p>
      <div class="ms-promotion">
        <span class="discount">-45%</span>
        <a href="" class="sale app">
          <i class="am-icon-mobile-phone"></i>
          <em>Price on the app: US $16.61</em>
          <i class="am-icon-caret-right"></i>
        </a>
      </div>
      <p class="ms-bulk-price"></p>
    </section>
  
    <section class="ms-block ms-rc-shadow">
      <div class="ms-rc-detail-orders-stars">
        <ul class="sumary-list  util-clearfix">
          <li>
            <p>
              <span>4.7</span>
              <span class="rating-stars ms-star">
                <span class="icon-star-full star-color"></span>
                <span class="icon-star-full star-color"></span>
                <span class="icon-star-full star-color"></span>
                <span class="icon-star-full star-color"></span>
                <span class="icon-star-full star-empty"></span>
              </span>
            </p>
            <p>FeedBacks</p>
          </li>
          <li class="second">
            <p>146</p>
            <p>Orders</p>
          </li>
          <li class="last" style="text-align: right;">
            <p>1239</p>
            <p>Wish List</p>
          </li>
        </ul>
      </div>
      <div class="ms-rc-detail-coupon ms-rc-ripple ms-rc-custom"></div>
    </section>
  
    <section class="ms-detail-sku ms-sku-row" data-am-modal="{target: '#ai-j5kozkhx'}">
      <p class="detail-sku-bar">Ships From,Color</p>
      <p class="detail-shipping-bar">
        <span>Shipping cost:</span>
        <span class="ms-color-ship">Free Shipping</span>
        <span v-on:click="popupVisible3 = !popupVisible3" class="ms-rc-action" style="">SELECT</span>
      </p>
    </section>
    <section class="ms-detail-btn-fixed ms-rc-shadow">
      <div class="ms-detail-btn-wrap">
        <div class="store ms-rc-ripple">
          <a href="#">
            <i class="icon-home"></i>
          </a>
        </div>
        <div class="action">
          <button class="ms-button-secondary ms-rc-shadow ms-rc-ripple">Add to cart</button>
          <button class="ms-button-primary ms-rc-shadow ms-rc-ripple">Buy now</button>
        </div>
  
      </div>
      <div id="detail-btn-fixed" style="background-color: red"></div>
    </section>
  
    <!-- 商品描述 -->
    <section style="background:#fff">
  
      <div class="am-popup-bd" style="padding: 0;padding-top: 12px;">
        <section class="ms-item-desc">
          <div class="tab">
            <ul class="clearfix" items="1">
              <li class="current">Specifics</li>
            </ul>
            <div class="tab-content current">
              <div class="size-chart">
                <table>
                  <tbody>
                    <tr>
  
                      <td>Retail Package</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
  
                      <td>Compatible iPhone Model</td>
                      <td>
                        iPhone 6 Plus,iPhone 6s,iPhone 4s,iPhone 5s,iPhone5c,iPhone 6s plus,iphone 7 Plus,iPhone 6,iphone 3G/3GS,iPhone 4,iphone 7,iPhone SE,iPhone 5
                      </td>
                    </tr>
                    <tr>
  
                      <td>Function</td>
                      <td>Waterproof,Dirt-resistant</td>
                    </tr>
                    <tr>
  
                      <td>Type</td>
                      <td>Pouch</td>
                    </tr>
                    <tr>
  
                      <td>Brand Name</td>
                      <td>keysion</td>
                    </tr>
                    <tr>
  
                      <td>Compatible Brand</td>
                      <td>Apple iPhones</td>
                    </tr>
                    <tr>
  
                      <td>Design</td>
                      <td>Sports</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
  
      <div class="descripiton descripiton-show">
        <div class="title">Descripition</div>
        <div class="desc" style="width: 100%">
          <section class="descriptions">
            <p style="text-align: center;">
              <strong>
                <span style="font-size: 24.0px;">
                  <span style="font-family: arial , helvetica , sans-serif;">
                    KEYSION Waterproof Bag With Luminous Underwater Pouch Phone Case For iPhone 7 7 Plus 6 6s &nbsp;For Samsung Galaxy S8 S7 S7 Edge S6&nbsp;
                  </span>
                </span>
              </strong>
            </p>
            <div>
              <span style="font-size: 14.0px;">Features:</span>
            </div>
            <div>
              <span style="font-size: 14.0px;">1.Material:PVC (Thermoplastic Polyurethane)+ABS</span>
            </div>
            <div>
              <span style="font-size: 14.0px;">
                2.Compatible: For mobile phone size &lt; 5.8 inch Phone (Universal all models, &nbsp;for iphone 6/6s, 6plus/6s plus, for iPhone 5/5s.5c, 4/4s), also used for Cell phones,little digital camera,watch,MP3/4 ect.
              </span>
            </div>
            <div>
              <span style="font-size: 14.0px;">
                Please note, this is not exactly shape as your phones, it's a universal case.
              </span>
            </div>
            <div>
              <span style="font-size: 14.0px;">3.Size : 170*100 mm</span>
            </div>
            <div>&nbsp;</div>
            <div>
              <span style="font-size: 14.0px;">Selling Point:</span>
            </div>
            <div>
              <span style="font-size: 14.0px;">
                1.The product can make you use your phone or digital camera underwater,touch the screen,take photos.
              </span>
            </div>
            <div>
              <span style="font-size: 14.0px;">
                2.waterproof(20 meters deep),snowproof,dirtproof. Outdoor swimming diving rafting.
              </span>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>
              <span style="font-size: 14.0px;">Package include:</span>
            </div>
            <p>
              <span style="font-size: 14.0px;">1pcs Waterproof case+1pcs Free Sling (Phone is not included)</span>
              <img alt="1" src="https://ae01.alicdn.com/kf/HTB1FzxmRFXXXXbyXFXXq6xXFXXXA.jpg?size=1207404&amp;height=2070&amp;width=1000&amp;hash=15a42ac5fb55a63b28a67f87fc12881d">
              <img alt="2" src="https://ae01.alicdn.com/kf/HTB1HOtDRFXXXXaKXXXXq6xXFXXXB.jpg?size=1570072&amp;height=2431&amp;width=1000&amp;hash=61c49f3fc32746f64063efe037fd2b97">
              <img alt="3" src="https://ae01.alicdn.com/kf/HTB12TttRFXXXXX7XFXXq6xXFXXXa.jpg?size=657549&amp;height=3005&amp;width=1000&amp;hash=1c9a2116b6260b7ab0c38fb0e9284806">
              <img alt="4" src="https://ae01.alicdn.com/kf/HTB1wz4FRFXXXXbHXXXXq6xXFXXXD.jpg?size=1136328&amp;height=2545&amp;width=1000&amp;hash=aac8993ca4e2b7b25e5b5e5538b6ad6a">
              <img alt="5" src="https://ae01.alicdn.com/kf/HTB1SVVCRFXXXXcjXXXXq6xXFXXXS.jpg?size=1723415&amp;height=2686&amp;width=1000&amp;hash=0350d241152f117a00ec39d98d3f8150">
            </p>
          </section>
        </div>
      </div>
    </section>
    <section>
      <div id="lazy">
        <div>
          <div class="ms-feedback ms-rc-shadow">
            <header class="ms-detail-row ms-rc-ripple ms-rc-custom">
              <span>
                <a href="#">
                  <span>
                    Feedback(
                    <span>3</span>
                    )
                  </span>
                </a>
              </span>
            </header>
  
            <div id="md-feedback" class="no-top-border">
              <div class="z fdb-body active">
                <div class="wrapper">
                  <div class="z fdb-scores fdb-block fdb-section" data-role="scores"></div>
                  <div class="z fdb-pics fdb-block fdb-section" id="summary-fdb-pics" data-role="summary" style="display: block;">
                    <ul class="z fdb-pics-wrapper clearfix get-sq">
  
                      <li class="z fdb-pic ">
                        <div class=" pic has-bk">
                          <div class="z img-wrapper">
                            <img src="https://ae01.alicdn.com/kf/UTB8dpRLXv2JXKJkSanrq6y3lVXaz.jpg_.webp">
                          </div>
                        </div>
                      </li>
  
                      <li class="z fdb-pic ">
                        <div class=" pic has-bk">
                          <div class="z img-wrapper">
                            <img src="https://ae01.alicdn.com/kf/UTB89M5hXrPJXKJkSafSq6yqUXXaC.jpg_.webp">
                          </div>
                        </div>
                      </li>
  
                      <li class="z fdb-pic last">
                        <div class="pic">
                          <div class="z img-wrapper centered">
                            <span>+11</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="z fdb-options fdb-block"></div>
                  <div class="z fdb-comments fdb-block fdb-section" data-role="comments" style="display: block;">
                    <div class="z area" data-role="area">
                      <div class="z fdb-block fdb-comment">
                        <div class="infos">
                          <div class="avatar">
                            <div class="wrapper has-bk">
                              <img class="fade-in lazy show" data-src="https://ae01.alicdn.com/kf/HTB1NuH6JpXXXXXIXFXXq6xXFXXXA.jpg_220x220.jpg_250x250.jpg" src="https://ae01.alicdn.com/kf/HTB1NuH6JpXXXXXIXFXXq6xXFXXXA.jpg_220x220.jpg_250x250.jpg">
                            </div>
                          </div>
                          <div class="user">
                            <span class="name">Y***l A.</span>
                            <span class="flag">
                              <i class="country-flag css_tr"></i>
                            </span>
                          </div>
                          <div class="z date ae-color gray">19 Jul 2017</div>
                          <div class="z md-rating">
                            <div class="bottom">
                              <div class="content">
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                              </div>
                            </div>
                            <div class="top" style="width:100%;">
                              <div class="content">
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                              </div>
                            </div>
                          </div>
                          <div class="content">
                            <p>thankyou</p>
  
                          </div>
  
                        </div>
                      </div>
  
                      <div class="z fdb-block fdb-comment">
                        <div class="infos">
                          <div class="avatar">
                            <div class="wrapper has-bk">
                              <img class="fade-in lazy show" data-src="https://ae01.alicdn.com/kf/UT8B5W8XYBaXXagOFbXC.jpg_220x220.jpg_250x250.jpg" src="https://ae01.alicdn.com/kf/UT8B5W8XYBaXXagOFbXC.jpg_220x220.jpg_250x250.jpg">
                            </div>
                          </div>
                          <div class="user">
                            <span class="name">I**r B.</span>
                            <span class="flag">
                              <i class="country-flag css_md"></i>
                            </span>
                          </div>
                          <div class="z date ae-color gray">16 Jul 2017</div>
                          <div class="z md-rating">
                            <div class="bottom">
                              <div class="content">
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                              </div>
                            </div>
                            <div class="top" style="width:100%;">
                              <div class="content">
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                              </div>
                            </div>
                          </div>
                          <div class="content">
                            <p></p>
  
                          </div>
  
                        </div>
                      </div>
  
                      <div class="z fdb-block fdb-comment">
                        <div class="infos">
                          <div class="avatar">
                            <div class="wrapper has-bk">
                              <img class="fade-in lazy show" data-src="//ae01.alicdn.com/kf/HTB1p5.sJpXXXXc.XpXX760XFXXXO.png_250x250.jpg" src="//ae01.alicdn.com/kf/HTB1p5.sJpXXXXc.XpXX760XFXXXO.png_250x250.jpg">
                            </div>
                          </div>
                          <div class="user">
                            <span class="name">H******e F.</span>
                            <span class="flag">
                              <i class="country-flag css_br"></i>
                            </span>
                          </div>
                          <div class="z date ae-color gray">12 Jul 2017</div>
                          <div class="z md-rating">
                            <div class="bottom">
                              <div class="content">
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                              </div>
                            </div>
                            <div class="top" style="width:100%;">
                              <div class="content">
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                              </div>
                            </div>
                          </div>
                          <div class="content">
                            <p>
                              O produto chegou com uma rapidez surpreendente o processo de importação levou aproximadamente 20 dias de Singapura á São Paulo, Brazil. O vendedor é muito competente e a empresa está de Parabéns! embora simples, estou bem satisfeito com o produto!
                            </p>
  
                          </div>
  
                        </div>
                      </div>
  
                      <div class="z fdb-block fdb-comment">
                        <div class="infos">
                          <div class="avatar">
                            <div class="wrapper has-bk">
                              <img class="fade-in lazy show" data-src="https://ae01.alicdn.com/kf/UT86tnsX1xXXXagOFbX2.jpg_220x220.jpg_250x250.jpg" src="https://ae01.alicdn.com/kf/UT86tnsX1xXXXagOFbX2.jpg_220x220.jpg_250x250.jpg">
                            </div>
                          </div>
                          <div class="user">
                            <span class="name">J******s G.</span>
                            <span class="flag">
                              <i class="country-flag css_br"></i>
                            </span>
                          </div>
                          <div class="z date ae-color gray">14 Jul 2017</div>
                          <div class="z md-rating">
                            <div class="bottom">
                              <div class="content">
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                              </div>
                            </div>
                            <div class="top" style="width:100%;">
                              <div class="content">
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                              </div>
                            </div>
                          </div>
                          <div class="content">
                            <p>
                              Chegou em 21 dias bem antes do prazo de entrega muito bom vendedor pretendo comprar mais protudos
                            </p>
  
                          </div>
  
                        </div>
                      </div>
  
                      <div class="z fdb-block fdb-comment">
                        <div class="infos">
                          <div class="avatar">
                            <div class="wrapper has-bk">
                              <img class="fade-in lazy show" data-src="https://ae01.alicdn.com/kf/UT8L8xWXRhaXXagOFbXu.jpg_220x220.jpg_250x250.jpg" src="https://ae01.alicdn.com/kf/UT8L8xWXRhaXXagOFbXu.jpg_220x220.jpg_250x250.jpg">
                            </div>
                          </div>
                          <div class="user">
                            <span class="name">M*********8 S.</span>
                            <span class="flag">
                              <i class="country-flag css_br"></i>
                            </span>
                          </div>
                          <div class="z date ae-color gray">21 Jul 2017</div>
                          <div class="z md-rating">
                            <div class="bottom">
                              <div class="content">
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                              </div>
                            </div>
                            <div class="top" style="width:100%;">
                              <div class="content">
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                                <i class="ic-md ic-star-md"></i>
                              </div>
                            </div>
                          </div>
                          <div class="content">
                            <p></p>
  
                          </div>
  
                        </div>
                      </div>
                    </div>
                    <div class="z area" data-role="area"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section>
      <div id="recommend">
        <div class="recommend-component">
          <div class="ms-lego-loading" style="display: none;">
            <div class="preloader-wrapper small active">
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
          <div id="seller">
            <div class="ms-column ms-lego-two-column ms-lego-shadow">
              <div>
                <div class="ms-lego-container title" style="padding: 15px 16px;">
                  Sell Recommendations(
                  <span>4</span>
                  )
                </div>
              </div>
              <div class="ms-lego-container items" style="padding: 0px;">
                <ul class="util-clearfix">
                  <li item="[object Object]">
                    <a>
                      <div class="ms-lego-picture-auto-with-width">
                        <div class="img-wrapper">
                          <img alt="Aliexpress" src="https://ae01.alicdn.com/kf/HTB1ZDpFPVXXXXXGXpXXq6xXFXXXe.jpg_350x350.jpg_.webp" style="opacity: 1; transition: opacity 0.3s;">
                        </div>
                      </div>
                      <div class="ms-lego-container" style="padding: 8px 16px 16px;">
  
                        <div class="ms-lego-min-price">
                          US $12.31</div>
                        <div class="price-discount util-clearfix">
  
                        </div>
                      </div>
                    </a>
                  </li>
                  <li item="[object Object]">
                    <a>
                      <div class="ms-lego-picture-auto-with-width">
                        <div class="img-wrapper" style="background: rgb(255, 255, 255);">
                          <img alt="Aliexpress" src="https://ae01.alicdn.com/kf/HTB1MKVkPVXXXXX3XVXXq6xXFXXXy.jpg_350x350.jpg_.webp" style="opacity: 1; transition: opacity 0.3s;">
                        </div>
                      </div>
                      <div class="ms-lego-container" style="padding: 8px 16px 16px;">
  
                        <div class="ms-lego-min-price">US $11.38</div>
                        <div class="price-discount util-clearfix"></div>
                      </div>
                    </a>
                  </li>
  
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div class="ms-column ms-lego-two-column ms-lego-shadow">
              <div>
  
                <div class="ms-lego-container title" style="padding: 15px 16px;">
                  More To Love(
                  <span>6</span>
                  )
                </div>
              </div>
              <div class="ms-lego-container items" style="padding: 0px;">
                <ul class="util-clearfix">
                  <li item="[object Object]">
                    <a>
                      <div class="ms-lego-picture-auto-with-width">
                        <div class="img-wrapper" style="background: rgb(255, 255, 255);">
                          <img alt="Aliexpress" src="https://ae01.alicdn.com/kf/HTB1NSMZRXXXXXc6XpXXq6xXFXXXO.jpg_350x350.jpg_.webp" style="opacity: 1; transition: opacity 0.3s;">
                        </div>
                      </div>
                      <div class="ms-lego-container" style="padding: 8px 16px 16px;">
  
                        <div class="ms-lego-min-price">US $15.79</div>
                        <div class="price-discount util-clearfix"></div>
                      </div>
                    </a>
                  </li>
                  <li item="[object Object]">
                    <a>
                      <div class="ms-lego-picture-auto-with-width">
                        <div class="img-wrapper" style="background: rgb(255, 255, 255);">
                          <img alt="Aliexpress" src="https://ae01.alicdn.com/kf/HTB1NSMZRXXXXXc6XpXXq6xXFXXXO.jpg_350x350.jpg_.webp" style="opacity: 1; transition: opacity 0.3s;">
                        </div>
                      </div>
                      <div class="ms-lego-container" style="padding: 8px 16px 16px;">
  
                        <div class="ms-lego-min-price">US $15.79</div>
                        <div class="price-discount util-clearfix"></div>
                      </div>
                    </a>
                  </li>
                  <li item="[object Object]">
                    <a>
                      <div class="ms-lego-picture-auto-with-width">
                        <div class="img-wrapper" style="background: rgb(255, 255, 255);">
                          <img alt="Aliexpress" src="https://ae01.alicdn.com/kf/HTB1NSMZRXXXXXc6XpXXq6xXFXXXO.jpg_350x350.jpg_.webp" style="opacity: 1; transition: opacity 0.3s;">
                        </div>
                      </div>
                      <div class="ms-lego-container" style="padding: 8px 16px 16px;">
  
                        <div class="ms-lego-min-price">US $15.79</div>
                        <div class="price-discount util-clearfix"></div>
                      </div>
                    </a>
                  </li>
                  <li item="[object Object]">
                    <a>
                      <div class="ms-lego-picture-auto-with-width">
                        <div class="img-wrapper" style="background: rgb(255, 255, 255);">
                          <img alt="Aliexpress" src="https://ae01.alicdn.com/kf/HTB1NSMZRXXXXXc6XpXXq6xXFXXXO.jpg_350x350.jpg_.webp" style="opacity: 1; transition: opacity 0.3s;">
                        </div>
                      </div>
                      <div class="ms-lego-container" style="padding: 8px 16px 16px;">
  
                        <div class="ms-lego-min-price">US $15.79</div>
                        <div class="price-discount util-clearfix"></div>
                      </div>
                    </a>
                  </li>
  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 弹出框 -->
    <mt-popup v-model="popupVisible3" position="bottom" :modal=false class="mint-popup-3">
      <div class="ms-panel-md panel-show" style="z-index: 51; top: 0%;">
        <div class="am-popup-hd">
          <span v-on:click="popupVisible3 = !popupVisible3" class="am-close">&times;</span>
          <h4 class="am-popup-title">Product Options</h4>
  
        </div>
        <div class="ms-panel-bodyer" data-role="panel-body">
          <section class="ms-sku">
            <header class="sku-header">
              <div class="sku-img">
                <img alt="" src="https://ae01.alicdn.com/kf/HTB1v.XjRFXXXXbRXFXXq6xXFXXX0/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg_640x640.jpg_.webp">
              </div>
              <div class="sku-detail">
                <p class="sku-price">
                  <span class="price-span">US $5.15</span>
                  /
                  <span class="unit-span">piece</span>
                </p>
                <p class="sku-desc">please select Color</p>
              </div>
            </header>
  
            <div class="sku-body ms-sku">
              <ul>
  
                <li data-id="14">
                  <p class="sku-item-title">
                    Color
                    <span class="current-prop"></span>
                  </p>
  
                  <div class="sku-props">
  
                    <span class="sku-color" data-id="14:193">
                      <img alt="sku" bigpic="https://ae01.alicdn.com/kf/HTB1mutnRFXXXXaUXFXXq6xXFXXXu/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg" src="https://ae01.alicdn.com/kf/HTB1mutnRFXXXXaUXFXXq6xXFXXXu/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg_120x120.jpg">
  
                      <span class="sku-disabled-mask"></span>
                    </span>
                    <span class="sku-color" data-id="14:29">
                      <img alt="sku" bigpic="https://ae01.alicdn.com/kf/HTB13CgURpXXXXcQapXXq6xXFXXXX/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg" src="https://ae01.alicdn.com/kf/HTB13CgURpXXXXcQapXXq6xXFXXXX/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg_120x120.jpg">
  
                      <span class="sku-disabled-mask"></span>
                    </span>
                    <span class="sku-color" data-id="14:10">
                      <img alt="sku" bigpic="https://ae01.alicdn.com/kf/HTB1qQhlRFXXXXcqXFXXq6xXFXXXf/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg" src="https://ae01.alicdn.com/kf/HTB1qQhlRFXXXXcqXFXXq6xXFXXXf/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg_120x120.jpg">
  
                      <span class="sku-disabled-mask"></span>
                    </span>
                    <span class="sku-color" data-id="14:350852">
                      <img alt="sku" bigpic="https://ae01.alicdn.com/kf/HTB1DepFRFXXXXbCXXXXq6xXFXXX6/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg" src="https://ae01.alicdn.com/kf/HTB1DepFRFXXXXbCXXXXq6xXFXXX6/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg_120x120.jpg">
  
                      <span class="sku-disabled-mask"></span>
                    </span>
                    <span class="sku-color" data-id="14:496">
                      <img alt="sku" bigpic="https://ae01.alicdn.com/kf/HTB1PcXFRFXXXXbQXXXXq6xXFXXX6/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg" src="https://ae01.alicdn.com/kf/HTB1PcXFRFXXXXbQXXXXq6xXFXXX6/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg_120x120.jpg">
  
                      <span class="sku-disabled-mask"></span>
                    </span>
                    <span class="sku-color" data-id="14:173">
                      <img alt="sku" bigpic="https://ae01.alicdn.com/kf/HTB1UNw6RpXXXXchaXXXq6xXFXXXT/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg" src="https://ae01.alicdn.com/kf/HTB1UNw6RpXXXXchaXXXq6xXFXXXT/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg_120x120.jpg">
  
                      <span class="sku-disabled-mask"></span>
                    </span>
                    <span class="sku-color" data-id="14:175">
                      <img alt="sku" bigpic="https://ae01.alicdn.com/kf/HTB1HfxyRFXXXXb0XpXXq6xXFXXXO/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg" src="https://ae01.alicdn.com/kf/HTB1HfxyRFXXXXb0XpXXq6xXFXXXO/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg_120x120.jpg">
  
                      <span class="sku-disabled-mask"></span>
                    </span>
                  </div>
  
                </li>
              </ul>
              <section class="ms-row hairline ms-rc-ripple ms-rc-custom">
                <p>Ships to</p>
                <span class="ms-row-floatright ms-color-link" data-code="US">United States</span>
                <span class="ms-arrow">
                  <span class="ic-md ic-arrowright-md"></span>
                </span>
              </section>
              <section class="ms-quantity">
                <header class="ms-row-title">Quantity&nbsp;</header>
                <p class="ms-numberic-wrap">
                  <span class="ms-numberic-container">
                    <span class="ms-numberic" data-min="1" data-max="3289" data-curval="1">
                      <a href="javascript:;" class="ms-minus disabled">
                        <i class="ic-md ic-remove-md"></i>
                      </a>
                      <input type="number" style="height:27px;">
                      <a href="javascript:;" class="ms-plus">
                        <i class="ic-md ic-add-md"></i>
                      </a>
                    </span>
                  </span>
                  <span class="numberic-text">3289 pieces Left</span>
                </p>
              </section>
  
              <section class="ms-sku-shipping ms-shipping-wrap">
                <header class="shipping-header">
                  <p class="ms-row-title ms-rc-ripple ms-rc-custom">
                    <span>Free Shipping</span>
                    <span class="ms-arrow">
                      <span class="ic-md ic-arrowdown-md"></span>
                    </span>
                  </p>
                  <div class="shipping-info">
                    <p>
                      <span>From</span>
                      &nbsp;
                      <span class="from-span ms-color-link">China</span>
                      &nbsp;
                      <span>to</span>
                      <span class="to-span ms-color-link">United States</span>
                      &nbsp;
                      <span>via</span>
                      AliExpress Standard Shipping
                    </p>
                    <p class="ship-out-days">Ships within 60 business days</p>
                  </div>
                  <p class="sku-shipping-error"></p>
                </header>
  
                <ul class="ms-shipping-list ms-hide">
  
                  <li class="ms-rc-ripple ms-rc-custom" data-index="0" data-service-name="CAINIAO_STANDARD" data-company="AliExpress Standard Shipping" data-cost="Free Shipping">
                    <div class="shipping-title clearfix">
                      <span>Free Shipping</span>
                      <span>19-39days</span>
                    </div>
                    <p class="shipping-desc">AliExpress Standard Shipping</p>
                    <i class="ms-icon icon-check"></i>
                  </li>
                  <li class="ms-rc-ripple ms-rc-custom" data-index="1" data-service-name="EMS_ZX_ZX_US" data-company="ePacket" data-cost="US $2.06">
                    <div class="shipping-title clearfix">
                      <span>US $2.06</span>
                      <span>12-20days</span>
                    </div>
                    <p class="shipping-desc">ePacket</p>
                    <i class="ms-icon icon-check"></i>
                  </li>
                  <li class="ms-rc-ripple ms-rc-custom" data-index="2" data-service-name="CAINIAO_PREMIUM" data-company="AliExpress Premium Shipping" data-cost="US $11.99">
                    <div class="shipping-title clearfix">
                      <span>US $11.99</span>
                      <span>10-15days</span>
                    </div>
                    <p class="shipping-desc">AliExpress Premium Shipping</p>
                    <i class="ms-icon icon-check"></i>
                  </li>
                  <li class="ms-rc-ripple ms-rc-custom" data-index="3" data-service-name="DHL" data-company="DHL" data-cost="US $23.01">
                    <div class="shipping-title clearfix">
                      <span>US $23.01</span>
                      <span>6-13days</span>
                    </div>
                    <p class="shipping-desc">DHL</p>
                    <i class="ms-icon icon-check"></i>
                  </li>
                  <li class="ms-rc-ripple ms-rc-custom" data-index="4" data-service-name="EMS" data-company="EMS" data-cost="US $40.17">
                    <div class="shipping-title clearfix">
                      <span>US $40.17</span>
                      <span>12-21days</span>
                    </div>
                    <p class="shipping-desc">EMS</p>
                    <i class="ms-icon icon-check"></i>
                  </li>
                </ul>
              </section>
  
              <section class="ms-detail-btn-wrap">
                <div class="store ms-rc-ripple">
                  <a href="//m.aliexpress.com/store/storeHome.htm?sellerAdminSeq=221926657">
                    <i class="icon-home"></i>
                  </a>
                </div>
                <div class="action">
                  <button class="ms-button-secondary ms-rc-shadow ms-rc-ripple" data-role="add-cart" data-float="true">Add to cart&nbsp;</button>
                  <button class="ms-button-primary ms-rc-shadow ms-rc-ripple" data-role="buy-now" data-float="true">Buy now&nbsp;</button>
                </div>
              </section>
  
            </div>
          </section>
        </div>
      </div>
  
    </mt-popup>
    <!-- 固定 操作栏 -->
    <section id="detail-btn-fixed-bottom" class="ms-detail-btn-fixed ms-rc-shadow">
      <div class="ms-detail-btn-wrap">
        <div class="store ms-rc-ripple">
          <a href="#">
            <i class="icon-home"></i>
          </a>
        </div>
        <div class="action">
          <button class="ms-button-secondary ms-rc-shadow ms-rc-ripple">Add to cart</button>
          <button class="ms-button-primary ms-rc-shadow ms-rc-ripple">Buy now</button>
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
      popupVisible3: false,
      slides: [],
      'isAdd': false
      // loadings:false,
      // list:[1,2,3,4,5,6,7,8,9,10,11,12,14,45,6,7,8,9,34,345,56,67,78,89,56,56,56,56,56,56,56,56,56]
    };
  },

  // components: {
  //   MintUI
  // },

  //已成功挂载，相当ready()
  mounted: function () {
    var _this = this;
    this.$nextTick(function () {
      this.ajax();
      // 页面滚动添加监听
      window.addEventListener('scroll', this.onScroll);

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
    ajax: function () {
      var self = this;
      setTimeout(function () {
        self.slides = [{
          url: 'https://ae01.alicdn.com/kf/HTB1v.XjRFXXXXbRXFXXq6xXFXXX0/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg_640x640.jpg_.webp',
        }, {
          url: 'https://ae01.alicdn.com/kf/HTB10Qo9RpXXXXa7aXXXq6xXFXXXm/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg_640x640.jpg_.webp',
        }, {
          url: 'https://ae01.alicdn.com/kf/HTB1p7ZSRpXXXXcyapXXq6xXFXXXt/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg_640x640.jpg_.webp',
        }, {
          url: 'https://ae01.alicdn.com/kf/HTB17lZWRpXXXXXRaFXXq6xXFXXXk/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg_640x640.jpg_.webp'
        }, {
          url: 'https://ae01.alicdn.com/kf/HTB1SNNcRFXXXXcFXVXXq6xXFXXXr/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg_640x640.jpg_.webp',
        }, {
          url: 'https://ae01.alicdn.com/kf/HTB1HyBwRFXXXXcpXpXXq6xXFXXX8/KEYSION-Waterproof-Bag-With-Luminous-Underwater-Pouch-Phone-Case-For-iPhone-7-7-Plus-6-6s.jpg_640x640.jpg_.webp',
        }];
      }, 2000)

    }



  }
}
</script>

<style>
.mint-popup-3 {
  width: 100%;
  height: 100%;
  background: #fff;
  /*position: fixed;*/
  /*top: 0;*/
}

















body {
  background-color: #EBEBEC !important;
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
}

.ms-rc-shadow {
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
}


/*头部*/

#app .mint-header {
  background-color: transparent;
}

.icon-label {
  min-width: 36px;
  display: inline-block;
}


/*轮播图*/

.slides-bayax {
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


/*添加关注*/

.ms-add-session {
  position: relative;
  margin-top: 0;
}

.ms-adds {
  position: absolute;
  top: -24px;
  right: 24px;
  background-color: #fff;
  width: 48px;
  height: 48px;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .26);
  font-size: 26px;
  color: #898B92;
  line-height: 52px;
}

.ms-adds-yes {
  color: #F44336;
}



/*产品信息*/

.ms-rc-subject {
  padding: 32px 10px 12px 10px;
  background: #fff;
}

.ms-rc-detail-subject {
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  color: #3A3E4A;
  text-align: center;
  display: -webkit-box;
  overflow: hidden;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}


/*价格*/

.ms-detail-price {
  display: block;
  background-color: #fff;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 16px;
  text-align: center;
}

.detail-price-container {
  padding-bottom: 2px;
  line-height: 24px;
}

.detail-price-container .price-span {
  font-size: 21px;
  color: #F44336;
}

.ms-detail-price .detail-origin-price {
  font-size: 14px;
  color: #B0B2B7;
  padding-top: 5px;
  padding-bottom: 10px;
  line-height: 1.5;
}

.ms-detail-price .ms-promotion {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.ms-detail-price .ms-promotion .discount {
  background: #FEE3E1;
  color: #F44336;
  height: 18px;
  line-height: 18px;
  margin-right: 4px;
  border-radius: 2px;
  padding: 0 4px;
  font-size: 12px;
}

.ms-promotion span {
  display: inline-block;
}

.ms-detail-price .ms-promotion .sale {
  height: 18px;
  line-height: 16px;
  font-size: 10px;
  border-radius: 2px;
  color: #f44336;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.ms-detail-price .ms-promotion .app {
  display: inline-block;
  background: #DDECFD;
  color: #4A90E2;
  padding: 0 8px 0 0;
}


.ms-bulk-price {
  margin-top: 12px;
  color: #B0B2B7;
  font-size: 12px;
}

.ms-rc-shadow {
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
}


/*商品评分 order*/

.ms-block {

  background: #fff;
  width: 100%;
}

.ms-rc-detail-orders-stars {
  background: #fff;
}

.sumary-list {
  margin: 0 12px;
  border-top: 1px solid #f2f2f2;
}

.clearfix,
.layout-fixed,
.layout-fluid,
.row,
.util-clearfix {
  zoom: 1;
}

.sumary-list li {
  width: 33.33%;
  float: left;
  height: 64px;
  padding: 12px 0;
  color: #3A3E4A;
  font-size: 16px;
}

.sumary-list li p {
  font-size: 16px;
  height: 20px;
  line-height: 20px;
  border-right: 1px solid #EBEBEC;
  margin: 0;
  text-align: left;
}

.sumary-list li p:last-child {
  color: #B0B2B7;
  font-size: 12px;
}

.sumary-list li.second p {
  text-align: center;
}

.sumary-list li.last p {
  text-align: right;
  border-right: none;
}

.ms-rc-detail-coupon {
  padding: 0 12px;
  background: #fff;
  border-top: 1px solid #EBEBEC;
}

.ms-rc-ripple {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.ms-star {
  font-size: 12px;
}

.am-icon-star {
  color: #E2E2E4;
}

.am-icon-star-o-color {
  color: #F44336;
}

.star-color {
  color: #F44336;
}

.star-empty {
  color: #E2E2E4;
}




/*选项 添加购物车 立即买*/

.ms-sku-row {
  font-size: 13px;
  line-height: 18px;
  height: 73px;
  margin-top: 10px;
}

.ms-detail-sku {
  background: #fff;
  padding: 12px;
}

.ms-sku-row {
  border-bottom: 1px solid #EBEBEC;
}

.ms-detail-sku p:first-child {
  margin-bottom: 12px;
}

.ms-sku-row p {
  margin-right: 200px;
  text-align: left;
}

.ms-sku-row p {
  margin-right: 0;
}

.ms-detail-sku p:last-child {
  margin-bottom: 0;
}

.ms-detail-sku .detail-shipping-bar {
  position: relative;
  display: block;
}

.ms-detail-sku .detail-shipping-bar .ms-color-ship {
  color: #898B92;
}


.ms-detail-sku .detail-shipping-bar .ms-rc-action {
  position: absolute;
  top: -12px;
  right: 20px;
}

.ms-detail-sku .detail-shipping-bar .ms-rc-action {
  float: right;
  font-size: 14px;
  color: #4A90E2;
  font-weight: 600;
}


/*买。。购物车灯等*/

.ms-detail-btn-fixed {
  height: 66px;
  margin-bottom: 12px;
}

.ms-detail-btn-wrap {
  padding: 12px;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}

.ms-detail-btn-wrap>div {
  float: left;
}

.ms-detail-btn-wrap .store {
  color: #FF7605;
  width: 42px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  background: #F2F2F2;
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .24);
  overflow: hidden;
  float: left;
}


.ms-rc-ripple {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.ms-detail-btn-wrap .store a {
  color: #FF7605;
  font-size: 32px;
}

.ms-detail-btn-wrap .store .am-icon-home {
  font-size: 37px;
}

.ms-detail-btn-wrap .action {
  width: 100%;
  margin-left: -42px;
  padding-left: 54px;
  float: left;
}

.ms-detail-btn-wrap .ms-button-primary,
.ms-detail-btn-wrap .ms-button-secondary {
  box-sizing: border-box;
  width: 48%;
  height: 42px;
  border: none;
}

.ms-detail-btn-wrap .ms-button-secondary {
  background: #FEE3E1;
  color: #F44336;
  outline: 0;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
}

.ms-detail-btn-wrap .ms-button-primary {
  background: #F44336;
  outline: 0;
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
  float: right;
}


#detail-btn-fixed-bottom {
  width: 100%;
  position: fixed;
  bottom: -13px;
  display: none;
}




/*商品描述*/

.ms-item-desc .tab {
  background: #fff;
  margin-bottom: 12px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .24)
}

.ms-item-desc .tab li {
  display: block;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, .5);
  width: 50%;
  height: 48px;
  line-height: 48px;
  text-transform: uppercase;
  float: left;
  overflow: hidden
}

.ms-item-desc .tab li.current {
  text-align: left;
  padding-left: 18px;
  color: #3A3E4A;
  border-bottom: 1px solid #eee;
}

.ms-item-desc .tab ul[items='1'] li {
  width: 100%
}

.ms-item-desc .tab .tab-content {
  display: none
}

.ms-item-desc .tab .tab-content.current {
  display: block
}

.ms-item-desc .tab .tab-content .title {
  padding: 12px 16px;
  font-size: 14px;
  color: #3A3E4A;
  overflow: hidden;
  border-bottom: 1px solid #ebebec;
  background: #FBFBFB
}

.ms-item-desc .tab .tab-content .size-chart {
  padding: 16px
}

.ms-item-desc .tab .tab-content .size-chart table {
  width: 100%;
  border: 1px solid #ebebec
}

.ms-item-desc .tab .tab-content .size-chart table tr {
  height: 36px;
  line-height: 36px
}

.ms-item-desc .tab .tab-content .size-chart table tr:nth-child(2n+1) {
  background: #FBFBFB
}

.ms-item-desc .tab .tab-content .size-chart table td,
.ms-item-desc .tab .tab-content .size-chart table th {
  width: 20%;
  text-align: center;
  border-right: 1px solid #ebebec;
  border-bottom: 1px solid #ebebec
}


.descripiton div.title {
  padding: 12px 16px;
  font-size: 14px;
  color: #3A3E4A;
  height: 44px;
  line-height: 20px;
  overflow: hidden;
  border-bottom: 1px solid #ebebec;
  background: #FBFBFB;
}




.desc-container .desc-title {
  margin-top: 18px;
  border-top: 1px solid #eaeaea;
  padding-left: 16px;
  padding-right: 16px;
  color: #b0b2b7;
  font-size: 12px;
  line-height: 48px
}

.desc-container .desc-title:first-child {
  margin-top: 0;
  border-top: none
}

.desc-container .item-subject {
  padding: 8px 16px 18px 16px;
  color: #3a3e4a;
  font-size: 12px;
  line-height: 1.34;
  border-bottom: 1px solid #eaeaea
}

.desc-container .prop-table {
  box-sizing: border-box;
  width: 100%;
  display: table-row-group;
  vertical-align: middle;
  text-align: left;
  font-size: 12px;
  word-break: break-all
}

.desc-container .prop-table caption {
  padding: 0 16px 8px 16px;
  color: #b0b2b7;
  font-size: 12px;
  line-height: 48px;
  text-align: left
}

.desc-container .prop-table tbody {
  font-size: 12px;
  line-height: 1.34;
  display: table-row-group;
  vertical-align: middle
}

.desc-container .prop-table tbody tr {
  display: table-row
}

.desc-container .prop-table tbody tr td {
  vertical-align: top;
  padding-bottom: 8px
}

.desc-container .prop-table tbody .key {
  padding-left: 16px;
  width: 40%;
  color: #b0b2b7
}

.desc-container .prop-table tbody .value {
  padding-right: 16px;
  color: #3a3e4a
}

.descriptions {
  padding: 16px 16px 8px 16px;
  word-wrap: break-word;
  background-color: #fff;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  overflow-x: auto
}

.descriptions img {
  width: 100%;
  height: auto;
  display: block
}

.descriptions sub {
  vertical-align: sub;
  font-size: smaller
}

.descriptions sup {
  vertical-align: super;
  font-size: smaller
}

.descriptions em,
.descriptions i {
  font-style: italic
}

.descriptions ins,
.descriptions u {
  text-decoration: underline
}

.descriptions s,
.descriptions strike {
  text-decoration: line-through
}

.descriptions ul {
  list-style: disc outside !important;
  margin-left: 40px
}

.descriptions ol {
  list-style: decimal outside !important;
  margin-left: 40px
}

.descriptions table {
  border-collapse: separate
}

.descriptions table th {
  background: #e0e0e0;
  font-size: 13px
}

.descriptions table,
.descriptions table.aliRTE-table-bor1,
.descriptions table.mceItemTable {
  border-width: 1px 1px 0 0;
  border-style: solid;
  border-color: #606060
}

.descriptions table td,
.descriptions table th,
.descriptions table.aliRTE-table-bor1 td,
.descriptions table.aliRTE-table-bor1 th,
.descriptions table.mceItemTable td,
.descriptions table.mceItemTable th {
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: #606060
}

.descriptions table.no-bor td,
.descriptions table.no-bor th {
  border: 1px dashed #bbb
}

.descriptions table[border="0"],
.descriptions table[border="0"]>tbody>tr>td,
.descriptions table[border="0"]>tfoot>tr>td,
.descriptions table[border="0"]>thead>tr>th,
.descriptions table[border="0"]>tr>td,
.descriptions table[border="0"]>tr>th {
  border: 0 none
}




/*评论*/

.ms-feedback {
  background-color: #fff;
  margin-bottom: 12px;
}

.ms-detail-row,
.ms-row {
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  color: #3A3E4A;
  background: #fff;
  padding: 0 12px;
}


/*评论图片*/

#md-feedback .fdb-body {
  min-height: 200px;
  position: relative
}

#md-feedback.inloading .md-loading {
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -40px;
  width: 100%
}

.z.fdb {
  color: #3A3E4A
}

.z.fdb-block+.z.fdb-block {
  border-top: 1px solid #EBEBEC
}

.z.fdb-section {
  padding: 16.3px 16px
}

.z.centered {
  overflow: hidden;
  display: -webkit-box !important;
  display: -moz-box !important;
  display: -ms-flexbox !important;
  display: -webkit-flex !important;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center
}

.z.ae-color {
  color: #F44336
}

.z.ae-color.gray {
  color: #B0B2B7
}

.z.ae-color {
  color: #B0B2B7
}

.z.ae-fill {
  background-color: #F44336
}

.z.ae-fill.gray {
  background-color: #B0B2B7
}

.z.ae-fill.dark {
  background-color: #EBEBEC
}

.clearfix:after {
  content: '';
  display: block;
  clear: both
}

.get-sq .pic {
  position: relative;
  overflow: hidden
}

.get-sq .pic:before {
  content: "";
  display: block;
  padding-top: 100%
}

.get-sq .pic>.img-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%
}

.get-sq .pic img {
  vertical-align: middle
}

.has-bk {
  background-image: url(//ae01.alicdn.com/aetfs/tps/i2/TB12r_XHVXXXXacXFXXd4xm0VXX-640-640.png_350x350.jpg);
  -webkit-background-size: cover;
  background-size: cover
}

#md-feedback .ms-rc-view-more,
.fdb-comments,
.fdb-options,
.fdb-pics,
.fdb-scores {
  display: none
}

.fdb-pics {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box
}

.fdb-pics .fdb-pics-wrapper {
  margin-left: -4px;
  margin-right: -4px
}

.fdb-pics .fdb-pic {
  float: left;
  width: 16.6666667%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-left: 4px;
  padding-right: 4px
}

.fdb-pic .img-wrapper {
  overflow: hidden
}

.fdb-pic .img-wrapper img {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: initial
}

#summary-fdb-pics .fdb-pic.last .pic {
  background-color: #F7F7F8;
  border: 1px solid #EBEBEC;
  color: #898B92;
  font-size: 14px
}

.fdb-comments.fdb-section {
  padding-top: 0;
  padding-bottom: 0;
  color: #3A3E4A
}

.fdb-comments .infos {
  margin: 0 0 0 60px;
  position: relative;
  font-size: 12px
}

.fdb-comments .fdb-block {
  position: relative
}

.fdb-comments .avatar {
  position: absolute;
  right: 100%;
  margin-right: 10px;
  top: 0;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px
}

.fdb-comments .avatar .wrapper {
  width: 48px;
  height: 48px;
  overflow: hidden;
  -webkit-border-radius: 80px;
  -moz-border-radius: 80px;
  border-radius: 80px;
  text-align: center;
  background-image: url(data:image/png;base64,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) !important
}

.fdb-comments .avatar img {
  height: 100%;
  display: inline-block;
  -webkit-border-radius: 80px;
  -moz-border-radius: 80px;
  border-radius: 80px
}

.fdb-comments .fdb-comment {
  padding: 16px 0 16px 0
}

.fdb-comments .infos {
  max-width: 700px
}

.fdb-comment .infos .content {
  font-size: 14px
}

.fdb-comments .infos .data {
  font-size: 12px
}

.fdb-comments .infos .user {
  margin-bottom: 12px
}

.fdb-comments .infos .date {
  margin-bottom: 4px
}

.fdb-comments .reply {
  background-color: #F5F5F5;
  padding: 8px;
  margin-top: 13px;
  color: #898B92
}

.fdb-comments .reply .seller {
  color: #B0B2B7
}

.fdb-comments .content .fdb-pics {
  display: block;
  margin-left: -2px;
  margin-right: -2px;
  margin-top: 7px
}

.fdb-comments .content .fdb-pics .fdb-pic {
  display: block;
  width: 33.33333%;
  padding: 2px
}

.fdb-comments .infos .content p {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-height: 1.43em;
  overflow: hidden
}

.fdb-comments .infos .flag {
  margin-left: 6px
}

.fdb-comments .infos .md-rating {
  position: absolute;
  right: 0;
  top: 0
}

.fdb-comments .infos .md-rating i {
  font-size: 12px
}





/*更多*/

.ms-lego-dialog>.ms-lego-dialog-containter {
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  z-index: 11;
}

.ms-lego-dialog>.ms-lego-dialog-containter .ms-lego-dialog-body {
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
}

.ms-lego-dialog>.ms-lego-dialog-containter * {
  z-index: 11;
}

.ms-lego-dialog>.ms-lego-dialog-containter .ms-lego-pop {
  margin: 0 auto;
  position: relative;
}

.ms-lego-dialog>.ms-lego-dialog-containter .ms-lego-picture-100-auto {
  background: none !important;
}

.ms-lego-dialog>.ms-lego-dialog-containter .ms-lego-pop>span {
  position: absolute;
  display: block;
}

.ms-lego-dialog>.ms-lego-dialog-containter .ms-lego-pop>span.debug {
  background: blue;
}

.ms-lego-dialog>.ms-lego-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: #000;
  opacity: 0.5;
  filter: alpha(opacity=50);
}



/**
* background不支持去协议调用,暂不清楚原因
*/

.ms-lego-picture {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 10rem;
  height: 10rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  background: url('//ae01.alicdn.com/tps/i2/TB12r_XHVXXXXacXFXXd4xm0VXX-640-640.png') center no-repeat;
  background-size: 100% 100%;
}

.ms-lego-picture-user {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 48px;
  height: 48px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  border-radius: 80px;
  overflow: hidden;
  background: url('//ae01.alicdn.com/kf/HTB1p5.sJpXXXXc.XpXX760XFXXXO.png') center no-repeat;
  background-size: 100% 100%;
  z-index: 1;
}

.ms-lego-picture-banner,
.ms-lego-picture-title-banner,
.ms-lego-picture-auto {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 10rem;
  height: auto;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  background: url('//ae01.alicdn.com/tps/i2/TB12r_XHVXXXXacXFXXd4xm0VXX-640-640.png') center no-repeat;
  background-size: 100% 100%;
}

.ms-lego-picture-100-auto {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  height: auto;
  min-height: 100px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  background: url('//ae01.alicdn.com/tps/i2/TB12r_XHVXXXXacXFXXd4xm0VXX-640-640.png') center no-repeat;
  background-size: 100% 100%;
}

.ms-lego-picture img,
.ms-lego-picture-user img,
.ms-lego-picture-banner img,
.ms-lego-picture-title-banner img,
.ms-lego-picture-auto img,
.ms-lego-picture-100-auto img {
  width: 100%;
  height: 100%;
}

.ms-lego-picture-auto-with-width {
  position: relative;
  overflow: hidden;
}

.ms-lego-picture-auto-with-width:before {
  content: "";
  display: block;
  padding-top: 100%;
}

.ms-lego-picture-auto-with-width .img-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('//ae01.alicdn.com/tps/i2/TB12r_XHVXXXXacXFXXd4xm0VXX-640-640.png') center no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

.ms-lego-picture-auto-with-width .img-wrapper img {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: initial;
  vertical-align: middle;
}

@media (min-width: 768px) {
  .ms-lego-picture {
    width: 100%;
  }
}

@media (min-width: 992px) {
  .ms-lego-picture {
    width: 100%;
  }
}

.ms-lego-toast {
  display: none;
}

.ms-lego-toast>div {
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  z-index: 101;
}

.ms-lego-toast>div * {
  z-index: 1001;
}

.ms-lego-toast>div .contanter {
  position: relative;
  max-width: 100%;
  min-width: 50px;
  max-height: 100%;
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  padding: 16px 24px;
  font-size: 12px;
  z-index: 1000;
}

.ms-lego-toast.show {
  display: block;
}

.recommend-component {
  margin-bottom: 86px;
}

#seller {
  margin-bottom: 12px;
}


.ms-lego-two-column .items ul {
  margin-right: -1px;
  margin-bottom: -1px;
}

.ms-lego-two-column .items li {
  display: block;
  float: left;
  width: 50%;
  border-right: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
}

.ms-column .price-discount>div {
  float: left;
}

.ms-column .price-discount .ms-lego-price {
  width: inherit;
  margin-right: 8px;
}

.ms-column .price-discount .ms-lego-discount {
  margin-top: 0;
}

@media (min-width: 768px) {
  .ms-lego-two-column .items li {
    width: 33.3333%;
  }
}

@media (min-width: 992px) {
  .ms-lego-two-column .items li {
    width: 25%;
    border: 1px solid #e5e5e5;
  }
  .ms-lego-two-column .items li:nth-child(2n+0) {
    border: 0;
  }
  .ms-lego-two-column .items li:nth-child(2n+1) {
    border-top: 0;
    border-bottom: 0;
  }
}


.ms-lego-container {
  padding: 16px;
  background: #fff;
  overflow: hidden;
}

.ms-lego-space {
  width: 100%;
  height: 8px;
}

.ms-column .title {
  height: 48px;
  font-size: 13px;
  color: #898B92;
  border-bottom: 1px solid #e5e5e5;
}

.ms-column .title>span {
  color: #3A3E4A;
}

.ms-lego-picture-title-banner {
  border-bottom: 1px solid #e5e5e5;
}


/**
* background不支持去协议调用,暂不清楚原因
*/

.ms-lego-picture {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 10rem;
  height: 10rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  background: url('//ae01.alicdn.com/tps/i2/TB12r_XHVXXXXacXFXXd4xm0VXX-640-640.png') center no-repeat;
  background-size: 100% 100%;
}

.ms-lego-picture-user {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 48px;
  height: 48px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  border-radius: 80px;
  overflow: hidden;
  background: url('//ae01.alicdn.com/kf/HTB1p5.sJpXXXXc.XpXX760XFXXXO.png') center no-repeat;
  background-size: 100% 100%;
  z-index: 1;
}

.ms-lego-picture-banner,
.ms-lego-picture-title-banner,
.ms-lego-picture-auto {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 10rem;
  height: auto;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  background: url('//ae01.alicdn.com/tps/i2/TB12r_XHVXXXXacXFXXd4xm0VXX-640-640.png') center no-repeat;
  background-size: 100% 100%;
}

.ms-lego-picture-100-auto {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  height: auto;
  min-height: 100px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  background: url('//ae01.alicdn.com/tps/i2/TB12r_XHVXXXXacXFXXd4xm0VXX-640-640.png') center no-repeat;
  background-size: 100% 100%;
}

.ms-lego-picture img,
.ms-lego-picture-user img,
.ms-lego-picture-banner img,
.ms-lego-picture-title-banner img,
.ms-lego-picture-auto img,
.ms-lego-picture-100-auto img {
  width: 100%;
  height: 100%;
}

.ms-lego-picture-auto-with-width {
  position: relative;
  overflow: hidden;
}

.ms-lego-picture-auto-with-width:before {
  content: "";
  display: block;
  padding-top: 100%;
}

.ms-lego-picture-auto-with-width .img-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('//ae01.alicdn.com/tps/i2/TB12r_XHVXXXXacXFXXd4xm0VXX-640-640.png') center no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

.ms-lego-picture-auto-with-width .img-wrapper img {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: initial;
  vertical-align: middle;
}

@media (min-width: 768px) {
  .ms-lego-picture {
    width: 100%;
  }
}

@media (min-width: 992px) {
  .ms-lego-picture {
    width: 100%;
  }
}




/*弹窗*/

.ms-panel-md {
  position: fixed;
  overflow: hidden;
  height: 100%;
  width: 100%;
  top: 100%;
  left: 0;
  background-color: #fff;
  visibility: hidden;
  display: none;
  z-index: 100;
  -webkit-transform: translateZ(0);
  transform: translateZ(0)
}

.ms-panel-md.fx-horizontal,
.ms-panel-md.horizontal {
  z-index: 101
}

.ms-panel-md.horizontal {
  left: 100%;
  top: 0
}

.ms-panel-md .ms-panel-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  z-index: 2;
  padding-left: 72px;
  padding-right: 8px;
  font-size: 18px;
  line-height: 56px;
  background-color: #fff;
  color: #3A3E4A;
  font-weight: 600;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .24)
}

.ms-panel-md .ms-panel-bodyer {
  position: relative;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  padding-top: 56px;
  height: 100%;
  z-index: 1;
  background-color: #fff
}

.ms-panel-md .ms-panel-cancel {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px;
  width: 56px;
  height: 56px
}

.ms-panel-md .ms-panel-cancel .ic-md {
  display: block;
  font-size: 24px;
  line-height: 1;
  color: #3A3E4A
}

.ms-panel-md .ms-panel-cancel .ic-md::before {
  font-weight: 400
}

.ms-panel-md.panel-show {
  visibility: visible;
  display: block
}





.ms-shipping-wrap {
  background-color: #EBEBEC
}

.ms-shipping-wrap .ms-shipping-list li {
  box-sizing: border-box;
  position: relative;
  height: 100%;
  padding: 12px 12px 16px 12px;
  background-color: #fff;
  font-size: 12px;
  border-bottom: #EBEBEC solid 1px
}

.ms-shipping-wrap .ms-shipping-list li.selected .icon-check {
  display: inline-block
}

.ms-shipping-wrap .ms-shipping-list li .shippin-title span {
  display: inline-block;
  height: 18px;
  line-height: 18px
}

.ms-shipping-wrap .ms-shipping-list li .shippin-title span:first-child {
  font-size: 15px
}

.ms-shipping-wrap .ms-shipping-list li .shippin-title span:last-child {
  color: #999
}

.ms-shipping-wrap .ms-shipping-list li .shipping-desc {
  margin-top: 4px;
  color: #666
}

.ms-shipping-wrap .icon-check {
  display: none;
  position: absolute;
  color: #e42d01;
  top: 16px;
  right: 12px
}



.ms-sku .sku-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 12px;
  border-bottom: 1px solid #f2f2f2
}

.ms-sku .sku-header .sku-img {
  display: block;
  width: 60px;
  height: 60px;
  overflow: hidden;
  max-width: 100%;
}

.ms-sku .sku-header .sku-detail {
  padding-left: 12px
}

.ms-sku .sku-header .sku-price {
  padding-bottom: 8px
}

.ms-sku .sku-header .sku-price .price-span {
  color: #e62e04;
  font-size: 15px;
  line-height: 20px
}

.ms-sku .sku-header .sku-price .uint-span {
  color: #bob2b7;
  font-size: 12px;
  line-height: 20px
}

.ms-sku .sku-header .sku-desc {
  display: -webkit-box;
  overflow: hidden;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 12px;
  line-height: 1.5
}

.ms-sku .sku-body {
  background-color: #fff
}

.ms-sku .ms-detail-btn-wrap {
  padding: 12px 12px 42px 12px
}

.ms-sku-shipping {
  background-color: #fff
}

.ms-sku-shipping .shipping-header {
  border-bottom: 1px solid #f2f2f2
}

.ms-sku-shipping .sku-shipping-error {
  display: none;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  color: #f8743d;
  line-height: 1.5;
  font-size: 12px
}

.ms-sku-shipping .sku-shipping-error.ms-block {
  display: block
}

.ms-sku-shipping .shipping-info {
  padding-left: 12px;
  padding-right: 12px;
  font-size: 12px;
  line-height: 1.5
}

.ms-sku-shipping .shipping-info .ship-out-days {
  padding-bottom: 12px;
  color: #999;
  font-size: 12px;
  line-height: 1.5
}

.ms-panel-md .ms-panel-header {
  position: fixed !important
}

.hairline {
  border-bottom: 1px solid #f2f2f2
}

.ms-color-link {
  color: #0085f6
}

.ms-detail-row a,
.ms-row a {
  position: relative;
  display: block
}

.ms-sku-row {
  font-size: 13px;
  line-height: 18px
}

.ms-sku-row a {
  position: relative;
  display: block
}

.ms-sku-row p {
  margin-right: 20px
}

.ms-row-floatright {
  position: absolute;
  right: 32px;
  top: 0;
  line-height: 43px;
  display: block;
  white-space: nowrap;
  word-wrap: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 50%;
  text-align: right
}

.ms-arrow {
  position: absolute;
  top: 50%;
  right: 12px;
  font-size: 16px;
  line-height: 1;
  margin-top: -8px
}

.ms-arrow.ms-hide {
  display: none
}

.ms-arrow .ms-icon {
  font-size: 16px
}

.ms-row-title {
  position: relative;
  padding-left: 12px;
  padding-right: 12px;
  height: 44px;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 43px;
  color: #666;
  background-color: #fff
}

.ms-quantity {
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff
}

.ms-quantity .ms-numberic-wrap {
  box-sizing: border-box;
  height: 42px;
  padding: 0 12px 12px
}

.ms-quantity .ms-numberic-wrap .numberic-text {
  color: #999;
  font-size: 12px;
  line-height: 30px
}

.ms-quantity .ms-numberic-wrap .ms-numberic-container {
  display: inline-block
}

.sku-item-title {
  padding: 12px;
  font-size: 15px;
  line-height: 1.2;
  color: #666
}

.sku-item-title .current {
  padding-left: 12px
}

.sku-props {
  border-bottom: 1px solid #f2f2f2;
  box-sizing: border-box;
  padding-left: 12px;
  width: 100%;
  overflow: hidden
}

.sku-props .sku-color,
.sku-props .sku-img,
.sku-props .sku-text {
  display: block;
  box-sizing: border-box;
  border: 1px solid #ddd;
  float: left
}

.sku-props .sku-color.selected,
.sku-props .sku-img.selected,
.sku-props .sku-text.selected {
  border-color: #e62e04
}

.sku-props .sku-color.hide,
.sku-props .sku-img.hide,
.sku-props .sku-text.hide {
  display: none
}

.sku-props .sku-color,
.sku-props .sku-img {
  position: relative;
  width: 36px;
  height: 36px;
  margin-bottom: 12px;
  margin-right: 16px;
  overflow: hidden
}

.sku-props .sku-color .sku-disabled-mask,
.sku-props .sku-img .sku-disabled-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  display: none;
  background-color: #fff;
  background-color: rgba(255, 255, 255, .7);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAP1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d247HA+AAAAFXRSTlMABAkPq8y1nJWOwQy5ocTHr6a9iRKd7aO7AAAAfklEQVRYw+3MxxGAIABFQYwoOdh/rXbA6R2YP2wBaxDH1aHnXc/oybM9D/Mk5vGqj6Meizy76tPsNtcTmSesZ/xU5rmZZ8Oecz2jp4g+Z1nP8Lk1n4o9+1xPYJ6o+jTmsXM9xjrVxyPPQz1J9TmYJzPPq/pcmk/Hnk/yMdTzA61EBwi0ccZkAAAAAElFTkSuQmCC);
  background-size: 100% 100%
}

.sku-props .sku-color img,
.sku-props .sku-img img {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
}

.sku-props .sku-color.disabled .sku-disabled-mask,
.sku-props .sku-img.disabled .sku-disabled-mask {
  display: block
}

.sku-props .sku-color {
  padding: 1px
}

.sku-props .sku-color span {
  display: inline-block;
  width: 32px;
  height: 32px
}


.am-popup-hd {
  height: 56px;
  padding-top: 5px;
}

.am-popup-hd {
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 51px;
  border-bottom: 1px solid #dedede;
  background-color: #fff;
}

.am-popup-hd .am-close {
  left: 9px;
  color: #3A3E4A;
  font-size: 35px;
  opacity: 1;
  font-weight: 400;
  top: 11px;
}

.am-popup-hd .am-close {
  position: absolute;
  right: 10px;
  top: 11px;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  /*color: #999999;*/
}

.am-close {
  display: inline-block;
  text-align: center;
  width: 24px;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .2;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.am-popup-hd .am-popup-title {
  padding-left: 40px;
  text-align: left;
}

.am-popup-hd .am-popup-title {
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 40px;
  text-align: left;
  margin: 0 30px;
  color: #333333;
  display: block;
  word-wrap: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>