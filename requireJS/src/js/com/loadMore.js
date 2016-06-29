/*
 *点击加载更多组件 loadMore.js
 *by Gardon Lee
 @Copyright 2016
*/

/*
*调用：
loadMore($ct,$btn);
*$ct为瀑布流布局的父亲容器，而$btn则为加载更多的按钮
*/

// ---------------------------------------------------------------
// ---------------------------------------------------------------
define(['jquery','waterfall'],function($,waterfall){
	function LoadMore ($ct,$node,len) {
		this.loadATime = len || 6;
		this.$ct = $ct;
		this.init($node);
		this.flag = false;
	}

	LoadMore.prototype = {
		init: function($node){
			var _this = this;
			_this.requestMore();
			$node.click(function(e) {
				if (!_this.flag) {
					e.preventDefault();
					_this.flag = true;
					_this.requestMore();
				}
			});				
		},

		requestMore: function () {
			var _this = this;
			$.ajax({
				method: "get",
				url: "./src/test/test.php",
				dataType: "json",
				data: {
					"len": _this.loadATime
				},
				success: function (res) {
					if (res.status === 0) {
						_this.renderData(res.data);
						_this.flag = false;
					}
				},
				error: function () {
					  alert("服务器异常，请重试");
					  _this.flag = false;
				}
			});
		},

		renderData: function(data){
			var tpl = '';
			var $tpl;
			for(var i = 0; i < data.length; i++){
				tpl += '<li class="row-item">';
				tpl += '	<a href="#">';
				tpl += '		<div class="img-hover">';
				tpl += '			<span class="fa fa-plus fa-4x"></span>';
				tpl += '		</div>';
				tpl += '		<img class="img6" src="imgs/dreams.png" alt="dreams-preview">';
				tpl += '     </a>';
				tpl += '<h3>' + data[i].destitle + '</h3>';
				tpl += '<p class="h2-description">' + data[i].info + '</p>';
			}
			$tpl = $(tpl);
			this.$ct.append($tpl);
			this.placeItem($tpl);
		},

		placeItem: function ($tpl) {
			var _this = this, 
				defereds = [];
			//创建存储 defered 对象的数组
			$tpl.find('img').each(function() {
				var defer = $.Deferred();
				$(this).load(function() {
	    	    	defer.resolve();
	    	    });
	    	    defereds.push(defer);
			});
			$.when.apply(null,defereds).done(function() {
				waterfall($('#portfolio .waterfall-ct'),$('#portfolio .row-item'));
			});
		}

	}

	function loadMore ($ct,$node,len) {
		var newloadMore = new LoadMore($ct,$node,len);
		return newloadMore;
	}

	return loadMore;
})