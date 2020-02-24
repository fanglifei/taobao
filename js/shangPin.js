//轮播图
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    speed: 1000,
});
//视频
var video=document.querySelector(' video')
$('.app-video').click(function() {
    $('video').css({
        'display': 'block',
        'zIndex': '10000',
    });
	 video.play(); 
    $('.navi-bar').css('display', 'none');
});