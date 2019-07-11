
var ul1 = document.querySelector('.ul1')
var ul2 = document.querySelector('.ul2')
var ul3 = document.querySelector('.ul3')
var ul4 = document.querySelector('.ul4')
var ul5 = document.querySelector('.ul5')
var ul6 = document.querySelector('.ul6')

var X1 = ul1.scrollWidth / 40;
var Y1 = ul1.scrollHeight / 54;

var X2 = ul2.scrollWidth / 60.5;
var Y2 = ul2.scrollHeight / 54.8;

var X3 = ul3.scrollWidth / 40;
var Y3 = ul3.scrollHeight / 60;

//建立坐标数组
var Xone = ['3', '31.8', '30', '22', '1', '36', '11.5', '31', '6', '26.4'];
var Yone = ['.4', '9', '19.5', '26', '31.8', '32.2', '38.5', '52', '49.8', '41'];

var Xtwo = ['8', '11', '55', '50.2', '30.8', '30.5', '0', '9.6', '47.5', '62.5'];
var Ytwo = ['4.5', '3', '.6', '3.5', '26.6', '45', '53.7', '53.4', '44.5', '53.8'];

var Xthree = ['-1.2', '2.8', '4', '19.5', '13.5', '25.6', '19.1', '19', '35.8', '37.9'];
var Ythree = ['29', '41.8', '53', '41.5', '32.2', '31.3', '25.1', '5', '54.2', '29'];

var cont1 =['微博@一春卷儿一','微博@Juunnnne','抖音skyguangyu@Sky小光','微博@未完请待续0621',
'罡斩大叔@Sky光遇','抖音刘大宁58675743','微博 @哼唧噗呲','微博@暗钙','微博：I佳林_','微博@桐匏'
]

var cont2 = ['希望大家都能遇到温暖的灵魂，且长久陪伴。','我想要每一次旅程都不在孤独',
'想在游戏里听一场《天空之城》的演奏会','希望621登录游戏可以有个桌子。','烛光虽小 但可以照亮黑暗 愿每个人都被世界温柔以待 也希望自己的生活可以更好 特别鸣谢玩家阿蓦以及游戏里的小伙伴们 爱你们 爱自己 爱世界',
'希望我的声音能够被听见 微弱又渺小。 希望能够在有限的时间实现自己的价值 尽管微不足道。 希望可以有能够爱家人的能力 不管是物质还是精神。 希望不论何时都能够有不放弃的决心 尽管前路坎坷。 希望能够在sky中遇见 无论是转瞬即逝，体会美好',
'希望世界没有加班呢','希望有一天我能像陈星汉老师一样，做出令人惊艳的，能称之为艺术的游戏作品。',
'我想要游戏里所有的披风！！！！！！！！！','希望可以考上研！'
]

var cont3 = ['出了bug','怀疑人生','开始想死','不知所措','慌的一匹','我是垃圾','我想回家',
'搬砖赚钱','我敲个锤子','活着就行'
]

//循环生成点点函数
function getDots(num, tarGet, XX, YY, cont, contt, conttt) {
    for (var i = 0; i < num; i++) {
        var li = document.createElement('li');
        li.className = 'ponint';
        li.style.left = XX[i] * X1 + 'px';
        li.style.top = YY[i] * Y1 + 'px';
        // li.style.zIndex = '1';
        //添加
        tarGet.appendChild(li);

        //生成div
        var box = document.createElement('div');
        box.className = 'label';
        box.style.zIndex = '1'
        box.style.left = XX[i] * X1 + 30 + 'px';
        box.style.top = YY[i] * Y1 + 10 + 'px';
        box.innerHTML = '<div class = "tou">' + cont[i] +  '</div><span>' + contt[i] +'</span><div class = "zan">'+ conttt[i] +'<i class = "zani"></i><span class = "zanspan"></span></div>'
        
        //给box加一个移出事件
        // box.onmouseout = function(e){
        //         console.log(e.target.hodeName);
                
        // }

        tarGet.appendChild(box)

    }
}


//调用
getDots(10, ul1, Xone, Yone, cont1,cont2,cont3);
getDots(10, ul2, Xtwo, Ytwo, cont1, cont2, cont3);
getDots(10, ul3, Xthree, Ythree, cont1, cont2, cont3);
getDots(10, ul4, Xone, Yone, cont1, cont2, cont3);
getDots(10, ul5, Xtwo, Ytwo, cont1, cont2, cont3);
getDots(10, ul6, Xthree, Ythree, cont1, cont2,cont3);



$('.xiao:eq(2)').siblings().css('opacity', '.8');
$('.ul3').addClass('zoom').children('li').addClass('bounce');


//鼠标移入事件
$('.ul3').children('.ponint').mouseenter(function () {
    $(this).removeClass('bounce').addClass('largen')
    $(this).siblings('div').css('display', 'none').end().next().fadeIn(100)

})
//鼠标移出
$('.ul3').children('.ponint').mouseleave(function () {
    $(this).removeClass('largen').addClass('bounce')
    $(this).siblings('div').removeClass('bounce').fadeOut(1000)
})


$('#prve').click(function () {
    
    
    //显示jiedai
    $('.xiao').each(function (index, ele) {

        //获取每个div的left
        var getleft = parseInt($(ele).css('left'))
        // 每个div的移动
        $(ele).animate({
            left: getleft - 400,
        }, 1000, function () {
            // console.log(1);

            if (parseInt($(this).css('left')) <= -800) {
                $(this).css('left', 1600)

            }
        })
        if (parseInt($(ele).css('left')) == 800) {
            $(ele).children().addClass('zoom')
            $(ele).siblings().children().removeClass('zoom')

            $(ele).css('opacity', '1').siblings().css('opacity', '.8')

            $(ele).children().children('.ponint').addClass('bounce')
            $(ele).siblings().children().children().removeClass('bounce')

            //鼠标移入
            $(this).children().children('.ponint').mouseenter(function () {
                $(this).removeClass('bounce').addClass('largen')
                $(this).siblings('div').css('display', 'none').end().next().fadeIn(10)
            })
            //删除其他的移入事件
            $(this).siblings().children().children().off('mouseenter')
            //鼠标移出
            $(this).children().children().mouseleave(function () {
                $(this).removeClass('largen').addClass('bounce')
                $(this).siblings('div').removeClass('bounce').fadeOut(1000)
            })
            //删除其他移出事件
            $(this).siblings().children().children().off('mouseleave')

        }
    })
})

$('#next').click(function () {
    $('.xiao').each(function (index, ele) {
        //获取每个div的left
        var getleft = parseInt($(ele).css('left'))
        //  console.log(getleft);
        $(ele).animate({
            left: getleft + 400,
        }, 1000, function () {

            if (parseInt($(this).css('left')) >= 2000) {
                $(this).css('left', -400)
            }
        })
        if (parseInt($(ele).css('left')) == 0) {

            $(ele).children().addClass('zoom')
            $(ele).siblings().children().removeClass('zoom')

            $(ele).css('opacity', '1').siblings().css('opacity', '.8')

            $(ele).children().children('.ponint').addClass('bounce')
            $(ele).siblings().children().children().removeClass('bounce')

            //鼠标移入
            $(this).children().children('.ponint').mouseenter(function () {
                $(this).removeClass('bounce').addClass('largen')
                $(this).siblings('div').css('display', 'none').end().next().fadeIn(10)
            })
            //删除其他的移入事件
            $(this).siblings().children().children().off('mouseenter')
            //鼠标移出
            $(this).children().children().mouseleave(function () {
                $(this).removeClass('largen').addClass('bounce')
                $(this).siblings('div').removeClass('bounce').fadeOut(1000)
            })
            //删除其他移出事件
            $(this).siblings().children().children().off('mouseleave')
        }
    })
})   
