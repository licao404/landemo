requirejs.config({
    baseUrl:'./js',
    paths:{
        'jquery':'lib/jquery'
    }
});
require(['jquery','com/stickup','com/tab','com/carousel','com/multiCarousel','com/waterFall','com/exposure']
    , function($,Stick,TabChange,Carousel,MultiCarousel,WaterWithStr,Exposure){
        $('.control-list').on('click',function(e){
            if(e.target.tagName.toLowerCase() ==='li'){
                $(e.target).siblings().removeClass('active');
                $(e.target).addClass('active');
            }else if(e.target.tagName.toLowerCase() ==='a'){
                $(e.target).parents('li').siblings().removeClass('active');
                $(e.target).parents('li').addClass('active');
            }
        });
        //control-list点击之后回到顶部
        $('.control-list').on('click',function(){
            $("body").animate({
                "scrollTop":'0'}, 400)
        });
        //control-list可以粘在顶部
        Stick.init($('.control-list'));
        //一个轮播
        var isMove = false;
        $('.carousel').on('click',function(){
            $('.carousel-demo').slideDown().siblings().slideUp();
            if(!isMove){
                var imgCt= $('.carousel-demo .img-ct');
                Carousel.init(imgCt);
                isMove = true;
            }
            if(isMove) return;
        });
        //多个轮播
        var isMulti = false;
        $('.carousel-multi').on('click', function () {
            $('.carousel-multi-demo').slideToggle().siblings().slideUp();
            if(isMulti) return;
            var $node = $('.carousel-multi-demo .img-ct');
            for(var i=0;i<$node.length;i++){
                var target = $node.eq(i);
                var carousel = new MultiCarousel(target);
                carousel.init();
            }
            isMulti = true;
        });
        //卡片可视状态切换
        $('.control-list .tab').on('click', function () {
            $('.tab-demo').slideToggle().siblings().slideUp();
        });
        //卡片切换
        var tab = $('.tab-mod .tab-ct .tab li');
        TabChange.init(tab, '.tab-mod', '.panel');
        //瀑布流资源获取
        var isSend = false;
        $('.add-btn').on('click',function(e){
            e.preventDefault();
            if(isSend) return;
            WaterWithStr.init('./json/demos.json',$('.waterfall-ct'),'.water-item');
            isSend = true;
            this.innerText = '已经没有了';
        });
        //瀑布流可视切换
        $('.water').on('click',function(){
            $('.water-layout').slideToggle().siblings().slideUp();
        });
        $('.about .timeline li').each(function(){
            new Exposure($(this), 4/5);
        });
});