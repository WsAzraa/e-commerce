$(function () {

function getData(page){
    $.ajax({
        type:'get',
        url:'/getdata',
        data:{page:page},
        dataType:'json',
        beforeSend:function(){
            $('.tips').addClass('loading')
        },
        success:function(info){
            console.log(info);
            $('.tips').attr('data-page',info.page)
            for (var i=0; i<info.data.length;i++) {
            app.items.push(info.data[i])
            }
        },
        complete:function(){
            $('.tips').removeClass('loading')
        }
    })
}

// 首次数据加载
getData(1);


$(window).scroll(function(){

// console.log($(window).scrollTop())
// console.log($('.banner').height())
// console.log($(window).height())
// console.log($('.banner').offset().top)
var H=($('.banner').offset().top+ $('.banner').height()) - ($(window).height()+$(window).scrollTop())
console.log(H)
      if(H<= 10 && !$('.tips').hasClass('loading')) {

        var page =$('.tips').attr('data-page')

        getData(page)
        
        console.log('显示了')
      
      }
})






});
 // Vue 
var app= new Vue({
el:'#app',
data:{
    items:[],
    banners:[
    {url:"http://s.amazeui.org/media/i/demos/bing-1.jpg"},
    {url:"http://s.amazeui.org/media/i/demos/bing-2.jpg"},
    {url:"http://s.amazeui.org/media/i/demos/bing-3.jpg"},
    {url:"http://s.amazeui.org/media/i/demos/bing-4.jpg"}
    ],
    flash:{
        url:"images/1.jpg_.webp",
        sprice:"USD  18.2",
        oldSprice:"USD 44"
    }
    
}
}) 
