define(['jquery'],function($){
    var WaterWithStr = {
        init:function(url,$ct,item){
            this.url = url;
            this.$ct = $ct;
            this.item = item;
            this.isSend = false;
            this.send();
        },
        send:function(){
            var _this = this;
            if(this.isSend) return;
                this.isSend = true;//上锁
                $.ajax({
                    url: this.url,
                    dataType: 'json',
                    Method:'GET',
                    Arguments: 'None',
                    //"demos": [
                    //    {
                    //        "href_url": "http://xxx.html",
                    //        "img_url": "http://xxx.png",
                    //        "des_word": "xxx",
                    //        "title_name": "xxx"
                    //    },
                    success: function (ret) {
                        _this.onSuccess(ret.demos);
                        _this.isSend = false;//解锁
                    },
                    error: function () {
                        alert('服务器出错了!');
                    }
                });
        },
        onSuccess:function(demoArr){
            var _this = this;
            var $nodes = this.renderData(demoArr);
            var deferreds = [];
            this.heightArr = [];
            $nodes.find('img').each(function(){
                var defer = $.Deferred();
                $(this).load(function(){
                    defer.resolve();
                });
                deferreds.push(defer);
            });
            $.when.apply(null,deferreds).done(function(){
                _this.layout($nodes);
            });
        },
        layout:function($nodes){
            var _this = this;
            this.itemWidth = this.$ct.find(this.item).outerWidth(true);
            this.ctWidth = this.$ct.width();
            this.colNum = Math.floor(this.ctWidth/this.itemWidth);
            this.$ct.width(this.itemWidth * this.colNum);
            for(var i=0;i<this.colNum;i++){
                this.heightArr.push(0);
            }
            $nodes.each(function(){
                _this.place($(this));
            });
            _this.$ct.height(Math.max.apply(null, _this.heightArr));
            $nodes.animate({opacity:1},400);
        },
        place:function($el){
            var idx = 0;
            minSumheight = this.heightArr[0];
            for(var i=0;i<this.heightArr.length;i++){
                if(this.heightArr[i]<minSumheight){
                    idx =i;
                    minSumheight = this.heightArr[i];
                }
            }
            $el.css({
                left:this.itemWidth*idx,
                top:minSumheight
            });
            this.heightArr[idx]+=$el.outerHeight(true);
        },
        renderData:function(demoArr){
            var Ipt = '',
                $node;
            for(var i=0;i<demoArr.length;i++){
                //<li class="water-item">
                //  <a href="#"><div class="item-cover"></div></a>
                //  <img src="./img/waterFall/carouselFull.png">
                //  <div class="item-info">
                //    <h3>全屏轮播</h3>
                //    <h4>i don not like you because i hate you do you know</h4>
                //  </div>
                //</li>
                Ipt += '<li class="water-item">';
                Ipt += '  <a target="_blank" href=" ' + demoArr[i].href_url + '"<div class="item-cover"></div></a>';
                Ipt += '  <img src=" ' + demoArr[i].img_url + '">';
                Ipt += '  <div class="item-info">';
                Ipt += '    <h3>' + demoArr[i].title_name + '</h3>';
                Ipt += '    <h4>' + demoArr[i].des_word + '</h4>';
                Ipt += '  </div>';
                Ipt += '</li>';
            }
            $node = $(Ipt);
            $node.css('opacity',0);
            this.$ct.append($node);
            return $node;
        }
    };
    return WaterWithStr;
});

