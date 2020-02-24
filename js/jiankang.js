$(window).scroll(function() {
    if ($(this).scrollTop() > 1.2 * $(this).height()) {
        $('.mui-scrollspy-iscroll').scrollLeft($('.mui-scrollspy-iscroll>ul').width() * ($(this).scrollTop() / $(document).height()));
    }
});