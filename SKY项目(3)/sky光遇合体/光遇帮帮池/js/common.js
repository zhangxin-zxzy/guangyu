/**
 * 兼容写法获取元素最终的样式
 * @param {要获取哪个元素的样式} obj 
 * @param {要获取什么样式属性} attr 
 */
function getStyle(obj, attr) {

    if (window.getComputedStyle) {

        // 这相当于就是在判断浏览器是否支持这个方法
        // console.log(window.getComputedStyle(obj)[attr]);
        return window.getComputedStyle(obj)[attr];

    } else {

        // console.log(obj.currentStyle[attr]);
        return obj.currentStyle[attr];

    }
}



/**
 * 获取下一个兄弟元素
 * @param {要找哪一个元素的下一个元素} ele 
 */
function getNextElement(ele) {

    var node = ele.nextSibling;

    // 节点不为null，并且节点不为1，都要继续找下一个
    while (node != null && node.nodeType != 1) {

        node = node.nextSibling;
    }

    // 要么找到null，要么找到标签
    // console.log(node);
    return node;
}


/**
 * 获取上一个兄弟元素
 * @param {要找哪一个元素的上一个元素} ele 
 */
function getPrevElement(ele) {

    var node = ele.previousSibling;

    while (node != null && node.nodeType != 1) {

        node = node.previousSibling;
    }

    return node;
}


/**
 * 移动动画的函数
 * @param {要移动谁} obj 
 * @param {目标} target 
 */
function animate(obj,target) {

    // 我们确实也需要停止计时器
    // 但是我们又不希望一个元素能够停止另外一个元素的计时器
    // 简单来说，我们各停各的，就是自己的计时器只能停自己的
    clearInterval(obj.timerID);

    // 每次开启新的计时器之前，先把上一次计时器关掉
    // 给谁移动的计时器id，就存在谁身上了
    obj.timerID = setInterval(function () {

        //每次都要在当前位置上加一步，所以首先要获取当前位置
        var current = obj.offsetLeft;

        // 判断目的地和当前位置之间的距离，是否大于10，大于10代表够走
        // 够走这一步就走，不够走就直接到400
        if (Math.abs(target - current) > 10) {

            // 如果目标大于当前距离代表往右走，那么就是正10
            // 如果目标小于当前距离代表往左走，那么就是负10
            current += target > current ? 10 : -10;

            obj.style.left = current + "px";

        } else {

            obj.style.left = target + "px";
        }

        if (current == target) {

            //停止计时器
            clearInterval(obj.timerID);
        }

    }, 10);
}