/*
 *返回顶部组件 backTop.js
 *by Gardon Lee
 @Copyright 2016
 */

/*
 *调用：
 1.不带参数：backTop();
 2.带参数：backTop({scrollSpeed:1000,rightPos:'20%'});
 *参数配置：
 scrollSpeed: 500,//滑动用时，单位 ms
 appearPos: 100,//出现时机（滑动距离），单位 px
 bottomPos: '10%',//位置（距底部边缘），相对 body百分比
 rightPos: '3%'//位置（距右边缘），相对 body百分比
 */

// ---------------------------------------------------------------
// ---------------------------------------------------------------

define(['jquery'],function($){
    function BackTop(obj){
        this.init(obj);
    }

    BackTop.prototype = {
        defaultConfig: {
            scrollSpeed: 500,
            appearPos: 100,
            bottomPos: '10%',
            rightPos: '3%'
        },

        init: function(obj) {
            if ($('#back_top').length > 0) {console.log('backTop no more than 2 in a page!'); return; }
            this.setObj(obj);
            this.createBackTop();
            this.bindEvent();
        },

        setObj: function (obj) {
            this.obj = $.extend({}, this.defaultConfig, obj);
        },

        createBackTop: function () {
            var _this = this;
            _this.$backTop = $('<div id="back_top">Top</div>');
            _this.$backTop[0].style.right = _this.obj.rightPos;
            _this.$backTop[0].style.bottom = _this.obj.bottomPos;

            $('body').append(_this.$backTop);
        },

        bindEvent: function () {
            var _this = this;
            $(window).on('scroll',function () {
                var offsetTop  = $(window).scrollTop();
                if (offsetTop > _this.obj.appearPos) {
                    _this.$backTop.fadeIn('fast');
                }else{
                    _this.$backTop.fadeOut('fast');
                }
            });
            _this.$backTop.on('click',function(){
                $("html,body").animate({scrollTop:0},_this.obj.scrollSpeed);
            });
        }
    }

    function backTop(obj){
        var newBacktop = new BackTop(obj);
        return newBacktop;
    }

    return backTop;
});



