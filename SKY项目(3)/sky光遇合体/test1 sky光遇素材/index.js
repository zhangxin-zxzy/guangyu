
for (var i = 0; i < $('.list-a').length; i++) {
    $('.list-a').mouseenter(function (e) {
        e = e || window.event;
        $(this).children('.lside').children('.title').css('backgroundColor', '#fff');
        $(this).children('.lside').children('.title').css('color', '#1f5876');
        $(this).children('.arrows').css('display', 'block');
    })
    $('.list-a').mouseleave(function () {
        // animateSlowOld($(this)[0],0,'left')
        $(this).children('.lside').children('.title').css('backgroundColor', 'transparent')
        $(this).children('.lside').children('.title').css('color', 'white');
        $(this).children('.arrows').css('display', 'none');
    });
}
window.onload = function () {
    $('.cloud').css('display', 'block');
    $('.cloud').animate({
        top: '.469239rem',
        left: '1.903024rem',
    }, 1000)
}
$('.catalog').mouseleave(function () {

    $('.catalog img').stop(true).animate({
        height: 0,
    }, 300)
});
$('.catalog').mouseenter(function () {

    $('.catalog img').stop(true).animate({
       
        height: '3.128259rem'
    }, 300)
});

$('.main .head .newest').css('background', '#fff')
$('.main .head .newest').css('color', 'skyblue')




/*实现底部栏鼠标移入移出效果
把文字的bottom向上移动和图片高度进行设置实现效果
P标签文字里的上下箭头尚未实现 */
$('.footr').mouseenter(function () {

    $('.foot-nav img').stop(true).animate({
        height: 73,
    })



    $('.footr .slideup').stop(true).animate({

        bottom: 73,
    })

    $('.footr .slideup p').css('background','url(./素材/上箭头.png) no-repeat  right')
})


$('.footr').mouseleave(function () {

    $('.foot-nav img').stop(true).animate({
        height: 0,

    })

    $('.footr .slideup').stop(true).animate({

        bottom: 0,
    })

    $('.footr .slideup p').css('background','url(./素材/下箭头.png) no-repeat  right');
})