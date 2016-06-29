/*
 *曝光组件 exposure.js
 *by Gardon Lee
 @Copyright 2016
*/

/*
*调用：
exposure($node);
*参数为需要曝光显示元素
*/

// ---------------------------------------------------------------
// ---------------------------------------------------------------

define(['jquery'],function($){
function Exposure($node) {
	this.$node = $node;
	this.setCoser();
	this.bindEvent();
}

Exposure.prototype = {
	isVisible : function() {
		return ($(window).scrollTop() + parseInt($(window).height()) > this.$cloneNode.offset().top);
	},
	setCoser : function() {
		this.$cloneNode = this.$node.clone();
		this.$cloneNode.css("visibility", "hidden");
		this.$cloneNode.insertAfter(this.$node);
		this.$node.hide();
	},
	destroyCoser : function() {
		this.$cloneNode.remove();
	},
	bindEvent : function() {
		var _this = this;
		$(window).on("scroll", function() {
			if(_this.isVisible()) {
				_this.destroyCoser();
				_this.$node.fadeIn();
			}
		});
	}
};

function exposure ($node,n) {
	var newExposure = new Exposure($node,n);
	return newExposure;
}

return exposure;

});