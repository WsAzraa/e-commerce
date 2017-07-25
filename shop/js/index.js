$(function() {
    // 初始化轮播图


    $.ajax({
        type: 'get',
        url: '/data/banner',
        dataType: 'json',
        success: function(info) {
            console.log(JSON.stringify(info, null, 2));
            app.banners = info.data;
            console.log(app.banners)
        },
        complete: function() {
            setTimeout(function() {

                console.log('初始化')
                $('#myslider').flexslider({
                    playAfterPaused: 0.1,
                    before: function(slider) {
                        if (slider._pausedTimer) {
                            window.clearTimeout(slider._pausedTimer);
                            slider._pausedTimer = null;
                        }
                    },
                    after: function(slider) {
                        var pauseTime = slider.vars.playAfterPaused;
                        if (pauseTime && !isNaN(pauseTime) && !slider.playing) {
                            if (!slider.manualPause && !slider.manualPlay && !slider.stopped) {
                                slider._pausedTimer = window.setTimeout(function() {
                                    slider.play();
                                }, pauseTime);
                            }
                        }
                    },
                    slideshowSpeed: 3000,

                });
            }, 10)
        },
        error: function(info) {
            console.log(info);
        }
    });

    function getData(page) {
        $.ajax({
            type: 'get',
            url: '/getdata',
            data: {
                page: page
            },
            dataType: 'json',
            beforeSend: function() {
                $('.tips').addClass('loading')
            },
            success: function(info) {


                console.log(info);
                $('.tips').attr('data-page', info.page)
                for (var i = 0; i < info.data.length; i++) {
                    app.items.push(info.data[i])
                }

            },
            complete: function() {
                $('.tips').removeClass('loading')
            }
        })


    }

    // 首次数据加载
    getData(1);


    $(window).scroll(function() {

        // console.log($(window).scrollTop())
        // console.log($('.banner').height())
        // console.log($(window).height())
        // console.log($('.banner').offset().top)
        var H = ($('.banner').offset().top + $('.banner').height()) - ($(window).height() + $(window).scrollTop())
        console.log(H)
        if (H <= 10 && !$('.tips').hasClass('loading')) {
            if ($('.tips').hasClass('loading')) {
                return false
            }
            var page = $('.tips').attr('data-page')

            getData(page)

            console.log('显示了')

        }
    })

    downTime()
    var spans = document.querySelectorAll('.time span')
    // 闪购倒计时
    function downTime() {
        var time = 5 * 60 * 60

        // 定时器
        setInterval(function() {
            time--
            //把时间转成时分秒
            var h = Math.floor(time / 3600)
            var m = Math.floor(time % 3600 / 60)
            var s = Math.floor(time % 60)
            // console.log(h)
            // console.log(m)
            // console.log(s)
            // 把时间转成00：00：00的格式
            spans[0].innerHTML = Math.floor(h)
            spans[1].innerHTML = Math.floor(m)
            spans[2].innerHTML = Math.floor(s)
        }, 1000)
    }

});
// Vue 
var app = new Vue({
    el: '#app',
    data: {
        items: [],
        banners: [],
        flash: {
            url: "images/1.jpg_.webp",
            sprice: "USD  18.2",
            oldSprice: "USD 44"
        },
        slides:[
              {
        "icon": "home",
        "item": "Home"
    },
            
        ]

    }
})