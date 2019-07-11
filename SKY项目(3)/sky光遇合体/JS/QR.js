var container = document.getElementById('container');
            var start = document.querySelectorAll('.start');
            var music = document.querySelector('.ctrls .music');
            var audio = document.querySelector('audio')
    
            // window.onload = function () { audio.play();}
            music.onclick = function () {
                if ($('.ctrls .music i').css('animationPlayState') == 'paused') {
                    $('.ctrls .music i').css('animationPlayState', 'running')
                } else {
                    $('.ctrls .music i').css('animationPlayState', 'paused')
                }
              
            }
            $('.ctrls .link-item a').mouseenter(function () {
                $('.ctrls .drop').show()
            })
            $('.ctrls .link-item a').mouseleave(function () {
                $('.ctrls .drop').hide()
            })
            $('.wb>a').mouseenter(function () {
                $('.wb .qr_code').css('display', 'block')
            })
            $('.wb').mouseleave(function () {
                $('.wb .qr_code').css('display', 'none')
            })
    
            $('.wx>a').mouseenter(function () {
                $('.wx .qr_code').css('display', 'block')
            })
            $('.wx').mouseleave(function () {
                $('.wx .qr_code').css('display', 'none')
            })
            $('.QQ>a').mouseenter(function () {
                $('.QQ .qr_code').css('display', 'block')
            })
            $('.QQ').mouseleave(function () {
                $('.QQ .qr_code').css('display', 'none')
            })
            $('.dashen>a').mouseenter(function () {
                $('.dashen .qr_code').css('display', 'block')
            })
            $('.dashen').mouseleave(function () {
                $('.dashen .qr_code').css('display', 'none')
            })