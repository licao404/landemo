// tooltip调用方式

// 引入jquery 引入tooltip.js

// html（titl为提示内容）：
//<td class="work-status">未通过请修改 
//<span href="#" tip="这里是管理员给出的建议" class="work-warn">
//<span style="color: red;" class="fa fa-exclamation-triangle">
//</span>
//</span>
//</td>

// js:
// <script>
//     $('.work-warn').tipso();
// </script>

// 默认是在上方显示，如需更改位置
// 	$('.work-warn').tipso({
// 		position: 'bottom'
// 	});
	
! function(a, b, c, d) {
    function e(b, c) {
        this.element = a(b), this.settings = a.extend({}, j, c), this._defaults = j, this._name = i, this._title = this.element.attr("title"), this.mode = "hide", this.init()
    }

    function f() {
        var a = b.navigator.msMaxTouchPoints,
            d = "ontouchstart" in c.createElement("div");
        return a || d ? !0 : !1
    }

    function g(b) {
        var c = b.clone();
        c.css("visibility", "hidden"), a("body").append(c);
        var d = c.outerHeight();
        return c.remove(), d
    }

    function h(c) {
        var d, e, f, h = c.tooltip(),
            i = c.element,
            j = c,
            k = a(b),
            l = 10;
        switch (j.settings.position) {
            case "top":
                e = i.offset().left + i.outerWidth() / 2 - h.outerWidth() / 2, d = i.offset().top - g(h) - l, h.find(".tipso_arrow").css({
                    marginLeft: -8
                }), d < k.scrollTop() ? (d = i.offset().top + i.outerHeight() + l, h.find(".tipso_arrow").css({
                    "border-bottom-color": j.settings.background,
                    "border-top-color": "transparent"
                }), h.removeClass("top bottom left right"), h.addClass("bottom")) : (h.find(".tipso_arrow").css({
                    "border-top-color": j.settings.background,
                    "border-bottom-color": "transparent"
                }), h.removeClass("top bottom left right"), h.addClass("top"));
                break;
            case "bottom":
                e = i.offset().left + i.outerWidth() / 2 - h.outerWidth() / 2, d = i.offset().top + i.outerHeight() + l, h.find(".tipso_arrow").css({
                    marginLeft: -8
                }), d + g(h) > k.scrollTop() + k.outerHeight() ? (d = i.offset().top - g(h) - l, h.find(".tipso_arrow").css({
                    "border-top-color": j.settings.background,
                    "border-bottom-color": "transparent"
                }), h.removeClass("top bottom left right"), h.addClass("top")) : (h.find(".tipso_arrow").css({
                    "border-bottom-color": j.settings.background,
                    "border-top-color": "transparent"
                }), h.removeClass("top bottom left right"), h.addClass(j.settings.position));
                break;
            case "left":
                e = i.offset().left - h.outerWidth() - l, d = i.offset().top + i.outerHeight() / 2 - g(h) / 2, h.find(".tipso_arrow").css({
                    marginTop: -8,
                    marginLeft: ""
                }), e < k.scrollLeft() ? (e = i.offset().left + i.outerWidth() + l, h.find(".tipso_arrow").css({
                    "border-right-color": j.settings.background,
                    "border-left-color": "transparent",
                    "border-top-color": "transparent",
                    "border-bottom-color": "transparent"
                }), h.removeClass("top bottom left right"), h.addClass("right")) : (h.find(".tipso_arrow").css({
                    "border-left-color": j.settings.background,
                    "border-right-color": "transparent",
                    "border-top-color": "transparent",
                    "border-bottom-color": "transparent"
                }), h.removeClass("top bottom left right"), h.addClass(j.settings.position));
                break;
            case "right":
                e = i.offset().left + i.outerWidth() + l, d = i.offset().top + i.outerHeight() / 2 - g(h) / 2, h.find(".tipso_arrow").css({
                    marginTop: -8,
                    marginLeft: ""
                }), e + l + j.settings.width > k.scrollLeft() + k.outerWidth() ? (e = i.offset().left - h.outerWidth() - l, h.find(".tipso_arrow").css({
                    "border-left-color": j.settings.background,
                    "border-right-color": "transparent",
                    "border-top-color": "transparent",
                    "border-bottom-color": "transparent"
                }), h.removeClass("top bottom left right"), h.addClass("left")) : (h.find(".tipso_arrow").css({
                    "border-right-color": j.settings.background,
                    "border-left-color": "transparent",
                    "border-top-color": "transparent",
                    "border-bottom-color": "transparent"
                }), h.removeClass("top bottom left right"), h.addClass(j.settings.position))
        }
        e < k.scrollLeft() && ("bottom" == j.settings.position || "top" == j.settings.position) && (h.find(".tipso_arrow").css({
            marginLeft: e - 8
        }), e = 0), e + j.settings.width > k.outerWidth() && ("bottom" == j.settings.position || "top" == j.settings.position) && (f = k.outerWidth() - (e + j.settings.width), h.find(".tipso_arrow").css({
            marginLeft: -f - 8,
            marginTop: ""
        }), e += f), e < k.scrollLeft() && ("left" == j.settings.position || "right" == j.settings.position) && (e = i.offset().left + i.outerWidth() / 2 - h.outerWidth() / 2, h.find(".tipso_arrow").css({
            marginLeft: -8,
            marginTop: ""
        }), d = i.offset().top - g(h) - l, d < k.scrollTop() ? (d = i.offset().top + i.outerHeight() + l, h.find(".tipso_arrow").css({
            "border-bottom-color": j.settings.background,
            "border-top-color": "transparent",
            "border-left-color": "transparent",
            "border-right-color": "transparent"
        }), h.removeClass("top bottom left right"), h.addClass("bottom")) : (h.find(".tipso_arrow").css({
            "border-top-color": j.settings.background,
            "border-bottom-color": "transparent",
            "border-left-color": "transparent",
            "border-right-color": "transparent"
        }), h.removeClass("top bottom left right"), h.addClass("top")), e + j.settings.width > k.outerWidth() && (f = k.outerWidth() - (e + j.settings.width), h.find(".tipso_arrow").css({
            marginLeft: -f - 8,
            marginTop: ""
        }), e += f), e < k.scrollLeft() && (h.find(".tipso_arrow").css({
            marginLeft: e - 8
        }), e = 0)), e + j.settings.width > k.outerWidth() && ("left" == j.settings.position || "right" == j.settings.position) && (e = i.offset().left + i.outerWidth() / 2 - h.outerWidth() / 2, h.find(".tipso_arrow").css({
            marginLeft: -8,
            marginTop: ""
        }), d = i.offset().top - g(h) - l, d < k.scrollTop() ? (d = i.offset().top + i.outerHeight() + l, h.find(".tipso_arrow").css({
            "border-bottom-color": j.settings.background,
            "border-top-color": "transparent",
            "border-left-color": "transparent",
            "border-right-color": "transparent"
        }), h.removeClass("top bottom left right"), h.addClass("bottom")) : (h.find(".tipso_arrow").css({
            "border-top-color": j.settings.background,
            "border-bottom-color": "transparent",
            "border-left-color": "transparent",
            "border-right-color": "transparent"
        }), h.removeClass("top bottom left right"), h.addClass("top")), e + j.settings.width > k.outerWidth() && (f = k.outerWidth() - (e + j.settings.width), h.find(".tipso_arrow").css({
            marginLeft: -f - 8,
            marginTop: ""
        }), e += f), e < k.scrollLeft() && (h.find(".tipso_arrow").css({
            marginLeft: e - 8
        }), e = 0)), h.css({
            left: e + j.settings.offsetX,
            top: d + j.settings.offsetY
        })
    }
    var i = "tipso",
        j = {
            speed: 400,
            background: "#222",
            color: "#ffffff",
            opacity: .5,
            position: "top",
            width: 200,
            delay: 150,
            offsetX: 0,
            offsetY: 0,
            content: null,
            ajaxContentUrl: null,
            useTitle: !0,
            onBeforeShow: null,
            onShow: null,
            onHide: null
        };
    a.extend(e.prototype, {
        init: function() {
            var b = this,
                d = this.element;
            d.addClass("tipso_style").removeAttr("title"), f() ? (d.on("click." + i, function(a) {
                "hide" == b.mode ? b.show() : b.hide(), a.stopPropagation()
            }), a(c).on("click", function() {
                "show" == b.mode && b.hide()
            })) : (d.on("mouseover." + i, function() {
                b.show()
            }), d.on("mouseout." + i, function() {
                b.hide()
            }))
        },
        tooltip: function() {
            return this.tipso_bubble || (this.tipso_bubble = a('<div class="tipso_bubble"><div class="tipso_content"></div><div class="tipso_arrow"></div></div>')), this.tipso_bubble
        },
        show: function() {
            var c = this.tooltip(),
                d = this,
                e = a(b);
            a.isFunction(d.settings.onBeforeShow) && d.settings.onBeforeShow(a(this)), c.css({
                background: d.settings.background,
                color: d.settings.color,
                width: d.settings.width
            }).hide(), c.find(".tipso_content").html(d.content()), h(d), e.resize(function() {
                h(d)
            }), d.timeout = b.setTimeout(function() {
                c.appendTo("body").stop(!0, !0).fadeIn(d.settings.speed, function() {
                    d.mode = "show", a.isFunction(d.settings.onShow) && d.settings.onShow(a(this))
                })
            }, d.settings.delay)
        },
        hide: function() {
            var c = this,
                d = this.tooltip();
            b.clearTimeout(c.timeout), c.timeout = null, d.stop(!0, !0).fadeOut(c.settings.speed, function() {
                a(this).remove(), a.isFunction(c.settings.onHide) && "show" == c.mode && c.settings.onHide(a(this)), c.mode = "hide"
            })
        },
        destroy: function() {
            var a = this.element;
            a.off("." + i), a.removeData(i), a.removeClass("tipso_style").attr("title", this._title)
        },
        content: function() {
            var b, c = this.element,
                d = this,
                e = this._title;
            return b = d.settings.ajaxContentUrl ? a.ajax({
                type: "GET",
                url: d.settings.ajaxContentUrl,
                async: !1
            }).responseText : d.settings.content ? d.settings.content : d.settings.useTitle === !0 ? e : c.data("tipso")
        },
        update: function(a, b) {
            var c = this;
            return b ? void(c.settings[a] = b) : c.settings[a]
        }
    }), a[i] = a.fn[i] = function(b) {
        var c = arguments;
        if (b === d || "object" == typeof b) return this instanceof a || a.extend(j, b), this.each(function() {
            a.data(this, "plugin_" + i) || a.data(this, "plugin_" + i, new e(this, b))
        });
        if ("string" == typeof b && "_" !== b[0] && "init" !== b) {
            var f;
            return this.each(function() {
                var d = a.data(this, "plugin_" + i);
                d || (d = a.data(this, "plugin_" + i, new e(this, b))), d instanceof e && "function" == typeof d[b] && (f = d[b].apply(d, Array.prototype.slice.call(c, 1))), "destroy" === b && a.data(this, "plugin_" + i, null)
            }), f !== d ? f : this
        }
    }
}(jQuery, window, document);