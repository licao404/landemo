define(['jquery'],function($){
    var Carousel = {
        init:function(imgCt){
            this.$ct = imgCt;
            this.curIdx = 0;
            this.isAnimate = false;
            this.clone();
            this.bind();
            this.start();
        },
        clone:function(){
            this.$items = this.$ct.children();
            this.imgWidth = this.$items.width();
            this.$bullet = this.$ct.siblings('.bullet');
            this.imgCount = this.$ct.children().length;
            this.$ct.prepend(this.$items.last().clone());
            this.$ct.append(this.$items.first().clone());
            this.imgRealCount = this.imgCount+2;
            this.$ct.css({
                left: 0-this.imgWidth, //让第一个出现的是非clone的
                width: this.imgRealCount * this.imgWidth//图片长条宽度
            });
        },
        bind:function(){
            var _this = this;
            this.$bullet.children().on('click', function(){
                var idx = $(this).index();
                if(idx > _this.curIdx){
                    _this.playNext(idx - _this.curIdx);
                }
                if(idx < _this.curIdx){
                    _this.playPre(_this.curIdx - idx);
                }
            });
            this.$ct.siblings('.pre').on('click',function(){
                _this.playPre();
            })
            this.$ct.siblings('.next').on('click',function(){
                _this.playNext();
        })
        },
        playNext:function(idx){
            var _this = this;
            var idx = idx || 1;
            if(!_this.isAnimate){
                _this.isAnimate = true;
                _this.$ct.animate({left: '-='+(_this.imgWidth*idx)},function(){
                    _this.curIdx = (_this.curIdx + idx) % _this.imgCount;
                    if(_this.curIdx === 0){
                        _this.$ct.css({left: 0-_this.imgWidth});
                    }
                    _this.isAnimate = false;
                    _this.setBullet();
                });
            }
        },
        playPre:function(idx){
            var _this = this;
            var idx = idx || 1;
            if(!_this.isAnimate){
                _this.isAnimate = true;
                _this.$ct.animate({left: '+='+(_this.imgWidth*idx)},function(){
                    _this.curIdx = (_this.imgCount + _this.curIdx - idx)%_this.imgCount;
                    if(_this.curIdx === (_this.imgCount - 1)){
                        _this.$ct.css({left: 0-_this.imgWidth * _this.imgCount});
                    }
                    _this.isAnimate = false;
                    _this.setBullet();
                });
            }
        },
        setBullet:function(){
            var _this = this;
            _this.$bullet.children().removeClass('active').eq(_this.curIdx).addClass('active');
        },
        autoPlay:function(){
            var _this = this;
            _this.clock = setInterval(function(){
                _this.playNext();
            }, 2000);
        },
        start:function(){
            var _this = this;
            _this.autoPlay();
        }
    }
    return Carousel;
});

