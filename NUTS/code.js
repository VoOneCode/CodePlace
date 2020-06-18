let setHeight = function () {
    let allHeights = [];
    $('.card__body--title').each(function () {
        allHeights.push($(this).outerHeight());
    });
    let maxH = Math.max.apply(null, allHeights);
    $('.card__body--title').each(function () {
        $(this).css('min-height', maxH);
        /*$(this).animate({
            'min-height': maxH
        }, 850);*/
    });
};

let resizeTimer;

$(document).ready(function () {    
    $(".owl-carousel").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            1100: {
                items: 4
            }
        },    
        loop: true,
        autoplay: true,
        margin: 5,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
    });
    setHeight();
});


$(window).one('resize', function (){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function (){        
        location.reload();
        setHeight(); 
    }, 450);    
});