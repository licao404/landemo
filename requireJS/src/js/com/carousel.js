/*
 *全屏轮播组件 backTop.js
 *by Gardon Lee
 @Copyright 2016
*/

/*
*调用：
1.基本调用：carousel($node);
2.带可选参数：carousel($node,{carouselInterval:3500,carouselSpeed:650,isShowArrow:true});
*参数配置：
*第一个参数为容器元素
*第二个参数可选，为对象，对象内参数为：
	carouselInterval: 3500,//轮播间隔，单位 ms
	carouselSpeed: 650,//轮播速度，单位 px
	isShowArrow: true,//是否显示前后按钮，默认显示为true，可配置false不显示
*/

// ---------------------------------------------------------------
// ---------------------------------------------------------------

define(['jquery'],function($){
	//$node为传入的轮播容器
	function Carousel ($node,obj) {
		//选择ul作为this.$node
		this.$node = $node.children('#main_carousel .item-ct');
		this.$items = this.$node.children();
		this.$arrow = $node.find('.arrow');
		this.$pre = $node.find('.pre');
		this.$next = $node.find('.next');
		this.$bullet = $node.find('.bullet');
		this.itemWidth = $(window).width();
		//item数量，方便dom拓展
		this.itemNum = this.$items.length;
		//设置状态锁
	    this.ready = false;
	    //当前显示的item
        this.nowView = 0; 

        this.init(obj);
	}

	Carousel.prototype = {
		defaultConfig: {
			carouselInterval: 3000,
			carouselSpeed: 600,
			isShowArrow: true
		},

		init: function (obj) {
			this.setObj(obj);
			this.cloneItem();
			this.configCSS();
			this.configUrl(1);
	 		this.autoPlay();
	 		this.bindEvent();
		},

		setObj: function (obj) {
			 this.obj = $.extend({},this.defaultConfig,obj);
		},

		cloneItem: function () {
			var _this = this;
			_this.$node.prepend(_this.$items.last().clone());
			_this.$node.append(_this.$items.first().clone());	
			_this.realitemNum = _this.$node.children().length;	 
		},

		configCSS: function () {
			var _this = this;
			_this.$node.find('li').css('width',_this.itemWidth);
			_this.$node.find('.bgimg').css('width',_this.itemWidth);	
			_this.$node.css({
				left: 0 - _this.itemWidth,
				width: _this.itemWidth * _this.realitemNum
			});
			if (!_this.obj.isShowArrow) {
				_this.$arrow.css('display','none');
			}
		},

		configUrl: function (idx) {
			var $node = this.$node.find('li').eq(idx);
			var $bgImg = $node.find('.bgimg');
			$bgImg.css('background-image', 'url('+ $bgImg.attr('bgimg-url') +')');
		},

		autoPlay: function () {
			var _this = this;
			this.clock = setInterval(function () {
				_this.playNext(); 
			}, _this.obj.carouselInterval) 
		},

		stopAuto: function () {
			clearInterval(this.clock);
		},

		playPre: function (idx) {
			var _this = this;
			var idx = idx || 1;
			if(!_this.ready){
				_this.ready = true;
				_this.configUrl(_this.nowView);
				_this.$node.animate({ left:'+=' + (idx * _this.itemWidth) },_this.obj.carouselSpeed,'swing',function () {
					_this.nowView = (_this.itemNum + _this.nowView - idx) % _this.itemNum;
					if(_this.nowView === (_this.itemNum - 1)){
						_this.$node.css({left: 0 - _this.itemWidth * _this.itemNum});
					}
					_this.bulletActive();
					_this.ready = false;
				});
			}	
		},

		playNext: function (idx) {
			var _this = this;
			var idx = idx || 1;
			if(!_this.ready){
				_this.ready = true;
				_this.configUrl(_this.nowView + 2);
				_this.$node.animate({ left:'-=' + (idx * _this.itemWidth) },_this.obj.carouselSpeed,'swing',function () {
					_this.nowView = (_this.nowView + idx) % _this.itemNum;
					if(_this.nowView === 0){
						_this.$node.css({left: 0 - _this.itemWidth});
						_this.nowView = 0;
					} 
					_this.bulletActive();
					_this.ready = false;
				});		
			}				 
		},

		bulletActive: function () {
			var _this = this;
			_this.$bullet.children().removeClass("active").eq(_this.nowView).addClass('active')      
		},

		bindEvent: function () {
			var _this = this;
			_this.$pre.on('click',function () {
				 _this.playPre();
			});
			_this.$next.on('click',function () {
				 _this.playNext();
			});		
			_this.$bullet.children().on('click',function () {
				var idx = $(this).index();
				if (idx < _this.nowView) {
					_this.playPre(_this.nowView - idx);
				}
				else if (idx > _this.nowView) {
					_this.playNext(idx - _this.nowView);
				}
			}); 
		}
	}

	function carousel ($node,obj) {
		var newCarousel = new Carousel($node,obj);
		return newCarousel;
	}

	return carousel;

});