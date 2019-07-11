/**
 * Created by J-LIN on 2017/9/20.
 */

/**
 * 获得某个元素的属性
 * @param obj  哪个元素
 * @param property 获取什么属性
 * @returns {*}   属性的值
 */
function getStyle(obj, property) {

    //能力检测
    if (window.getComputedStyle) {       
        return window.getComputedStyle(obj)[property];
    } else {
        //能来到这肯定是IE8以前的版本
        return obj.currentStyle[property];

    }
}


function animate(obj, target) {

    //在创建新的计时器之前，先停掉上一个计时器
    clearInterval(obj.timerID);

    obj.timerID = setInterval(function () {

        //步长：要根据是往右还是往左来得到值，往右是正，往左是负
        var step = target > obj.offsetLeft ? 9 : -9;

        //offsetLeft,就能获取到元素当前的left的值
        //偏移值：要走多少的值
        //如果是负数，加上一个负数就等于减去这个数
        var offset = obj.offsetLeft + step;

        //如果没到目标位置，就把偏移值赋给盒子
        //如果当前偏移值没到目标，那么就走一步(如果距离大于步长，就走一步)
        //如果当前偏移值到了目标位置或者大于目标位置，那么就直接到目标（如果距离小于步长，不够走1步，就直接跳到目标）
        if (Math.abs(target - obj.offsetLeft) > Math.abs(step)) { //当前位置如果不等于目标位置，就应该一步一步移动

            obj.style.left = offset + "px";

        } else {

            //如果距离小于步长，不够走1步，就直接跳到目标
            obj.style.left = target + "px";

            //停止计时器
            clearInterval(obj.timerID);
        }

    }, 100)
};


/**
 * 先快后慢的动画方式
 * @param obj  谁要变化
 * @param target 目标值是多少
 */
function animateSlowOld(obj, target, property) {

    //清除原来的计时器
    clearInterval(obj.timerID);

    //匀速：运动过程中的运动速度是一样的
    obj.timerID = setInterval(function () {

        //获取当前的值，带单位
        var currentValue = parseInt(getStyle(obj, property));

        console.log(currentValue);


        //向上取整
        var res = (target - currentValue) / 10;
        // var res = (target - currentValue) / 10;
        // var step = target > obj.offsetLeft ? 9 : -9;


        //得到步长
        var step = res > 0 ? Math.ceil(res) : Math.floor(res);

        var offset = currentValue + step;

        console.log("step=" + step + " | " + "offset=" + offset);

        //此时只要无条件移动就行了
        //因为根据我们的算法，最后那几步的步长只是1，只是1的话就是一个一个加位置，根本不会超过目标位置
        //所以直接加就行了
        obj.style[property] = offset + "px";

        //加完以后到了目标位置就立即停止计时器
        //来到这，offset就是移动后的位置的值
        if (offset == target) {

            clearInterval(obj.timerID);
        }

    }, 50);
}


function animateSlowOld2(obj, attrs) {
    // console.log(obj);
    
    //清除原来的计时器
    clearInterval(obj.timerID);


    //匀速：运动过程中的运动速度是一样的
    obj.timerID = setInterval(function () {

        //默认当你全部都完成了，应该停止计时器了
        var isFinish = true;

        for (var key in attrs) {

            //此时目标就是你遍历到的value值
            var target = parseInt(attrs[key]);

            //取到当前值(key就是要取的当前属性)
            //例如当前遍历到的key为left，这里取到的就是当前left的值
            var currentValue = parseInt(getStyle(obj, key));

            //先快后慢的算法
            var res = (target - currentValue ) / 10;
            // var res = (target - currentValue ) >0?  9:-9  ;

            var step = res > 0 ? Math.ceil(res) : Math.floor(res);

            //得到应该变化的值
            var offset = currentValue + step;

            //例如当前取到的是left，就代表赋值给left
            obj.style[key] = offset + "px";

            console.log("key=" + key + "---" + "当前已经到了=" + offset);

            //不能在这里停止，应该所有都到了，我才停止
            //当前位置还没有到目标
            if (offset != target) {

                //没到目标就不允许停止计时器
                isFinish = false;
            }

        }

        if (isFinish) {
            clearInterval(obj.timerID);
        }

    }, 100);
}


/**
 * 带回调函数的缓动函数
 * @param obj   哪个元素变化
 * @param attrs  变化的内容是哪些
 * @param callback  当变化完成后执行的代码，也可以不传
 */
function animateSlowold3(obj, attrs, callback) {

    //清除原来的计时器
    clearInterval(obj.timerID);


    //匀速：运动过程中的运动速度是一样的
    obj.timerID = setInterval(function () {

        //默认当你全部都完成了，应该停止计时器了
        var isFinish = true;

        for (var key in attrs) {

            //此时目标就是你遍历到的value值
            var target = parseInt(attrs[key]);

            //取到当前值(key就是要取的当前属性)
            //例如当前遍历到的key为left，这里取到的就是当前left的值
            var currentValue = parseInt(getStyle(obj, key));

            //先快后慢的算法
            var res = (target - currentValue ) / 10;

            var step = res > 0 ? Math.ceil(res) : Math.floor(res);

            //得到应该变化的值
            var offset = currentValue + step;

            //例如当前取到的是left，就代表赋值给left
            obj.style[key] = offset + "px";

            console.log("key=" + key + "---" + "当前已经到了=" + offset);

            //不能在这里停止，应该所有都到了，我才停止
            //当前位置还没有到目标
            if (offset != target) {

                //没到目标就不允许停止计时器
                isFinish = false;
            }

        }

        if (isFinish) {

            clearInterval(obj.timerID);

            //如果是函数，才当作函数来调用
            if (callback instanceof  Function) {
                callback();
            }
        }

    }, 50);
}



function animateSlow(obj, attrs, callback) {

    //清除原来的计时器
    clearInterval(obj.timerID);


    //匀速：运动过程中的运动速度是一样的
    obj.timerID = setInterval(function () {

        //默认当你全部都完成了，应该停止计时器了
        var isFinish = true;

        for (var key in attrs) {

            if (key == "opacity") {

                //此时目标就是你遍历到的value值
                var target = parseFloat(attrs[key]) * 100;

                //取到当前值(key就是要取的当前属性)
                //例如当前遍历到的key为left，这里取到的就是当前left的值
                var currentValue = parseFloat(getStyle(obj, key)) * 100;

                //先快后慢的算法
                var res = (target - currentValue ) / 10;

                var step = res > 0 ? Math.ceil(res) : Math.floor(res);

                //得到应该变化的值
                var offset = (currentValue + step ) / 100;

                //透明度不需要加px
                obj.style[key] = offset;

                console.log("key=" + key + "---" + "当前已经到了=" + offset);

                //不能在这里停止，应该所有都到了，我才停止
                //当前位置还没有到目标
                if (offset != target / 100) {

                    //没到目标就不允许停止计时器
                    isFinish = false;
                }


            }else if(key == "z-index"){

                //因为来到这，key肯定是z-index，所以直接取出z-index对应的目标值赋值给属性就可以了
                obj.style.zIndex = attrs[key];
            }
            else {

                //此时目标就是你遍历到的value值
                var target = parseInt(attrs[key]);

                //取到当前值(key就是要取的当前属性)
                //例如当前遍历到的key为left，这里取到的就是当前left的值
                var currentValue = parseInt(getStyle(obj, key));

                //先快后慢的算法
                var res = (target - currentValue ) / 10;

                var step = res > 0 ? Math.ceil(res) : Math.floor(res);

                //得到应该变化的值
                var offset = currentValue + step;

                //例如当前取到的是left，就代表赋值给left
                obj.style[key] = offset + "px";

                console.log("key=" + key + "---" + "当前已经到了=" + offset);


                if (offset != target ) {

                    //没到目标就不允许停止计时器
                    isFinish = false;
                }
            }

        }

        if (isFinish) {

            clearInterval(obj.timerID);

            //如果是函数，才当作函数来调用
            if (callback instanceof  Function) {
                callback();
            }
        }

    }, 50);
}