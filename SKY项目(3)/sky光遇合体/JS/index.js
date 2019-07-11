

var wrap = document.querySelector('.wrap')
var open_video = document.querySelector('.open_video');
var openVideo = document.getElementById('openVideo');
var loopVideo = document.getElementById('loopVideo')
var hire = 0;
var audio = document.querySelector('audio')
var music = document.querySelector('.music')
var tm = setTimeout(function () {
    $('.topBar').fadeIn()
    clearTimeout(tm)

    $('.swiper-container').hide();

}, 2000)

// console.log($('.QR>audio'));

// $('.QR>audio')[0].autoplay();

// 起始视频结束事件
// document.querySelector('.music').children.onclick = function () {
//     console.log(audio.paused);
//     console.log(audio);

//     if (audio.paused) {
//         audio.play();
//     } else {
//         audio.pause()
//     }
// }
// console.log(audio);
// document.onclick = function () {
//     setTimeout(function () {
//         audio.play();
//     }, 3000)


// }


music.onclick = function () {
    if ($('.ctrls .music i').css('animationPlayState') == 'paused') {
        $('.ctrls .music i').css('animationPlayState', 'running')
        audio.play();


    } else {
        $('.ctrls .music i').css('animationPlayState', 'paused')
        audio.pause();


    }
}


// document.onclick = function () {
//     $('audio')[0].play();
// }
openVideo.onended = function () {


    // part1部分
    document.body.removeChild(open_video)
    loopVideo.play();
    wrap.style.display = 'block';

    // var loopH = setInterval(function(){
    //     $('.videoBtn').animate({
    //         backgroundPosition: -86,

    //     })
    // },1000)
    // 火焰动画
    var loopFire = setInterval(function () {
        hire++
        if (hire == 4) {
            hire = 0;
        }
        $('.videoBtn>i').eq(hire).show().siblings().hide();
    }, 100)

    // $('.videoBtn').mouseenter(function(){
    //     clearInterval(loopFire)

    // })
    // $('.videoBtn').mouseleave(function(){
    //      loopFire = setInterval(function(){
    //         hire ++
    //         if (hire == 4) {
    //             hire = 0;
    //         }
    //         $('.videoBtn>i').eq(hire).show().siblings().hide();
    //     },100)

    // })

    $('.videoBtn').click(function () {
        $('.popup').show();
        $('.popup_bg').show();
        $('.popup video')[0].play()
        $('.pause').hide()
    })
    $('.popup video').on('click', function () {
        $('.popup video')[0].pause();
        $('.popup .pause').show();
    })
    $('.popup .pause').on('click', function () {
        $('.popup .pause').hide();
        $('.popup video')[0].play();

    })
    $('.popup .close').on('click', function () {
        $('.popup_bg').hide()
        $('.popup').hide();
        $('.popup video')[0].pause();
    })




    $('.logo').fadeIn(500, function () {
        $('.nav_right').animate({
            right: 0,
            opacity: 1,
        }, 700, function () {
            $('.slogan').animate({
                top: 120,
                opacity: 1,
            }, 700)

            $('.video_btn_box').animate({
                top: 400,
                opacity: 1,
            }, 700, function () {
                $('.download').animate({
                    top: 610,
                    opacity: 1,
                }, 800)
            })
        })
    })
    $('.ctrls').animate({
        opacity: 1
    }, 500)
}

// part2 部分

// 轮播图呼吸动画

var idx = 0;
var textTitle = document.querySelector('.text_title')
// console.log(textTitle);


var timerID = setInterval(function () {
    idx++
    if (idx == $('.new_right>ul>li').length) {
        idx = 0;
    }
    // console.log( $('.new_right>ul>li').eq(idx)[0].children[0].getAttribute('title'));

    var txt = $('.new_right>ul>li').eq(idx)[0].children[0].getAttribute('title');
    textTitle.innerHTML = txt;
    $('.new_right>ul>li').eq(idx).fadeIn().siblings().fadeOut(250);
}, 3000);


// 新闻栏部分
$('.text>li').mouseenter(function () {
    // var index = $('this')
    $(this).siblings().children('a').stop(true).animate({
        marginLeft: 0,
    }, 200)
    $(this).children('a').stop(true).animate({
        marginLeft: 12,
    }, 200)
})
$('.text>li').mouseleave(function () {
    $(this).children('a').stop(true).animate({
        marginLeft: 0,
    }, 200)
})

var tip1 = 1;
var flag = true;

//鼠标滑动切换界面
document.documentElement.onwheel = function (e) {
    e = e || window.event;
    console.log(e.wheelDelta);
    console.log(flag);



    if (e.wheelDelta == -120) {
        tip1++
        if (tip1 >= 4) {
            tip1 = 3
            return;
        }
        // console.log(tip1);

        // $('.part1').children('.slogan').fadeOut(1000, function () {
        //     $('.part1').children('.download').fadeOut(1000,function(){
        //         $('.part1').fadeOut();
        //     })
        // })
        // $('.part2').fadeIn(1500)
        if (tip1 == 2 && flag == true) {
            flag = false;
            $('.p1_1').animate({
                marginTop: -30,
                opacity: 0,
            }, 500, function () {
                $('.download').animate({
                    marginTop: -40,
                    opacity: 0,
                }, 500, function () {
                    $('.part1').hide(10, function () {



                        $('.news_title').animate({
                            top: 90,
                            opacity: 1,
                        }, 2300)
                        $('.part2').show(1000, function () {
                            $('.new_left').animate({
                                top: 290,
                                opacity: .7,
                            }, 1800)
                            $('.new_right').animate({
                                top: 350,
                                opacity: 1,
                            }, 2600)
                        });

                        $('.loop_video').fadeOut(2000);
                        $('.tree_right').fadeIn(2300);
                        $('.tree_left').fadeIn(2800);
                        $('.main-bg').fadeIn(2000);

                        tip1 = 2;
                        flag = true

                    })
                })
            })

        }
        if (tip1 == 3 && flag == true) {
            flag = false;

            $('.news_title').animate({
                top: 10,
                opacity: 0

            }, 500)
            $('.new_left').stop().animate({
                top: 160,
                opacity: 0,
            }, 800);
            $('.new_right').stop(true).animate({
                top: 220,
                opacity: 0,
            }, 1300)
            $('.tree_left').animate({
                top: -400,

            }, 1500)
            $('.tree_right').animate({
                top: -400,

            }, 1800, function () {
                $('.part2').hide(10, function () {

                    $('.part3').show();

                    $('.part3 .centre').animate({
                        top: 80,
                        opacity: 1,

                    }, 1000)

                    $('.swiper-container').animate({
                        marginTop: 80,
                        opacity: 1,


                    },2000);
                    $('.swiper-container').show();
                });
            })



            tip1 = 3;
            flag = true;

        }

    }
    if (e.wheelDelta == 120) {
        tip1--;
        if (tip1 <= 0) {
            tip1 = 1;
            return;
        }
        if (tip1 == 1 && flag == true) {
            $('.new_right').animate({
                top: 350,
                opacity: 0,
            }, 200, function () {
                $('.new_left').animate({
                    top: 280,
                    opacity: 0,
                }, 200, function () {
                    $('.news_title').animate({
                        top: 80,
                        opacity: 0,
                    }, 200, function () {
                        $('.tree_left , .tree_right').fadeOut(250, function () {
                            $('.main-bg').fadeOut(1000)
                            // $('.main-bg').hide();

                            loopVideo.play();
                            // $('.loop_video>video')[0].style.transform = 'scale(1)';
                            $('.loop_video').fadeIn(1000, function () {

                                $('.part1').show()
                                $('.p1_1').animate({
                                    marginTop: 0,
                                    opacity: 1
                                }, 1000, function () {
                                    $('.download').animate({
                                        marginTop: 0,
                                        opacity: 1,
                                    }, 500)
                                })
                            })
                            $('.part2').hide()
                            tip1 = 1;
                            flag = true;




                        })

                    })
                })
            })

        }
        if (tip1 == 2 && flag == true) {
            $('.part3 .centre').animate({
                top: 100,
                opacity: 0,
            }, 500)
            $('.swiper-container').animate({
                marginTop: 300,
                opacity: 0,
            }, 500, function () {
                $('.swiper-container').hide()
                $('.part3').hide(50, function () {
                    flag = false;
                    $('.tree_right').animate({
                        top: -102,
                        opacity: 1,
                    }, 800)
                    $('.tree_left').animate({
                        top: -108,
                        opacity: 1,
                    }, 800)
                    $('.new_right').animate({
                        top: 350,
                        opacity: 1,
                    }, 1800)
                    $('.new_left').animate({
                        top: 280,
                        opacity: 1,
                    }, 2200)
                    $('.news_title').animate({
                        top: 80,
                        opacity: 1,

                    }, 2500)
                    $('.part2').show();
                    tip1 = 2;
                    flag = true;

                })
            })



        }

    }
    // console.log(tip1);


}

$('.topNav').mouseenter(function () {
    $('.moreNav').stop(true).slideDown()
})
$('.moreNav').mouseleave(function () {
    $('.moreNav').stop(true).slideUp()
})

// 火焰燃烧效果


// 底部通栏

$('.footr').mouseenter(function () {

    $('.foot-nav').stop(true).animate({

        height: 116,

    })

    $('.footr .slideup').stop(true).animate({

        bottom: 116,
    })
    console.log($('.slideup>p'));

    // $('.slideup>p').css('background','url(../images/main/上箭头.png) no-repeat right')
    // $('.slideup>p').css('background', 'url(上箭头.png) no-repeat  right')
    $('.slideup>p').removeClass('slide2');
    $('.slideup>p').addClass('slide3')
})


$('.footr').mouseleave(function () {

    $('.foot-nav').stop(true).animate({

        height: 0,
    })

    $('.footr .slideup').stop(true).animate({

        bottom: 0,
    })

    // $('.footr .slideup p').css('background', 'url(../images/main/下箭头.png) no-repeat  right');
    $('.slideup>p').removeClass('slide3');
    $('.slideup>p').addClass('slide2')
})



// part3

var swiper = new Swiper('.swiper-container', {
    // 滑动范围
    slidesPerView: 3,
    // 间距
    spaceBetween: 27,
    // 居中
    centeredSlides: true,
    // 无限轮播
    loop: true,


});






