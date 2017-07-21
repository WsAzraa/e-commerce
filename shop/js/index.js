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
            mybanner.items.push(info.data[i])
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

 
var mybanner= new Vue({
el:'#mybanner',
data:{
    items:[
   
    ]
}
}) 



});