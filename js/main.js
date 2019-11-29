$( document ).ready(function() {
    $('.product-menu__link').click(function(e){
        e.preventDefault();
        $(this).next().slideToggle(350);
        $(this).find('.product-menu__ico').toggleClass('active');
    });

    $('.slider').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true
    });

    $('.product-menu__mobile').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next('.product-menu__list').slideToggle(350);
    });

    $('.nav__mobile').click(function(e){
        e.preventDefault();
        $(this).next('.nav__list').slideToggle(350);
    });


    // Contacts Tabs
    $(".tab-body").hide();
    $(".tab-body:first").show();    
      
    $(".tab-btns button").click(function() {
    $(".tab-body").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();
        
    $(".tab-btns button").removeClass("active");
    $(this).addClass("active");
    });
});