define(['jquery'],function($){
    function Stickup($node){
        this.$node = $node;
        this.init();
    }

    Stickup.prototype = {
        init: function(){
            this.computeVal();
            this.bindEvent();

        },
        computeVal: function(){
            this.offsetTop = this.$node.offset().top;
            this.offsetLeft = this.$node.offset().left;
        },

        bindEvent: function(){
            var _this = this;
            $(window).on('scroll',function(){
                if($(this).scrollTop() > _this.offsetTop){
                    if(!_this.isFixed()){
                        _this.setFixed();
                    }
                } else{
                    if(_this.isFixed()){
                        _this.unsetFixed();
                    }
                }
            });
        },

        isFixed: function(){
            return !!this.$node.attr('fixed');
        },

        setFixed: function(){
            this.$node.attr('fixed',true)
                .css({
                position: 'fixed',
                top: 20,
                left: this.offsetLeft,
                'z-index': 999,
                margin: 0
            });
        },

        unsetFixed: function(){
            this.$node.removeAttr('fixed')
                .removeAttr('style');
        }
    }

    function stickup($node){
        var newStickup = new Stickup($node);
        return newStickup;
    }

    return stickup;
});