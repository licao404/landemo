window.onload = function() {
    var oDiv = document.getElementById('dialog-share');
    oDiv.onmouseover = function() {
        startMove(0);
    };
    oDiv.onmouseout = function() {
        startMove(-60);
    };
};

var weiboShare = document.getElementById('weibo-share');
var weiboShareLink = "http://v.t.sina.com.cn/share/share.php?title=" + encodeURIComponent(document.title) + "&url=" + encodeURIComponent(location.href);
weiboShare.href = weiboShareLink;

var move = null,
    speed = 0;

function startMove(iTarget) {
    clearInterval(move); //清除所有定时器
    var oDiv = document.getElementById('dialog-share'),
        tag = document.getElementById('share-tag');
    // if (oDiv.offsetLeft > iTarget) {
    //     speed = -12;
    // } else {
    //     speed = 12;
    // }
    move = setInterval(function() {
        speed = (iTarget-oDiv.offsetLeft)/5;//变速运动
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);//取整操作
        if (oDiv.offsetLeft == iTarget) {
            clearInterval(move);
        } else {
            oDiv.style.left = oDiv.offsetLeft + speed + 'px';
            if (speed > 0) {
                tag.style.opacity = 0;
            } else {
                tag.style.opacity = 1;
            }
        }
    }, 30);
}