/*
* @Author: liang
* @Date:   2016-06-19 16:13:18
* @Last Modified by:   liang
* @Last Modified time: 2016-06-22 14:18:40
*/
requirejs.config({
    baseUrl: './js',
    paths: {
        jquery: 'lib/jquery',
        stickup: 'com/stickup',
        backTop: 'com/backTop',
        jumpTo: 'com/jumpTo',
        navfloor: 'com/navfloor'
    }
});

require(['jquery','stickup','backTop','jumpTo','navfloor'],function($,stickup,backTop,jumpTo,navfloor){
    stickup($('main .siderbar'));
    backTop({scrollSpeed:200,appearPos: 200});
    jumpTo($('main .siderbar a'))
    navfloor($('main .siderbar a'));
})