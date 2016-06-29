/*
 *瀑布流布局组件 waterfall.js
 *by Gardon Lee
 @Copyright 2016
*/

/*
*调用：
waterfall($ct,$item);
*$ct为瀑布流布局的父亲容器，而$item则为需要布局的子元素
*/

// ---------------------------------------------------------------
// ---------------------------------------------------------------

define(['jquery'],function($){
	function Waterfall ($waterfallCt,$item) {
		this.itemW = $item.outerWidth(true);
		this.waterfallW = $waterfallCt.width();
		this.colNum = Math.floor(this.waterfallW/this.itemW);
		this.colNowHeight = [];
		this.init($waterfallCt,$item);
	}

	Waterfall.prototype = {
		init: function ($waterfallCt,$item) {
			for (var i = 0; i < this.colNum; i++){
				this.colNowHeight.push(0);
			}
			this.waterfallLayout($waterfallCt,$item);
		},

		waterfallLayout: function ($waterfallCt,$item) {
			var _this = this;
			$item.each(function() {
				var minColNowHeight = _this.colNowHeight[0],
					minCol = 0;
				for ( var i = 0; i < _this.colNowHeight.length; i++ ){
					if (_this.colNowHeight[i] < minColNowHeight) {
						minColNowHeight = _this.colNowHeight[i];
						minCol = i;
					}
				}
				$(this).css({
					left: _this.itemW * minCol,
					top: minColNowHeight
				});
				_this.colNowHeight[minCol] += $(this).outerHeight(true);
				$waterfallCt.height(Math.max.apply(null,_this.colNowHeight));
			});
		}
	}

	function waterfall ($waterfallCt,$item) {
		var newWaterfall = new Waterfall($waterfallCt,$item);
		return newWaterfall;
	}

	return waterfall;
})