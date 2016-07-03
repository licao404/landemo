define(['jquery'],function($){
    var Stick = {
        init:function($node){
            this.$node = $node;
            this.set();
            this.bind();
        },
        set:function(){
            this.height = this.$node.height();
            this.width = this.$node.width();
            this.setLeft = this.$node.offset().left;
            this.setTop = this.$node.offset().top;
            this.cloneNode = this.$node.clone().css('opacity',0).insertBefore(this.$node).hide();
        },
        bind:function(){
            var _this = this;
            $(window).on('scroll',function(){
                var scrollTop = $(this).scrollTop();
                if(scrollTop>= _this.setTop){
                    if(!_this.isFixed()){
                        _this.setFixed();
                    }
                }else{
                    if(_this.isFixed()){
                        _this.unsetFixed();
                    }
                }
            });
            $(window).on('resize',function(){
                _this.setLeft = _this.$node.offset().left;
                _this.setTop = _this.$node.offset().top;
            })
        },
        isFixed:function(){
            return !!this.$node.attr('position-fixed');
        },
        setFixed:function(){
            this.$node.attr('position-fixed',true)
                .css({
                    position:'fixed',
                    top:0,
                    'z-index':7,
                    width:this.width,
                    left:this.setLeft,
                    height:this.height,
                    margin:0
                });
            this.cloneNode.show();
        },
        unsetFixed:function(){
            this.$node.removeAttr('position-fixed').removeAttr('style');
            this.cloneNode.hide();
        }
    };
    return Stick;
});

