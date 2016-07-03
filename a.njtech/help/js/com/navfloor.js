/*
 *导航栏组件 navfloor.js
 *by Gardon Lee
 @Copyright 2016
 */

/*
 *调用：
    navfloor($("#header .choice li a"));
 */

// ---------------------------------------------------------------
// ---------------------------------------------------------------


define(['jquery'],function ($) {
    function Navfloor($li){
        this.$li = $li;
        this.init();
    }

    Navfloor.prototype = {
        init: function () {
            this.startRander();
        },


        startRander: function () {
            var _this = this;
            $(window).on('scroll', function() {
                _this.bindEvent();
            });
        },

        bindEvent: function () {
            var _this = this;
            _this.$li.each(function(index) {
                //获取当前锚点
                var hashTarget = $(this).attr('href');
                //获取下一相邻锚点
                var nextTarget = _this.$li.eq(index + 1).attr('href');
                if (index < _this.$li.length - 1) {
                    //窗口滑动到当前锚点和下一相邻锚点之间
                    if ($(window).scrollTop() > $(hashTarget).offset().top - 500
                        && $(window).scrollTop() < $(nextTarget).offset().top) {
                        _this.$li.removeClass('active');
                        $(this).addClass('active');
                    }
                    //窗口滑动距离小于当前锚点和页面顶部距离
                    else if ($(window).scrollTop() < $($(_this.$li).attr('href')).offset().top - 500) {
                        _this.$li.removeClass('active');
                    }
                } else{
                    if ($(window).scrollTop() > $(hashTarget).offset().top - 500) {
                        _this.$li.removeClass("active");
                        $(this).addClass("active");
                    }
                }
            });
        }
    }

    function navfloor ($li,$logo,obj) {
        var newNavfloor = new Navfloor($li,$logo,obj);
        return newNavfloor;
    }

    return navfloor;
})