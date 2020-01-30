let lastScrollTop = $(window).scrollTop()

$(window).scroll(function(){
    let scrollTop=$(this).scrollTop();

    if (scrollTop > lastScrollTop) {
        $("#controller").addClass("hide");
    } else {
        $("#controller").removeClass("hide");
    }
    lastScrollTop = scrollTop;
});