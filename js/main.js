$(document).ready(function(a) {
    "use strict";
    var b = a(".preloader");
    a(window).load(function() {
        b.remove()
    });
    var c = 200;
    if (a(window).scroll(function() {
            a(this).scrollTop() > c ? a(".back-to-top").fadeIn(400) : a(".back-to-top").fadeOut(400)
        }), a(".timer").countTo(), a(".counter-item").appear(function() {
            a(".timer").countTo()
        }, {
            accY: -100
        }), a(".itl-tooltip").tooltip(), jQuery(window).trigger("resize").trigger("scroll"), a(".grid-layout").length) {
        var e = a(".grid-layout").imagesLoaded(function() {
            var a = function() {
                e.isotope({
                    resizable: !1,
                    itemSelector: ".mixturethemes_item"
                })
            };
            a()
        });
        a(".grid-filter a").on("click", function() {
            var b = a(this).attr("data-filter");
            return e.isotope({
                filter: b,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1
                },
                transitionDuration: "0.8s",
                hiddenStyle: {
                    opacity: 0
                },
                visibleStyle: {
                    opacity: 1
                }
            }), !1
        });
        var f = a(".grid-filter"),
            g = f.find("a");
        g.on("click", function() {
            var b = a(this);
            if (b.hasClass("selected")) return !1;
            var c = b.parents(".grid-filter");
            c.find(".selected").removeClass("selected"), b.addClass("selected")
        })
    }
    a(".skill-shortcode").appear(function() {
        a(".progress").each(function() {
            a(".progress-bar").css("width", function() {
                return a(this).attr("data-percentage") + "%"
            })
        })
    }, {
        accY: -100
    }), a(".show-more-client").click(function(b) {
        b.preventDefault(), a(".hidden-item").show(500), a(".show-more-client").hide(100)
    }), a("#email_submit").click(function() {
        a("#reply_message").removeClass(), a("#reply_message").html("");
        var b = "",
            c = a("input#name").val();
        if (b = /^[A-Za-z .'-]+$/, "" == c || "Name" == c || !b.test(c)) return a("input#name").val(""), a("input#name").focus(), !1;
        var d = a("input#email").val();
        if (b = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, "" == d || "Email" == d || !b.test(d)) return a("input#email").val(""), a("input#email").focus(), !1;
        var e = a("textarea#comments").val();
        if ("" == e || "Comments..." == e || e.length < 2) return a("textarea#comments").val(""), a("textarea#comments").focus(), !1;
        var f = "name=" + a("input#name").val() + "&email=" + a("input#email").val() + "&comments=" + a("textarea#comments").val();
        return a("#reply_message").addClass("email_loading"), a.ajax({
            type: "POST",
            url: "../php/sendEmail.php",
            data: f,
            success: function() {
                a("#reply_message").removeClass("email_loading"), a("#reply_message").addClass("list3"), a("#reply_message").html("Well done, You are successful !").hide().fadeIn(1500)
            }
        }), !1
    }), a("#post_submit").click(function() {
        var b = "",
            c = a("input#name").val();
        if (b = /^[A-Za-z .'-]+$/, "" == c || "Name" == c || !b.test(c)) return a("input#name").val(""), a("input#name").focus(), !1;
        var d = a("input#email").val();
        if (b = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, "" == d || "Email" == d || !b.test(d)) return a("input#email").val(""), a("input#email").focus(), !1;
        var e = a("textarea#comments").val();
        return "" == e || "Comments..." == e || e.length < 2 ? (a("textarea#comments").val(""), a("textarea#comments").focus(), !1) : void 0
    }), a("a[data-gal^='prettyPhoto']").prettyPhoto({
        hook: "data-gal"
    }), a(window).scroll(function() {
        a(".navbar").offset().top > 150 ? a(".navbar-fixed-top").addClass("top-nav-collapse") : a(".navbar-fixed-top").removeClass("top-nav-collapse")
    }), a(".page-scroll a").bind("click", function(b) {
        var c = a(this);
        a("html, body").stop().animate({
            scrollTop: a(c.attr("href")).offset().top
        }, 1500, "easeInOutExpo"), b.preventDefault()
    }), a("#intro-slider").flexslider({
        animation: "fade",
        controlNav: !1,
        DirectionNav: !1,
        slideshowSpeed: 4e3,
        animationSpeed: 600
    }), a(".dropdown").hover(function() {
        a(this).find(".dropdown-menu").first().stop(!0, !0).delay(200).slideDown()
    }, function() {
        a(this).find(".dropdown-menu").first().stop(!0, !0).delay(100).slideUp()
    })
}), jQuery(function(a) {
	
    function b(a) {
        var b = {
            zoom: 8,
            center: new google.maps.LatLng(23.621647, 91.635425),
            disableDefaultUI: !1,
            scrollwheel: !1,
            draggable: !0,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP,
                style: google.maps.ZoomControlStyle.DEFAULT
            }
        };
        new google.maps.Map(document.querySelector(".map"), b)
    }
    google.maps.event.addDomListener(window, "load", b)
});
$('#showVideoButton').on('click', function () {
  $('#inline-2').slideDown();
  const video = $('#myVideo')[0];
  video.currentTime = 0;
  video.play();
});
