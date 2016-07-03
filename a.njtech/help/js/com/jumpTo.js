/*
 *锚点跳转动画组件 jumpTo.js
 *by Gardon Lee
 @Copyright 2016
 */

/*
 *调用：
 1.jumpTo($node);						//$node为你需要绑定的元素，一般为 a 标签，例如 jumpTo($('#header .choice a'));
 2.可选参数：jumpTo($node,scrollSpeed);  //scrollSpeed为滑动总用时，单位 ms，例如 jumpTo($('#header .choice a'),200);
 */

// ---------------------------------------------------------------
// ---------------------------------------------------------------

define(['jquery'],function($){
    function JumpTo($node,scrollSpeed) {
        this.$node = $node;
        this.scrollSpeed = scrollSpeed || 300;
        this.bindEvent();
    }

    JumpTo.prototype = {
        bindEvent: function () {
            var _this = this;
            _this.$node.on('click',function(e) {
                e.preventDefault();
                $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top },_this.scrollSpeed);
            });
        }
    };

    function jumpTo($node,scrollSpeed) {
        var newJumpTo = new JumpTo($node,scrollSpeed);
        return newJumpTo;
    }

    return jumpTo;

});