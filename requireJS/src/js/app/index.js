//"主模块"，意思是整个网页的入口代码。它有点像C语言的main()函数，所有代码都从这儿开始运行
// 　　require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
// 　　　　// some code here
// 　　});
// 　　require()函数接受两个参数。第一个参数是一个数组，表示所依赖的模块，
// 　　上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；
// 　　第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。
// 　　加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。
// require()异步加载moduleA，moduleB和moduleC，浏览器不会失去响应；它指定的回调函数，
// 只有前面的模块都加载成功后，才会运行，解决了依赖性的问题。


requirejs.config({
	baseUrl: 'src/js',
	paths: {
		jquery: 'lib/jquery',
		backTop: 'com/backTop',
		jumpTo: 'com/jumpTo',
		carousel: 'com/carousel',
		exposure: 'com/exposure',
		navfloor: 'com/navfloor',
		waterfall: 'com/waterfall',
		loadMore: 'com/loadMore'
	}
});

require(['jquery','backTop','jumpTo','carousel','exposure','navfloor','waterfall','loadMore'],function ($,backTop,jumpTo,carousel,exposure,navfloor,waterfall,loadMore) {
	backTop({appearPos: 1000});
	jumpTo($('#header .choice a'));
	carousel($('#main_carousel'),{carouselInterval:3500,carouselSpeed:650,isShowArrow:true});
	$('#about .event').each( function() { exposure($(this)); } );
	navfloor($("#header .choice li a"),$("#header .logo a"));
	loadMore($('#portfolio .waterfall-ct'),$('#portfolio .load-more'));
})


