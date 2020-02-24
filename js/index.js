// 返回顶部
$('.hHxDFx').on('touchend', function() {
    var T = $(window).scrollTop();
    var t = setInterval(function() {
        if (T < 0) {
            clearInterval(t);
        } else {
            T -= 50;
            $(window).scrollTop(T);
        }
    }, 13);
});

//轮播图
 var mySwiper = new Swiper ('.swiper-container', {
	direction: 'horizontal', // 切换选项
	loop: true,// 循环模式选项
	speed: 1000,
	autoplay:true,
	// 如果需要分页器
	pagination: {
	  el: '.swiper-pagination',
	},
	// 如果需要滚动条
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	// },
});
//滑动
var sro=document.querySelector('.ALWfo');
var iLINIY=document.querySelector('.iLINIY');
var scDnqmqq=document.querySelector('.sc-dnqmqq');
var scIwsKbI=document.querySelector('.sc-iwsKbI');
sro.onscroll=function(){
	var x=sro.scrollLeft;
	var mgnL=parseInt($(iLINIY).css('marginLeft'));
	var w=parseInt($(iLINIY).css('width'));
	var reg=x/((w)*4.5);
	var maxW=parseInt($(scDnqmqq).css('width'))-parseInt($(scIwsKbI).css('width'));
	$(scIwsKbI).css('transform','translateX('+maxW*reg+'px)');
}