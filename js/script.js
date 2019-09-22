$(window).on("load", function() {
    $(".loader .inner").fadeOut(800, function() {
        $(".loader").fadeOut(750)
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
})

$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 3500,
        pagination: false
    }); //Calling the superlides jquery function on the html element with id 'slides'

    var typed = new Typed(".typed", {
        strings: ["Computer Science Student.", "DEANS Scholar.", "Drone Pilot.", "Mechatronics Engineering Student."],
        typeSpeed: 80,
        loop: true,
        startDelay: 1000,
        showCursor: false
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items: 4,
        stagePadding: 15,
        smartSpeed: 550,
        fluidSpeed: 200,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4 
            }
        }
    })


    var skillsTopOffset = $('.skillsSection').offset().top; //get the top offset of the skillsSection element
    var statsTopOffset = $('.statsSection').offset().top; //get the top offset of the skillsSection element
    var countUpFinished = false;

    $(window).scroll(function() {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 300) { //only starting the animation after the user has scrolled to the skills section. 
        //Explanation: The window.pageYOffset returns the current y offset value of the page we are checking if that offset value is greater than the y offset of the skills section - the window height (as we want to start at top of the skills section) + 300 px buffer (delay to animation)

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: '#d63031',
                scaleColor: false, 
                lineWidth: 4, 
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent)) //Grab the element with id 'percent' round it and convert it to text and then pass it to OnStep as a ref
                }
            });
        }

        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 300) { //only starting the animation after the user has scrolled to the skills section. 
                //Explanation: The window.pageYOffset returns the current y offset value of the page we are checking if that offset value is greater than the y offset of the skills section - the window height (as we want to start at top of the skills section) + 300 px buffer (delay to animation)
                $(".counter").each(function() {
                    var element = $(this);
                    var endVal = parseInt(element.text());

                    element.countup(endVal);
                });

                countUpFinished = true;
            }
    });

    $("[data-fancybox]").fancybox(); //Enlarge image plugin

    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false; //Stop going to a new page
    }); 


    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition-50}, "slow");
    });


    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");  
        }
    }

   
});