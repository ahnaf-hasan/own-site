/*  Here is our Javascript function. */
/*  Developed by ahnaf */
$(document).ready(function(){
    $(window).scroll(function(){
        // Sticky navbar scroll script.
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up btn show/hide script.
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script.
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        //  Smooth scroll on menu-items click.
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle navbar script.
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //  Animation script.
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Youtuber", "Motivator", "Instructor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Youtuber", "Motivator", "Instructor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel script.
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});