/*
 *导航栏组件 navfloor.js
 *by Gardon Lee
 @Copyright 2016
*/

/*
*调用：
1.基本调用：navfloor($("#header .choice li a"),$("#header .logo a"));
2.带可选参数调用：navfloor($("#header .choice li a"),$("#header .logo a"),{changePos: 200,liBgColor: '#222'});
*参数配置：
		changePos: 200,//#header背景色改变的位置
		liBgColor: '#222',//背景色
		logoSize: 20,//文字logo变化后的大小
		toleranceDis: 260//缓冲距离
*/

// ---------------------------------------------------------------
// ---------------------------------------------------------------


define(['jquery'],function ($) {
	function Navfloor($li,$logo,obj){
		this.$li = $li;
		this.liBgColor = $li.css('backgroundColor');
		this.$logo = $logo;
		this.logoSize = $logo.css('fontSize');
		this.init(obj);
	} 

	Navfloor.prototype = {
		defaultConfig: {
			changePos: 200,
			liBgColor: '#222',
			logoSize: 20,
			toleranceDis: 260
		},

		init: function (obj) {
			this.setObj(obj);
			this.startRander();
		},

		setObj: function (obj) {
			this.obj = $.extend({},this.defaultConfig,obj);
		},

		startRander: function () {
			var _this = this;
			$(window).on('scroll', function() {
				if ($(window).scrollTop() > _this.obj.changePos) {
					$('#header').css('backgroundColor',_this.obj.liBgColor);
					_this.$logo.css('fontSize',_this.obj.logoSize);
				} else {
					$('#header').css('backgroundColor',_this.liBgColor);
					_this.$logo.css('fontSize',_this.logoSize);
				}
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
					if ($(window).scrollTop() > $(hashTarget).offset().top - _this.obj.toleranceDis
						&& $(window).scrollTop() < $(nextTarget).offset().top) {
							_this.$li.removeClass('active');
							$(this).addClass('active');
					}					
					//窗口滑动距离小于当前锚点和页面顶部距离
					else if ($(window).scrollTop() < $($(_this.$li).attr('href')).offset().top - _this.obj.toleranceDis) {
						_this.$li.removeClass('active');
					} 
				} else{
					if ($(window).scrollTop() > $(hashTarget).offset().top - _this.obj.toleranceDis) {
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