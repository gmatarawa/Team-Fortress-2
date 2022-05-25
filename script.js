$(window).scroll(function(){
    if ($(window).scrollTop() >= 1) {
        $('header').addClass('visible-title');
    }
    else {
        $('header').removeClass('visible-title');
    }
});
