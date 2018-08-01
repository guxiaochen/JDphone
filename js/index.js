$(function () {
    // 轮播图
    (function () {
        var index = 0;
        var timer;
        // 最后一个克隆到第一个
        var clone = $('.jd_banner_img li').first().clone();
        $('.jd_banner_img').append(clone);
        var imglength = $('.jd_banner_img li').length;
        var width = $('.jd_banner_img li:first-child').width();
        auto();
        function auto() {
            timer = setInterval(function () {
                banner();
            },3000)
        }
        function banner() {
            ++index;

            if(index == imglength){
                $('.jd_banner_img').css({'left':0});
                index = 0;
            }
            $('.jd_banner_img').stop().animate({'left':-width*index},1000);
            // if(index == imglength-1){
            //     $('.jd_banner_dotted ul').find('li').eq(0).addClass('col').siblings().removeClass('col');
            // }else {
                $('.jd_banner_dotted ul').find('li').eq(index).addClass('col').siblings().removeClass('col');
            // }
        }
    })();
})