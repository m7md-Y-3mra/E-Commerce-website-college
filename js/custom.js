// Drop Menu 
$(document).ready(function () {
    $(".drop-menu-tag").click(function () {
        $(this).toggleClass("drop-menu-active");
        $(".drop-menu").toggle();
    });

});

//navbar
$(document).ready(function () {
    $("header nav .fa-bars").click(function () {
        $("header nav>ul:nth-child(2)").animate({
            left: "0",
        }, 1000)

    })
    $(".close").click(function (e) {
        e.preventDefault();
        $("header nav>ul:nth-child(2)").animate({
            left: "-100vw",
        }, 1000)
    })
});

// choice color
$(document).ready(function () {

    $(".item .all .detailes>div:nth-child(4) .info-color>div").click(function () {
        $(".fa-check").toggle();
        $(this).siblings().children().hide();

        //$(".item .all .detailes>div:nth-child(8)>span:nth-child(5)>span").text(+($(".item .all .detailes>div:nth-child(8)>span:nth-child(5)>span").text()) + 1);
    })


});

// choice size
$(document).ready(function () {

    $(".item .all .detailes>div:nth-child(5)>div:nth-child(2)>div:first-child>span").click(function () {
        //$(this).css({ "color": "red", "border": "2px solid red" });
        $(this).siblings().removeClass("no-bkg-active");
        $(this).removeClass("no-bkg-active");
        $(this).siblings().removeClass("bkg-active");
        $(this).removeClass("bkg-active");
        $(this).toggleClass("bkg-active");
        $(this).siblings().toggleClass("no-bkg-active");
    })
});

// increment number
$(document).ready(function () {
    $(".item .all .detailes>div:nth-child(7)>div:first-child>div:nth-child(2) span:first-child ").click(function () {
        var el = parseInt($('.item .all .detailes>div:nth-child(7)>div:first-child>div:first-child>span:first-child').text());
        $(".item .all .detailes>div:nth-child(7)>div:first-child>div:first-child>span:first-child").text(el + 1);
    })
});

// decrement number
$(document).ready(function () {
    $(".item .all .detailes>div:nth-child(7)>div:first-child>div:nth-child(2) span:last-child ").click(function () {
        var el = parseInt($('.item .all .detailes>div:nth-child(7)>div:first-child>div:first-child>span:first-child').text());
        if (el >= 1) {
            $(".item .all .detailes>div:nth-child(7)>div:first-child>div:first-child>span:first-child").text(el - 1);
        }
    })
});

// show image
$(document).ready(function () {
    $(".item .all .images>div:first-child>div:first-child img").click(function () {
        $(this).css({ "border": "1px solid #333" });
        $(this).parent().siblings().children().css({ "border": "1px solid transparent" });
        $(".item .all .images>div:last-child>div img:first-child").show();
        $(".item .all .images>div:last-child>div img:nth-child(2)").hide();
        $(".item .all .images>div:last-child>div img:nth-child(3)").hide();
        $(".item .all .images>div:last-child>div img:nth-child(4)").hide();
    })
});

$(document).ready(function () {
    $(".item .all .images>div:first-child>div:nth-child(2) img").click(function () {
        $(this).css({ "border": "1px solid #333" });
        $(this).parent().siblings().children().css({ "border": "1px solid transparent" });
        $(".item .all .images>div:last-child>div img:first-child").hide();
        $(".item .all .images>div:last-child>div img:nth-child(2)").show();
        $(".item .all .images>div:last-child>div img:nth-child(3)").hide();
        $(".item .all .images>div:last-child>div img:nth-child(4)").hide();
    })
});

$(document).ready(function () {
    $(".item .all .images>div:first-child>div:nth-child(3) img").click(function () {
        $(this).css({ "border": "1px solid #333" });
        $(this).parent().siblings().children().css({ "border": "1px solid transparent" });
        $(".item .all .images>div:last-child>div img:first-child").hide();
        $(".item .all .images>div:last-child>div img:nth-child(2)").hide();
        $(".item .all .images>div:last-child>div img:nth-child(3)").show();
        $(".item .all .images>div:last-child>div img:nth-child(4)").hide();
    })
});

$(document).ready(function () {
    $(".item .all .images>div:first-child>div:nth-child(4) img").click(function () {
        $(this).css({ "border": "1px solid #333" });
        $(this).parent().siblings().children().css({ "border": "1px solid transparent" });
        $(".item .all .images>div:last-child>div img:first-child").hide();
        $(".item .all .images>div:last-child>div img:nth-child(2)").hide();
        $(".item .all .images>div:last-child>div img:nth-child(3)").hide();
        $(".item .all .images>div:last-child>div img:nth-child(4)").show();
    })
});

// incremet number in bag
$(document).ready(function () {
    $(".item .all .detailes>div:nth-child(7)>div:last-child").click(function () {
        var el = parseInt($('.item .all .detailes>div:nth-child(7)>div:first-child>div:first-child>span:first-child').text());
        $("header nav ul li.bag>p").text(+($("header nav ul li.bag>p").text()) + el)
    })
});

// slide  
$(document).ready(function () {
    $(".welcome .slider .fa-chevron-right").click(function () {
        const current_img = $('.show');
        const next_img = current_img.next();
        if (next_img.length) {
            current_img.removeClass('show');
            next_img.addClass('show');
        }
    })

    $(".welcome .slider .fa-chevron-left").click(function () {
        const current_img = $('.show');
        const prev_img = current_img.prev();
        if (prev_img.length) {
            current_img.removeClass('show');
            prev_img.addClass('show');
        }

    })

});
