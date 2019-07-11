var bainiao = document.getElementsByClassName('bird')[0];
window.onload = function () {
    bainiao.style.display = 'block';
    animateSlow(bainiao, { left: '8.75rem', top:150, });
};
$('.mig').click(function () {
    $(this).css('backgroundColor', '#fff');
    $(this).css('color', '#7ac2de');
    $(this).siblings().css('backgroundColor', '#7ac2de');
    $(this).siblings().css('color', '#fff');
});
$('.left1').click(function () {
    $('.picture').css('display', 'none');
    $('.smallpic').css('display', 'none');
    $('#video').css('display', 'block');
    $('.small').css('display', 'block');
    $('.zuojiantou1').css('display', 'none');
    $('.youjiantou1').css('display', 'none');
    $('.zuojiantou').css('display', 'block');
    $('.youjiantou').css('display', 'block');
});
$('.right1').click(function () {
    $('.picture').css('display', 'block');
    $('.smallpic').css('display', 'block');
    $('#video').css('display', 'none');
    $('.small').css('display', 'none');
    $('.zuojiantou1').css('display', 'block');
    $('.youjiantou1').css('display', 'block');
    $('.zuojiantou').css('display', 'none');
    $('.youjiantou').css('display', 'none');
});
var x = 0;
$('.youjiantou').click(function () {
    x++;
    if (x == $('#video>ul>li').length) {
        x = 0;
    }
    $('#video>ul>li').eq(x).stop(true).fadeIn().siblings().fadeOut();
    $('.small>div').eq(x).css('border', '3px solid #fff').siblings().css('border', 'none');
})
$('.zuojiantou').click(function () {
    x--;
    if (x == -1) {
        x = $('#video>ul>li').length - 1;
    }
    $('#video>ul>li').eq(x).stop(true).fadeIn().siblings().fadeOut();
    $('.small>div').eq(x).css('border', '3px solid #fff').siblings().css('border', 'none');
});
$('.small>div').click(function () {
    var index = $(this).index();
    $(this).css('border', '3px solid #fff').siblings().css('border', 'none');
    $('#video>ul>li').eq(index).stop(true).fadeIn().siblings().fadeOut();
    x = index;
});

function page() {
    if (index == ul.children.length - 1) {
        index = 0;
        ul.style.left = 0;
    }
    index++;
    animate(ul, -index * screen.offsetWidth);
    for (var i = 0; i < pagelist.length; i++) {
        pagelist[i].className = '';
    }
    if (index == ul.children.length - 1) {
        pagelist[0].className = 'current';
    }
    pagelist[index].className = 'current';
}
/* var q = 0;
var index = 0;
$('.youjiantou1').click(function () {
    index++;
    if (index == $('.second>li').length) {
        index = 0;
    }
    $('.second>li').eq(index).stop(true).fadeIn().siblings().fadeOut();
    $('.smallpic>ul>li').eq(index).css('border', '3px solid #fff').siblings().css('border', 'none');
})
$('.zuojiantou1').click(function () {
    index--;
    if (index == -1) {
        index = $('.second>li').length - 1;
    }
    $('.second>li').eq(index).stop(true).fadeIn().siblings().fadeOut();
    $('.smallpic>ul>li').eq(index).css('border', '3px solid #fff').siblings().css('border', 'none');
}) */



/* $('.smallpic>ul>li').click(function () {
    var ind = $(this).index();
    $(this).css('border', '3px solid #fff').siblings().css('border', 'none');
    $('.second>li').eq(ind).show().siblings().hide();
    q = ind;
}); */



var box = document.querySelector('.picture');
var page = document.getElementsByClassName('sic')[0];
var pagelist = page.children;
var screen = document.getElementsByClassName('picture')[0];
var ul = screen.children[0];
var next = document.getElementsByClassName('youjiantou1')[0];
var prev = document.getElementsByClassName('zuojiantou1')[0];
var timerid = setInterval(function () {

    if (index == ul.children.length - 1) {
        index = 0;
        ul.style.left = 0;
    }
    index++;
    animate(ul, -index * screen.offsetWidth);
    for (var i = 0; i < pagelist.length; i++) {
        pagelist[i].className = '';
    }
    if (index == ul.children.length - 1) {
        pagelist[0].className = 'current';
    }
    pagelist[index].className = 'current';
}, 2000);
box.onmouseover = function () {
    clearInterval(timerid);
}
box.onmouseout = function () {
    timerid = setInterval(function () {

        if (index == ul.children.length - 1) {
            index = 0;
            ul.style.left = 0;
        }
        index++;
        animate(ul, -index * screen.offsetWidth);
        for (var i = 0; i < pagelist.length; i++) {
            pagelist[i].className = '';
        }
        if (index == ul.children.length - 1) {
            pagelist[0].className = 'current';
        }
        pagelist[index].className = 'current';
    }, 2000);
}
var index = 0;
next.onclick = function () {

    if (index == ul.children.length - 1) {
        index = 0;
        ul.style.left = 0;
    }
    index++;
    animate(ul, -index * screen.offsetWidth);
    for (var i = 0; i < pagelist.length; i++) {
        pagelist[i].className = '';
    }
    if (index == ul.children.length - 1) {
        pagelist[0].className = 'current';
    }
    pagelist[index].className = 'current';
}
prev.onclick = function () {
    if (index == 0) {
        index = ul.children.length - 1;
        ul.style.left = -index * screen.offsetWidth + 'px';
    }
    index--;
    animate(ul, -index * screen.offsetWidth);
    for (var i = 0; i < pagelist.length; i++) {
        pagelist[i].className = '';
    }
    if (index == ul.children.length - 1) {
        pagelist[0].className = 'current';
    }
    pagelist[index].className = 'current';
}
for (var k = 0; k < pagelist.length; k++) {
    pagelist[k].setAttribute('index', k);
    pagelist[k].onclick = function () {
        var index = this.getAttribute('index');
        ul.style.left = -index * screen.offsetWidth + 'px';
        for (var j = 0; j < pagelist.length; j++) {
            pagelist[j].className = '';
        }
        this.className = 'current';
    }
}
next.onmouseover = function () {
    clearInterval(timerid);
}
next.onmouseout = function () {
    timerid = setInterval(function () {

        if (index == ul.children.length - 1) {
            index = 0;
            ul.style.left = 0;
        }
        index++;
        animate(ul, -index * screen.offsetWidth);
        for (var i = 0; i < pagelist.length; i++) {
            pagelist[i].className = '';
        }
        if (index == ul.children.length - 1) {
            pagelist[0].className = 'current';
        }
        pagelist[index].className = 'current';
    }, 2000);
}
prev.onmouseover = function () {
    clearInterval(timerid);
}
prev.onmouseout = function () {
    timerid = setInterval(function () {

        if (index == ul.children.length - 1) {
            index = 0;
            ul.style.left = 0;
        }
        index++;
        animate(ul, -index * screen.offsetWidth);
        for (var i = 0; i < pagelist.length; i++) {
            pagelist[i].className = '';
        }
        if (index == ul.children.length - 1) {
            pagelist[0].className = 'current';
        }
        pagelist[index].className = 'current';
    }, 2000);
}

$('.mulu').mouseover(function () {
    $('#bigNav img').stop(true).animate({
        height: 500,
    }, 500);
});
$('#bigNav img').mouseout(function () {
    $(this).stop(true).animate({
        height: 0,
    }, 500);
});




/* 
$('.aa').click(function () {
    $('#onee').css('display', 'block');
    $('#two').css('display', 'none');
    $('#three').css('display', 'none');
});
$('.bb').click(function () {
    $('#onee').css('display', 'block');
    $('#twoo').css('display', 'none');
    $('#three').css('display', 'none');
});
$('.cc').click(function () {
    $('#onee').css('display', 'none');
    $('#twoo').css('display', 'none');
    $('#three').css('display', 'block');
}); */


var video1 = document.getElementById("onee");
var video2 = document.getElementById("twoo");
var video3 = document.getElementById("three");
var bofang1 = document.getElementById('bofang1');
var bofang2 = document.getElementById('bofang2');
var bofang3 = document.getElementById('bofang3');
var guanbi1 = document.getElementById('guanbi1');
var guanbi2 = document.getElementById('guanbi2');
var guanbi3 = document.getElementById('guanbi3');
$('.aa').click(function () {
    $('#ship1').show();
    $('.zhaozi').show();
    video1.play();
});
$('.bb').click(function () {
    $('#ship2').show();
    $('.zhaozi').show();
    video2.play();
});
$('.cc').click(function () {
    $('#ship3').show();
    video3.play();
    $('.zhaozi').show();
});
video1.onclick = function () {
    video1.pause();
    bofang1.style.display = 'block';
}
video2.onclick = function () {
    video2.pause();
    bofang2.style.display = 'block';
}
video3.onclick = function () {
    video3.pause();
    bofang3.style.display = 'block';
}
bofang1.onclick = function () {
    video1.play();
    this.style.display = 'none';
}
bofang2.onclick = function () {
    video2.play();
    this.style.display = 'none';
}
bofang3.onclick = function () {
    video3.play();
    this.style.display = 'none';
}
guanbi1.onclick = function () {
    $('#ship1').hide();
    video1.pause();
    $('.zhaozi').hide();
}
guanbi2.onclick = function () {
    $('#ship2').hide();
    video2.pause();
    $('.zhaozi').hide();
}
guanbi3.onclick = function () {
    $('#ship3').hide();
    video3.pause();
    $('.zhaozi').hide();
}
$('.footr').mouseenter(function () {

    $('.foot-nav img').stop(true).animate({
        height: '.380605rem',
    })
    $('.footr .slideup').stop(true).animate({

        bottom: '.380605rem',
    })
    $('.footr .slideup p').css('background', 'url(./上箭头.png) no-repeat  right')
})

$('.footr').mouseleave(function () {

    $('.foot-nav img').stop(true).animate({
        height: 0,

    })

    $('.footr .slideup').stop(true).animate({

        bottom: 0,
    })
    $('.footr .slideup p').css('background', 'url(./下箭头.png) no-repeat  right');
})