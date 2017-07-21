var app = new Vue({
    el: '#app',
    data: {
        banners: [
            { url: "http://s.amazeui.org/media/i/demos/bing-1.jpg" },
            { url: "http://s.amazeui.org/media/i/demos/bing-2.jpg" },
            { url: "http://s.amazeui.org/media/i/demos/bing-3.jpg" },
            { url: "http://s.amazeui.org/media/i/demos/bing-4.jpg" }
        ]
    }
})
var showList = new Vue({
    el: '#showList',
    data: {
        introduce: '10 pieces = 5 pairs Musim Semi musim panas Bendera Inggris selamat harajuku Kapas sandal Pria lucu colorful Terlihat Kaus Kaki Pendek laki-laki jalan',
        sprice: 'US $5.49',
        oldsprice: 'US $6.99',
        sell: '-15%',
        feedBacks: 4.8,
        orders: 30,
        wish: 72
    }
})
var talk = new Vue({
    el: '#talk',
    data: {

        items: [{
                touxiang: 'assets/i/favicon.png',
                name: '吴亦凡',
                date: '02 Jul 2017',
                content: '每个人都有一个死角， 自己走不出来，别人也闯不进去。'
            },
            {
                touxiang: 'assets/i/favicon.png',
                name: '吴亦凡',
                date: '03 May 2017',
                content: '每个人都有一个死角， 自己走不出来，别人也闯不进去。'
            }
        ]
    }
})

var recommend = new Vue({

    el: '#recommend',
    data: {
        items: [{
                url: './assets/i/app-icon72x72@2x.png',
                title: 'US $19.00'
            },
            {
                url: './assets/i/app-icon72x72@2x.png',
                title: 'US $19.00'
            },
            {
                url: './assets/i/app-icon72x72@2x.png',
                title: 'US $19.00'
            },
            {
                url: './assets/i/app-icon72x72@2x.png',
                title: 'US $19.00'
            }
        ]
    }
})