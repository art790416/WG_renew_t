$(window).scroll(function() {
    //最後一頁scrollTop=body-window，50是預留空間
    last = $("body").height() - $(window).height() - 1000
    if ($(window).scrollTop() >= last) {
        $(".overlay-btn").hide()
    } else {
        $(".overlay-btn").show()
    }
})