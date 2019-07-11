// 点击关闭 隐藏二维码 显示侧目栏
$('#close').click(function () {
    $('.sildeBar').animate({
        right: -400
    }, 1500)
    $('.sideBar').animate({
        right: 3
    }, 1500)
})
// 点击侧目栏  隐藏侧目栏 显示二维码
$('.sideBar').click(function () {
    $(this).animate({
        right: -200
    }, 1500)
    $('.sildeBar').animate({
        right: -200
    }, 1500)
})
// 当界面一打开的时候 就开始动画
$(function () {
    setTimeout(function () {
        $('html').stop(true).scrollTop(0);
    }, 200)
    $('.logo>a').css({
        transform: 'translateY(-250px)',
        opacity: 1
    })
    $('.title2').css({
        transform: 'translateY(-150px)',
        opacity: 1
    })
    $('.title3').css({
        transform: 'translateY(-50px)',
        opacity: 1
    })

    setTimeout(function () {
        $('html').animate({
            scrollTop: 800
        }, 2000)
    }, 3000)
    // setTimeout(function () {
    //     $('html').animate({
    //         scrollTop: 800
    //     }, 2000)
    // }, 3000)
    $('.Black1').css({
        transform: 'translateY(-150px)',
        opacity: 1
    })
    $('.Black2').css({
        transform: 'translateY(-150px)',
        opacity: 1
    })
    $('.Black3').css({
        transform: 'translateY(-150px)',
        opacity: 1
    })
    $('.Yellow1').css({
        transform: 'translateY(-150px)',
        opacity: 1
    })
    $('.decoration').css({
        transform: 'translateY(-150px)',
        opacity: 1
    })
    $('.Yellow2').css({
        transform: 'translateY(-150px)',
        opacity: 1
    })
    $('.send').css({
        transform: 'translateY(-10px)',
        opacity: 1
    })
    // setTimeout(function () {
    //     $('.footImg').css({
    //         marginTop: -800
    //     })
    // }, 4000)
    $('.sildeBar').css({
        transform: 'translateX(-208px)',
        opacity: 1
    })
    $('.sildeBar').animate({
        right: -200,
    }, 1500);

})



// 当鼠标点击开始发送按钮时 弹出登录界面
$('.send').click(function () {
    $('.login').fadeIn(1000)
    $('.gai').fadeIn(1000)

})
$('.close-login').click(function () {
    $('.login').fadeOut(1000)
    $('.gai').fadeOut(1000)
})
$('.test').click(function () {
    $('.yuyue').fadeIn(1000)
    $('.gai').fadeIn(1000)

})
$('.close-yuyue').click(function () {
    $('.yuyue').fadeOut(1000)
    $('.gai').fadeOut(1000)
})



var footImg = document.querySelector('.footImg');

footImg.onwheel = function (e) {
    var current = document.documentElement.scrollTop;
    var top = document.querySelector('.footImg').offsetTop;
    console.log(e.wheelDelta);

    console.log(current);
    console.log(top);
    if (e.wheelDelta < 0) {
        // $('.footImg').stop(true).animate({
        //     marginTop: '-800px'
        // })
        if (current < 800 && top >= 0) {
            $('html').stop(true).animate({
                scrollTop: 800 + "px"
            }, 2000)

        } else if (current >= 800 && top >= 0) {
            $('.footImg').stop(true).animate({
                marginTop: '-1000px'
            }, 1000)

        } else if (top < 0 && top >= -700) {
            $('.footImg').stop(true).animate({
                marginTop: '-1200px'
            }, 1000)
        } else if (top < -700 && top >= -1200) {
            $('.footImg').stop(true).animate({
                marginTop: '-1300px'
            }, 1000)
        }
    } else {

        if (current >= 0 && top >= 0) {
            $('html').stop(true).animate({
                scrollTop: 0 + "px"
            }, 2000)
        } else if (top < 0 && top >= -900) {
            $('.footImg').stop(true).animate({
                marginTop: '0'
            }, 1000)
        } else if (top < -900 && top > -1200) {
            $('.footImg').stop(true).animate({
                marginTop: '-1000px'
            }, 1000)
        } else if (top <= -1200 && top > -1500) {
            $('.footImg').stop(true).animate({
                marginTop: '-1200px'
            }, 1000)
        }


    }
}

var index = 0;
$('.ti').mouseenter(function () {
    index++;
    $(this).children('.slide').children('.more').css('display', 'block');
    // $(this).children()
    $(this).css('z-index', index);
    $(this).css('opacity', 1)

});

$('.ti').mouseleave(function () {

    $('.ti').children('.slide').children('.more').css('display', 'none');
    // $(this).children()
    $(this).css('opacity', ranNum)
});




// $('.ask_con .ti').css({
//     'left': 0,
//     'top': 0
// });


// $('.ask_con').css('display','none');
// $('.ask_con').hide();
// 

var tiS = $('.ask_con .ti');
var tiS2 = $('.ask_con2 .ti');
var tiS3 = $('.ask_con3 .ti');


var posArr = [{
    'left': 0,
    'top': 0
}, {
    'left': 216,
    'top': 187
}, {
    'left': 400,
    'top': 10
}, {
    'left': 442,
    'top': 190
}, {
    'left': 660,
    'top': 32
}, {
    'left': 933,
    'top': 51
}, {
    'left': 1356,
    'top': 84
}, {
    'left': 560,
    'top': 438
}, {
    'left': 726,
    'top': 300
}, {
    'left': 826,
    'top': 482
}, {
    'left': 1123,
    'top': 392
}, {
    'left': 1400,
    'top': 287
}, {
    'left': 1362,
    'top': 442
}, {
    'left': 930,
    'top': 279
}];

var num111 = Math.random();


for (var i = 0; i < posArr.length; i++) {

    $(tiS[i]).css('left', posArr[i]['left']);
    $(tiS[i]).css('top', posArr[i]['top']);
    // var str111 = 'bounceInLeft';
    // $(tiS[i]).css('animation',str111);
    $(tiS2[i]).css('left', posArr[i]['left']);
    $(tiS2[i]).css('top', posArr[i]['top']);
    $(tiS3[i]).css('left', posArr[i]['left']);
    $(tiS3[i]).css('top', posArr[i]['top']);

}

$('.ask_con').show();



for (var i = 0; i < tiS.length; i++) {

    // var leftList = $(tiS[i]).css('left');
    // var topList = $(tiS[i]).css('top');

    ranNum = Math.random() + 0.3;

    ranNum2 = Math.random() + 0.3;

    ranNum3 = Math.random() + 0.3;

    // console.log(ranNum);
    // console.log(ranNum2);
    // console.log(ranNum3);

    $(tiS[i]).css('opacity', ranNum);
    $(tiS2[i]).css('opacity', ranNum2);
    $(tiS3[i]).css('opacity', ranNum3);



    // $(tiS[i]).css('left', leftList[i]);
    // $(tiS[i]).css('top', topList[i]);





    var imgS = Math.floor(Math.random() * 6 + 1);

    var imgS2 = Math.floor(Math.random() * 6 + 1);

    var imgS3 = Math.floor(Math.random() * 6 + 1);


    $(tiS[i]).css('backgroundImage', 'url(./对话陈星汉/' + imgS + '.png' + ')');

    $(tiS2[i]).css('backgroundImage', 'url(./对话陈星汉/' + imgS2 + '.png' + ')');
    $(tiS3[i]).css('backgroundImage', 'url(./对话陈星汉/' + imgS3 + '.png' + ')');
}








var arr1 = [
    '从小就喜欢宫崎骏的动画，他说过是把自己想的画出来而已，或许风之旅人，sky光遇是你心中想要表达的情感，我也想秉承自己的想法，但现在反而做了这一行，现实又把我内心最喜欢的藏在了心里，从小对那种迷你世界的喜欢，对大海神秘的向往，陈星汉老师，比起天空大海其实也是自由的，世界可以放大很多倍或是缩小很多倍来看，我可能有生之年遇不见那样的游戏了，沙海云海花海....下一个游戏，可以做一个真的海吗，渺小而伟大。',
    '游戏的主要玩法是什么？',
    '关于这个游戏，您真正想传递的理念是什么呢？', '陈老师最终想要做出一个什么样的光遇？',
    '是陈星汉独立开发吗？网易只是代理，对吗',
    '陈星汉老师 您好 既然这个游戏您认为可以玩家之间互相取得温暖 那么 您希望玩家从您这个游戏的想法和理念或者从您对于这个游戏倾注的东西里面得到什么呢？',
    '陈老师，您好。我是从去年八月份开始关注光遇这个特别的游戏的，刚开始看到光遇的宣传片的时候，感触真的很大，从峡谷中走出来看见广阔的天空然后滑翔在天空中，那种感觉真的很棒。现在和朋友一起玩了大概快半年了，但是我觉得似乎曾经让我感动，让我沉醉的那片天空似乎正在离我远去。我知道改变总是困难的，尤其是当大家都在期待着的时候，所以我想问一下陈老师，请问您和您的团队是如何平衡光遇的改动和玩家的反馈这两个点？',

    '陈老师最终想要做出一个什么样的光遇？',

    '你是怎么创造出梦境一般的场景，游戏画风很唯美，玩法也是很独特，可以与世界上另外一个不认识的人一起玩耍，个人认为这是所有手游里最好的',

    '陈老师您好，我非常喜欢光遇里的乐器系统，想知道当时您是为什么突然想在游戏里放入这个系统呢？后续还会针对这个系统出更多的乐器吗？',

    '我還是不太懂這是啥類型的遊戲，可以大概說一下嗎',

    '从风之旅人到光遇，从主机到手游，光遇目前是你心中应该是的样子吗，是否有些无奈，和妥协，如果给你一次重来的机会，光遇还会是现在的样子吗？',

    '星汉大大，我是国内一所普通一本院校的大三学生，希望以后能像星汉大大一样造出这些unbelievable的游戏。但是我现在遇到了一个困境，我身边有很多考研的，我不知道是选择考专硕的研究生然后工作，还是选择直接在游戏公司工作，星汉大大能给我一点建议吗？',

    '请问这款游戏什么时候上架？能发个公告吗？我已经迫不及待的想体验这款游戏了。 (* ⁰̷̴͈꒨⁰̷̴͈)=͟͟͞͞➳❤'
];

var ans = ['其实我内心已经有一个想法，但是目前还不方便透露：）可以期待一下',
    '在一个遥远的国度，在云上，有一个天空中的王国。主人公（玩家）会以一个孩童的形象苏醒。（当然也希望同时有更多的玩家一起醒来）主人公会探索这充满神秘的王国，在这个过程中人与人之间会邂逅、互相保护、互相帮助，才能解开这个王国的秘密。',
    '希望能够做一款情感上比较创新，能够打动玩家的游戏。',
    '这款游戏主要是由我们thatgamecompany团队去开发，网易会提供一些其他的协助。',
    '我希望玩家在玩这个游戏之后可以体会一些到人和人之间的温暖，从而产生对别人的一种感激。因为做这款游戏是我对于很多玩家的感激而引发的',
    '如果你说的是飞行控制，最新的这个版本会比原来的更接近自由感。我们的控制并没有打算 夺走玩家对飞翔的那种梦想。如果你说的是剧情上的新鲜感，是因为玩了时间久了之后，对这个世界就不再有新鲜感，这一点的话那就只有等我们更新了，才能再次体会到探索的感觉。',
    '我考虑至少在一两年内继续在游戏里加东西，会有更多的互动，特别是计划增加多人游戏模式中的互动。最终，我是希望SKY这个世界能够更加完整，故事更加丰满，具体细节的话我就暂时不剧透了。',
    '',
    '其实我自己是不会音乐的人，所以我是想不出这个主意的。我们的团队里有一位音效设计师Ritsu和一位情感工程师Johh，他们两个人都喜欢弹乐器。有次John在新加坡的公寓里拉小提琴，跟住在楼上的弹钢琴的人合奏了一曲。虽然两个人不认识，语言也不通，但是感觉到有默契。他们两个是在我不知情的情况下把乐器系统做进去的，所以都是他们的功劳。 后续应该还会有更多的乐器，以及多人演奏模式，还有想要做编曲的想法，现在就是看各种不同功能的重要性。 如果你们音乐爱好者有什么想法和建议，请不要吝啬，因为我是没有这个技能，希望你们能向我们团队提出更多的想法',
    '怎么说呢，其实我比较倾向于对游戏的体验去感受一款游戏。你可以想象在一个遥远的国度，在云上，有一个天空中的王国。你会以一个孩童的形象苏醒（当然也希望同时有更多的玩家一起醒来），然后会探索这充满神秘的王国，在这个过程中人与人之间会邂逅、互相保护、互相帮助，解开这个王国的秘密。',
    '手机这个性能只能达到这样，还不能达到主机级别的画面；但是将来会有主机的移植版，会呈现出更好的画面。但即便是这样，如果让我重来一次，我还是会选择手机。',
    '要看是什么公司，如果这个公司是特别大的公司，进去以后做的职务和游戏没有相关的，我觉得反而是浪费光阴，你如果真的想做游戏制作人，第一，读书的时候读游戏专业，这样就可以在毕业之前就可以做自己的产品，甚至可以拿出来放到Steam上卖。但如果你没法读游戏专业，在游戏公司工作是最好的可以学习游戏制作的方法，在那个情况下我会选择去游戏公司。',
    '今年6月就会在App Store上线，谢谢你的期待~'
]

var word1 = $('.ask_con .con .word');
var word2 = $('.ask_con2 .con .word');
var word3 = $('.ask_con3 .con .word');
for (var i = 0; i < arr1.length; i++) {

    $(word1[i]).html(arr1[i]);

    $(word2[i]).html(arr1[i]);

    $(word3[i]).html(arr1[i]);

    // console.log(word[i]);

}

// $('.sec3 li').click(function () {
//     $(this).css({'backgroundColor':'#fff',
//     'color':' #62a1c9'}).siblings().css('color','#fff')
//   })

//   $('.sec3 li').mouseenter(function () { 
//       $(this).css('backgroundColor','#fff')
//    })

//    $('.sec3 li').mouseleave(function () { 
//     $('.sec3 li').css({'color':'#62a1c9','background':'#fff'})
//  })








$('#so').click(function () {
    $('.ask_con').fadeIn().siblings().fadeOut();
});

$('#hot').click(function () {
    $('.ask_con2').fadeIn().siblings().fadeOut();

});


$('#new').click(function () {
    $('.ask_con3').fadeIn().siblings().fadeOut();
});

// $('.footImg .sec3 ul li').mouseenter(function () { 
//     $(this).css({'backgroundColor':'#fff',
// 'color':'#62a1c9'}).siblings().css({'color':'#fff','backgroundColor':'transparent'})});

$('.footImg .sec3 ul li').click(function () {
    $(this).css({
        'backgroundColor': '#fff',
        'color': '#62a1c9'
    }).siblings().css({ 'color': '#fff', 'backgroundColor': 'transparent' })
});


//  $('.footImg .sec3 ul li').mouseleave(function () {
//     $('.footImg .sec3 ul li').css({'color':'#fff','backgroundColor':'transparent'})
//    })


var index = 0;


$('.footImg .sec3 .change').click(function () {
    // var index = $('.footImg .sec3 li').index();



    index++;

    //总共8张，下标只能到7
    if (index == $('.footImg .sec3 li').length) {
        index = 0; //显示第0张
    }

    $('li').eq(index).stop(true).fadeIn().siblings().fadeOut();


    console.log(index);

})