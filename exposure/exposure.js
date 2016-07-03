/*
* @Author: Gardon Lee
* @Date:   2016-07-02 09:36:24
* @Last Modified by:   liang
* @Last Modified time: 2016-07-03 00:47:56
*/


var Exposure = (function () {
	 function bind($target,handler){

	 	$(window).on('scroll',function () {
	 		 if (isVisible($target)) {
	 		 	console.log(true);
	 		  	handler.call($target);
	 		  } 
	 	});
	 } 

	 function isVisible($node){
	 	// console.log($(window).scrollTop() + $(window).height());
	 	// console.log($node.offset().top);
	 	return (($(window).scrollTop() + $(window).height()) > $node.offset().top) ;
	 }

	 function one($target,handler){
	 	var isExposured = false;
	 	$(window).on('scroll',function(){
	 		if(isExposured){
	 			return;
	 		}
	 		if (isVisible($target)) {
	 		  	handler.call($target);
	 		  } 
	 	});
	 }

	 return {
	 	bind:bind,
	 	one:one
	 }
})()


// //$target 是 jquery 对象
// // 当窗口滚动时，如果$target 出现在可见区域，执行回调函数里面的代码，且在回调函数内，$(this)代表$target
// Exposure.bind($target, function(){
//     console.log($(this));    // $target
// });

// // 当窗口滚动时，如果$target 出现在可见区域，执行回调函数里面的代码，且在回调函数内，$(this)代表$target。 仅执行一次回调函数，下次$target 曝光不再执行
// Exposure.one($target, function(){
//     console.log($(this));    // $target
// })
